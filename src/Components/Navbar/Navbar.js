import React from 'react';
import { Link } from 'react-router-dom';
import gitHubIcon from '../Assets/images/gitHubIcon.png'

export const Navbar = () => {
  return (
    <div>
      <Link to={'/'}><img src={gitHubIcon} alt='Git Hub Icon' /></Link>
    </div>
  )
}