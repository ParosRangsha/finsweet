import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout';
import About from './pages/About/About';
import Feature from './reuse/Feature';
import Features from './pages/Features/Features';
import Blog from './pages/Blog/Blog';
import Faq from './pages/Faq/Faq';
import Pricing from './pages/Pricing/Pricing';
import Contact from './pages/Contact/Contact';
import Message from './popup/Message';

function App() {
  let multipage = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/features' element={<Features/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/faq' element={<Faq/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/message' element={<Message/>}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App
