import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../assets/vendor/animate/animate.min.css'
import '../assets/vendor/aos/aos.css'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'

import '../assets/vendor/glightbox/css/glightbox.min.css'
import '../assets/vendor/swiper/swiper-bundle.min.css'
import '../assets/css/animate.css'
import '../assets/css/all.min.css'

import '../assets/css/style.css'

/*import '../assets/js/main.js'
import '../assets/js/wow.min.js'*/

import hero from '../assets/img/hero-img.png'



export class Home extends Component {
  static displayName = Home.name;

    componentDidMount() {
        // or simply just AOS.init();
        AOS.init();
    }

  render() {
    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                <div className="container-fluid">

                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-11 d-flex align-items-center justify-content-between">
                            <h1 className="logo">
                                {/*<img src="./assets/img/logo.png">*/}
                                <a href="index.html" id="header11">  B.I.P SOFTWARE</a>
                            </h1>
                            {/* Uncomment below if you prefer to use an image logo */}
                            {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}

                            <nav id="navbar" className="navbar">
                                <ul>
                                    <li label="Home"></li>
                                    <a className="nav-link scrollto active lang" key="home" href="#hero" name="Home">HOME</a>
                                    <li><a className="nav-link scrollto lang" key="about" href="#about">ABOUT</a></li>
                                    <li><a className="nav-link scrollto lang" key="services" href="#services">SERVICES</a></li>
                                    <li><a className="nav-link scrollto lang " key="project" href="#portfolio">PROJECT</a></li>
                                    <li><a className="nav-link scrollto lang" key="contact" href="#contact">CONTACT</a></li>
                                    {/*{ <li>
                                        <div className="switch">
                                            <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" />
                                            <label htmlFor="language-toggle"></label>
                                                <span className="on">VN</span>
                                                <span className="off">JP</span>
                                        </div>
                                    </li>}*/}
                                    <li style={{ padding: '0px 0 0 25px' }} >
                                        <button className="translate" id="en"></button>
                                        {/*{<button className="translate" id="vn"></button>}*/}
                                        <button className="translate" id="jp"></button>
                                    </li>
                                </ul>
                                <i className="bi bi-list mobile-nav-toggle"></i>
                            </nav>{/* .navbar */}
                        </div>
                    </div>

                </div>
            </header>
            {/* End Header */}
            {/*<section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">


                                <div className="carousel-item active">
                                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                                        <h1>Better Solutions For Your Business</h1>
                                        <h2>We are team of talented designers making websites with Bootstrap</h2>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                                        <img src="assets/img/hero-img.png" className="img-fluid animated" alt="">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                                        <h1>hihi</h1>
                                        <h2>We are team of talented designers making websites with Bootstrap</h2>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                                        <img src="assets/img/hero-img.png" className="img-fluid animated" alt="">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                                        <h1>hehe</h1>
                                        <h2>We are team of talented designers making websites with Bootstrap</h2>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                                        <img src="assets/img/hero-img.png" className="img-fluid animated" alt="">
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                </div>
            </section>*/}
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    
                    <div className="row">
                        
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1 className="" >Better Solutions For Your Business</h1>
                            
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src={require("../assets/img/hero-img.png")} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
                




            </section>
            {/* End Hero */}
            {/* ======= hero Section ======= */}
            {/*<section id="hero">
                <div className="hero-container">
                    <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

                        <ol id="hero-carousel-indicators" className="carousel-indicators"></ol>

                        <div className="carousel-inner " role="listbox">

                            <div className="carousel-item active" style={{background-image: 'url(assets/img/hero-carousel/1.jpg)'}}>
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown  lang " key="document management">Documemnt Management</h2>
                                        <div className="slide-info-box slide-info">
                                            <h3 className="animate__animated animate__fadeInUp slide-info-box-header">Works with Mobile, tablets and Desktop.</h3>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Easy manage document online with low cost.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">No space needed to keep document.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Easy to search document online.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Become valuable Information property.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">High security.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item" style="background-image: url(assets/img/hero-carousel/2.jpg)">
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown lang" key="smartphone apps">Smartphone apps</h2>
                                        <div className="slide-info-box-2 slide-info">
                                            <h3 className="animate__animated animate__fadeInUp slide-info-box-header">Broad area of expertise.</h3>
                                            <p className="animate__animated animate__fadeInUp arrow_link">IPhone/iPad Applications Development.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Android Applications Development.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Symbian Applications Development.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Windows Phone Applications Development.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">HTML5, Mobile Web development.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item" style="background-image: url(assets/img/hero-carousel/3.jpg)">
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown">Forex Exchange</h2>
                                        <div className="slide-info-box-2 slide-info">
                                            <h3 className="animate__animated animate__fadeInUp slide-info-box-header">We have trading platforms for.</h3>
                                            <p className="animate__animated animate__fadeInUp arrow_link">IPhone.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Android.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Blackberry.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Tablets.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Webtrader.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">.. abd more</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item " style="background-image: url(assets/img/hero-carousel/4.jpg)">
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown">EC-Site</h2>
                                        <div className="slide-info-box-2 slide-info">
                                            <h3 className="animate__animated animate__fadeInUp slide-info-box-header">Powerful Search Capabilities.</h3>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Unlimited Categories, Unlimited Products.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Multiple Payment & Shipping Options.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Multi-Language, Multi-Currency.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Multiple Responsive Templates.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">Webtrader.</p>
                                            <p className="animate__animated animate__fadeInUp arrow_link">.. abd more</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                        </a>

                        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                        </a>

                    </div>

                </div>
            </section>*/}
            {/* End Hero Section */}

            <main id="main">
                {/* ======= About Us Section ======= */}
                <section id="about">
                    <div className="container" data-aos="fade-up">

                        <header className="section-header">
                            <h3 className="lang" key="aboutus">About Us</h3>
                            <div id="div1"></div>

                            <p style={{ textAlign: 'left' }} >
                                We, BIP Vietnam Limited Company, having our office in Hanoi Vietnam, is a software development company providing information technology solutions in Vietnam in the fields of finance, and business management.
                            </p>
                        </header>

                        <div className="row about-cols">

                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="about-col">
                                    <div className="img">
                                        <img src={require("../assets/img/about-mission.jpg")}  alt="" className="img-fluid" />
                                        <div className="icon"><i className="bi bi-bar-chart"></i></div>
                                    </div>
                                    <h2 className="title"><a href="#">Our Mission</a></h2>
                                    <p>
                                        We always create the information technology products and advanced professional ready to provide your company solutions in line with management’s business model business.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="about-col">
                                    <div className="img">
                                        <img src={require("../assets/img/about-plan.jpg")} alt="" className="img-fluid" />
                                        <div className="icon"><i className="bi bi-brightness-high"></i></div>
                                    </div>
                                    <h2 className="title"><a href="#">Our Plan</a></h2>
                                    <p>
                                        BIP VIETNAM becomes an industry leader in providing professional services in many areas of expertise including Forex Trading Platforms, Automated Execution Systems, Document Management and Smartphones
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="about-col">
                                    <div className="img">
                                        <img src={require("../assets/img/about-vision.jpg")} alt="" className="img-fluid" />
                                        <div className="icon"><i className="bi bi-calendar4-week"></i></div>
                                    </div>
                                    <h2 className="title"><a href="#">Our Vision</a></h2>
                                    <p>
                                        We are committed to providing customers with the best and most professional products and services, optimizing management, bringing maximum benefits to customers' businesses.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* End About Us Section */}

                {/* ======= Services Section ======= */}
                <section id="services" className="elementor elementor-section elementor-top-section elementor-element elementor-element-d157c4c elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-element_type="section">
                    <header className="section-header wow fadeInUp">
                        <h3 className="lang" key="servicestitle">Services</h3>
                        <p>
                            We offer a wide range of Services that can meet a lot of customers's requirements.
                        </p>
                    </header>

                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4c833b3" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                {/*<div className="elementor-element elementor-element-58a96d0 elementor-absolute iteck-image-animation-none elementor-widget elementor-widget-iteck-image" data-id="58a96d0" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="iteck-image.default">
                                    <div className="elementor-widget-container">
                                        <img width="1478" height="15" src="https://iteck.smartinnovates.com/app/wp-content/uploads/sites/5/2022/04/about_s4_wave.png" className="attachment-full size-full lazyloaded" alt="" data-ll-status="loaded"><noscript><img width="1478" height="15" src="https://iteck.smartinnovates.com/app/wp-content/uploads/sites/5/2022/04/about_s4_wave.png" className="attachment-full size-full" alt="" /></noscript>
                                    </div>
                                </div>*/}
                                <section className="elementor-section elementor-inner-section elementor-element elementor-element-9ff0a0d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f3212eb" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-6c781da iteck-image-animation-none elementor-widget elementor-widget-iteck-image" data-element_type="widget" data-widget_type="iteck-image.default">
                                                    <div className="elementor-widget-container">
                                                        <img width="663" height="474" src={require("../assets/img/ipad.png")} className="attachment-full size-full lazyloaded" alt="" data-ll-status="loaded" /><noscript><img width="663" height="474" src="https://iteck.smartinnovates.com/app/wp-content/uploads/sites/5/2022/04/ipad.png" className="attachment-full size-full" alt="" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2cda748" data-id="2cda748" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-ef999cd elementor-widget__width-auto elementor-widget elementor-widget-iteck-heading1" data-id="ef999cd" data-element_type="widget" data-widget_type="iteck-heading.default">
                                                    <div className="elementor-widget-container">
                                                        <h2 className="iteck-heading">Notero - Easy Notes App</h2>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-8af4820 elementor-widget elementor-widget-iteck-heading2" data-id="8af4820" data-element_type="widget" data-widget_type="iteck-heading.default">
                                                    <div className="elementor-widget-container">
                                                        <h2 className="iteck-heading iteck-additional-color">The Notero For <span>Creatives</span></h2>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-bc14191 elementor-widget elementor-widget-iteck-heading3" data-id="bc14191" data-element_type="widget" data-widget_type="iteck-heading.default">
                                                    <div className="elementor-widget-container">
                                                        <p className="iteck-heading">
                                                            Stay focused and productive with a clean and clutter-free note
                                                            space. The flexible ways to organize your notes: hashtags, nested notebooks, pinning notes to the top of the note list, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-a6d9f55 elementor-view-stacked elementor-position-left elementor-shape-circle iteck-icon-box-vertical-align-top elementor-widget elementor-widget-iteck-icon-box" data-id="a6d9f55" data-element_type="widget" data-widget_type="iteck-icon-box.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="iteck-icon-box position-left elementor-icon-box-wrapper">
                                                            <div className="elementor-icon-box-icon">
                                                                <span className="elementor-icon elementor-animation-">
                                                                    <i aria-hidden="true" className="fas fa-tag"></i>
                                                                </span>
                                                            </div>
                                                            <div className="elementor-icon-box-content">
                                                                <h6 className="elementor-icon-box-title">
                                                                    <span>
                                                                        Filtering notes using matched keywords
                                                                    </span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-f5a19fd elementor-view-stacked elementor-position-left elementor-shape-circle iteck-icon-box-vertical-align-top elementor-widget elementor-widget-iteck-icon-box" data-id="f5a19fd" data-element_type="widget" data-widget_type="iteck-icon-box.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="iteck-icon-box position-left elementor-icon-box-wrapper">
                                                            <div className="elementor-icon-box-icon">
                                                                <span className="elementor-icon elementor-animation-">
                                                                    <i aria-hidden="true" className="fas fa-sync"></i>
                                                                </span>
                                                            </div>
                                                            <div className="elementor-icon-box-content">
                                                                <h6 className="elementor-icon-box-title">
                                                                    <span>
                                                                        Automatically sync in real time
                                                                    </span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-15e9f4f elementor-view-stacked elementor-position-left elementor-shape-circle iteck-icon-box-vertical-align-top elementor-widget elementor-widget-iteck-icon-box" data-id="15e9f4f" data-element_type="widget" data-widget_type="iteck-icon-box.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="iteck-icon-box position-left elementor-icon-box-wrapper">
                                                            <div className="elementor-icon-box-icon">
                                                                <span className="elementor-icon elementor-animation-">
                                                                    <i aria-hidden="true" className="fas fa-text-width"></i>
                                                                </span>
                                                            </div>
                                                            <div className="elementor-icon-box-content">
                                                                <h6 className="elementor-icon-box-title">
                                                                    <span>
                                                                        Complete note editor with rich text options
                                                                    </span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-36f1e3f elementor-widget__width-initial elementor-align-left elementor-widget elementor-widget-iteck-button" data-id="36f1e3f" data-element_type="widget" data-widget_type="iteck-button.default">
                                                    <div className="elementor-widget-container">

                                                        <a href="#" className="iteck-button  ">
                                                            <span className="iteck-button-content-wrapper">
                                                                <span className="iteck-button-text">
                                                                    Free Register
                                                                </span>
                                                            </span>

                                                        </a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="elementor-element elementor-element-4b0af7f elementor-widget__width-initial elementor-absolute iteck-image-animation-none elementor-widget elementor-widget-iteck-image" data-id="4b0af7f" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="iteck-image.default">
                                    <div className="elementor-widget-container">
                                        <img width="595" height="871" src="https://iteck.smartinnovates.com/app/wp-content/uploads/sites/5/2022/04/about_s4_lines.png" className="attachment-full size-full lazyloaded" alt="" data-ll-status="loaded" /><noscript><img width="595" height="871" src="https://iteck.smartinnovates.com/app/wp-content/uploads/sites/5/2022/04/about_s4_lines.png" className="attachment-full size-full" alt="" /></noscript>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-e1b23ee iteck-image-animation-rotate elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-iteck-image" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="iteck-image.default">
                                    <div className="elementor-widget-container">
                                        <img width="644" height="573" src={require("../assets/img/about_s4_bubble.png")} className="attachment-full size-full lazyloaded" alt="" data-ll-status="loaded" /><noscript><img width="644" height="573" src="https://iteck.smartinnovates.com/app/wp-content/uploads/sites/5/2022/04/about_s4_bubble.png" className="attachment-full size-full" alt="" /></noscript>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4aad5ad" data-id="4aad5ad" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <section className="elementor-section elementor-inner-section elementor-element elementor-element-463468d elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="463468d" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6181451" data-id="6181451" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element  elementor-widget__width-auto elementor-widget elementor-widget-iteck-heading1">
                                                    <div className="elementor-widget-container">
                                                        <h2 className="iteck-heading note_title">Better Note Management</h2>
                                                    </div>
                                                </div>
                                                <div className="elementor-element   elementor-widget elementor-widget-iteck-heading2">
                                                    <div className="elementor-widget-container">
                                                        <h2 className="iteck-heading iteck-additional-color ">Your Notes <span>Security</span></h2>
                                                    </div>
                                                </div>
                                                <div className="elementor-element   elementor-widget elementor-widget-iteck-heading3">
                                                    <div className="elementor-widget-container">
                                                        <p className="iteck-heading">Automatically syncs across all your devices. You can also access and write notes without internet connection.</p>
                                                    </div>
                                                </div>
                                                <div className="elementor-element   elementor-widget elementor-widget-iteck-toggle">
                                                    <div className="elementor-widget-container">
                                                        <div className="iteck-toggle" id="iteck-toggle-632147bc8b01b">

                                                            <div className="accordion-item">
                                                                <div className="accordion-header" id="heading-d5b53bb">
                                                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-d5b53bb" aria-expanded="true" aria-controls="collapse-d5b53bb">
                                                                        Create and Save your notes with multi-media
                                                                    </button>
                                                                </div>
                                                                <div id="collapse-d5b53bb" className="accordion-collapse collapse show" aria-labelledby="heading-d5b53bb" data-bs-parent="#iteck-toggle-632147bc8b01b">
                                                                    <div className="accordion-body">
                                                                        <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item">
                                                                <div className="accordion-header" id="heading-2a2e1d6">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2a2e1d6" aria-expanded="false" aria-controls="collapse-2a2e1d6">
                                                                        Web Clipper Extension
                                                                    </button>
                                                                </div>
                                                                <div id="collapse-2a2e1d6" className="accordion-collapse collapse " aria-labelledby="heading-2a2e1d6" data-bs-parent="#iteck-toggle-632147bc8b01b">
                                                                    <div className="accordion-body">
                                                                        <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item">
                                                                <div className="accordion-header" id="heading-689e189">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-689e189" aria-expanded="false" aria-controls="collapse-689e189">
                                                                        Protect your note with lock
                                                                    </button>
                                                                </div>
                                                                <div id="collapse-689e189" className="accordion-collapse collapse " aria-labelledby="heading-689e189" data-bs-parent="#iteck-toggle-632147bc8b01b">
                                                                    <div className="accordion-body">
                                                                        <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-a0a6dc2 elementor-widget__width-initial elementor-align-left elementor-widget elementor-widget-iteck-button" data-id="a0a6dc2" data-element_type="widget" data-widget_type="iteck-button.default">
                                                    <div className="elementor-widget-container">

                                                        <a href="#" className="iteck-button ">
                                                            <span className="iteck-button-content-wrapper">
                                                                <span className="iteck-button-text">
                                                                    Free Register
                                                                </span>
                                                            </span>
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-cef7afd" data-id="cef7afd" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-23df935 iteck-image-animation-none elementor-widget elementor-widget-iteck-image" data-id="23df935" data-element_type="widget" data-widget_type="iteck-image.default">
                                                    <div className="elementor-widget-container">
                                                        <img width="653" height="700" src={require("../assets/img/2mobiles.png")} className="attachment-full size-full lazyloaded" alt="" data-ll-status="loaded" /><noscript><img width="653" height="700" src="https://iteck.smartinnovates.com/app/wp-content/uploads/sites/5/2022/04/2mobiles.png" className="attachment-full size-full" alt="" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="elementor-element elementor-element-788ccf4 iteck-image-animation-rotate elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-iteck-image" data-id="788ccf4" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="iteck-image.default">
                                    <div className="elementor-widget-container">
                                        <img width="659" height="573" src={require("../assets/img/about_s4_bubble2.png")} className="attachment-full size-full lazyloaded" alt="" data-ll-status="loaded" /><noscript><img width="659" height="573" src="https://iteck.smartinnovates.com/app/wp-content/uploads/sites/5/2022/04/about_s4_bubble2.png" className="attachment-full size-full" alt="" /></noscript>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-508dafe elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="508dafe" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f2adf1d" data-id="f2adf1d" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div className="elementor-element elementor-element-ab66501 iteck-image-animation-none elementor-widget elementor-widget-iteck-image" data-id="ab66501" data-element_type="widget" data-widget_type="iteck-image.default">
                                            <div className="elementor-widget-container">
                                                <img width="547" height="531" src={require("../assets/img/about_s4_img3.png")} className="attachment-full size-full lazyloaded" alt="" data-ll-status="loaded" /><noscript><img width="547" height="531" src="https://iteck.smartinnovates.com/app/wp-content/uploads/sites/5/2022/04/about_s4_img3.png" className="attachment-full size-full" alt="" /></noscript>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9a8e658" data-id="9a8e658" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div className="elementor-element elementor-element-dd4e47d elementor-widget__width-auto elementor-widget elementor-widget-iteck-heading1" data-id="dd4e47d" data-element_type="widget" data-widget_type="iteck-heading.default">
                                            <div className="elementor-widget-container">
                                                <h2 className="iteck-heading note_title">Beautiful Themes</h2>
                                            </div>
                                        </div>
                                        <div className="elementor-element elementor-element-e077e94 elementor-widget elementor-widget-iteck-heading2" data-id="e077e94" data-element_type="widget" data-widget_type="iteck-heading.default">
                                            <div className="elementor-widget-container">
                                                <h2 className="iteck-heading iteck-additional-color">Focus More With <br /> <span>Dark Theme</span></h2>
                                            </div>
                                        </div>
                                        <div className="elementor-element elementor-element-c06243f elementor-widget elementor-widget-iteck-heading3" data-id="c06243f" data-element_type="widget" data-widget_type="iteck-heading.default">
                                            <div className="elementor-widget-container">
                                                <p className="iteck-heading">Apply Notero’s elegant themes to your taste. Dark themes work excellently for those who prefer distraction-free mode.</p>
                                            </div>
                                        </div>
                                        <div className="elementor-element elementor-element-3c594a3 elementor-position-left iteck-icon-box-vertical-align-middle elementor-view-default elementor-widget elementor-widget-iteck-icon-box" data-id="3c594a3" data-element_type="widget" data-widget_type="iteck-icon-box.default">
                                            <div className="elementor-widget-container">
                                                <div className="iteck-icon-box position-left elementor-icon-box-wrapper">
                                                    <div className="elementor-icon-box-icon">
                                                        <span className="elementor-icon elementor-animation-">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="elementor-icon-box-content">
                                                        <h6 className="elementor-icon-box-title">
                                                            <span>
                                                                Filtering notes using matched keywords
                                                            </span>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-element elementor-element-79a55f9 elementor-position-left iteck-icon-box-vertical-align-middle elementor-view-default elementor-widget elementor-widget-iteck-icon-box" data-id="79a55f9" data-element_type="widget" data-widget_type="iteck-icon-box.default">
                                            <div className="elementor-widget-container">
                                                <div className="iteck-icon-box position-left elementor-icon-box-wrapper">
                                                    <div className="elementor-icon-box-icon">
                                                        <span className="elementor-icon elementor-animation-">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="elementor-icon-box-content">
                                                        <h6 className="elementor-icon-box-title">
                                                            <span>
                                                                8 Beautiful themes for you select
                                                            </span>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-element elementor-element-c8abab9 elementor-position-left iteck-icon-box-vertical-align-middle elementor-view-default elementor-widget elementor-widget-iteck-icon-box" data-id="c8abab9" data-element_type="widget" data-widget_type="iteck-icon-box.default">
                                            <div className="elementor-widget-container">
                                                <div className="iteck-icon-box position-left elementor-icon-box-wrapper">
                                                    <div className="elementor-icon-box-icon">
                                                        <span className="elementor-icon elementor-animation-">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="elementor-icon-box-content">
                                                        <h6 className="elementor-icon-box-title">
                                                            <span>
                                                                Save energy for your device
                                                            </span>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-element elementor-element-c223bd9 elementor-position-left iteck-icon-box-vertical-align-middle elementor-view-default elementor-widget elementor-widget-iteck-icon-box" data-id="c223bd9" data-element_type="widget" data-widget_type="iteck-icon-box.default">
                                            <div className="elementor-widget-container">
                                                <div className="iteck-icon-box position-left elementor-icon-box-wrapper">
                                                    <div className="elementor-icon-box-icon">
                                                        <span className="elementor-icon elementor-animation-">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="elementor-icon-box-content">
                                                        <h6 className="elementor-icon-box-title">
                                                            <span>
                                                                Easy to switch between light and dark mode
                                                            </span>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-element elementor-element-66fb75a elementor-widget__width-initial elementor-align-left elementor-widget elementor-widget-iteck-button" data-id="66fb75a" data-element_type="widget" data-widget_type="iteck-button.default">
                                            <div className="elementor-widget-container">

                                                <a href="#" className="iteck-button ">
                                                    <span className="iteck-button-content-wrapper">
                                                        <span className="iteck-button-text">
                                                            Discover Now
                                                        </span>
                                                    </span>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="elementor-element elementor-element-ebee2f2 iteck-image-animation-rotate elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-iteck-image" data-id="ebee2f2" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="iteck-image.default">
                            <div className="elementor-widget-container">
                                <img width="644" height="573" src={require("../assets/img/about_s4_bubble2.png")} className="attachment-full size-full lazyloaded" alt="" data-ll-status="loaded" /><noscript><img width="644" height="573" src="assets/img/about_s4_bubble.png" className="attachment-full size-full" alt="" /></noscript>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Service Section */}
            </main>

           
        </>
    );
  }
}



