import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import styles from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {useForm} from "react-hook-form";

const Header = () => {
    const {register, handleSubmit, reset} = useForm()
    const navigate = useNavigate()
    const submit = (value) => {
        localStorage.removeItem("name");
        localStorage.setItem('name', value.search);
        navigate('/search');
        reset();
        window.scroll(0,0)
    }

    const handleClick = () => {
       window.scroll(0,0)
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <h2 onClick={handleClick}>Watch Movie.com</h2>
            </div>
            <div className={styles.navInfoWrapper}>
                <nav>
                    <NavLink to={'/home'}>Home</NavLink>
                    <NavLink to={'/movies'}>Movies</NavLink>
                    <NavLink to={'/genres'}>Genres</NavLink>
                </nav>
                <div className={styles.info}>
                    <UserInfo />
                </div>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <div className={styles.form}>
                    <input placeholder="Search..." required={true}
                           type="text" {...register('search')}/>
                    <button className={styles.button}>Find</button>
                </div>
            </form>
        </div>
    );
};

export {Header};