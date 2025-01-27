import React, { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [selectedJob, setSelectedJob] = useState(1);
  const [selectedProject, setSelectedProject] = useState(1);

  // Create refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const xpRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);

  const jobDesc = [
    {
      id: 1,
      year: "2024-present",
      title: "Barry-Wehmiller Papersystems",
      description: [
        "Engineered multiple new and old HMI's across a diverse set of platforms and deployed updates based on customer requirements.",
        "Collaborated with senior engineers and various teams in order to provide efficient and quality development for projects and timely release of aftermarket options for current and future machines.",
        "Developed new innovative software targeted for customer use to increase production, minimize downtime, and maximize profit.",
      ],
    },
    {
      id: 2,
      year: "2023-2024",
      title: "TechWorks",
      description: [
        "Acquired new leadership skills while developing applications to improve and automate the company’s daily tasks and improve efficiency.",
        "Researched and developed solutions to optimize production of multiple in-house Arduino sensors available for purchasers.",
        "Developed software to visualize live sensors to help with understanding and communicating relayed data.",
      ],
    },
    {
      id: 3,
      year: "2022-2023",
      title: "University of Northern Iowa",
      description: [
        "Alum and held an IT specialist position where I created campus website banners hosting announcements about upcoming technology.",
        "Worked independently to modernize the university's wide range of online help tools and eLearning Suite connecting campus to third-party applications like Blackboard, Panopto, and many more.",
        "Partnered with university system administrators to improve and formalize the website used by thousands of students and faculty.",
      ],
    },
  ];

  const projects = [
    {
      id: 2,
      title: "Navigator",
      description: ["Project 2"],
      image1: "navigator.png",
    },
    {
      id: 1,
      title: "Falcon",
      description: ["The first project I worked on at BW. A Vue framework HMI, deployed with Electron, controlling a sheet runner front to back paired with a homebrewed server for handing tag data. ",
                    "I provided feature support to a set of 10 machines based in Indonesia over the course of many months culminating in a noticable performance enhancement. ",
                    "In addition, I was also responsible for many on-demand calibrations, long-standing bug fixes, and refactors to the legacy codebase",
      ],
      image1: "falcon.png",
      image2: "falcon_hmi.png",
    },
    {
      id: 3,
      title: "Color Flipper",
      description: [
        "A quick afternoon project I built for picking primary, secondary, and tertiary colors. ",
        "I always get caught up with trying to make the perfect color palette and found if my choices are random I tend to like the hand I'm dealt a lot faster.",
      ],
      image1: "color_flipper_code.png",
      image2: "color_flipper.png",
      link: "https://harrisonhodge.github.io/Color-Flipper/"
    },
    {
      id: 4,
      title: "Bingo",
      description: ["Browser bingo. Plain, simple, and fun."],
      image1: "bingo_code.png",
      image2: "bingo.png",
      link: "https://harrisonhodge.github.io/Bingo/"
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const topPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (xpRef.current) observer.observe(xpRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (resumeRef.current) observer.observe(resumeRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="header">
        <ul className="nav-list">
          <li className="nav-item">
            <button
              onClick={() => scrollToSection("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => scrollToSection("projects")}
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => scrollToSection("xp")}
              className={activeSection === "xp" ? "active" : ""}
            >
              Work
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => scrollToSection("contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => scrollToSection("resume")}
              className={activeSection === "resume" ? "active" : ""}
            >
              Resume
            </button>
          </li>
        </ul>
        <hr></hr>
      </div>

      <div className="main">
        <div id="about" ref={aboutRef} className="col-2">
          <div className="in-right">
            <div className="name">Harrison Hodge</div>
            <div className="blue-text">software engineer</div>
            <div className="cream-text">
              Hey, I'm Harrison and I have a passion for software and design.
              I've been fascinated with computers all my life and have been
              developing and modifying applications for years.
              <br></br>
              <br></br>
              Through my career I've worked in many rewarding positions such as
              the{" "}
              <a
                className="blue-underline small-blue-text"
                target="_blank" rel="noreferrer"
                href="https://uni.edu/"
              >
                University of Northern Iowa,
              </a>{" "}
              <a
                className="small-blue-text blue-underline"
                target="_blank" rel="noreferrer"
                href="https://www.techworkscampus.com/"
              >
                a metal casting foundry,
              </a>{" "}
              and I am currently employed at{" "}
              <a
                className="blue-underline small-blue-text"
                target="_blank" rel="noreferrer"
                href="https://www.bwpapersystems.com/"
              >
                globally known paper company.
              </a>{" "}
              My main focus being to engineer the front end and back end of
              human machine interfaces for current gen, next gen, and
              aftermarket currogators and sheeters.
              <ul className="skills-list">
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>C#</li>

                <li>React</li>
                <li>Vue</li>
                <li>Angular</li>

                <li>Element Plus</li>
                <li>Shoelace</li>
                <li>Figma</li>

                <li>Docker</li>
                <li>SQL</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
          <div className="picture in-left">
            <img
              className="head-shot"
              src="thumbnail_IMG_4625.jpg"
              alt="head shot"
              width="500"
              height="700"
            ></img>
          </div>
        </div>

        <br></br>

        <div id="projects" ref={projectsRef} className="col-2">
          <div className="blue-text">
            Projects
            <hr></hr>
            <div className="radio-container-left">
              <input
                id="project1"
                name="project"
                defaultChecked
                type="radio"
                onChange={() => setSelectedProject(1)}
              />
              <label htmlFor="project1">{projects[0].title}</label>
              <input
                id="project2"
                name="project"
                type="radio"
                onChange={() => setSelectedProject(2)}
              />
              <label htmlFor="project2">{projects[1].title}</label>
              <input
                id="project3"
                name="project"
                type="radio"
                onChange={() => setSelectedProject(3)}
              />
              <label htmlFor="project3">{projects[2].title}</label>
              <input
                id="project4"
                name="project"
                type="radio"
                onChange={() => setSelectedProject(4)}
              />
              <label htmlFor="project4">{projects[3].title}</label>

              <div className="glider-container">
                <div className="glider"></div>
              </div>
            </div>
          </div>
          <div className="center-text">
            <p className="blue-text">
                {projects[selectedProject - 1].title}
            </p>
            <p className="cream-text">
              {projects[selectedProject - 1].description}
            </p>

            <br></br>
            <div className="space-between">
              <object
                data={projects[selectedProject - 1].image1}
                type="image/png"
                className="project-pic"
              >
                project image
              </object>

              <a href={projects[selectedProject - 1].link} target="_blank" rel="noreferrer">
              <object
                data={projects[selectedProject - 1].image2}
                type="image/png"
                className={`project-pic ${projects[selectedProject - 1].link ? 'pointer' : ''}`}
              >
                project image
              </object>
              </a>
            </div>
          </div>
        </div>

        <br></br>
        <div id="xp" ref={xpRef} className="col-2">
          <div className="center-text">
            <p className="blue-text">{jobDesc[selectedJob - 1].year}</p>
            {selectedJob && (
              <div className="left-text">
                {jobDesc
                  .find((job) => job.id === selectedJob)
                  .description.map((line, index) => (
                    <p key={index} className="cream-text">
                      {line}
                    </p>
                  ))}
              </div>
            )}
          </div>
          <div className="blue-text right-text">
            Experience
            <hr></hr>
            <div className="radio-container-right">
              <input
                id="job1"
                name="job"
                type="radio"
                defaultChecked
                onChange={() => setSelectedJob(1)}
              />
              <label htmlFor="job1">{jobDesc[0].title}</label>
              <input
                id="job2"
                name="job"
                type="radio"
                onChange={() => setSelectedJob(2)}
              />
              <label htmlFor="job2">{jobDesc[1].title}</label>
              <input
                id="job3"
                name="job"
                type="radio"
                onChange={() => setSelectedJob(3)}
              />
              <label htmlFor="job3">{jobDesc[2].title}</label>

              <div className="glider-container">
                <div className="glider"></div>
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <div id="contact" ref={contactRef} className="col-2">
          <div className="blue-text">
            Contact
            <hr></hr>
            <ul className="cream-text">
              <br></br>
              <li className="align-content">
                <p>
                  <sl-icon name="geo-alt" className="icon"></sl-icon> Madison,
                  WI
                </p>
              </li>
              <li className="align-content">
                <p>
                  <sl-icon name="telephone" className="icon"></sl-icon>{" "}
                  309-235-8636
                </p>
              </li>
              <li className="align-content">
                <p className="gold-underline">
                  <sl-icon name="envelope-open" className="icon"></sl-icon>{" "}
                  <a
                    target="_blank" rel="noreferrer"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=fox.hodge0@gmail.com"
                  >
                    fox.hodge0@gmail.com
                  </a>
                </p>
              </li>
              <li className="align-content">
                <p className="gold-underline">
                  <sl-icon name="github" className="icon"></sl-icon>{" "}
                  <a target="_blank" rel="noreferrer" href="https://github.com/HarrisonHodge">
                    HarrisonHodge
                  </a>
                </p>
              </li>
              <li className="align-content">
                <p className="gold-underline">
                  <sl-icon name="instagram" className="icon"></sl-icon>{" "}
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fox_hodge/">
                    fox_hodge
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="center-text">
            <p className="blue-text">Talk soon</p>
            <p className="cream-text">
              Thank you for taking the time to visit my page — it means a lot!
              Whether you have a question, want to collaborate on an exciting
              project, or feel like saying hello, I’d love to hear from you.
              Feel free to reach out via email, telephone, or check out my
              socials I’m always open to new opportunities, creative ideas and
              meaningful conversations. Thanks again for stopping by, it means a
              lot, and I look forward to connecting with you!
            </p>
          </div>
        </div>

        <br></br>

        <div id="resume" ref={resumeRef} className="col-1">
          <div className="blue-text center-text">
            Resume
            <hr></hr>
            <object
              data="Resume.docx.pdf"
              type="application/pdf"
              className="resume"
              height="1200px"
            >
              <a href="Resume.docx.pdf">resume.docx</a>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
