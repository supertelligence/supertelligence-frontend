import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>⚡ Supertelligence</h2>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#pricing">Pricing</a>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              The Future of <span className="gradient-text">AI-Powered</span> Project Management
            </h1>
            <p className="hero-subtitle">
              Supertelligence revolutionizes how teams collaborate with AI. Streamline workflows, 
              automate tasks, and unlock unprecedented productivity with our intelligent project manager.
            </p>
            <div className="hero-buttons">
              <button className="primary-button">Start Free Trial</button>
              <button className="secondary-button">Watch Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-title">🤖 AI Assistant</div>
                <div className="status-dot active"></div>
              </div>
              <div className="card-content">
                <p>"I've analyzed your project timeline and suggest optimizing the frontend sprint by 2 days..."</p>
                <div className="suggestion-actions">
                  <button className="mini-button">Apply</button>
                  <button className="mini-button-outline">Customize</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Supercharge Your Team's Productivity</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>AI-Powered Insights</h3>
              <p>Get intelligent recommendations on project optimization, resource allocation, and timeline predictions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Automated Workflows</h3>
              <p>Let AI handle routine tasks like status updates, progress tracking, and stakeholder communications.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Smart Task Management</h3>
              <p>AI prioritizes tasks, suggests optimal assignments, and predicts potential bottlenecks before they happen.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-time Analytics</h3>
              <p>Monitor team performance with AI-generated insights and predictive analytics dashboards.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Seamless Collaboration</h3>
              <p>Break down silos with AI-facilitated communication and context-aware collaboration tools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔮</div>
              <h3>Predictive Planning</h3>
              <p>Forecast project outcomes, identify risks early, and adapt plans with AI-driven scenario modeling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How Supertelligence Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Connect Your Tools</h3>
                <p>Integrate with your existing project management tools, calendars, and communication platforms.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>AI Learns Your Workflow</h3>
                <p>Our AI analyzes your team's patterns, preferences, and project history to understand your unique workflow.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Get Intelligent Recommendations</h3>
                <p>Receive personalized suggestions for optimization, automation, and strategic improvements.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Scale Your Success</h3>
                <p>Watch your team's productivity soar as AI handles the heavy lifting and you focus on what matters most.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Choose Your Plan</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">29</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li>✓ Up to 5 team members</li>
                <li>✓ Basic AI insights</li>
                <li>✓ Task automation</li>
                <li>✓ Email support</li>
              </ul>
              <button className="pricing-button">Start Free Trial</button>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Professional</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">99</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li>✓ Up to 25 team members</li>
                <li>✓ Advanced AI analytics</li>
                <li>✓ Custom workflows</li>
                <li>✓ Priority support</li>
                <li>✓ API access</li>
              </ul>
              <button className="pricing-button primary">Start Free Trial</button>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="amount">Custom</span>
              </div>
              <ul className="features-list">
                <li>✓ Unlimited team members</li>
                <li>✓ Custom AI models</li>
                <li>✓ White-label solution</li>
                <li>✓ Dedicated support</li>
                <li>✓ On-premise deployment</li>
              </ul>
              <button className="pricing-button">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Project Management?</h2>
          <p>Join thousands of teams already using Supertelligence to achieve extraordinary results.</p>
          <button className="primary-button large">Start Your Free Trial Today</button>
          <p className="cta-note">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>⚡ Supertelligence</h3>
              <p>The future of AI-powered project management.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#integrations">Integrations</a>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <a href="#blog">Blog</a>
              <a href="#help">Help Center</a>
              <a href="#api">API Docs</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Supertelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
