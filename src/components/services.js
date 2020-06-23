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
                <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="icon-box" data-aos="fade-up">
                <div class="icon"><i class="las la-book" style={{color: "#e9bf06"}}></i></div>
                <h4 class="title"><a href="">Dolor Sitema</a></h4>
                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="icon-box">
                <div class="icon"><i class="las la-file-alt" style={{color: "#3fcdc7"}}></i></div>
                <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="icon-box">
                <div class="icon"><i class="las la-tachometer-alt" style={{color:"#41cf2e"}}></i></div>
                <h4 class="title"><a href="">Magni Dolores</a></h4>
                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box">
                <div class="icon"><i class="las la-globe-americas" style={{color: "#d6ff22"}}></i></div>
                <h4 class="title"><a href="">Nemo Enim</a></h4>
                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
            </div>
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box">
                <div class="icon"><i class="las la-clock" style={{color: "#4680ff"}}></i></div>
                <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
                <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div>
            </div>
            </div>

        </div>
        </section>

        )
    }
}
export default Services;