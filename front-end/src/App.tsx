import {BrowserRouter,Switch,Route} from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact component={Register} path="/"/>|
            <Route exact component={Login} path="/login"/>|
        </Switch>
    </BrowserRouter>
  );
}

export default App;
