import React from 'react';
import ProductDetails from '../Pages/ProductDetails/ProductDetails/ProductDetails';
import Consume from '../Pages/ProductDetails/ProductDetails/Consume/Consume';
import OurProduct from '../Pages/ProductDetails/OurProduct/OurProduct';
import Lorem from '../Pages/ProductDetails/Lorem/Lorem';
import For from '../Pages/ProductDetails/For/For';
import WhyYou from '../Pages/Ingredients/WhyYou/WhyYou';
import Experts from '../Pages/Home/Experts/Experts';
import Review from '../Pages/Home/Review/Review';

const Product = () => {
    return (
        <div>
            <ProductDetails />
            <Consume />
            <WhyYou />
            <OurProduct />
            <Lorem />
            <For /> 
            <Experts />
            <Review />
        </div>
    );
};

export default Product;