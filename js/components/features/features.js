function renderFeatures(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (let item of data) {
        HTML += `
        <div class="col-12 col-md-6 col-lg-4 feature">
                <i class="fa fa-${item.icon}" aria-hidden="true"></i>
                <h3 class="title">${item.title}</h3>
                <p>${item.desciption}</p>
        </div>`
    }
    DOM.innerHTML = HTML;
}

export {renderFeatures};

/*
let selectorRes = isValidSelevtor(selector);
if (selectorRes[0]) {
    return selectorl
}

const DOM = document.querySelector(selector);
if (!DOM) {
    return [true, 'Pagal pateikta selector nerasta elementu']
}



 
function isValidSelevtor(params) {
    if (typeof selector !== 'string') {
        return [true, 'Selector turi buti stringas'];
    }
    if selector === "" {
        return [true, 'Selector turi buti ne tuscias stringas'];
    }
    return [false, 'OK'];
}
*/