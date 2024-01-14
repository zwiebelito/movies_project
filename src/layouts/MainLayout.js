import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import {LinearProgress, Switch} from "@mui/material";

import {useToggle} from "../hooks/useToggle";
import styles from './MainLayout.module.css'
import {Header} from "../components";

const MainLayout = () => {
    const {value, change, setValue} = useToggle(true)
    const {isLoading} = useSelector(state => state.progress)

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        setValue(savedTheme === 'light');
    },[])
    return (
        <div>
            <div className={[styles.info, styles.fix, value? styles.dark : styles.light].join(' ')}>
                <Header />
                <div className={styles.switcher}>
                    <Switch onClick={change}/>
                    <span>{'Switcher'}</span>
                </div>
            </div>
            {
                isLoading && (
                    <div style={{height: '5px', width: '100%'}}>
                        <LinearProgress />
                    </div>
                )
            }
            <div className={[styles.info, styles.outlet, value? styles.dark: styles.light].join(' ')}>
                <Outlet />
            </div>
        </div>
    );
};

export {MainLayout};