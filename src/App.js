import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Samuel" heroName="Superman">
        <p>This is the children</p>
      </Greet>
      <Greet name="Kiroko" heroName="Batman" />
      <button>Action</button>
      <Greet name="Njenga" heroName="wonder man" />
      <Welcome name="Njenga" heroName="wonder man" />
      <Welcome name="Njenga" heroName="wonder man" />
      <Welcome name="Njenga" heroName="wonder man" /> */}
      <Message></Message>
    </div>
  );
}

export default App;
