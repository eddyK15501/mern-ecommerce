import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import CheckoutSteps from "../components/CheckoutSteps";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useCreateOrderMutation } from '../redux/slices/ordersApiSlice';
import { clearCartItems } from "../redux/slices/cartSlice";

const OrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.shippingAddress.address, cart.paymentMethod, navigate]);

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>Column</Col>
        <Col md={4}>Column</Col>
      </Row>
    </>
  );
};

export default OrderScreen;
