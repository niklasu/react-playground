import {Route, Switch} from 'react-router-dom';
import {MainComponent} from "./main/MainComponent";
import {UserComponent} from "./users/UserComponent";
import {MyNavBar} from "./MyNavBar";
import {ReduxBased} from "./redux/Redux";

function App() {
    return (
        <main>
            <MyNavBar/>
            <Switch>
                <Route path="/" component={MainComponent} exact/>
                <Route path="/users" component={UserComponent} exact/>
                <Route path="/redux" component={ReduxBased} exact/>
            </Switch>
        </main>
    )

}

export default App;
