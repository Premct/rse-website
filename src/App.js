import logo from './logo.svg';
import './App.css';

import Header from './Header/Header'
import Welcome from './Welcome/Welcome'
import Separator from './Separator/Separator'
import Actionplan from './Actionplan/Actionplan'
import Whoarewe from './WhoAreWe/Whoarewe'
import Sidebar from './Sidebar/Sidebar'

function App() {
  return (
    <div className="App bg-light">

        <Sidebar />

        <Welcome />

        <Separator />

        <Actionplan title="Notre plan d'action" id="action-plan"/>

        <Separator />

        <Separator />

        <Separator />

        <Separator />

        <Whoarewe />
    </div>
  );
}

export default App;

// <Header />
// <hr className="bg-secondary"></hr>
