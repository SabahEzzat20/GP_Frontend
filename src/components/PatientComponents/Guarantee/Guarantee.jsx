import React from 'react';
import './Guarantee.scss'; // Import the corresponding SASS file

const Guarantee = () => {
    return (
        <div className="guarantee-container">
            <h1>I Guarantee</h1>
            <div className="guarantee-items">
                <div className="item professionalism">
                    <span>1</span>
                    <p>Professionalism</p>
                </div>
                <div className="item accuracy">
                    <span>2</span>
                    <p>Accuracy</p>
                </div>
                <div className="item availability">
                    <span>3</span>
                    <p>Availability</p>
                </div>
            </div>
        </div>
    );
}

export default Guarantee;
