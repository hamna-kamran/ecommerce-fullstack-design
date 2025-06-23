import React, { useState } from 'react';
import { registerUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: false,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert('User Registered');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '450px' }}>
        <h3 className="text-center mb-4">Create an Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
              value={form.name}
              onChange={(e) =>
                setForm((prevForm) => ({ ...prevForm, name: e.target.value }))
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={(e) =>
                setForm((prevForm) => ({ ...prevForm, email: e.target.value }))
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create a password"
              required
              value={form.password}
              onChange={(e) =>
                setForm((prevForm) => ({ ...prevForm, password: e.target.value }))
              }
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="adminCheck"
              checked={form.isAdmin}
              onChange={(e) =>
                setForm((prevForm) => ({ ...prevForm, isAdmin: e.target.checked }))
              }
            />
            <label className="form-check-label" htmlFor="adminCheck">
              Register as Admin
            </label>
          </div>

          <button className="btn btn-success w-100" type="submit">
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          <span>Already have an account? </span>
          <button
            className="btn btn-link p-0"
            onClick={() => navigate('/login')}
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
}
