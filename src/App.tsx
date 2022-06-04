import { Toast } from './components';
import useDarkMode from './hooks/useDarkMode';
import Home from './pages/Home';

function App() {
  useDarkMode();

  return (
    <div>
      <Toast />
      <Home />
    </div>
  );
}

export default App;
