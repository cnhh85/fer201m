import { baseURL } from '../shared/baseURL';
import { DATABASE } from '../shared/database';

let initialState = {
  dishes: DATABASE.dishes,
  comments: DATABASE.comments,
  promotions: DATABASE.promotions,
  leaders: DATABASE.leaders,
};

const getAllData = async () => {
  const dishes = await fetch(`${baseURL}dishes`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  const comments = await fetch(`${baseURL}comments`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  const promotions = await fetch(`${baseURL}promotions`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  const leaders = await fetch(`${baseURL}leaders`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  initialState = {
    dishes: dishes,
    comments: comments,
    promotions: promotions,
    leaders: leaders,
  };
  console.log(initialState);
};

export { initialState };

export const Reducer = (state = initialState, action) => {
  return state;
};
