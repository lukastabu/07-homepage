function isValidSelevtor(selector) {
    if (typeof selector !== 'string') {
        return [true, 'Selector turi buti stringas'];
    }
    if (selector === "") {
        return [true, 'Selector turi buti ne tuscias stringas'];
    }
    return [false, 'OK'];
}

function isValidData(data){
    if (!Array.isArray(data)) {
        return (true, 'Duomenys turi susideti is masyvo');
    }
    if (data.length === 0) {
        return (true, 'Duomenyse nieko nera');
    }
    return [false, 'OK'];
}

function isValidItem(item) {
    let mandatoryObjectKeys = ['title', 'description'];
    let optionalObjectKeys = ['icon'];
    let allKeys = [...mandatoryObjectKeys, ...optionalObjectKeys];
    let minKeyCount = mandatoryObjectKeys.length;
    let maxKeyCount = mandatoryObjectKeys.length + optionalObjectKeys.length;

    if (typeof item !== 'object' // validuojama, ar objektas tinkamas, tikras
        || item === null
        || Array.isArray(item)) {
            return [false];
        }
        const keys = Object.keys(item);
        if (keys.length < minKeyCount || keys.length > maxKeyCount) { // tikrinama, ar objekte esanciu keys skaicius tinka muse salygai   
            return [false];
        }

        let goodObj = true;
        for (const key of keys) { //ieskoma, ar objekte yra keys, kuriu neturetu buti
            if (allKeys.includes(key)) {
                goodObj = false;
                break;
            }
        }

        if (!goodObj) { //jei atrastas netinkamas key, visas item yra skippinamas
            return [false]
        }

        if (typeof item.title != 'string' // ar objekte yra visi privalomi keys
        || item.title.trim() === "") { 
            return [false];
        } 

        if (typeof item.description != 'string' // ar objekto keys turi tinkamas vertes
        || item.description.trim() === "") { 
            return [false];
        } 
        return [true]
}

function renderFeatures(selector, data) {
    
    const selRes = isValidSelevtor(selector);
    if (selRes[0]) {
        return selRes;
    }

    const DOM = document.querySelector(selector);
    if (!DOM) { //jeigu nera DOM reiksmes
        return (true, 'Selector neranda elemento');
    }

    const datRes = isValidData(data);
    if (datRes[0]) {
        return datRes;
    }
    
    let HTML = '';
    for (let item of data) {
        if (!isValidItem(item)) {
            continue;
        }

        HTML += `
        <div class="feature">
                <i class="fa fa-${item.icon ? item.icon : 'globe'}" aria-hidden="true"></i>
                <h3 class="title">${item.title}</h3>
                <p>${item.description}</p>
        </div>`
    }
    if (HTML === '') {
        return ('is turimu duomen nera ka rodyti')
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export {renderFeatures};
