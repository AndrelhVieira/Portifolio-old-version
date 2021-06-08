import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "../pages/Homepage";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
