import { Switch, Route } from "react-router-dom";
import Welcome from './pages/index'
import Questions from "./pages/question/question";
const Routes = () => {
    return (  
        <Switch>
            <Route path='/' component={Welcome} exact/>
            <Route path='/question' component={Questions} />

        </Switch>
    );
}
 
export default Routes;