import React, { useState } from 'react';

const AuthForm = ({ formType }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${formType} with:`, { username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">{formType === 'login' ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className={`bg-${formType === 'login' ? 'blue' : 'green'}-500 text-white py-2 px-4 rounded-md`}
          >
            {formType === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
  return <AuthForm formType="login" />;
};

const SignUp = () => {
  return <AuthForm formType="signup" />;
};

export { Login, SignUp };
