import { Switch, Route } from "react-router-dom";
import Welcome from './pages/index'
import Question from "./pages/question/question";
const Routes = () => {
    return (  
        <Switch>
            <Route path='/' component={Welcome} exact/>
            <Route path='/question' component={Question} />

        </Switch>
    );
}
 
export default Routes;