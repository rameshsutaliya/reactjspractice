import './App.css';
import MyHeader from "./components/MyHeader";
import Main from "./components/Main";
import MyFooter from "./components/MyFooter";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Main />
      <Counter />
      <MyFooter />
    </div>
  );
}

export default App;
