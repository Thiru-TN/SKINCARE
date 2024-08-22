import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function SkinCareApp() {
  // State for tracking active section
  const [activeSection, setActiveSection] = useState('');

  // Function to handle menu button click
  const handleMenuClick = () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
  };

  // Function to handle scrolling and update active section
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header .nav a');
    const offset = 150;

    sections.forEach(section => {
      const top = window.scrollY;
      const height = section.offsetHeight;
      const sectionOffset = section.offsetTop - offset;
      const id = section.getAttribute('id');

      if (top >= sectionOffset && top < sectionOffset + height) {
        setActiveSection(id);
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`header .nav a[href*='${id}']`).classList.add('active');
      }
    });
  };

  // Effect hook to listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures the effect runs only once



  return (
    <div>
      {/* Header section */}
      <header className="fixed-top py-3">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="#" className="logo">Skin Care<span className="fas fa-bacteria"></span></a>
          <div id="menu-bar" className="fas fa-bars d-inline-block d-md-none" onClick={handleMenuClick}></div>
          <nav className="nav">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#prevent">skin type and disease</a>
            <a href="#check">check my skin type</a>
            <a href="#experts">our team</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
      </header>

      {/* Rest of your HTML sections */}
      {/* Include your HTML sections here */}
      {/* Example: */}
      {/* <section className="home" id="home"> ... </section> */}
      {/* <section className="about" id="about"> ... </section> */}
      {/* <section className="prevent" id="prevent"> ... </section> */}
      {/* <section className="check" id="check"> ... </section> */}
      {/* <section className="experts" id="experts"> ... </section> */}
      {/* <section className="contact" id="contact"> ... </section> */}
      {/* <section className="footer"> ... </section> */}
    </div>
  );
}

export default SkinCareApp;
