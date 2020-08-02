import React from 'react';
import './SymptomsCards.scss';

const SymptomsCards = ({ title, image }) => {
    return (
        <React.Fragment>
            <div className='Carousel__item'>
                <div className='Carousel__item--image'>
                    <img  src={image} alt="Avatar"/>
                </div>
                <div className='Carousel__information'>
                    <h4 className='Carousel__title'>{title}</h4>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SymptomsCards