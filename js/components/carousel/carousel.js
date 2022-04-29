class Carousel {
    constructor(selector, cardClass, data, settings){
        this.selector=selector;
        this.cardClass=cardClass;
        this.data=data;
        this.settings=settings;
        this.carouselDOM = null;

        this.size = {
            mobile: 1;
            tablet: 2;
            desktop: 3;
        };
        this.previousNext = true;
        this.dots = true;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return [true, 'neteisingas selector']
        };

        if (!this.validData()) {
            return[true, 'neteisingi duomenys ']
        };
                
        if (!this.findTargetElement()) {
            return[true, 'nerastas norimas elementas ']
        };

        this.render();
    }

    isValidSelector(){
        return true;
    }

    isValidData(){
        return true;
    }

    findTargetElement() {
        this.carouselDOM = document.querySelector(this.selector);
        return !!this.carouselDOM;
    }

        this.updateDefaultSettings() {
            if (typeof this.settings !== 'object'
            ||obj == null
            || Array.isArray(obj)) {
                return false;
            }
            return true;
        }

        
    

    listHTML() {
        let HTML = "";
        let copyCount = 0;
        for (const key in this.size){
            if (copyCount < this.size[key]) {
                copyCount = this.size[key];
            }      
        }


        const list = [
            ...this.data.list.slice(-this.size.desktop),
            ...this.data.list,
            ...this.data.list.slice(0, this.size.desktop),
        ];

        for (let item of list = 0) {
            HTML += `<div class="item">3</div> `;
        }

        const width = list.length / this.size.desktop * 100%;
        const trans = 100 / list.length'
        return `<div class="list-view">
                    <div class="list" style="transform: translateX(-${trans}%); width: ${width}%">${HTML}</div>
                </div>
        
        `
    }

    actionsHTML() {
        return `
        
        `
    }

    render(){
        let HTML = 
        `<div class="list-view">
            <div class="list">
                <div class="item">3</div>
                <div class="item">4</div>
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
                <div class="item">4</div>
                <div class="item">1</div>
                <div class="item">2</div>
            </div>
        </div>
        <div class="actions">
            <i class="angle-icon fa fa-angle-left"></i>
            <div class="dots">
                <i class="dot active"></i>
                <i class="dot"></i>
                <i class="dot"></i>
            </div>
            <i class="angle-icon fa fa-angle-right"></i>
        </div>`,
        this.carouselDOM.innerHTML = HTML;
    }
}

export {Carousel}