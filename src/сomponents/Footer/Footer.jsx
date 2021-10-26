import React from "react";
import LyrunaLogo from '../../assets/images/logo-new@2x.png';
import SocialsList from "../common/SocialsList";

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4" data-aos="fade-up">
                            <a href="#home">
                                <img src={LyrunaLogo} alt='lyruna-logo' width="92"/>
                            </a>
                            <p className="small">Support your favorite musicians through NFT's.</p>
                        </div>
                        <div className="col-sm-6 col-md-2" data-aos="fade-up" data-aos-delay="200">
                            <ul>
                                <li><strong>Platform</strong></li>
                                <li><a href="#token">The Token</a></li>
                                <li><a href="#presale">Upcoming presale</a></li>
                                <li><a href="#marketplace">The Marketplace</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3" data-aos="fade-up" data-aos-delay="300">
                            <ul>
                                <li><strong>Company</strong></li>
                                <li><a href="#roadmap">Roadmap</a></li>
                                <li><a href="#">Whitepaper</a></li>
                            </ul>
                        </div>

                        <div className="col-sm-12 col-md-3" data-aos="fade-up" data-aos-delay="400">
                            <strong>Social</strong>
                            <SocialsList/>
                        </div>

                    </div>
                    <div className="row" data-aos="zoom-fade-in" data-aos-delay="400">
                        <div className="col-sm-12">
                            <p className="small">Copyright &copy; 2021 Lyruna. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
