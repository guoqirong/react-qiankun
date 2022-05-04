import { FunctionComponent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.scss';

interface MenuItemProps {
  menuText: string;
  menuPath: string;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ menuText, menuPath }) => {
  const history = useNavigate();
  const location = useLocation()

  const getSelected = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.includes(path);
  };

  return (
    <div
      className={`menu-item${getSelected(menuPath) ? ' is-selected' : ''}`}
      onClick={() => {
        history(menuPath);
      }}
    >
      {menuText}
    </div>
  );
};

export default MenuItem;
