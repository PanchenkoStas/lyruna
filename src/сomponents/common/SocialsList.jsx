import React from 'react';
import RedditLogo from "../../assets/images/reddit.svg";
import TwitterLogo from "../../assets/images/twitter.svg";
import Telegram from "../../assets/images/telegram.svg";
import Discord from "../../assets/images/discord.svg";

const SocialsList = () => {
    return (
        <ul className="icons">
            <li><a href="#" className="reddit"><img src={RedditLogo}
                                                    alt="Reddit"/></a>
            </li>
            <li><a href="#" className="reddit"><img src={TwitterLogo} alt="Twitter"/></a>
            </li>
            <li><a href="#" className="reddit"><img src={Telegram}
                                                    alt="Telegram"/></a></li>
            <li><a href="#" className="reddit"><img src={Discord} alt="Discord"/></a>
            </li>
        </ul>
    );
};

export default SocialsList;