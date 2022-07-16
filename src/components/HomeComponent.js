import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

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
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">{renderCard(props.dish)}</div>
        <div className="col-12 col-md m-1">{renderCard(props.promotion)}</div>
        <div className="col-12 col-md m-1">{renderCard(props.leader)}</div>
      </div>
    </div>
  );
};

export default Home;
