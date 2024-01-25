/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = (props) => {
  return (
    <Card
      className="my-3 p-3 rounded"
      style={{ boxShadow: "0 4px 5px -2px rgba(0, 0, 0, 0.2)" }}
    >
      <Link to={`/product/${props._id}`}>
        <Card.Img src={props.image} variant="top" style={{ height: "240px"}} />
      </Link>

      <Card.Body>
        <Link to={`/product/${props._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{props.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={props.rating} text={`${props.numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3">${props.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
