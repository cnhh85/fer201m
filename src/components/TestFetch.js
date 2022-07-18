import { useEffect, useState } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { baseURL } from '../shared/baseURL';

const TestFetch = () => {
  const [dishes, setDishes] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchDishes = () => {
      return fetch(baseURL + 'dishes')
        .then((res) => res.json())
        .then((data) => setDishes(data));
    };
    const fetchComments = () => {
      return fetch(baseURL + 'comments')
        .then((res) => res.json())
        .then((data) => setComments(data));
    };

    if (dishes.length === 0) {
      fetchDishes();
    }
    if (comments.length === 0) {
      fetchComments();
    }
  }, [dishes, comments]);
  console.log(dishes, comments);

  const content = dishes.map((dish) => (
    <div className="col-12 col-sm-8" key={dish.id}>
      <Card>
        <CardImg top src={`${process.env.PUBLIC_URL}/assets/${dish.image}`} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  ));
  return <div className="col-12 col-sm-5">{content}</div>;
};

export default TestFetch;
