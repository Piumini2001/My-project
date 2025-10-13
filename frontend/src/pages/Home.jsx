/*// src/pages/Home.js*/
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section bg-primary text-white py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Welcome to Your Todo App
              </h1>
              <p className="lead mb-4">
                Stay organized and boost your productivity with our simple and powerful todo application. 
                Manage your tasks efficiently and never miss a deadline again.
              </p>
              <div className="d-flex gap-3">
                <Link to="/tasks" className="btn btn-light btn-lg">
                  Get Started 🚀
                </Link>
                <Link to="/tasks" className="btn btn-outline-light btn-lg">
                  View Tasks
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-image mt-4 mt-lg-0">
                <span style={{ fontSize: '8rem' }}>📝</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="mb-4">Why Choose Our Todo App?</h2>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon mb-3">
                  <span style={{ fontSize: '3rem' }}>⚡</span>
                </div>
                <h5 className="card-title">Lightning Fast</h5>
                <p className="card-text text-muted">
                  Quick and responsive interface that helps you manage tasks without any delays.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon mb-3">
                  <span style={{ fontSize: '3rem' }}>🎯</span>
                </div>
                <h5 className="card-title">Simple & Clean</h5>
                <p className="card-text text-muted">
                  Clean design focused on what matters most - getting things done.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon mb-3">
                  <span style={{ fontSize: '3rem' }}>📱</span>
                </div>
                <h5 className="card-title">Responsive</h5>
                <p className="card-text text-muted">
                  Works perfectly on all devices - desktop, tablet, and mobile.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-light border-0">
              <div className="card-body py-5">
                <div className="row text-center">
                  <div className="col-md-3 mb-3">
                    <h3 className="text-primary fw-bold">100%</h3>
                    <p className="text-muted mb-0">Free to Use</p>
                  </div>
                  <div className="col-md-3 mb-3">
                    <h3 className="text-primary fw-bold">24/7</h3>
                    <p className="text-muted mb-0">Accessible</p>
                  </div>
                  <div className="col-md-3 mb-3">
                    <h3 className="text-primary fw-bold">∞</h3>
                    <p className="text-muted mb-0">Unlimited Tasks</p>
                  </div>
                  <div className="col-md-3 mb-3">
                    <h3 className="text-primary fw-bold">🚀</h3>
                    <p className="text-muted mb-0">Always Improving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="cta-section p-5 bg-primary text-white rounded">
              <h3 className="mb-3">Ready to Get Organized?</h3>
              <p className="mb-4">Start managing your tasks today and boost your productivity!</p>
              <Link to="/tasks" className="btn btn-light btn-lg">
                Start Using Todo App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;