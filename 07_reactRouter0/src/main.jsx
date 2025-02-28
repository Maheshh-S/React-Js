import { children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path=''  element={<Home />} />
      <Route path='about'  element={<About />} />
      <Route path='contact'  element={<Contact />} />
      <Route path='user/:userId'  element={<User />} />
      <Route  path='github' 
       element={<Github />}
       loader={githubInfoLoader}
       />
    </Route>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
