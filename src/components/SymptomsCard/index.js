import React from 'react';
import './SymptomsCard.scss';

const SymptomsCard = ({ title, image }) => {
    return (
        <React.Fragment>
            <div className='SymptomsCard__item'>
                <div className='SymptomsCard__item--image'>
                    <img  src={image} alt="Avatar"/>
                </div>
                <div className='SymptomsCard__item--information'>
                    <h4 className='SymptomsCard__item--title'>{title}</h4>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SymptomsCard