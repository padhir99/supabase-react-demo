import './form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../../config/SupabaseClient';

const UserForm = (props) => {
  const navigate = useNavigate();
  const { type } = props;
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const inputChangeHandler = (event) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const signUp = async (user) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
          data: {
            name: user.name,
          },
        },
      });
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (user) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password,
      });
      console.log('login-data', data);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('user', user);
    type === 'signup' ? signUp(user) : login(user);
  };

  return (
    <div className='login-container '>
      <form onSubmit={submitHandler}>
        <div className='form-container'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={user?.name}
            onChange={inputChangeHandler}
          />
          <label>Email</label>
          <input
            type='text'
            name='email'
            value={user?.email}
            onChange={inputChangeHandler}
          />
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={user?.password}
            onChange={inputChangeHandler}
          />
          <button type='submit'>
            {type === 'signup' ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
