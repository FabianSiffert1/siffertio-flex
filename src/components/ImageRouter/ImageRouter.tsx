import React from "react";
import language from "../../resources/language/language";
import styles from "./ImageRouter.module.scss";
import {NavLink} from "react-router-dom";


function ImageRouter(props: any) {
    return (
        <div className={styles.ImageRouter}>

            <NavLink
                style={({isActive}) => {
                    return {
                        color: isActive ? "black" : "",
                        boxShadow: isActive ? "0 0 0 2px black" : "",
                    };
                }}
                to={props.url}
                key={props.navLinkKey}
            >

                {props.imagePath ?
                    <img className={styles.image} src={props.imagePath} alt="ImagePlaceholder"/> :
                    props.navLinkKey !== undefined ?
                        props.navLinkKey : "Missing ImageSource & Key Parameters"
                }
                <div className={styles.linkTitle}>
                    {props.navLinkKey}
                </div>
            </NavLink>
        </div>
    );
}

export default ImageRouter;
