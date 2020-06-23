import React from 'react';

class Footer extends React.Component {
    render() {
        return(
        <footer id="footer">
        <div class="footer-top">
        <div class="container">
            <div class="row">

            <div class="col-lg-3 col-md-6 footer-info">
                <h3>Serenity</h3>
                <p>Serenity opens door to inspiration and creativity</p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
                </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
                </p>

                <div class="social-links">
                <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
                <a href="#" class="google-plus"><i class="icofont-skype"></i></a>
                <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
                </div>

            </div>

            <div class="col-lg-3 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Serenity is the result of stillness and the garment of silence.</p>
                <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>
            </div>

            </div>
        </div>
        </div>

        <div class="container">
        <div class="copyright">
            &copy; Copyright <strong><span>Serenity</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
            <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
        </div>
    </footer>

        )
    }
}

export default Footer;