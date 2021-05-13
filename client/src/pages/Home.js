import React from 'react';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
  return (
    <div>
      <main>
        <Jumbotron imageBG="url(/assets/Images/IMG-9675.jpg)"/>

        <div className="container-fluid mt-0 mb-0">
          <div className="row">
            <div className="col-lg-4 panel-pad-10">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h2 className="display-4 text-center"> Bio </h2>
                  <p>
                    {' '}
                    Full stack web developer and Duke University Ph.D. with experience in research and management. Currently completing a certificate in full stack development from the University of North Carolina-Chapel Hill, with skills in HTML, CSS, JavaScript, JQuery, AJAX, node.JS, Express, MySQL, MongoDB, React, and Ruby. Current position managing the research pillar of an academic unit, where I've redesigned grant-awarding and collaboration-fostering processes, led multiple interdisciplinary research teams, and taught courses on the past and present uses of energy and their impact on society.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 panel-pad-10">
              <div className="panel panel-default">
                <h2 className="display-4 text-center">Links</h2>
                <a
                  className="btn btn-secondary btn-lg btn-block"
                  href="portfolio.html"
                  role="button"
                >
                  Projects
                </a>
                <a
                  className="btn btn-secondary btn-lg btn-block"
                  href="contact.html"
                  role="button"
                >
                  Contact Me
                </a>
                <a
                  className="btn btn-secondary btn-lg btn-block"
                  href="https://github.com/freejonm"
                  role="button"
                >
                  Github
                </a>
                <a
                  className="btn btn-secondary btn-lg btn-block"
                  href="www.linkedin.com/in/jonathon-free"
                  role="button"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn-secondary btn-lg btn-block"
                  href="assets/JonathonFree.pdf"
                  role="button"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="col-lg-4 panel-pad-10">
              <div className="panel panel-default">
                <h2 className="display-4 text-center">Skillset</h2>
                <div className="table-responsive">
                  <table className="table table-custom">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td>HTML5</td>
                        <td>JavaScript</td>
                        <td>React</td>
                      </tr>
                      <tr>
                        <td>CSS3</td>
                        <td>MongoDB</td>
                        <td>Express</td>
                      </tr>
                      <tr>
                        <td>Bootstrap</td>
                        <td>Tailwind</td>
                        <td>Material-ui</td>
                      </tr>
                      <tr> 
                        <td>
                          Node JS
                        </td>
                        <td>mySQL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;