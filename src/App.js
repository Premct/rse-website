import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Welcome from './Welcome'
import Separator from './Separator'
import Part from './Part'

function App() {
  return (
    <div className="App bg-light">
        <Header />

        <div id="wlcm">
            <Welcome />
        </div>

        <Separator />

        <Part title="Notre plan d'action" id="action-plan"/>

        <Separator />

        <Separator />

        <Separator />

        <Separator />
    </div>
  );
}

export default App;
