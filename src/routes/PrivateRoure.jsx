import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../compoments/common/Loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
  return navigate("/");
};

export default PrivateRoutes;
