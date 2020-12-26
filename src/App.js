import {Route, Switch} from 'react-router-dom';
import {MainComponent} from "./main/MainComponent";
import {UserComponent} from "./users/UserComponent";
import {MyNavBar} from "./MyNavBar";
import {UseMemoExample} from "./hello/Hello";

function App() {
  return (
    <main>
      <MyNavBar/>
      <Switch>
        <Route path="/" component={MainComponent} exact/>
        <Route path="/users" component={UserComponent} exact/>
        <Route path="/redux" component={UseMemoExample} exact/>
      </Switch>
    </main>
  )

}

export default App;
