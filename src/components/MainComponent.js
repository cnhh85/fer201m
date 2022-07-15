import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dish";


const Main = () => {
  const [selectedDish, setSelectedDish] = useState();

  const onDishSelect = (dishId) => {
    const onSelect = DISHES.filter((dish) => dish.id === dishId)[0];
    setSelectedDish(onSelect);
  };

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES} onClick={(dishId) => onDishSelect(dishId)}></Menu>
      <DishDetail dish={selectedDish}></DishDetail>
    </div>
  );
};

export default Main;
