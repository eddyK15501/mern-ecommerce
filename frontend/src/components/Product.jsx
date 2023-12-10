/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';

const Product = (props) => {
  return (
    <Card className="my-3 p-3 rounded">
        <a href={`/product/${props._id}`}>
            <Card.Img src={props.image} variant="top" />
        </a>

        <Card.Body>
            <a href={`/product/${props._id}`}>
                <Card.Title as="div">
                    <strong>{props.title}</strong>
                </Card.Title>
            </a>

            <Card.Text as="h3">
                ${props.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product