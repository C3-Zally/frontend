import React from 'react';
import SymptomsCards from '../SymptomsCards'
import './SymptomsCarousel.scss';
import '../../../styles/_colors.scss';
import Tiredness from '../../../assets/images/tiredness.svg';
import Cough from '../../../assets/images/cough.svg';
import Fever from '../../../assets/images/fever.svg';
import Diarrhoea from '../../../assets/images/diarrhoea.svg';
import RunnyNose from '../../../assets/images/runny-nose.svg';
import ShortnessBreath from '../../../assets/images/shortness-breath.svg';



const SymptomsCarousel = () => {
    return (
        <React.Fragment>
          <section className='Carousel'>
            <h4 className='Carousel__title'>Syptoms</h4>
            <div className='Carousel__container'>
              <SymptomsCards 
                image={Tiredness}
                title={'Tiredeness'}
                description={'Lorem ipsum laber et sae put ghamma nostra candeat abscurata nun cuam'}
              />
              <SymptomsCards 
                 image={Cough}
                 title={'Cough'}
                 description={'Lorem ipsum laber et sae put ghamma nostra candeat abscurata nun cuam'}
              />
              <SymptomsCards
                  image={Fever}
                  title={'Fever'}
                  description={'Lorem ipsum laber et sae put ghamma nostra candeat abscurata nun cuam'}
              />
              <SymptomsCards
                  image={Diarrhoea}
                  title={'Diarrhoea'}
                  description={'Lorem ipsum laber et sae put ghamma nostra candeat abscurata nun cuam'}
              />
              <SymptomsCards
                  image={RunnyNose}
                  title={'Runny Nose'}
                  description={'Lorem ipsum laber et sae put ghamma nostra candeat abscurata nun cuam'}
              />
              <SymptomsCards
                  image={ShortnessBreath}
                  title={'Shortness Breath'}
                  description={'Lorem ipsum laber et sae put ghamma nostra candeat abscurata nun cuam'}
              />  
          </div>
        </section>
        </React.Fragment>
    )
}

export default SymptomsCarousel