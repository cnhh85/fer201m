import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dish";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

const Main = () => {
  const [selectedDish, setSelectedDish] = useState(DISHES[0]);

  const onDishSelect = (dishId) => {
    const onSelect = DISHES.filter((dish) => dish.id === dishId)[0];
    setSelectedDish(onSelect);
  };

  return (
    <div>
      <Header></Header>
      <Menu dishes={DISHES} onClick={(dishId) => onDishSelect(dishId)}></Menu>
      <DishDetail dish={selectedDish}></DishDetail>
      <Footer></Footer>
    </div>
  );
};

export default Main;
