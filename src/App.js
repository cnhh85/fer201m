import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/dish";
import Menu from "./components/MenuComponent";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES}></Menu>
    </div>
  );
}

export default App;
