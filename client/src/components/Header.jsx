import { useNavigate } from 'react-router-dom';
import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../redux/slices/usersApiSlice';
import { removeCredentials } from '../redux/slices/authSlice';
import logo from '../assets/logo.png';
import Search from './Search';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutUser] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      // Return RTK Query mutation promise with .unwrap()
      await logoutUser().unwrap();
      dispatch(removeCredentials());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header>
      <Navbar className="custom-nav-bg" variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} alt='brand-logo' />
              ProductStore
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto align-items-center'>
              <Search />
              <div className='main-nav-btns d-flex align-items-center'>
                {userInfo ? (
                  <NavDropdown
                    className='me-2'
                    title='Menu'
                    id='menu'
                    drop='down-centered'
                    menuVariant='dark'
                  >
                    <LinkContainer to='/profile' activeClassName=''>
                      <NavDropdown.Item href='/profile'>
                        Profile
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer
                    className='me-2'
                    to='/login'
                    activeClassName=''
                  >
                    <Nav.Link href='/login'>
                      <FaUser /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
                {/* If logged in as admin, then add dropdown to Navbar */}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown
                    title='Admin'
                    id='adminmenu'
                    className='me-2'
                    menuVariant='dark'
                  >
                    <LinkContainer to='/admin/productlist' activeClassName=''>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/userlist' activeClassName=''>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist' activeClassName=''>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
                <LinkContainer to='/cart' activeClassName=''>
                  <Nav.Link>
                    <FaShoppingCart /> Cart
                    {cartItems.length > 0 && (
                      <Badge pill bg='info' style={{ marginLeft: '5px' }}>
                        {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                      </Badge>
                    )}
                  </Nav.Link>
                </LinkContainer>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
