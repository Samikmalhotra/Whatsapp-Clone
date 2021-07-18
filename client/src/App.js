import './App.css';
import Chat from './components/Chat.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar/>
        <Chat />
      </div>

    </div>
  );
}

export default App;
