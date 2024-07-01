import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, exact, children, ...props }) => {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        isActive && exact ? 'active' : undefined
      }
      end
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
