import React from 'react';
import { ContactSection, Footer, Navbar } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globelStyles';
import ScrollToTop from './ScrollToTop';
import Home from './Pages/HomePage/Home';
import Service from './Pages/ServicePage/Service';



function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<ContactSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
