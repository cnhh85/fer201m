import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { DISHES } from "../shared/dish";
import { COMMENTS } from "../shared/comments";

import { useParams, Link } from "react-router-dom";

const DishDetailComponent = (props) => {
  let params = useParams();

  const renderSingleDish = (params) => {
    return (
      <div className="row">
        {renderDish(
          DISHES.filter((dish) => dish.id === parseInt(params.dishId, 10))[0]
        )}
        {renderComment(
          COMMENTS.filter(
            (comment) => comment.dishId === parseInt(params.dishId, 10)
          )
        )}
      </div>
    );
  };

  const renderDish = (dish) => {
    return dish === null ? (
      <div></div>
    ) : (
      <div className="col-12 col-sm-5">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

  const renderComment = (props) => {
    return props === null ? (
      <div></div>
    ) : (
      <div className="col-12 col-sm-7">
        <h2>Comments</h2>
        {props.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.comment}</p>
              <p>
                -- {item.author} {item.date}
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/menu">Menu</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{params.dishId}</BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
        <h3>Menu</h3>
        <hr />
      </div>
      {renderSingleDish(params)}
    </div>
  );
};

export default DishDetailComponent;
