import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctor/Doctors';
import DoctorDetails from '../pages/Doctor/DoctorDetails';
import {Routes,Route} from 'react-router-dom';
import PageNotFound from '../pages/Error404/Error.jsx';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/home" element={<Home />}  />
      <Route path="/doctors" element={<Doctors />}  />
      <Route path="/doctors/:id" element={<DoctorDetails />}  />
      <Route path="/login" element={<Login />}  />
      <Route path="/register" element={<Signup/>} />
      <Route path="/contact" element={<Contact />}  />
      <Route path="/services" element={<Services />}  />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;
