import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const ShippingScreen = () => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

  return (
    <FormContainer>
        <h1>Shipping</h1>
    </FormContainer>
  )
}

export default ShippingScreen