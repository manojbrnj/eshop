import React from 'react';
import '../Header/Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';

export default function () {
  return (
    <div className='header'>
      <div className='header__logo'>
        <Link to='/' style={{textDecoration: 'none', color: '#ff9f00'}}>
          <StorefrontIcon
            fontSize='large'
            className='header__logoimage'
          ></StorefrontIcon>
        </Link>
        <div className='header__logotitle'>eShop</div>
      </div>
      <div className='header__search'>
        <input type='text' className='header__serachinput' />
        <SearchIcon className='header__searchicon'></SearchIcon>
      </div>
      <div className='header__nav'>
        <div className='nav__item'>
          <span className='nav__item__lineone'>Hello Guest</span>
          <span className='nav__item__linetwo'>SignIn</span>
        </div>
        <div className='nav__item'>
          <span className='nav__item__lineone'>Your</span>
          <span className='nav__item__linetwo'>Shop</span>
        </div>
        <div className='nav__item'>
          <span className='nav__item__lineone'></span>
          <Link
            to='/checkout'
            style={{textDecoration: 'none', color: '#ffffff'}}
          >
            <ShoppingBasketIcon />
          </Link>
          <span className='nav__item__linetwo nav__basketcount'>0</span>
        </div>
      </div>
    </div>
  );
}
