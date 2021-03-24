import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <NavLink
            activeClassName={s.activeLink}
            className={s.link}
            exact
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={s.activeLink}
            className={s.link}
            exact
            to={routes.movies}
          >
            Movie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
