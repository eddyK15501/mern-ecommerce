import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
