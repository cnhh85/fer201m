import React, { useState } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dish";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Routes, Route, Navigate } from "react-router-dom";

const Main = () => {
  const [selectedDish, setSelectedDish] = useState(DISHES[0]);

  const onDishSelect = (dishId) => {
    const onSelect = DISHES.filter((dish) => dish.id === dishId)[0];
    setSelectedDish(onSelect);
  };

  const renderMenu = () => {
    return (
      <div>
        <Menu dishes={DISHES} onClick={(dishId) => onDishSelect(dishId)}></Menu>
        <DishDetail dish={selectedDish}></DishDetail>
      </div>
    );
  };

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/menu" element={renderMenu()}></Route>
        <Route path="*" element={<Navigate to="/home" replace />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default Main;
