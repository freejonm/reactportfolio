import React from 'react';
import Jumbotron from '../components/Jumbotron';
const Projects = () => {
  return (
    <div>
      <main>
        <Jumbotron  />
        <section className="container-fluid gif-section">
          <div className="row mt-0 mb-0">
          <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/freejonm/mentor.me"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    // src="assets/Images/subscriptionTracker.gif"
                    alt=""
                    
                  />
                </a>
                <div className="card-body">
                  <h2 className="card-header">Mentor Me</h2>
                  <p className="card-text">
                    {' '}
                    A full-stack app that enables new developers chaning careers via coding bootcamps to search for and connect with mentors. Deployed to heroku{' '}
                    <a
                      href="https://mentorme3000.herokuapp.com/"
                      className="text-secondary"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
                <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/freejonm/allthemovies"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    // src="assets/Images/eat-da-burger-demo.gif"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h2 className="card-header">All the movies</h2>
                  <p className="card-text">
                    Uses OMDB API to allow users to save reviews of movies they've watched. 
                  </p>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
        </section>
      </main>
    </div>
   
  );
};

export default Projects;
