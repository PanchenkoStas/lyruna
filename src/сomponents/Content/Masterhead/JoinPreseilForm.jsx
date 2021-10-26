import React from 'react';
import style from './JoinPreseilForm.module.css';

const JoinPreseilForm = () => {
    return (
        <div className="container container--margin">
            <div className="row align-items-center">
                <div className="col-sm-12 text-align--center" data-aos="fade-up">
                    <h2>Join the presail</h2>
                    <p>Take part in our quest to support musicians by contributing your ETH in the presale of
                        $LYRUNA</p>
                </div>

                <div className="container text-align--center" id={style.wallet}>
                    <span className="pretitle">Presale started May 06, 2021</span>
                    <h3>Ends on May 14, 2021 - 13:00 EST</h3>
                    <div className={`row ${style.timer}`}>
                        <div className={style.number}>4
                            <div className={style.numberText}>Days</div>
                        </div>
                        <div className={style.number}>3
                            <div className={style.numberText}>Hours</div>
                        </div>
                        <div className={style.number}>2
                            <div className={style.numberText}>Minutes</div>
                        </div>
                        <div className={style.number}>1
                            <div className={style.numberText}>Seconds</div>
                        </div>
                    </div>
                    <div className={style.chart_title}><div>Amount raised</div><div>30%</div></div>
                    <div className={style.amount_chart_main}>
                        <div className={style.chart_progress} name="chart"></div>
                    </div>
                    <div className={style.chart_progress_value}>30/100 ETH</div>
                    <div className={style.inputContainer}><input type='number' defaultValue="0" step="0.01"/></div>
                    <div className={style.inputContainer}><input type='number' defaultValue="0" step="0.01"/></div>
                    <a z="z" className="button primary" href="#presale">Connect wallet</a>
                </div>
            </div>
        </div>
    );
};

export default JoinPreseilForm;