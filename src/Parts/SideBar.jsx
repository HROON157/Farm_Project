import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Dashboard from './Dashboard';
import MapLayout from './Map';
import UserProfile from './UserProfile';
import OrderManagement from './OrderManagement';
import ItemListing from './ItemListing';
import MapIcon from './MapIcon.png'
import StoreInfo from './StoreInfo';
import DashboardLogo from './Sashboard.png';
import UserProfileLogo from './Userprofile.png'
import OrderLogo from './OrderManagement.png'
import itemListing from './ItemListing.png'
import StoreLogo from './StoreLogo.png'
import SpaceShip from './Spaceship.png'
import ListingLogo from './Listingdocumantation.png'
import StoreMakinglogo from './StoreMakingLogo.png'
const SideBarComponent = ({ setActiveComponent }) => {
  const location = useLocation();

  useEffect(() => {
    setActiveComponent(location.pathname);
  }, [location, setActiveComponent]);

  return (
    <>
      <div className="sideBar">
        <h4>Logo</h4>
        <nav>
          <ul>
            <li><Link to="/Dashboard"> 
            <p><img src={DashboardLogo} alt="DashBoardLogo" className="nav-icon"/> Dashboard</p></Link></li>
            <li><Link to="/Map">
            <p><img src={MapIcon} alt="Map" className="nav-icon"/> Maps</p></Link></li>
            <li><Link to="/UserProfile">
            <p><img src={UserProfileLogo} alt="UserProfileLogo" className="nav-icon"/> User Profile</p></Link></li>
            <li><Link to="/OrderManagement">
            <p><img src={StoreLogo} alt="OrderLogo"  className="nav-icon" /> Order Management</p></Link></li>
            <li><Link to="/ItemListing">
            <p> <img src={OrderLogo} alt="itemListing" className="nav-icon"/> Item Listing</p></Link></li>
            <li><Link to="/StoreInfo">
            <p><img src={itemListing} alt="StoreLogo" className="nav-icon"/> Store Information</p></Link></li>
          </ul>
          <hr style={{ border: 'none', borderBottom: '1px solid black', margin: '10px 0' }} />
          <p>Documentation</p>
          <p><img src={SpaceShip} alt="SpaceShip" className='nav-icon' /> Getting Started</p>
          <p> <img src={ListingLogo} alt="ListingLogo" className='nav-icon'/> Listing tems</p>
          <p> <img src={StoreMakinglogo} alt="StoreMakinglogo"  className='nav-icon'/> Store making</p>
        </nav>
      </div>
      <div className="content-container">
        <div className={`header ${location.pathname ? 'active-header' : ''}`}>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Map" element={<MapLayout />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/OrderManagement" element={<OrderManagement />} />
            <Route path="/ItemListing" element={<ItemListing />} />
            <Route path="/StoreInfo" element={<StoreInfo />} />
          </Routes>
        </div>
        <div className={`middle ${location.pathname ? 'active-middle' : ''}`}>
        </div>
        <div className={`footer ${location.pathname ? 'active-footer' : ''}`}>
        </div>
      </div>
    </>
  );
}

const SideBar = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <Router>
      <div className="app-container d-flex">
        <SideBarComponent setActiveComponent={setActiveComponent} />
      </div>
    </Router>
  );
}

export default SideBar;
