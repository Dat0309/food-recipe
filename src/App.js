import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./Components/Header";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div>
        <Header />
        <main>
          <Router>
            <Switch>
              <Route path={"/"} component={HomeScreen} exact />
            </Switch>
          </Router>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
