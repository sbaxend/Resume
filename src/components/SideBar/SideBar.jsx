import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './SideBar.css'; // Ensure your CSS file is imported

function SideBar() {
  const user = useSelector((store) => store.user);

  return (
    <div className="side-bar">
      <Avatar sx={{ bgcolor: deepPurple[500], margin: '10px auto' }}>S</Avatar>
      <div className="social-links">
        <a href="https://github.com/sbaxend" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
        <br />
        <a href="https://linkedin.com" target="https://www.linkedin.com/in/sethbaxendell/" rel="noopener noreferrer"><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default SideBar;