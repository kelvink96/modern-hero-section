import './HeroSection.css';

const HeroSection = ({
  title = "Build Something Amazing",
  subtitle = "Create beautiful user interfaces with our modern component library",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
  backgroundImage = null,
  showStats = true
}) => {
  const stats = [
    { label: "Active Users", value: "10K+" },
    { label: "Components", value: "500+" },
    { label: "Downloads", value: "1M+" }
  ];

  return (
    <section className="hero-section">
      <div className="hero-background">
        {backgroundImage && (
          <img src={backgroundImage} alt="" className="hero-bg-image" />
        )}
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">✨ New Release</span>
          </div>
          
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
              <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button 
              className="btn btn-secondary"
              onClick={onSecondaryClick}
            >
              <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1" />
              </svg>
              {secondaryButtonText}
            </button>
          </div>
          
          {showStats && (
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <div className="card-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
            </div>
            <div className="card-content">
              <div className="code-line">
                <span className="code-keyword">const</span>
                <span className="code-variable"> hero</span>
                <span className="code-operator"> = </span>
                <span className="code-string">"amazing"</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">export</span>
                <span className="code-keyword"> default</span>
                <span className="code-variable"> Hero</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;