// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './Parts/SideBar';
import Dashboard from './Parts/Dashboard';
import MapLayout from './Parts/Map';
import UserProfile from './Parts/UserProfile';
import OrderManagement from './Parts/OrderManagement';
import ItemListing from './Parts/ItemListing';
import StoreInfo from './Parts/StoreInfo';
import './App.css';

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <Router>
      <div className="app-container d-flex">
        <SideBar setActiveComponent={setActiveComponent} />
        <div className="content-container">
          <div className={`header ${activeComponent ? 'active-header' : ''}`}>
          <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Map" element={<MapLayout />} />
              <Route path="/UserProfile" element={<UserProfile />} />
              <Route path="/OrderManagement" element={<OrderManagement />} />
              <Route path="/ItemListing" element={<ItemListing />} />
              <Route path="/StoreInfo" element={<StoreInfo />} />
            </Routes>
          </div>
          <div className={`middle ${activeComponent ? 'active-middle' : ''}`}>
          </div>
          <div className={`footer ${activeComponent ? 'active-footer' : ''}`}>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
