import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
    let transformingredients = Object.keys(props.ingredients)
      .map (igKey => {
           return [...Array(props.ingredients[igKey])].map((_,i) => { 
              return  <BurgerIngredient key = {igKey + i} type ={igKey} />

           });
      })
       .reduce((arr, el) => { 
         return arr.concat(el)
         },[]);
           console.log("transformingredients ",transformingredients)
       if(transformingredients.length === 0){
         
        transformingredients = <p>Please start adding Ingredients</p>
       } 
      return(
        <div className = {classes.Burger}>
          <BurgerIngredient type = "bread-top"/>
          {transformingredients}
          <BurgerIngredient type = "bread-bottom"/>
        </div>

    );
};
export default burger