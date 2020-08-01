import React from 'react';
import './SymptomsCards.scss';

const SymptomsCards = (props) => {
    return (
        <React.Fragment>
            <div className='Carousel__item'>
                <div className='Carousel__item--image'>
                    <img  src={props.image} alt="Avatar"/>
                </div>
                <div className='Carousel__information'>
                    <h4 className='Carousel__title'>{props.title}</h4>
                    <p className='Carousel__description'>{props.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SymptomsCards