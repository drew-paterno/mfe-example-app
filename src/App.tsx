import './App.css'
import { Route, Routes } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import ReduxComponent from './components/ReduxComponent';
import { useMemo } from 'react';

function App() {

    const store = useMemo(() => setupStore(), []);

  return (
      <Provider store={store}>
          <Routes>
              <Route path="/" element={<DefaultComponent/>} />
              <Route path="/redux" element={<ReduxComponent/>} />
          </Routes>
      </Provider>
  )
}

export default App;
