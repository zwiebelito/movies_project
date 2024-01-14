import React from 'react';
import {Avatar} from "@mui/material";

import styles from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={styles.wrapper}>
            <Avatar sx={{bgcolor: '#fa3489' }} >I</Avatar>
            <p>Ihor Tsy</p>
        </div>
    );
};

export {UserInfo};