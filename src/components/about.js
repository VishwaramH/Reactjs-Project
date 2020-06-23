import React from 'react';

class About extends React.Component {
    render() {
        return(
        <>
        <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="row">

            <div class="col-lg-6 video-box align-self-baseline">
              <img src="assets/img/about.jpg" class="img-fluid" alt="" />
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
            </div>

            <div class="col-lg-6 pt-3 pt-lg-0 content">
              <h3>Don't let others to destroy your inner beauty of peace</h3>
              <p class="font-italic">
                Serenity brings peace and calm
              </p>
              <ul>
                <li><i class="bx bx-check-double"></i>Be calm and polite</li>
                <li><i class="bx bx-check-double"></i>Live and let live</li>
                <li><i class="bx bx-check-double"></i>Being friendly to everyone brings you happiness</li>
                <li><i class="bx bx-check-double"></i>Life is an adventure with many ups and downs</li>
              </ul>
              <p>
                Meditation makes your mind calm.
              </p>
            </div>

          </div>

        </div>
        </section>
        </>
    )
    }
}

export default About;