import { Outlet } from 'react-router-dom';

import { AppBars } from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <AppBars />
      <Outlet />
    </div>
  );
};
export default Layout;
