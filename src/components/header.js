import React from 'react';

class Header extends React.Component {
    render() {
        return(
        <>
        <header id="header" class="fixed-top">
        <div class="container d-flex">

        <div class="logo mr-auto">
            <h1 class="text-light"><a href="index.html">Serenity</a></h1>
            <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
        </div>

        <nav class="nav-menu d-none d-lg-block">
            <ul>
            <li class="active"><a href="index.html">Home</a></li>

            <li class="drop-down"><a href="#">About</a>
                <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="team.html">Team</a></li>

                <li class="drop-down"><a href="#">Drop Down 2</a>
                    <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                </li>
                </ul>
            </li>

            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>

            <li class="get-started"><a href="#get-started">Get Started</a></li>
            </ul>
        </nav>
        </div>
    </header>
    </>
    )
    }
}
export default Header;