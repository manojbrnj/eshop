import React from 'react';
import Product from '../Product/Product';
import '../Home/Home.css';
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg'
          className='home__image'
          alt=''
        />

        <div className='home__row'>
          <Product
            title='Dasein Women Barrel Handbags Purses Fashion Satchel Bags Top Handle ...'
            price={30}
            star={2}
            image='https://3.bp.blogspot.com/-LKuK8ul5zy8/XNJlLFCqiBI/AAAAAAADaOc/_wT5vaAWI2E5chiS5AQ7bHPj15O1XdYjQCK4BGAYYCw/s1600/0m7vc5lus92-mmk-women-handbags-top-handle-satchel-bags-fo-731231.jpg'
          />
          <Product
            title='Pu Leather Vintage Style Women Shoulder Bags Ladies Fancy Handbags ...'
            price={40}
            star={5}
            image='https://i5.walmartimages.com/asr/76526810-91da-4917-87c1-69245968fdc7_2.f1f4cd6ed762d85ca8fcb08508c10147.jpeg'
          />
          <Product
            title='Pu Leather Vintage Style Women Shoulder Bags Ladies Fancy Handbags ...'
            price={99}
            star={3}
            image='https://th.bing.com/th/id/OIP.mbfbxehqir8edtOpyiZ7FwHaHa?pid=ImgDet&rs=1'
          />
        </div>
        <div className='home__row'>
          <Product
            title='Reusable Grocery Bags (3 Pack, Black) - Hold 50+ lbs - Large & Super ...'
            price={90}
            star={3}
            image='https://i5.walmartimages.com/asr/204dad21-0828-4e1e-8b82-b0c546ca3565_2.61e1b358993207fe8d6c97bb9fc2687e.png'
          />
          <Product
            title='PARADOX (LABEL) Womens Hand Bag Ladies Purses Satchel Shoulder Bags ...'
            price={30}
            star={4}
            image='https://images-eu.ssl-images-amazon.com/images/I/814iogRTu5L.jpg'
          />
          <Product
            title='Buy Womens Purses and Handbags Shoulder Bag Ladies,Women Large Tote Bag ...'
            price={60}
            star={2}
            image='https://sc01.alicdn.com/kf/HTB1Oy2YC4SYBuNjSspjq6x73VXaK.jpg'
          />
          <Product
            title='Covelin Womens Handbag Large Leather Crossbody Purse Tote Shoulder Bag ...'
            price={20}
            star={5}
            image='https://images-na.ssl-images-amazon.com/images/I/51f90ksvu7L.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            title='Amazon.com : Happiness House New Cartoon Unisex Fashion Snapback Hat ...'
            price={50}
            star={3}
            image='https://m.media-amazon.com/images/I/71HKMdAG0KL._AC_SX569_.jpg'
          />
          <Product
            title='China New Designer PU Leather Ladies Handbags Tote Bag - China Tote Bag ...'
            price={70}
            star={5}
            image='https://image.made-in-china.com/2f0j00szfRUJuMOYcP/New-Designer-PU-Leather-Ladies-Handbags-Tote-Bag.jpg'
          />
          <Product
            title='CLELO Fashion Bag Female Handbag Women Famous Brand Designer PU Women ...'
            price={30}
            star={5}
            image='https://th.bing.com/th/id/OIP.nNB00hHFXoQg71pvqV5U_gHaHa?pid=ImgDet&rs=1'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
