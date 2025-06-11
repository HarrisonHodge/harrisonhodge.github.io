import { useRef, useState, useEffect } from "react";
import "./App.css";
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, PieController } from "chart.js";

Chart.register(DoughnutController, PieController, ArcElement, Tooltip, Legend);

function DoughnutCard() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          "React",
          "Vue",
          "Angular",
          "Element Plus",
          "Shoelace",
          "Material UI",
          "Figma",
          "Docker",
          "Git",
        ],
        datasets: [
          {
            label: "Exposure",
            data: [100, 100, 75, 100, 100, 75, 50, 50, 100],
            backgroundColor: [
              "#3a506bff",
              "#023e8aff",
              "#0077b6ff",
              "#0096c7ff",
              "#00b4d8ff",
              "#48cae4ff",
              "#90e0efff",
              "#ade8f4ff",
              "#caf0f8ff",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            position: "right",
            labels: {
              color: "#fff",
              boxWidth: 40,
              boxHeight: 40,
              font: {
                size: 24,
              },
            },
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#222",
            titleFont: {
              size: 18,
              weight: "bold",
            },
            bodyFont: {
              size: 16,
            },
            padding: 12,
            cornerRadius: 8,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="order-6 w-20 h-40">
      <div className="w-100 h-100">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

function PieCard() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["JS", "Java", "C#", "SQL", "Python", "HTML", "C++", "Go"],
        datasets: [
          {
            label: "Exposure",
            data: [100, 50, 100, 25, 75, 100, 25, 50],
            backgroundColor: [
              "#3a506bff",
              "#023e8aff",
              "#0077b6ff",
              "#0096c7ff",
              "#00b4d8ff",
              "#48cae4ff",
              "#90e0efff",
              "#ade8f4ff",
              "#caf0f8ff",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            position: "right",
            labels: {
              color: "#fff",
              boxWidth: 40,
              boxHeight: 40,
              font: {
                size: 24,
              },
            },
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#222",
            titleFont: {
              size: 18,
              weight: "bold",
            },
            bodyFont: {
              size: 16,
            },
            padding: 12,
            cornerRadius: 8,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="order-3 w-20 h-40">
      <div className="w-100 h-100">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

function App() {
  const [xpText, setXPText] = useState("");
  const [xpTitle, setXPTitle] = useState("");
  const [xp, setXP] = useState("BWP");
  const tabSwitch = (target) => {
    setXP(target);
    if (target === "BWP") {
      setXPTitle("Barry-Wehmiller Papersystems");
      setXPText(
        "Engineered multiple new and old HMI's across a diverse set of platforms and deployed updates based on customer requirements. Collaborated with senior engineers and various teams in order to provide efficient and quality development for projects and timely release of aftermarket options for current and future machines. Developed new innovative software targeted for customer use to increase production, minimize downtime, and maximize profit."
      );
    }
    if (target === "TW") {
      setXPTitle("TechWorks Foundry");
      setXPText(
        "Acquired new leadership skills while developing applications to improve and automate the company’s daily tasks and improve efficiency. Researched and developed solutions to optimize production of multiple in-house Arduino sensors available for purchasers. Developed software to visualize live sensors to help with understanding and communicating relayed data."
      );
    }
    if (target === "UNI") {
      setXPTitle("University of Northern Iowa");
      setXPText(
        "Alum and held an IT specialist position where I created campus website banners hosting announcements about upcoming technology. Worked independently to modernize the university's wide range of online help tools and eLearning Suite connecting campus to third-party applications like Blackboard, Panopto, and many more. Partnered with university system administrators to improve and formalize the website used by thousands of students and faculty."
      );
    }
  };

  const [infoText, setInfoText] = useState("");
  const [infoTitle, setInfoTitle] = useState("");
  const [info, setInfo] = useState("");
  const listSwitch = (target) => {
    setInfo(target);
    if (target === "aboutMe") {
      if (infoTitle === "Hey, I'm Harrison") return; // already on this tab
      setInfoTitle("Hey, I'm Harrison");
      setInfoText(
        "I have a passion for software and design. I've been fascinated with computers all my life and have been developing and modifying applications for years. Throughout my career I've worked in many rewarding positions such as the University of Northern Iowa, a metal casting foundry, and I am currently employed at a globally known paper machining company. My main focus being to engineer the front end and back end of human machine interfaces for current generation, next generation, and aftermarket currogators and sheeters."
      );
    }
    if (target === "navigator") {
      setInfoTitle("Navigator");
      setInfoText(
        `My most recent BWP endeavor consisting of combining the older systems into one robust React app interface from the ground up, deployed with docker, along with a mobile view version. Data management was handled through various tools like SignalR, Rest APIs, a homebrewed status controller called Radar, and SQL. I oversaw the entire project from the first line of code to the last customer handshake and during production led weekly catch ups and planned monthly sprints with a skilled and capable team across the globe.`
      );
    }
    if (target === "replay") {
      setInfoTitle("Replay");
      setInfoText(
        "After the success of Falcon, I moved on to an aftermarket development team to help design the front end of a live machine survellience and video playback web page. I worked with many technology platforms such as Synology, Grafana, Chart.js and more, to create a flexible multi-feed live video viewing source for observing real-time machine and production data with historical scrubbing capability, I also helped guide summer interns on the team to find best practices in planning for the future and scalability."
      );
    }
    if (target === "falcon") {
      setInfoTitle("Falcon");
      setInfoText(
        "The first project I worked on at BW. A Vue framework HMI, deployed with Electron, controlling a sheet runner front to back paired with a homebrewed server for handing tag data. I provided feature support to a set of 10 machines based in Indonesia over the course of many months culminating in a noticable performance enhancement. In addition, I was also responsible for many on-demand calibrations, long-standing bug fixes, and refactors to the legacy codebase."
      );
    }
    if (target === "econ") {
      setInfoTitle("Econ");
      setInfoText(
        "Another legacy HMI, written in C#, I provided support to while also handling the improvement updates for Falcon. I was tasked independetly to build the aftermarket options that were sold to customers requiring modifications to existing pages and the creation of entirely new operator controls. Upon completion and rigorous testing to make sure the Beckhoff TwinCat PLC software worked in conjunction updates were deployed to customers."
      );
    }
    if (target === "etc") {
      setInfoTitle("Etc.");
      setInfoText(
        "Various projects that are not big enough to get their own spotlight but certainly helped in furthering my knowledge of the coding space. These include a JS browser bingo game for endless RNG fun and a color palette generator. I also built (half) a multiplayer FPS game using the open source engine Godot, where the players take on a cat, or mouse, role and must evade, or catch, the other while manuevering through a city dense with NPCs, vehicles, and obstacles."
      );
    }

    const title = document.getElementById("title");
    const text = document.getElementById("text");

    title.classList.remove("fade");
    text.classList.remove("fade");

    requestAnimationFrame(() => {
      title.classList.add("fade");
      text.classList.add("fade");
    });
  };

  useEffect(() => {
    listSwitch("aboutMe");
    tabSwitch("BWP"); // eslint-disable-next-line
  }, []);

  return (
    <div className="app fade mobile-row">
      <div className="flip-card w-20 h-100">
        <div className="card-inner">
          <div className="flip-card-front">
            <div className="e-card playing">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <div>
                  <p className="my-name">Harrison Hodge</p>
                  <br></br>
                  <br></br>
                  <div className="title">Software</div>
                  <div className="title">Engineer</div>
                </div>
                <p>
                  <sl-icon
                    className="icon reg-icon"
                    aria-hidden="true"
                    library="default"
                    name="display"
                  ></sl-icon>
                </p>
                <div>
                  <p>
                    <sl-icon
                      className="icon"
                      aria-hidden="true"
                      library="default"
                      name="geo-alt"
                    ></sl-icon>{" "}
                    Madison, WI
                  </p>
                  <p>
                    <sl-icon
                      className="icon"
                      aria-hidden="true"
                      library="default"
                      name="telephone"
                    ></sl-icon>{" "}
                    309-235-8636
                  </p>
                  <p>
                    <sl-icon
                      className="icon"
                      aria-hidden="true"
                      library="default"
                      name="envelope-open"
                    ></sl-icon>{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=fox.hodge0@gmail.com"
                    >
                      fox.hodge0@gmail.com
                    </a>
                  </p>
                  <p>
                    <sl-icon
                      className="icon"
                      aria-hidden="true"
                      library="default"
                      name="github"
                    ></sl-icon>{" "}
                    <a target="_blank" rel="noreferrer" href="https://github.com/HarrisonHodge">
                      HarrisonHodge
                    </a>
                  </p>
                  <p>
                    <sl-icon
                      className="icon"
                      aria-hidden="true"
                      library="default"
                      name="instagram"
                    ></sl-icon>{" "}
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fox_hodge/">
                      fox_hodge
                    </a>
                  </p>
                  <p>
                    <sl-icon
                      className="icon"
                      aria-hidden="true"
                      library="default"
                      name="file-text"
                    ></sl-icon>{" "}
                    <a target="_blank" rel="noreferrer" href="Resume.docx.pdf">
                      resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="flip-card w-20 h-40 order-1 tabs" onMouseLeave={() => listSwitch("aboutMe")}>
          <div className="flip-card-inner ">
            <div className="flip-card-front between center">
              <img className="mobile-pic" src="/falcon.jpeg" alt=""></img>
              <p className="title ">
                <sl-icon
                  className="icon"
                  aria-hidden="true"
                  library="default"
                  name="terminal"
                ></sl-icon>{" "}
                Projects
              </p>
              <div></div>
            </div>
            <div className="flip-card-back">
              <div className="container">
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="radio-1"
                    name="tabs"
                    onChange={() => listSwitch("navigator")}
                    checked={info === "navigator"}
                  />
                  <label className="radio-label" htmlFor="radio-1">
                    <div className="radio-circle"></div>
                    <span className="radio-text">Navigator</span>
                  </label>
                  <input
                    type="radio"
                    id="radio-2"
                    name="tabs"
                    onChange={() => listSwitch("replay")}
                    checked={info === "replay"}
                  />
                  <label className="radio-label" htmlFor="radio-2">
                    <div className="radio-circle"></div>
                    <span className="radio-text">Replay</span>
                  </label>
                  <input
                    type="radio"
                    id="radio-3"
                    name="tabs"
                    onChange={() => listSwitch("falcon")}
                    checked={info === "falcon"}
                  />
                  <label className="radio-label" htmlFor="radio-3">
                    <div className="radio-circle"></div>
                    <span className="radio-text">Falcon</span>
                  </label>
                  <input
                    type="radio"
                    id="radio-4"
                    name="tabs"
                    onChange={() => listSwitch("econ")}
                    checked={info === "econ"}
                  />
                  <label className="radio-label" htmlFor="radio-4">
                    <div className="radio-circle"></div>
                    <span className="radio-text">Econ</span>
                  </label>
                  <input
                    type="radio"
                    id="radio-5"
                    name="tabs"
                    onChange={() => listSwitch("etc")}
                    checked={info === "etc"}
                  />
                  <label className="radio-label" htmlFor="radio-5">
                    <div className="radio-circle"></div>
                    <span className="radio-text">Ect.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-card w-60 h-40 order-2">
          <div className="card-inner">
            <div className="flip-card-front">
              <p id="title" className="big-title">
                {infoTitle}
              </p>
              <div id="text" className="main-text">
                {infoText}
              </div>
            </div>
          </div>
        </div>

        <div className="image-card w-60 h-40 order-4">
          <div className="image-card-inner">
            <div className="image-card-front between">
              <img src="/navigator.jpeg" alt="" />
              <p className="title">
                <sl-icon
                  className="icon"
                  aria-hidden="true"
                  library="default"
                  name="graph-up-arrow"
                ></sl-icon>{" "}
                Experience
              </p>
              <div></div>
            </div>
            <div className="image-card-back">
              <div className="radio-inputs">
                <label className="radio">
                  <input
                    type="radio"
                    name="radio"
                    onChange={() => tabSwitch("BWP")}
                    checked={xp === "BWP"}
                  />
                  <span className="name">BWP</span>
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="radio"
                    onChange={() => tabSwitch("TW")}
                    checked={xp === "TW"}
                  />
                  <span className="name">TechWorks</span>
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="radio"
                    onChange={() => tabSwitch("UNI")}
                    checked={xp === "UNI"}
                  />
                  <span className="name">UNI</span>
                </label>
              </div>
              <div className="between h-80">
                <div className="title">{xpTitle}</div>
                <div className="text-card">
                  <div className="text">{xpText}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-card w-20 h-40 order-5">
          <div className="flip-card-inner">
            <div className="flip-card-front between">
              <img src="/uni.png" alt="" className="" />
              <p className="title">
                {" "}
                <sl-icon
                  className="icon"
                  aria-hidden="true"
                  library="default"
                  name="mortarboard"
                ></sl-icon>{" "}
                Education
              </p>
              <div></div>
            </div>
            <div className="flip-card-back">
              <p className="title">UNIVERSITY OF NORTHERN IOWA</p>
              <div className="sub-text">
                <div>2019-2023</div>
                <div>Computer Science B.A.</div>
                <div>Interactive Digital Studies</div>
              </div>
              <div className="sub-text">
                <div>Kappa Sigma Executive Committee</div>
                <div>Reoccurring Dean’s List recipient</div>
              </div>
            </div>
          </div>
        </div>

        <PieCard />

        <DoughnutCard />
      </div>
    </div>
  );
}

export default App;
