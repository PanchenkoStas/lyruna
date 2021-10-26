import React from "react";
import LyrunaLogo from '../../assets/images/logo-new@2x.png';
import SocialsList from "../common/SocialsList";


function Header() {
    return (
        <>
            <header className="sticky" data-aos="fade-down">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">

                            <div className="header-logo">
                                <a href="#home">
                                    <img src={LyrunaLogo} width="92"/>
                                </a>
                            </div>

                            <ul className="main-nav">
                                <li><a href="#token">The Token</a></li>
                                <li><a href="#presale">Upcoming presale</a></li>
                                <li><a href="#marketplace">The Marketplace</a></li>
                                <li><a href="#roadmap">Roadmap</a></li>
                            </ul>

                            <SocialsList/>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
