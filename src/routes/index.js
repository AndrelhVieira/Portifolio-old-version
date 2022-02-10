import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "../pages/Homepage";
import Curriculum from "../pages/Curriculum";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/curriculum">
          <Curriculum />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
