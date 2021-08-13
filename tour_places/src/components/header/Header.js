import React from "react";
import styles from "./Header.modules.css";

function Header(){
    return(
        <div>
            <h1 className={styles["page-header"]}>Popular Tour Places</h1>
        </div>
    )
};

export default Header;