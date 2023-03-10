import { Outlet } from 'react-router-dom';
import { StyledSharedLayout } from './App.styled';

function SharedLayout() {
  return (
    <nav>
      <StyledSharedLayout to="/">Home</StyledSharedLayout>
      <StyledSharedLayout to="/movies">Movies</StyledSharedLayout>
      <Outlet />
    </nav>
  );
}

export default SharedLayout;
