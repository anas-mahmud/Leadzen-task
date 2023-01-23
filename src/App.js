import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routers';
function App() {

  return (
    <div className="App bg-slate-300">
      <div className='max-w-screen-2xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
