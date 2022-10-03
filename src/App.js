import './App.css';
import { Provider } from 'react-redux'
import Input from './components/Input';
import { store } from './store'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Input />
      </Provider>

    </div>
  );
}

export default App;
