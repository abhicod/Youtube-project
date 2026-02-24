import { Provider } from "react-redux";
import reduxStore from "./utils/reduxStore";
import { Routes , Route } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import AppLayout from "./components/AppLayout";
import Body from "./components/Body";


const App = () => {
  return (
    <div>
      <Provider store={reduxStore}>
      <Routes>
        <Route path="/" element={<  AppLayout />}>
        <Route index element={<Body />} />
        <Route path="watch" element={<WatchPage />} />
        </Route>
      </Routes>
      </Provider>
    </div>
  );
};

export default App;
