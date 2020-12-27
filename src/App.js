import {Route, Switch} from 'react-router-dom';
import {MainComponent} from "./main/MainComponent";
import {UserComponent} from "./users/UserComponent";
import {MyNavBar} from "./MyNavBar";
import {ParentComponent} from "./hello/Hello";
import {Snake} from "./snake/snake";
function App() {
  return (
    <main>
      <MyNavBar/>
      <Switch>
        <Route path="/" component={MainComponent} exact/>
        <Route path="/users" component={UserComponent} exact/>
        <Route path="/redux" component={ParentComponent} exact/>
        <Route path="/snake" component={Snake} exact/>
      </Switch>
    </main>
  )

}

export default App;
