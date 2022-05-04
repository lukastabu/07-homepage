class Carousel {
    constructor(selector, cardClass, data, settings){
        this.selector = selector;
        this.cardClass = cardClass;
        this.data = data;
        this.settings = settings;
        this.carouselDOM = null;

        this.size = {
            mobile: 1,
            tablet: 2,
            desktop: 3,
        }
        this.previousNext = true;
        this.dots = true;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return [true, 'neteisingas selector'];
        }

        if (!this.isValidData()) {
            return[true, 'neteisingi duomenys '];
        }
                
        if (!this.findTargetElement()) {
            return[true, 'nerastas norimas elementas '];
        }

/*        this.updateDefaultSettings();
*/
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

    isObject(obj) {
        if (typeof obj !== 'object'
        || obj === null
        || Array.isArray(obj)) {
           return false;
        }
        return true;
    }

    updateDefaultSettings() {
        if (!this.isObject(this.settings)) {
           return false;
        }
        if (this.isObject(settings.size)) {
            if (Number.isInteger(this.settings.size.mobile)
                && this.settings.size.mobile > 0) {
                this.size.mobile = this.settings.size.mobile;
            }
            if (Number.isInteger(this.settings.size.tablet)
                && this.settings.size.tablet > 0) {
                this.size.tablet = this.settings.size.tablet;
            }
            if (Number.isInteger(this.settings.size.desktop)
                && this.settings.size.desktop > 0) {
                this.size.desktop = this.settings.size.desktop;
            }
        }

        if (typeof this.settings.previousNext === 'boolean') {
            this.previousNext = this.settings.previousNext;
        }
        if (typeof this.settings.dots === 'boolean') {
            this.dots = this.settings.dots;
        }
    }
    
    /*listHTML() {
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

        for (const item of list) {
            HTML += `<div class="item">3</div> `;
        }

        const width = list.length / this.size.desktop * 100%;
        const trans = 100 / list.length,
        return `<div class="list-view">
                    <div class="list" style="transform: translateX(-${trans}%); width: ${width}%">${HTML}</div>
                </div>
        
        `;
    }
    */

    listHTML() {
        return `
        <div class="list-view">
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
        </div>`;
    }
    
    actionsHTML() {
        return `<div class="actions">
                    <i class="angle-icon fa fa-angle-left"></i>
                    <div class="dots">
                        <i class="dot active"></i>
                        <i class="dot"></i>
                        <i class="dot"></i>
                    </div>
                    <i class="angle-icon fa fa-angle-right"></i>
                </div>`;
    }

    render(){
        this.carouselDOM.innerHTML = this.listHTML() + this.actionsHTML();
    }
}

export {Carousel}