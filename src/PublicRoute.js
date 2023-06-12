import { getStatus } from 'redux/Selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({ redirectTo = '/', component }) {
  const isLoggedIn = useSelector(getStatus);
  console.log(isLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
