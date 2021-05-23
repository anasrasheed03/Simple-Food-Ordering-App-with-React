import AvailableMeals from '../AvailableMeals/AvailableMeals';
import MealsSummary from '../MealsSummary/MealsSummary';
import React from 'react';
const Meals = ()=>{

    return (
        <React.Fragment>
            <MealsSummary/>
            <AvailableMeals />
        </React.Fragment>
    )
}

export default Meals;