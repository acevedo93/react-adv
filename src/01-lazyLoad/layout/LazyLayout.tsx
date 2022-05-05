import { routesNested } from '../../routes/routes';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout page</h1>

      <ul>
        {' '}
        {routesNested.map((route) => {
          return (
            <li key={route.to}>
              <NavLink
                to={route.to}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                {route.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Routes>
        {routesNested.map((route) => {
          return (
            <Route
              key={route.to}
              path={route.path}
              element={<route.Component />}
            />
          );
        })}
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
