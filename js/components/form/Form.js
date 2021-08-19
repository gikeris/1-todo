class Form{
    constructor(selector){
        this.selector = selector;

        this.DOM = null;
    }
    init(){
        if(!this.isValidSelector() || !this.findTargetElement())
         {
             return false;
         }
         this.findTargetElement();
    }

    isValidSelector(){
        if (typeof this.selector !== 'string' || this.selector === ''){
            console.error('ERROR: selector turi buti ne tuscias string')
            return false;
        }
        return true;
    }
    findTargetElement(){
        const DOM = document.querySelector(this.selector);
    
        if (!DOM) {
            console.error('Error: pagal pateikta selector, elementas neegzistuoja');
            return false;
         }
         return true;
    }
}

export { Form };