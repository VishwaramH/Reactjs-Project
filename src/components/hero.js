import React from 'react';

class Hero extends React.Component {
    render() {
        return(
        <section id="hero">
        <div class="hero-container" data-aos="fade-up">
        <h1>Welcome to Serenity</h1>
        <h2>We are team of talanted designers making websites with Bootstrap</h2>
        <a href="#about" class="btn-get-started scrollto">Get Started</a>
        </div>
    </section>
        )
    }
}

export default Hero;