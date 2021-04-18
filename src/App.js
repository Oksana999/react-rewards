import logo from './logo.svg';
import './App.css';
import Transactions from "./component/Transactions";
import {UserForm} from "./component/UserForm";

function App() {
  return (
    <div className="App">
        <header className = "App-header">
            <UserForm />
             <Transactions />

        </header>
    </div>
  );
}

export default App;
