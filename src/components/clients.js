import React from 'react';

class Clients extends React.Component {
    render() {
        return(
            <div class="row justify-content-end">
            <div class="col-lg-11">
              <div class="row justify-content-end">

                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div class="count-box py-5">
                    <i class="icofont-simple-smile"></i>
                    <span data-toggle="counter-up">65</span>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div class="count-box py-5">
                    <i class="icofont-document-folder"></i>
                    <span data-toggle="counter-up">85</span>
                    <p>Projects</p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div class="count-box pb-5 pt-0 pt-lg-5">
                    <i class="icofont-clock-time"></i>
                    <span data-toggle="counter-up">12</span>
                    <p>Years of experience</p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div class="count-box pb-5 pt-0 pt-lg-5">
                    <i class="icofont-award"></i>
                    <span data-toggle="counter-up">15</span>
                    <p>Awards</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        )
    }
}

export default Clients;