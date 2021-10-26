import MastheadImg from "../../../assets/images/masthead-image-new@2x.png";
import Video from "../../../assets/images/vid.mp4";
import Piechart from "../../../assets/images/piechart@2x.jpg";
import Usecase from "../../../assets/images/usecase@2x.jpg";
import JoinPreseilForm from "./JoinPreseilForm";

function Master() {
    return (
        <>

            <div className="container container--margin" id="masthead">
                <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-5 masthead-copy">
        <span className="comingsoon" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="500"
              data-aos-easing="swing"
        >Coming soon</span>
                        <h1 className="intro" data-aos="fade-up">Collect Rare, Unique & Unreleased Music NFTs</h1>
                        <p data-aos="fade-up" data-aos-delay="100">Get exclusive new releases, unreleased songs, and
                            backstage passes to upcoming shows from your favorite Artist.</p>

                        <div className="button-row">
                            <a className="button secondary" href="#" data-aos="fade-zoom-in" data-aos-delay="600">See
                                our whitepaper</a>
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-5 col-lg-6 masthead-image-container" data-aos="fade-zoom-in"
                         data-aos-delay="200">
                        <div className="video-container">
                            <img src={MastheadImg} width="780"
                                 className="full masthead-image"/>
                            <video playsInline loop autoPlay muted className="mobile-app-video" width="276"
                                   height="598">
                                <source src={Video} type="video/mp4"/>
                            </video>
                        </div>
                    </div>

                </div>
            </div>

            <JoinPreseilForm/>

            <div className="container container--margin" id="token">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-margin-sm">
                        <span className="pretitle">The $LYRUNA Token</span>
                        <h2>$LYRUNA Token Use Cases</h2>
                        <p>Using and holding $LYRUNA tokens has many advantages on the LYRUNA Marketplace </p>
                        <ul>
                            <li>Exlusive NFTs Sales are only purchasable with $LYRUNA</li>
                            <li>Only 1% Fees on NFT Purchases (4% Fees with ETH)</li>
                            <li>25% of the profits from ETH Fees are paid to $LYRUNA Holders</li>
                            <li>10% of the profits from the ETH Fees are spent on the buyback & burn of $LYRUNA tokens
                            </li>
                            <li>Community Voting only available for $LYRUNA Holders</li>
                            <li>Option to highlight and promote your NFT auction for owners of atleast 20,000 $LYRUNA
                                Tokens
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6" data-aos="fade-left" data-aos-delay="200">
                        <img src={Usecase} width="549"/>
                    </div>
                </div>
            </div>

            <div className="container container--margin" id="piechart">
                <div className="row align-items-center">
                    <div className="col-sm-12 text-align--center" data-aos="fade-up">
                        <h2>Token Distribution</h2>
                        <h3>Total Supply: 1,000,000,000</h3>
                        <img src={Piechart} width="850"/>

                    </div>
                </div>
            </div>

            <div className="container container--margin" id="presale">
                <div className="row card-row">
                    <div className="col-sm-12 col-md-8 col-md-offset-2 text-align--center">
                        <h2>Upcoming presale</h2>
                        <p>Take part in our quest to support musicians by contributing your ETH in the presale
                            of&nbsp;$LYRUNA</p>
                        <h3>Subscribe now to know when our presale goes live</h3>
                        <form className="row" data-aos="zoom-fade-in">
                            <div className="col-sm-12 col-lg-7 col-lg-offset-1 col-email"><input type="email"
                                                                                                 className="email"
                                                                                                 placeholder="Enter email..."/>
                            </div>
                            <div className="col-sm-12  col-lg-3 col-button"><a className="button secondary full-width"
                                                                               href="#">Sign&nbsp;up</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Master;