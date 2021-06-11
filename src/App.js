import Routes from "./routes";

import "./global.css";

import Notifications from "react-notify-toast";

const App = () => {
  return (
    <>
      <Notifications />
      <Routes />
    </>
  );
};

export default App;
