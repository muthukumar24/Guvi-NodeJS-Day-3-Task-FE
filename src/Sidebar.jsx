import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="vh-100 p-3 fixed-left">
      <h4 className='text-center text-white'>Form Navigations</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/create-mentor" className='text-white navbar-link'>Create Mentor</Nav.Link>
        <Nav.Link as={Link} to="/create-student" className='text-white navbar-link'>Create Student</Nav.Link>
        <Nav.Link as={Link} to="/assign-students" className='text-white navbar-link'>Assign Students</Nav.Link>
        <Nav.Link as={Link} to="/change-mentor" className='text-white navbar-link'>Change Mentor</Nav.Link>
        <Nav.Link as={Link} to="/show-students" className='text-white navbar-link'>Show Students</Nav.Link>
        <Nav.Link as={Link} to="/show-previous-mentors" className='text-white navbar-link'>Show Previous Mentors</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

