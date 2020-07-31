import React from 'react';
import './SymptomsCards.scss';
import '../../../styles/_colors.scss'
import Tiredeness from '../../../assets/images/tiredness.svg';
import Fever from '../../../assets/images/fever.svg';
import ShortnessBreath from '../../../assets/images/shortness-breath.svg';
import Diarrhoea from '../../../assets/images/diarrhoea.svg';
import Cough from '../../../assets/images/cough.svg';
import RunnyNose from '../../../assets/images/runny-nose.svg';
const Cards = () => {
    return (
        <React.Fragment>
          <section className='Carrousel'>
            <h4 className='Carrousel__title'>Syptoms</h4>
            <div className='Carrousel__container'>
              <div className='Carrousel__item'>
                <div className='Carrousel__item--image'>
                  <img src={Tiredeness} alt="Avatar"/>
                </div>
                <div className='Carrousel__information'>
                  <h4 className='Carrousel__title'>Tiredeness</h4>
                  <p className='Carrousel__description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
              </div>
              <div className='Carrousel__item'>
                <div className='Carrousel__item--image'>
                  <img src={Fever} alt="Avatar"/>
                </div>
                <div className='Carrousel__information'>
                  <h4 className='Carrousel__title'>Fever</h4>
              <p className='Carrousel__description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>  
                </div>
              </div>
              <div className='Carrousel__item'>
                <div className='Carrousel__item--image'>
                  <img src={ShortnessBreath} alt="Avatar"/>
                </div>
                <div className='Carrousel__information'>
                  <h4 className='Carrousel__title'>Shortness Breath</h4>
              <p className='Carrousel__description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>  
                </div>
              </div>
              <div className='Carrousel__item'>
                <div className='Carrousel__item--image'>
                  <img src={Diarrhoea} alt="Avatar"/>
                </div>
                <div className='Carrousel__information'>
                  <h4 className='Carrousel__title'>Diarrhoea</h4>
              <p className='Carrousel__description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>  
                </div>
              </div>
              <div className='Carrousel__item'>
                <div className='Carrousel__item--image'>
                  <img src={Cough} alt="Avatar"/>
                </div>
                <div className='Carrousel__information'>
                  <h4 className='Carrousel__title'>Cough</h4>
              <p className='Carrousel__description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>  
                </div>
              </div>
              <div className='Carrousel__item'>
                <div className='Carrousel__item--image'>
                  <img src={RunnyNose} alt="Avatar"/>
                </div>
                <div className='Carrousel__information'>
                  <h4 className='Carrousel__title'>Runny Nose</h4>
              <p className='Carrousel__description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>  
                </div>
              </div>
          </div>
        </section>
        </React.Fragment>
    )
}

export default Cards