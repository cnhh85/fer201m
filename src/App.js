import { DISHES } from "./shared/dish";
import { useState } from "react";
import Main from "./components/MainComponent";
import { ConfigureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const store = ConfigureStore();

function App() {
  const [dishes] = useState(DISHES);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main dishes={dishes} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
