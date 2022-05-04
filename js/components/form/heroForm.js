function heroForm() {
    const formDOM = document.querySelector('.hero .hero-form');
    const submitDOM = formDOM.querySelector('button');
    console.log(submitDOM);
    submitDOM.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('tikrinama forma ir gaunami duomenys');
    })
}

export {heroForm}