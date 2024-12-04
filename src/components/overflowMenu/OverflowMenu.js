import { useDispatch } from "react-redux";
import { useState } from "react";
import TabItem from "../tabItem/TabItem";

import './overflowMenu.scss';

import arrowClose from '../../assets/dropmenu/arrow-close.svg';
import arrowOpen from '../../assets/dropmenu/arrow-open.svg';

const OverflowMenu = ({tabs}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="overflow-menu">
      <button className={`menu-button ${isMenuOpen ? 'menu-button-open' : 'menu-button-close'}`} onClick={toggleMenu}>
        <img
          src={isMenuOpen ? arrowClose : arrowOpen}
          alt={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </button>
      {isMenuOpen && (
        <ul className="menu-list">
          {tabs.map((tab) => (
            <li key={tab.id}>{tab.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OverflowMenu;