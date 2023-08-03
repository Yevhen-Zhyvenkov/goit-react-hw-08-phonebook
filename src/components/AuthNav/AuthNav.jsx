import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'

export const AuthNav = () => {
  return (
    <div className={css.auth}>
      <NavLink className={css.register} to="/register">
        Sign up
      </NavLink>
      <NavLink className={css.register} to="/login">
        Log In
      </NavLink>
    </div>
  );
};