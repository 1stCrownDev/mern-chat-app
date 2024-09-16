import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Context';
import { useContext } from 'react';

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/auth/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      setIsAuthenticated(true)
      toast.success(`Welcome ${data.name}! Please wait ...`, {
        duration: 5000,
        isClosable: true,
        position: toast.POSITION.TOP_CENTER,
      });

      localStorage.setItem("user", JSON.stringify(data));

      setTimeout(() => {
        navigate("/");
      }, 4000);

    } catch (error) {
      console.log(error.response.data.error);
      setIsAuthenticated(false);
      toast.error(error.response.data.error, {
        duration: 5000,
        isClosable: true,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className='welcome-container'>
      <form className="form" onSubmit={handleLogin}>
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="email">Enter your email</label>
          <input 
              type="email" 
              name="email" 
              id="email" 
              className="input"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
          />
          <label htmlFor="password">Enter a valid password</label>
          <input 
              type="password" 
              name="password" 
              id="password" 
              className="input"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
          />
          <button type="submit" className="btn">Log In</button>
        </fieldset>
      </form>
      
    </div>
  )
}

export default Login;