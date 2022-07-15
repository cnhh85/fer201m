import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const DishDetailComponent = (props) => {
  const renderDish = (dish) => {
    return dish === null ? (
      <div></div>
    ) : (
      <div className="col-12 col-md-5 m-1">
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
      <div className="row">
        {renderDish(props.dish)}
        {renderComment(props.dish.comments)}
      </div>
    </div>
  );
};

export default DishDetailComponent;
