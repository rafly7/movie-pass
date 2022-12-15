import logo from './logo.svg';
import './App.css';
import { AppView } from './App_view';
import { LK21Provider } from './context/lk21';
import SearchAppBar from './components/AppBar';

function App() {
  return (
    <LK21Provider>
      <SearchAppBar/>
      <AppView/>
    </LK21Provider>
  );
}

export default App;
