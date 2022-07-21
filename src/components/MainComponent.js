import React, { useState } from "react";
import DishDetailComponent from "./DishDetailComponent";
import { DISHES } from "../shared/dish";
import { DATABASE } from "../shared/database";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import TestFetch from "./TestFetch";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import AboutComponent from "./AboutComponent";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { connect } from "react-redux";

const withRouter = (Child) => {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    return <Child {...props} navigate={navigate} location={location} />;
  };
};

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const Main = ({ dishes, comments, promotions, leaders }) => {
  const [featuredDish] = useState(() => {
    return DATABASE.dishes.filter((item) => item.featured === true)[0].id;
  });
  const [featuredPromotion] = useState(() => {
    return DATABASE.promotions.filter((item) => item.featured === true)[0].id;
  });
  const [featuredLeader] = useState(() => {
    return DATABASE.leaders.filter((item) => item.featured === true)[0].id;
  });

  const renderHome = () => {
    return (
      <Home
        dish={dishes.filter((dish) => dish.id === featuredDish)[0]}
        promotion={
          promotions.filter(
            (promotion) => promotion.id === featuredPromotion
          )[0]
        }
        leader={leaders.filter((leader) => leader.id === featuredLeader)[0]}
      />
    );
  };

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={renderHome()}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/about"
          element={<AboutComponent leaders={leaders} />}
        ></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/menu/:dishId" element={<DishDetailComponent />}></Route>
        <Route path="testfetch" element={<TestFetch />}></Route>
        <Route path="*" element={<Navigate to="/home" replace />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(Main));
