import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './SideBar.css';

function SideBar() {
  return (
    <div className="side-bar">
      <Avatar sx={{ bgcolor: deepPurple[500], margin: '10px auto' }}>S</Avatar>
      <div className="social-links">
        <a href="https://github.com/sbaxend" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
        <br />
        <a href="https://www.linkedin.com/in/sethbaxendell/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default SideBar;