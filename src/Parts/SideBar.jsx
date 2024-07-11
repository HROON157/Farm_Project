// Parts/SideBar.jsx
import React from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function SideBar({ setActiveComponent }) {
  const location = useLocation();
  useEffect(() => {
    setActiveComponent(location.pathname);
  }, [location, setActiveComponent]);

  return (
    <div className="sideBar">
      <h4>Logo</h4>
      <nav>
        <ul>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/Map">Map</Link></li>
          <li><Link to="/UserProfile">User Profile</Link></li>
          <li><Link to="/OrderManagement">Order Management</Link></li>
          <li><Link to="/ItemListing">Item Listing</Link></li>
          <li><Link to="/StoreInfo">Store Information</Link></li>
        </ul>
        <hr style={{ border: 'none', borderBottom: '1px solid black', margin: '10px 0' }} />
        <p className="faded-text">Documentation</p>
        <p className="faded-text">Listing Items</p>
        <p className="faded-text">Store making</p>
      </nav>
    </div>
  );
}

export default SideBar;
