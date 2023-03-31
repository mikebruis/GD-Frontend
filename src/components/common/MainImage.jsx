import React from 'react';
import Header from '../common/Header';
import ImgBackground from '../../assets/img/no-time-to-die-poster.png';


function MainImage() {
    return (
        <>
            <div class="main-image">
                <Header />
                <img style={{ width: '100%' }} src={ImgBackground} alt="" />
                <div class="text">
                    <h1></h1>
                    <p>
                        James Bond has left active service. His peace is short-lived when Felix "the cat" Leiter <br />
                        an old friend from the CIA, turns up asking for help. leading bond onto
                        <br />
                       the trail of a mysterious villian armed with dangerous new technology.
                       
                    </p>
                   <a href="https://www.youtube.com/watch?v=lr_spVswTUo&vl=en" target="_blank"><button>Watch Now</button></a>
                </div>
            </div>
        </>
    );
}

export default MainImage;
