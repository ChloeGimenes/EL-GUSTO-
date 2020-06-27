import React, { useState } from 'react'
import Breakfast from './breakfast'
import Lunch from './lunch'
// import HotDrinks from './hot-drinks'
// import ColdDrinks from './cold-drinks'

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState('A la carta');
  let SelectedCategory;
  if (menuCategory === 'Menus') {
    SelectedCategory = Breakfast
  } else if (menuCategory === 'A la carta') {
    SelectedCategory = Lunch
  }
  
  return (
    <section className="menu">
      <h2>MENU</h2>
      <ul className="menu-headers">
        {/* <li className="menu-header" onClick={() => setMenuCategory('hotDrinks')}>Hot Drinks</li>
        <li className="menu-header" onClick={() => setMenuCategory('coldDrinks')}>Cold Drinks</li> */}
        <li className="menu-header" onClick={() => setMenuCategory('A la carta')} >A la carta</li>
        <li className="menu-header" onClick={() => setMenuCategory('Menus')}>Menùs</li>
      </ul>
      <SelectedCategory />
    </section>
  )
}

export default Menu;