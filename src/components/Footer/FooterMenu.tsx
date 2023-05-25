import React, { useState } from 'react';
import classes from './Footer.module.css';
import Icon1 from './Icons/Icon1.svg';
import Icon2 from './Icons/Icon2.svg';
import Icon3 from './Icons/Icon3.svg';
import Icon4 from './Icons/Icon4.svg';

interface FooterMenuProps {
  // Add any additional props you need
}

const FooterMenu: React.FC<FooterMenuProps> = () => {
  const [activeIcon, setActiveIcon] = useState<string>('icon1'); // Set the initial active icon here

  // Handle click event for changing the active icon
  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  return (
    <div className={classes.footer}>
      <div
        className={`${classes.menuIcon} ${activeIcon === 'icon1' ? classes.active : ''}`}
        onClick={() => handleIconClick('icon1')}
      >
        <img className='menuIconImg' src={Icon1} alt="Icon 1" />
      </div>
      <div
        className={`${classes.menuIcon} ${activeIcon === 'icon2' ? classes.active : ''}`}
        onClick={() => handleIconClick('icon2')}
      >
        <img className='menuIconImg' src={Icon2} alt="Icon 2" />
      </div>
      <div
        className={`${classes.menuIcon} ${activeIcon === 'icon3' ? classes.active : ''}`}
        onClick={() => handleIconClick('icon3')}
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

