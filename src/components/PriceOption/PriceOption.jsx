import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    // console.log(option);

    const {price, name, features} = option
    return (
        <div className="bg-blue-300 rounded-md p-5 ">
            <div >
                <h2 className='text-center'>
                    <span className="text-5xl">{price}</span>
                    <span>/Mon</span>
                </h2>
                <h4 className='text-3xl '>{name}</h4>
            </div>
            <div className='pt-2'>
                {
                    features.map((feature, index)=><Feature key={index} feature = {feature}></Feature>)
                }
            </div>

            <button className='mt-12 w-full py-2 bg-green-500 rounded-xl hover:bg-yellow-500
             '>Buy Now</button>
        </div>
    );
};

export default PriceOption;