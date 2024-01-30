import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const Search = () => {
  const { keyword: keywordParam } = useParams();

  const [keyword, setKeyword] = useState(keywordParam || '');

  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={onFormSubmit} className='d-flex me-md-3'>
      <Form.Control
        type='text'
        name='q'
        placeholder='Search Products...'
        className='me-sm-2 ms-sm-5 form-control-sm'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-primary'
        className='p-2 mx-2 btn-sm'
      >
        Search
      </Button>
    </Form>
  );
};

export default Search;
