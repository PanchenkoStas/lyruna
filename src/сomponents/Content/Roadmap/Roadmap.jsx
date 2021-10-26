import React from "react";
import NewsletterForm from "./NewsletterForm";

function Roadmap() {
    return (
        <>
            <div className="container container--margin" id="roadmap">
                <div className="row margin-bottom-sm">
                    <div className="col-sm-12 col-lg-6 col-lg-offset-3 text-align--center">
                        <span className="pretitle">Roadmap</span>
                        <h2>Our Marketplace has a determined future ahead.</h2>
                        <p>At molestie suspendisse turpis eu phasellus. Ut ac dolor,
                            pharetra nulla quisque donec mauris quis. Non gravida turpis vitae pretium, nisl,
                            fames tellus. Ante diam, dignissim sed sit quam blandit lorem iaculis.</p>
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-6 col-md quarter" data-aos="fade-up" data-aos-delay="400">
                        <div>
                            <h4>Q1</h4>
                            <div className="circle circle--complete"></div>
                            <div className="line"></div>
                        </div>
                        <ul>
                            <li>Funding Round</li>
                            <li>Team building</li>
                            <li>$LYRUNA Presale</li>
                            <li>Establishing cooperation with subcontracters for LYRUNA Marketplace Development</li>
                            <li>$LYRUNA Token Uniswap listing</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md quarter" data-aos="fade-up" data-aos-delay="600">
                        <div>
                            <h4>Q2</h4>
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                        <ul>
                            <li>LYRUNA Marketplace launch</li>
                            <li>Cooperations with major artists for exclusive NFT sales on LYRUNA</li>
                            <li>Creator Verification Feauture</li>
                            <li>Marketing and building brand awarness</li>
                            <li>Community Voting Feauture for verified creators</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md quarter" data-aos="fade-up" data-aos-delay="800">
                        <div>
                            <h4>Q3</h4>
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                        <ul>
                            <li>LYRUNA Phone App</li>
                            <li>Royality split Feature for NFTs</li>
                            <li>Streaming service on the LYRUNA App</li>
                            <li>Etiam ullamcorper</li>
                            <li>Donec vel ipsum eros</li>
                            <li>Duis vulputate nec</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md quarter" data-aos="fade-up" data-aos-delay="1000">
                        <div>
                            <h4>Q4</h4>
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                        <ul>
                            <li>$LYRUNA launch</li>
                            <li>Non gravid ipsum</li>
                            <li>Vivamus eget dapibus</li>
                            <li>Etiam ullamcorper</li>
                            <li>Donec vel ipsum eros</li>
                            <li>Duis vulputate nec</li>
                        </ul>
                    </div>

                </div>
            </div>


            <NewsletterForm/>
        </>
    );
}

export default Roadmap;