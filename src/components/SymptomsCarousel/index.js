import React from 'react';
import SymptomsCards from '../SymptomsCard'
import './SymptomsCarousel.scss';
import Tiredness from '../../assets/images/tiredness.svg';
import Cough from '../../assets/images/cough.svg';
import Fever from '../../assets/images/fever.svg';
import Diarrhoea from '../../assets/images/diarrhoea.svg';
import RunnyNose from '../../assets/images/runny-nose.svg';
import ShortnessBreath from '../../assets/images/shortness-breath.svg';



const SymptomsCarousel = () => {

    const symptoms = [
        {
            title: 'Tiredness',
            image: Tiredness
        },
        {
            title: 'Fever',
            image: Fever
        },
        {
            title: 'Cough',
            image: Cough
        },
        {
            title: 'Diarrhoea',
            image: Diarrhoea
        },
        {
            title: 'Shortness Breath',
            image: ShortnessBreath
        },
        {
            title: 'Runny Nose',
            image: RunnyNose
        },
    ]

    return (
        <React.Fragment>
          <section className='SymptomsCarrousel__main'>
                <h4 className='SymptomsCarrousel__main--title'>Symptoms</h4>
            <div className='SymptomsCarousel'>
                <div className='SymptomsCarousel__container'>
                {
                symptoms.map(symptom =>
                 <SymptomsCards
                title={symptom.title}
                image={symptom.image}
                key={symptom.title}/>)
                }
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}

export default SymptomsCarousel