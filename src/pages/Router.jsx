import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import TagManager from 'react-gtm-module';
import StartPage from './StartPage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'



const usePageViewTracking = () => {
    const location = useLocation();

    useEffect(()=>{
        if (window.dataLayer) {
            window.dataLayer.push({
                event:'gtm_pageview',
                page_location: location
            });
            console.log('dataLayer event pushed')
        }
    }, [location]);
};


export default function Router() {
    const clickNav = function() {
        const params = {
          dataLayer : {
            event: 'clickNav',
            temp: 'temp'
          }
        };
        TagManager.dataLayer(params);
      }
    return (
        <BrowserRouter>
        <PageTracker />
            <nav>
                <NavLink className={({isActive}) => "nav-link" + (isActive ? " click" : "")} to='/' onClick={clickNav}>
                    Start
                </NavLink>
                <NavLink className={({isActive}) => "nav-link" + (isActive ? " click" : "")} to='/about' onClick={clickNav}>
                    About
                </NavLink> 
                <NavLink className={({isActive}) => "nav-link" + (isActive ? " click" : "")} to='/contact' onClick={clickNav}>
                    Contact
                </NavLink> 
            </nav>
            <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    )
}
const PageTracker = () => {
    usePageViewTracking();
    return null;
}