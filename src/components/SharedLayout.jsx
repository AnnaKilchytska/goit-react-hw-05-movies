import { NavLink, Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Outlet />
    </nav>
  );
}

export default SharedLayout;
