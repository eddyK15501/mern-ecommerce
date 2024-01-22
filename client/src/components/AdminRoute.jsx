import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo && userInfo.isAdmin ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AdminRoute;
