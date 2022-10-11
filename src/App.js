import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './utils/routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
