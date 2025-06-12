import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import { Toaster } from 'react-hot-toast';
import './App.css'


const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
         <Home/>

      </div>

    },
    {
      path:"/pastes",
      element:
      <div>
         <Navbar/>
         <Paste/>

      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>

      </div>
    }
  ]
)

function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
      
      
    </div>
    
  )
}

export default App
