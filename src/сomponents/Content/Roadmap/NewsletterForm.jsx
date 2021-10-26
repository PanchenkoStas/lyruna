import React from 'react';

const NewsletterForm = () => {
    return (
        <div className="container container--margin" id="subscribe" data-aos="zoom-fade-in" data-aos-delay="200">
            <div className="row">
                <div className="col-sm-12 col-md-8 col-md-offset-2 text-align--center subscribe-card">
                    <h2>Sign up for our newsletter</h2>
                    <form className="row">
                        <div className="col-sm-12 col-lg-7 col-lg-offset-1 col-email"><input type="email" id="email"
                                                                                             placeholder="Enter email..."/>
                        </div>
                        <div className="col-sm-12  col-lg-3 col-button"><a className="button secondary full-width"
                                                                           href="#">Sign&nbsp;up</a></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsletterForm;