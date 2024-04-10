import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Portfolio from './components/Portfolio.jsx'
import PortfolioItem from './components/PortfolioItem.jsx'
import Bio from './components/Bio.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// ROUTES, creates the routes
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        // Establishes that this will be the main page
        index: true,
        element: <Home />
      },
      // The rest are other routes children of '/' ex. /about
      {
        path: "about",
        element: <About />,
        children: [
          // Children of about -> routed using /about/portfolio etc.
          {
            path: 'portfolio',
            element: <Portfolio />
          },
          {
            // providing the ':' signifies that the keyword after is an dynamic id, could write out multiple ids
            path: 'portfolio/:id',
            element: <PortfolioItem />
          },
          {
            path: 'bio',
            element: <Bio />
          }
        ]
      },
      // Child of main '/contact'
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]

// Instansiates the routes to router
const router = createBrowserRouter(routes)

// Render using the router provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
