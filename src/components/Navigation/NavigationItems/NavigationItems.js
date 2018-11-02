import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigtionItem/NavigationItem';

const navigationItems = ()  => (
 /* Add Navigation here  */
    <ul className = {classes.NavigationItems}>
      <NavigationItem link = "/" active>Burger Builder</NavigationItem>
      <NavigationItem link = "/" >Checkout</NavigationItem>
   </ul>



);

export default navigationItems;