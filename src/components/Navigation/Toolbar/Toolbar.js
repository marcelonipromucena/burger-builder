import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={styles.Logo}>
            <Logo height="80%" />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;