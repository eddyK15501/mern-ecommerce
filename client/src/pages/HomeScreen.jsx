import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductsQuery } from "../redux/slices/productsApiSlice";

const HomeScreen = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <>
          <Row>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product {...product} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
