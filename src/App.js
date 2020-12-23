import {Route, Switch} from 'react-router-dom';
import {MainComponent} from "./MainComponent";
import {UserComponent} from "./UserComponent";
import {MyNavBar} from "./MyNavBar";

function App() {
    return (
        <main>
            <MyNavBar/>
            <Switch>
                <Route path="/" component={MainComponent} exact/>
                <Route path="/users" component={UserComponent} exact/>
            </Switch>
        </main>
    )

}

export default App;
