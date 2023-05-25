import React, { useState } from 'react';
import classes from './Footer.module.css';
import Icon1 from './Icons/Icon1.svg';
import Icon2 from './Icons/Icon2.svg';
import Icon3 from './Icons/Icon3.svg';
import Icon4 from './Icons/Icon4.svg';
import { useNavigate } from 'react-router-dom';

interface FooterMenuProps {
  activeIconName: string;
}

const FooterMenu: React.FC<FooterMenuProps> = ( {activeIconName} ) => {
  const [activeIcon, setActiveIcon] = useState<string>(activeIconName); // Set the initial active icon here
  const navigate = useNavigate();
  // Handle click event for changing the active icon
  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  return (
    <div className={classes.footer}>
      <div
        className={`${classes.menuIcon} ${activeIcon === 'icon1' ? classes.active : ''}`}
        onClick={() => navigate('/dashboard')}
      >
        <img className='menuIconImg' src={Icon1} alt="Icon 1" />
      </div>
      <div
        className={`${classes.menuIcon} ${activeIcon === 'icon2' ? classes.active : ''}`}
        onClick={() => navigate('/timer')}
      >
        <img className='menuIconImg' src={Icon2} alt="Icon 2" />
      </div>
      <div
        className={`${classes.menuIcon} ${activeIcon === 'icon3' ? classes.active : ''}`}
        onClick={() => navigate('/calendar')}
      >
        <img className='menuIconImg' src={Icon3} alt="Icon 3" />
      </div>
      <div
        className={`${classes.menuIcon} ${activeIcon === 'icon4' ? classes.active : ''}`}
       onClick={() => handleIconClick('icon4')}
      >
        <img className='menuIconImg' src={Icon4} alt="Icon 4" />
      </div>
    </div>
  );
};

export default FooterMenu;

