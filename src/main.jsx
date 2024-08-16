import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Index from './components/index/Index';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
// import Nav from './components/nav/Nav';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: 'login',
        element: <Login setIsLoggedIn={() => { }} />,
      },
      {
        path: 'registration',
        element: <Registration setIsLoggedIn={() => { }} />,
      },
    ],
  },
  {
    path: '/home',
    element: <Layout />,
    // element: <Nav />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>

      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: isLoggedIn ? <Layout /> : <Index />,
          },
          {
            path: 'login',
            element: <Login setIsLoggedIn={setIsLoggedIn} />,
          },
          {
            path: 'registration',
            element: <Registration setIsLoggedIn={setIsLoggedIn} />,
          },
          {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'portfolio',
            element: <Portfolio />,
          },
          {
            path: 'blog',
            element: <Blog />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
          {
            path: 'index',
            element: <Index />,
          },
        ])}
      />
      
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
