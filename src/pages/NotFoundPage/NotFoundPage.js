import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

import styles from './NotFoundPage.module.css'


const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.typeOfError}>404</h1>
            <h1 className={styles.reasonOfError}>PAGE NOT FOUND</h1>
            <p>Oops! We couldn't find the page that you're looking for. Please check the address and try again.</p>
            <Button onClick={() => navigate('./movies')}>Go home</Button>
        </div>
    );
};

export {NotFoundPage};