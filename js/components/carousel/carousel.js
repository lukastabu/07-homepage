class Carousel {
    constructor(selector, cardClass, data, settings){
        this.selector=selector;
        this.cardClass=cardClass;
        this.data=data;
        this.settings=settings;

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
            return [true, 'neteisingas selector'
        };

        if (!this.validData()) {
            return[true, 'neteisingi duomenys ']
        };
        
        if (!this.findTargetElement()) {
            return[true, 'nerastas norimas elementas ']
        };

        this.updateDefaultSettings() {
            if (typeof this.settings !== 'object'
            ||obj == null
            || Array.isArray(obj)) {
                return false;
            }
            return true;
        }

        this.render();
    }

    listHTML() {
        return `
        
        `
    }

    actionsHTML() {
        return `
        
        `
    }

    render(){
        // this.carouselDOM.innerHTML = this.listHTML() + this.actionsHTML();
        const HTML = this.listHTML() + this.actionsHTML();
        this.HTML = 
    }
}