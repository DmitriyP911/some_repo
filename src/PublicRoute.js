import { getStatus } from 'redux/Selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// export default function PublicRoute({
//   redirectTo = '/',
//   component: Component,
// }) {
//   const isLoggedIn = useSelector(getStatus);
//   console.log(isLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// }

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(getStatus);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
