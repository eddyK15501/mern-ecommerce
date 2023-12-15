import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import HomeScreen from './screens/HomeScreen.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        index: true,
        element: <HomeScreen />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
