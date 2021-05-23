import React from 'react';
import classes from './Header.module.css';
import mealImg from '../../../assets/images/meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton'
const Header = (props) => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meal App</h1>
                <HeaderCartButton onClick={props.onClick} />
            </header>
            <div className={classes['main-image']}>
                <img src= {mealImg} alt="An Meal Table"/>
            </div>
        </React.Fragment>
    )

}

export default Header;