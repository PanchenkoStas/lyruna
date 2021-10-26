import React from "react";
import AppPreview1 from '../../assets/images/app-preview-1@2x.png';
import AppPreview2 from '../../assets/images/app-preview-2@2x.png';
import Guitarist from '../../assets/images/guitarist@2x.jpg';
import Phone from '../../assets/images/phone@2x.png';

function Marketplace(){
    return <>
    <div className="section--marketplace container--margin" id="marketplace">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-6 col-lg-offset-3 text-align--center">
                    <span className="pretitle">The Marketplace</span>
                    <h2>The world's first NFT Marketplace for Music</h2>
                    <p>The Lyruna Marketplace is going to start a new chapter in the Music World. It give Artists a new
                        oppurtunity to bring their passion to their Fans. </p>
                    <p>Music Fans can get a exlusive piece of their favorite Song and trade it with other Fans.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-6 text-align--center margin-bottom-sm" data-aos="fade-up"
                     data-aos-delay="200">
                    <img src={AppPreview1} width="612" className="app-preview"/>
                    <h3>Mauris iaculis tincidunt</h3>
                    <p>Facilisis quis nunc orci ultrices eget arcu neque enim. Est aliquam aliquet feugiat pulvinar
                        adipiscing rhoncus.</p>
                </div>
                <div className="col-sm-12 col-md-6 text-align--center margin-bottom-sm" data-aos="fade-up"
                     data-aos-delay="400">
                    <img src={AppPreview2} width="612" className="app-preview"/>
                    <h3>Eget est lorem commodo</h3>
                    <p>Auctor ultrices ut tincidunt enim interdum nisl etiam sed. Viverra ultrices aenean eu, porttitor
                        sit tristique.</p>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-5 col-lg-offset-1 col-margin-sm" data-aos="fade-right"
                     data-aos-delay="200">
                    <img src={Guitarist} width="446"/>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h2>How NFTs will take over the Music Industry</h2>
                    <p>NFTs offers an incredible number of new ways artists can connect their music with fans. It also
                        revolutionizes the collaboration of all kinds of people in the music industry. For example, an
                        artist can offer a song that is already released or not as an NFT. He can choose how many NFTs
                        there should be of this song, this influences the rarity. Fans from all over the world can then
                        buy this song, this can be compared to the auction of a painting. An artist can also sell, for
                        example, 10% of his revenue of a particular song as NFT and can thus break away from labels. The
                        payment of the revenues to the purchaser of the NFT then follow automatically via the
                        blockchain.
                        NFTs can also be used for collaboration in the music industry, as beatmakers can sell the rights
                        to a beat as an NFT, producers can offer their services, or artists can sell a feature as an
                        NFT.
                        There are so many more ways people in the music industry and fans can use NFTs like tickets to
                        concerts and many more.</p>

                    <a className="button primary" href="#presale">Join presale</a>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-sm-12 col-md-5 col-lg-6">
                    <h2>The Marketplace where Artists, Producers, Collectors, Traders and Fans unite.</h2>
                    <p>Eget eget ut ornare tempus sed ultricies gravida. Amet in malesuada elementum viverra. Turpis
                        tempor, scelerisque pellentesque sem.</p>
                    <ul className="checklist">
                        <li>Create your own NFT of your new realeses, Tickets for your Tour, your Beat, your services as
                            a producer and many more. There are no limits.
                        </li>
                        <li>Collect NFTs of your Favorite Artist or a Song that means something to you.</li>
                        <li>Trade NFTs by finding potentially valuable NFTs that you think can increase in Price and
                            selling them for Profit.
                        </li>
                        <li>You can buy Tickets for the next Tour of your favorite Artist inform of NFTs and receive a
                            unique Ticket.
                        </li>
                        <li>Find a Producer, Beatmaker or Feature for your new Song and claim their services inform of a
                            NFT.
                        </li>
                        <li>Get exlusive Licences or use Licences for Beats or Background Music as NFTs, which you can
                            then use for yourself.
                        </li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-6 col-sm-first col-md-normal" data-aos="fade-left"
                     data-aos-delay="400">
                    <img src={Phone} width="651"/>
                </div>
            </div>

        </div>
    </div>
    </>
}

export default Marketplace;