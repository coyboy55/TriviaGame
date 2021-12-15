import { withRouter } from "react-router-dom";
import Routes from "./routes";
import SessionProvider from "./session/SessionProvider";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <SessionProvider>
    <Routes />
    <ToastContainer/>
    </SessionProvider>
  );
  
}

export default withRouter(App);
