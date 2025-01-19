import logo from './logo.svg';
import './App.css';
import Greeting from './FunctionalComponent';
import WelcomeMessage from './ClassComponent';
import UserCard from './Card';
import Counter from './Counter';

let arr = [
  { name: "Manoli", age: 23, location: "Ahmedabad" }
]

function App() {
  return (
    <div className="App">
      <Greeting name="React!" />
      <WelcomeMessage num={3} />
      <UserCard userData={arr} />
      <Counter />
    </div>
  );
}

export default App;
