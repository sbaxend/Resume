import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './SideBar.css'; // Ensure your CSS file is imported

function SideBar() {
  const user = useSelector((store) => store.user);

  return (
    <div className="side-bar">
      <Avatar sx={{ bgcolor: deepPurple[500], margin: '10px auto' }}>S</Avatar>
      <div className="social-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default SideBar;