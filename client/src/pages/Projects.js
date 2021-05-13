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
              <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/freejonm/budgettracker"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    // src="assets/Images/employee-trk-demo.gif"
                    alt=""
                  />{' '}
                </a>
                <div className="card-body">
                  <h2 className="card-header">Budget Tracker</h2>
                  <p className="card-text">
                   
                  {' '}
                  An app that allows users to keep track of spending/budgets whether offline or online Deployed to heroku{' '}
                    <a
                      href="https://budget-tracker87.herokuapp.com/"
                      className="text-secondary"
                    >
                      here
                    </a>
                    .
        
                  </p>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/chrisrisseler/project2"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    // src="assets/Images/employee-trk-demo.gif"
                    alt=""
                  />{' '}
                </a>
                <div className="card-body">
                  <h2 className="card-header">Media Munch</h2>
                  <p className="card-text">
                   
                  {' '}
                  An app that uses OMDB and ComicsVine APIs to allow users to save reviews of multiple forms of media that they consume. Deployed to heroku{' '}
                    <a
                      href="https://media-munch.herokuapp.com/"
                      className="text-secondary"
                    >
                      here
                    </a>
                    .
        
                  </p>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/stanleymcoy/team5-project1"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    // src="assets/Images/employee-trk-demo.gif"
                    alt=""
                  />{' '}
                </a>
                <div className="card-body">
                  <h2 className="card-header">Playcation</h2>
                  <p className="card-text">
                  An app that uses Open Weather Map, Pixabay, and LastFM APIs to allow users to take virtual vacations to the location of their choice.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/freejonm/employeedirectory"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    // src="assets/Images/employee-trk-demo.gif"
                    alt=""
                  />{' '}
                </a>
                <div className="card-body">
                  <h2 className="card-header">Employee Directory</h2>
                  <p className="card-text">
                   
                  {' '}
                  A React app that allows users to view a list of employees/users and filter or sort that list by last name.
                  </p>
                </div>
              </div>
            </div>
            </div>
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
