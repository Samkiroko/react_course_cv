import './App.css';
// import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
// import { Greet } from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <Stylesheet primary={true} />
      {/* <NameList /> */}
      {/* <ParentComponent /> */}
      {/* <Greet name="Samuel" heroName="Superman">
        <p>This is the children</p>
      </Greet>
      <Greet name="Kiroko" heroName="Batman" />
      <button>Action</button>
      <Greet name="Njenga" heroName="wonder man" />
      <Welcome name="Njenga" heroName="wonder man" />
      <Welcome name="Njenga" heroName="wonder man" />
      <Welcome name="Njenga" heroName="wonder man" />
      {/* <Message></Message> */}
      {/* <Counter></Counter>  */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <EventBind /> */}
    </div>
  );
}

export default App;
