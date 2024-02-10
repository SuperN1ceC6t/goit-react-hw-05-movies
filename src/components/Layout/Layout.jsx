import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='HeaderContainer'>
      <header className='Header'>
        <nav className='Navigation'>
          <NavLink className="NavLink" to="/" end>
            Home
          </NavLink>
          <NavLink className="NavLink" to="/movies">Movies</NavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
