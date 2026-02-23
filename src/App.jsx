import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import reduxStore from "./utils/reduxStore";

const App = () => {
  return (
    <div>
      <Provider store={reduxStore}>
      <Header />
      <Body />
      </Provider>
    </div>
  );
};

export default App;
