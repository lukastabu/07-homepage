// component imports

//import {renderfeatures} from '../components/features/features.js';

// components execution

/* header: start */
const mainHeaderDOM = document.querySelector('main-header')
addEventListener('scroll', function() {
    const headerPosition = 100;
    if (scrollY > headerPosition) {
        mainHeaderDOM.classList.add('white-header')
    } else {
        mainHeaderDOM.classList.remove('white-header')
    }
})
/* header: end */

/* hero: start */

function labas() {
    console.log('labaas');
}

const h1DOM = document.querySelector('h1');

h1DOM.addEventListener('click', function(){
    console.log('iki');
});
h1DOM.addEventListener('click', labas);

/* hero: end */

/* premium features: start */

/*
let featuresData = [
    {
        icon: '',
        title: '',
        desciption: '',
    }
]
*/

/* premium features: end */

/* comunication app: start */
/* comunication app: end */

/* device manage: start */
/* device manage: end */

/* how app works: start */
/* how app works: end */

/* interface slide: start */
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