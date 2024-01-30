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
        navigate(`/search/${keyword}`)
    } else {
        navigate('/');
    }
  };

  return (
    <Form onSubmit={onFormSubmit} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2 mx-2'>
        Search
      </Button>
    </Form>
  );
};

export default Search;
