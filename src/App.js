import { withRouter } from "react-router-dom";
import Routes from "./routes";
import SessionProvider from "./session/SessionProvider";
function App() {
  return (
    <SessionProvider>
    <Routes />
    </SessionProvider>
  );
  
}

export default withRouter(App);
