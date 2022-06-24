import React from 'react';
import styles from './Header.module.scss';
import Logo from "../../resources/images/logo.svg";
import ImageRouter from "../../components/ImageRouter/ImageRouter";


function Header() {
    return (
        <div className={styles.Header}>
            <ImageRouter url={'/'} navLinkKey={'Home'} imagePath={Logo} imageSize={'50'}/>
        </div>
    );
}

export default Header;
