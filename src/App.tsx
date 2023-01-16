import "./style.css"
import Header from "./header";
export default function App() {
    return (
        <>
            <Header />
            <main>
                <div className="landing">
                    <div className="intro-text">
                        <h1>Hello there</h1>
                        My name is Mahmoud and I am a Programmer who specializes
                        in BackEnd development. I have been providing backend
                        services since 2020, building a reputation on quality
                        and reliability. I take pride in every job I perform, no
                        matter how big or small, and strive to exceed my
                        clients' expectations. I have an extensive portfolio
                        that showcases the variety of projects I've worked on.
                        Feel free to browse my work and contact me with any
                        questions. Thank you for your interest in my services.
                    </div>
                </div>
                <div className="features">
                    <div className="container">
                        <div className="feat">
                            <i className="fa-solid fa-crown feat-icon"></i>
                            <h3>Tell us about yourself</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="feat">
                            <i className="fa-solid fa-crown feat-icon"></i>
                            <h3>Tell us about yourself</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="feat">
                            <i className="fa-solid fa-crown feat-icon"></i>
                            <h3>Tell us about yourself</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="services" id="services">
                    <div className="container">
                        <h1 className="special-heading">Services</h1>
                        <p>That what i can do for you .</p>
                        <div className="services-wrapper">
                            <div className="services-content">
                                <div className="srv">
                                    <i className="fa-solid fa-crown srv-icon"></i>
                                    <div className="srv-content">
                                        <h3>Tell us about yourself</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="srv">
                                    <i className="fa-solid fa-crown srv-icon"></i>
                                    <div className="srv-content">
                                        <h3>Web Application Development</h3>
                                        <p>
                                            This includes developing custom web
                                            applications for businesses and
                                            organizations, build interactive
                                            user experiences, create engaging
                                            front-end user interfaces, and build
                                            software back-end technologies to
                                            support the web application.
                                        </p>
                                    </div>
                                </div>
                                <div className="srv">
                                    :
                                    <i className="fa-solid fa-crown srv-icon"></i>
                                    <div className="srv-content">
                                        <h3>Web Services Development</h3>
                                        <p>
                                            This involves creating a powerful
                                            set of web services that can help
                                            businesses and organizations
                                            interface with the web, mobile, and
                                            other digital devices.
                                        </p>
                                    </div>
                                </div>
                                <div className="srv">
                                    <i className="fa-solid fa-crown srv-icon"></i>
                                    <div className="srv-content">
                                        <h3>Tell us about yourself</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="image-srv">
                                <img src="./images/image.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="protofolio" id="protofolio">
                    <div className="container">
                        <h1 className="special-heading">Portfolio</h1>
                        <p>Some of my projects</p>
                        <div className="prot-content">
                            <div className="card">
                                <img src="./images/protofolio1.jpg" alt="" />
                                <div className="card-content">
                                    <h3>First project</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./images/protofolio2.jpg" alt="" />
                                <div className="card-content">
                                    <h3>First project</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./images/protofolio3.jpg" alt="" />
                                <div className="card-content">
                                    <h3>First project</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about" id="about">
                    <div className="container">
                        <h2 className="special-heading">About</h2>
                        <p>Less is more work</p>
                        <div className="about-content">
                            <div className="image">
                                <img src="images/about.jpg" alt="" />
                            </div>
                            <div className="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nihil nemo neque voluptate
                                    tempora velit cum non, fuga vitae architecto
                                    delectus sed maxime rerum impedit aliquam
                                    obcaecati, aut excepturi iusto laudantium!
                                </p>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Minus, sapiente. Velit
                                    iure exercitationem dolores nesciunt dolore.
                                    Eum officiis dolorum hic voluptate quaerat
                                    minima, similique inventore esse, alias, sed
                                    quo officia?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- start contact --> */}
                <div className="contact" id="contact">
                    <div className="container">
                        <h2 className="special-heading">Contact</h2>
                        <p>I just want to be friends</p>
                        <div className="contact-info">
                            <p className="contact-label">
                                Feel free to drop us a line at
                            </p>
                            <a
                                href="mailto:workemam546@gmail.com"
                                className="contact-link"
                            >
                                workemam546@gmail.com
                            </a>
                            <div className="contact-icons">
                                find us on social network
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End contact --> */}
            </main>
            {/* <!-- Start footer --> */}
            <footer>
                &copy; 2021 <span>2021</span> All rights reserved
            </footer>
            {/* <!-- End footer --> */}
        </>
    );
}
