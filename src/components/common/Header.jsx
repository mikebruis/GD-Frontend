import React from 'react';
import { useDispatch } from 'react-redux';
import IconLogo from '../../assets/img/Group.png';
import Images from '../../assets/img/images.png';
import { push } from 'connected-react-router';

function Header() {
    const dispatch = useDispatch();

    return (
        <>
            <header>
                <img class="logo" src={IconLogo} onClick={() => dispatch(push('/'))} alt="" />
                <div class="side-head">
                    <div class="search">
                        <input type="text" />
                        
                    </div>
                    <div class="option">
                        <p onClick={() => dispatch(push('/categories'))}>Search<button><img src={Images} alt=""></img></button></p>
                        <p onClick={() => dispatch(push('/categories'))}>Category<button><img src={Images} alt=""></img></button></p>
                        <p onClick={() => dispatch(push('/favourites'))}>Add to Wishlist</p>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
