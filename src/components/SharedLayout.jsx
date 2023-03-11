import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledSharedLayout } from './App.styled';

function SharedLayout() {
  return (
    <nav>
      <StyledSharedLayout to="/">Home</StyledSharedLayout>
      <StyledSharedLayout to="/movies">Movies</StyledSharedLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </nav>
  );
}

export default SharedLayout;
