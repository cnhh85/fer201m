import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { DISHES } from "../shared/dish";
export const Menu = (props) => {
  const renderMenuItem = (dish, onClick) => {
    return (
      <Link to={`/menu/${dish.id}`}>
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </Link>
    );
  };

  const menu = DISHES.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <div>{renderMenuItem(dish)}</div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span to="/menu" active="true">
              Menu
            </span>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
        <div className="row">{menu}</div>
      </div>
    </div>
  );
};

export default Menu;
