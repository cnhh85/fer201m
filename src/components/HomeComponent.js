import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

import { Link } from "react-router-dom";

const Home = (props) => {
  const renderCard = (card) => {
    return (
      <Card>
        <CardImg src={card.image} alt={card.name} />
        <CardBody>
          <CardTitle>{card.name}</CardTitle>
          {card.destination ? (
            <CardSubtitle>{card.destination}</CardSubtitle>
          ) : null}
          <CardText>{card.description}</CardText>
        </CardBody>
      </Card>
    );
  };

  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>About Us</BreadcrumbItem>
      </Breadcrumb>
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">{renderCard(props.dish)}</div>
        <div className="col-12 col-md m-1">{renderCard(props.promotion)}</div>
        <div className="col-12 col-md m-1">{renderCard(props.leader)}</div>
      </div>
    </div>
  );
};

export default Home;
