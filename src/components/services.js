import React from 'react';

class Services extends React.Component {

    render() {
        return(
        <section id="services" class="services  section-bg ">
        <div class="container">

            <div class="section-title pt-5" data-aos="fade-up">
            <h2>Our Services</h2>
            </div>

            <div class="row">
            <div class="col-md-6">
                <div class="icon-box" data-aos="fade-up">
                <div class="icon"><i class="las la-basketball-ball" style={{color : "#ff689b"}}></i></div>
                <h4 class="title"><a href="">Beauty of Life</a></h4>
                <p class="description">Life is a combination of joy and sorrows. We explain the beauty of it</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="icon-box" data-aos="fade-up">
                <div class="icon"><i class="las la-book" style={{color: "#e9bf06"}}></i></div>
                <h4 class="title"><a href="">Peace</a></h4>
                <p class="description">Be calm and search for your inner peace</p>
                </div>
            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="icon-box">
                <div class="icon"><i class="las la-file-alt" style={{color: "#3fcdc7"}}></i></div>
                <h4 class="title"><a href="">Health Activities</a></h4>
                <p class="description">Health is wealth. Being healthy brings your inner happiness.</p>
                </div>
            </div>
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="icon-box">
                <div class="icon"><i class="las la-tachometer-alt" style={{color:"#41cf2e"}}></i></div>
                <h4 class="title"><a href="">Sports</a></h4>
                <p class="description">Participate in sports in a different way</p>
                </div>
            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box">
                <div class="icon"><i class="las la-globe-americas" style={{color: "#d6ff22"}}></i></div>
                <h4 class="title"><a href="">Food</a></h4>
                <p class="description">We provide you the food in a healthiest manner</p>
                </div>
            </div>
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box">
                <div class="icon"><i class="las la-clock" style={{color: "#4680ff"}}></i></div>
                <h4 class="title"><a href="">Brainstorm</a></h4>
                <p class="description">Making your brain to think deeper brightens your IQ level</p>
                </div>
            </div>
            </div>

        </div>
        </section>

        )
    }
}
export default Services;