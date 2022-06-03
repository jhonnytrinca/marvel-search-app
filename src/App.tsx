import { Toast } from './components';
import useDarkMode from './hooks/useDarkMode';
import Home from './pages';

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
