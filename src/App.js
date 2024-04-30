import React, { useState, useEffect } from 'react';
import './App.css';
import Images from './Images';
import 'boxicons/css/boxicons.min.css';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
      const { offsetTop, id } = sec;
      if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + sec.offsetHeight) {
        setActiveSection(id);
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      footer.classList.toggle(
        'show-animate',
        window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    const navLinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
      handleScroll();
      const sections = document.querySelectorAll('section');
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
          const activeNavLink = document.querySelector(`header nav a[href*='${id}']`);
          if (activeNavLink) {
            activeNavLink.classList.add('active');
          }
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
      const footer = document.querySelector('footer');
      footer.classList.toggle(
        'show-animate',
        window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight
      );
    };
  }, []);

  return (
    <div>
      {/* header design */}
      <header className={`header ${menuOpen ? 'active' : ''}`}>
        <a href="#" className="logo">Portfolio.<span className="animate" style={{'--i':1}}></span></a>
        <div className={`bx bx-menu ${menuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}><span className="animate" style={{'--i':2}}></span></div>
        <nav className="navbar">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={handleLinkClick}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={handleLinkClick}>About</a>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={handleLinkClick}>Education</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={handleLinkClick}>Skills</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={handleLinkClick}>Contact</a>
          <span className="active-nav"></span>
          <span className="animate" style={{'--i':2}}></span>
        </nav>
      </header>

      {/* home section design */}
      <section className="home show-animate" id="home">
        <div className="home-content">
          <h1>Hi, I'm <span>Soorya Prasad</span><span className="animate" style={{'--i':2}}></span></h1>
          <div className="text-animate">
            <h3>Cloud Computing /SDE</h3>
            <span className="animate" style={{'--i':3}}></span>
          </div>
          <p>As an aspiring Cloud Engineer, I am eager to contribute my technical expertise to a challenging work environment.<br />With a passion for continuous learning, I am ready to leverage my engineering background and dedication to enhance the innovation and success.
            <span className="animate" style={{'--i':4}}></span>
          </p>
        </div>
        <div className="home-sci">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWhHKhvxxxSDrbqpvHJbCbzGwQLfbHWdGrKpkTGWRknLSQzkVXCxWCjZdvmdtbVvNZJBV"><i className='bx bxl-gmail'></i></a>
          <a href="https://www.linkedin.com/in/soorya-prasad-s/"><i className='bx bxl-linkedin'></i></a>
          <a href="https://www.github.com/sooryaprasad28/"><i className='bx bxl-github'></i></a>
          <span className="animate" style={{'--i':6}}></span>
        </div>
        <div className="home-imgHover">
          <img src={Images.home} alt="" />
        </div>
        <span className="animate home-img" style={{'--i':7}}></span>
      </section>

      {/* about section design */}
      <section className="about" id="about">
        <h2 className="heading">About <span>Me</span><span className="animate scroll" style={{'--i':1}}></span></h2>
        <div className="about-img">
          <img src={Images.about} alt="" />
          <span className="circle-spin"></span>
          <span className="animate scroll" style={{'--i':2}}></span>
        </div>
        <div className="about-content">
          <h3>Hi there! Glad to see you here.<span className="animate scroll" style={{'--i':3}}></span></h3>
          <p>Enthusiastic and dedicated Computer Science and Engineering student with a strong passion for cloud computing.Currently pursuing III Year of my Bachelor's degree at Karpagam Institute of Technology, where I am immersing myself in cloud technologies and gaining hands-on experience.
            Eager to leverage my expertise in cloud computing to drive innovation and efficiency in organizations. Committed to continuous learning and staying updated with the latest advancements in cloud technology.
            <span className="animate scroll" style={{'--i':4}}></span>
          </p>
          <div className="btn-box btns">
            <a href="#contact" className="btn">Contact Me</a>
            <span className="animate scroll" style={{'--i':5}}></span>
          </div>
        </div>
      </section>

      {/* education section design */}
      <section className="education" id="education">
        <h2 className="heading">My <span>Journey</span><span className="animate scroll" style={{'--i':1}}></span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education<span className="animate scroll" style={{'--i':2}}></span></h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2021 - 2025</div>
                  <h3>UG Degree</h3>
                  <p>Pursuing my UG in the Bachelor of Engineering in Karpagam Institute of Technology
                    in the stream of Computer Science and Engineering with CGPA of 7.85 upto 4th semester
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2020 - 2021</div>
                  <h3>HSC</h3>
                  <p>I earned a distinction by completing my HSC at Sri Vani Matriculation Higher Secondary School in Namakkal, achieving an impressive 94%</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2018 - 2019</div>
                  <h3>SSLC</h3>
                  <p>I earned a distinction by completing my SSLC at Sri Vani Matriculation Higher Secondary School in Namakkal, achieving an impressive 94%</p>
                </div>
              </div>
              <span className="animate scroll" style={{'--i':3}}></span>
            </div>
          </div>
          <div className="education-column">
            <h3 className="title">Projects<span className="animate scroll" style={{'--i':5}}></span></h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2023 - 2024</div>
                  <h3>Empowering Employee Information Management with AWS</h3>
                  <p>At the forefront of modernizing employee management,
                    thisinnovative project utilizes Flask and AWS serviceslike
                    EC2, RDS, S3, and IAM. It reshapes organizational
                    efficiency and security in handling employee data,
                    marking a paradigm shift in workforce management.
                    Experience the evolution of modern business practices
                    optimizing employee information managementsecurely.
                    </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>2023 – Present</div>
                  <h3>Empowering Communication Through Gesture Recognition</h3>
                  <p>The Sign Language Recognition System is a
                    groundbreaking initiative aimed at facilitating
                    communication for those with hearing impairments. By
                    accurately translating sign language into text orspeech,
                    using advanced computer vision and machine learning
                    methods, it empowersthe deaf and hard-of-hearing
                    community, fostering seamlessinteraction across different
                    settings.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>2023 - Present</div>
                  <h3>Smart E-Market Price Comparator</h3>
                  <p>The Online E-Markets Price Comparison System is a sophisticated solution aimed at simplifying and enhancing the 
                  online shopping experience for consumers. This innovative system leverages data from multiple e-commerce platforms
                  to provide users with a comprehensive and real-time comparison of product prices, enabling them to make informed purchasing decisions.
                  Through intuitive interfaces and advanced algorithms, this system facilitates cost-effective shopping and promotes transparency in the 
                  online retail landscape.</p>
                </div>
              </div>
              <span className="animate scroll" style={{'--i':6}}></span>
            </div>
          </div>
        </div>
      </section>

      {/* skills section design */}
      <section className="skills" id="skills">
        <h2 className="heading">My <span>Skills</span><span className="animate scroll" style={{'--i':1}}></span></h2>
        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">Technical Skills<span className="animate scroll" style={{'--i':2}}></span></h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>Version Control</h3>
                </div>
                <div className="progress">
                  <h3>Linux</h3>
                </div>
                <div className="progress">
                  <h3>Java</h3>
                </div>
                <div className="progress">
                  <h3>Python</h3>
                </div>
              </div>
              <span className="animate scroll" style={{'--i':3}}></span>
            </div>
          </div>
          <div className="skills-column">
            <h3 className="title">Professional Skills<span className="animate scroll" style={{'--i':5}}></span></h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>Cloud Computing</h3>
                </div>
                <div className="progress">
                  <h3>DevOps</h3>
                </div>
                <div className="progress">
                  <h3>AWS</h3>
                </div>
              </div>
              <span className="animate scroll" style={{'--i':6}}></span>
            </div>
          </div>
        </div>
      </section>

      {/* contact section design */}
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span><span className="animate scroll" style={{'--i':1}}></span></h2>
        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email" required />
              <span className="focus"></span>
            </div>
            <span className="animate scroll" style={{'--i':3}}></span>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input type="number" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
            <span className="animate scroll" style={{'--i':5}}></span>
          </div>
          <div className="textarea-field">
            <textarea name="" id="" cols="30" rows="7" placeholder="Your Message" required></textarea>
            <span className="focus"></span>
            <span className="animate scroll" style={{'--i':7}}></span>
          </div>
          <div className="btn-box btns">
            <button type="submit" className="btn">Submit</button>
            <span className="animate scroll" style={{'--i':9}}></span>
          </div>
        </form>
      </section>

      {/* footer design */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 | Designed and Maintenance by Soorya Prasad  | All Rights Reserved</p>
          <span className="animate scroll" style={{'--i':1}}></span>
        </div>
        <div className="footer-iconTop">
          <a href="#"><i className='bx bx-up-arrow-alt'></i></a>
          <span className="animate scroll" style={{'--i':3}}></span>
        </div>
      </footer>
    </div>
  );
}

export default App;
