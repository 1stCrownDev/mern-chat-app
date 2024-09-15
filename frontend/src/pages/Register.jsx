import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../components/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {

  const handleRegister = async (e) => {
    
  };

  return (
    <div className='welcome-container'>
      <form className="form" onSubmit={handleRegister}>
        <label htmlFor="name">Enter your name</label>
        <input 
            type="text" 
            name="name" 
            id="name" 
            className='input' 
            required 
            onChange={(e) => setName(e.target.value)} 
            value={name}
        />
        <label htmlFor="email">Enter your email</label>
        <input 
            type="email" 
            name="email" 
            id="email"
            className='input'
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
        <label htmlFor="password">Choose a password</label>
        <input 
            type="password" 
            name="password" 
            id="password" 
            className='input'    
            required
            onChange={(e) => setPassword(e.target.value)}
        />

        <div className="button-container">
          <button type="submit" className='btn'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register;