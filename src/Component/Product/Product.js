import React from 'react';
import ProductDetails from '../Pages/ProductDetails/ProductDetails/ProductDetails';
import Consume from '../Pages/ProductDetails/ProductDetails/Consume/Consume';
import OurProduct from '../Pages/ProductDetails/OurProduct/OurProduct';
import Lorem from '../Pages/ProductDetails/Lorem/Lorem';
import For from '../Pages/ProductDetails/For/For';
import WhyYou from '../Pages/Ingredients/WhyYou/WhyYou';
import Experts from '../Pages/Home/Experts/Experts';
import Review from '../Pages/Home/Review/Review';
import Each from '../Pages/ProductDetails/ProductDetails/Each/Each';

const Product = () => {
    return (
        <div className='mt-[102px]'>
            <ProductDetails />
            <Consume />
            <WhyYou />
            <OurProduct />
            <Each />
            <Lorem />
            <For /> 
            <Experts />
            <Review />
        </div>
    );
};

export default Product;