// component imports

import {Carousel} from '../components/carousel.js';
import {renderFeatures} from '../components/features/features.js';
import {featuresData} from '../data/featuresData.js';
import {heroForm} from '../components/form/heroForm.js';
import { interfaceCard } from '../components/carousel/interface.js';
import { testimonialCard } from '../components/carousel/testimonial.js';
import { interfaceData } from '../data/interfaceData.js';
// components execution

/* pvz kaip veikia js eventai

const h1DOM = document.querySelector('h1');

function labas() {
    console.log('labas');
}
h1DOM.addEventListener('click', labas);

const h2DOM = document.querySelector('h2');

h2DOM.addEventListener('click', function(){
    console.log('iki');
});


*/

/* header: start */
const mainHeaderDOM = document.querySelector('.main-header')
window.addEventListener('scroll', function() {
    const headerPosition = 100;
    if (scrollY > headerPosition) {
        mainHeaderDOM.classList.add('white-header')
    } else {
        mainHeaderDOM.classList.remove('white-header')
    }
})

/* header: end */

/* hero: start */
/* hero: end */

/* premium features: start */

renderFeatures('#features-block', featuresData);

/* premium features: end */

/* comunication app: start */
/* comunication app: end */

/* device manage: start */
/* device manage: end */

/* how app works: start */
/* how app works: end */

/* interface slide: start */

const interfaceCarousel = new Carousel('interface-carousel', interfaceCard , interfaceData, {
    size: {
        mobile: 1,
        tablet: 2,
        desktop: 3,
    },
    previousNext: true,
    dots: true,
});


/* interface slide: end */

/* testimonials: start */
/* testimonials: end */

/* pricing: start */
/* pricing: end */

/* FAQ: start */
/* FAQ: end */

/* team: start */
/* team: end */

/* app store: start */
/* app store: end */

/* subscribe: start */
/* subscribe: end */

/* contacts: start */
/* contacts: end */

/* footer: start */
/* footer: end */