function renderFeatures(selector, data) {
    let mandatoryObjectKeys = ['title', 'desciption'];
    let optionalObjectKeys = ['icon'];
    let allKeys = [...mandatoryObjectKeys, ...optionalObjectKeys];
    let minKeyCount = mandatoryObjectKeys.length;
    let maxKeyCount = mandatoryObjectKeys.length + optionalObjectKeys.length;

    if (typeof selector !== 'string') {
        return new Error = ('Selector netinkamas');
    }
    if (selector === '') {
        return new Error = ('Selector tuscias');
    }

    const DOM = document.querySelector(selector);
    if (!DOM) { //jeigu nera DOM reiksmes
        return new Error = ('Selector neranda elemento');
    }

    if (!Array.isArray(data)) {
        return new Error = ('Duomenys turi susideti is masyvo');
    }
    if (data.length == 0) {
        return ('Duomenyse nieko nera')
    }
    
    let HTML = '';
    for (let item of data) {
        if (typeof item !== 'object' // validuojama, ar objektas tinkamas, tikras
        || item === null
        || Array.isArray(item)) {
            continue;
        }
        const keys = Object.keys(item);
        if (keys.length < minKeyCount || keys.length > maxKeyCount) { // tikrinama, ar objekte esanciu keys skaicius tinka muse salygai   
            continue;
        }

        let goodObj = true;
        for (const key of keys) { //ieskoma, ar objekte yra keys, kuriu neturetu buti
            if (allKeys.includes(key)) {
                goodObj = false;
                break;
            }
        }

        if (!goodObj) { //jei atrastas netinkamas key, visas item yra skippinamas
            continue
        }

        if (typeof item.title != 'string' // ar objekte yra visi privalomi keys
        || item.title.trim() === "") { 
            continue;
        } 

        if (typeof item.desciption != 'string' // ar objekto keys turi tinkamas vertes
        || item.desciption.trim() === "") { 
            continue;
        } 


        HTML += `
        <div class="col-12 col-md-6 col-lg-4 feature">
                <i class="fa fa-${item.icon ? item.icon : 'globe'}" aria-hidden="true"></i>
                <h3 class="title">${item.title}</h3>
                <p>${item.desciption}</p>
        </div>`
    }
    if (HTML === '') {
        return ('is turimu duomen nera ka rodyti')
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