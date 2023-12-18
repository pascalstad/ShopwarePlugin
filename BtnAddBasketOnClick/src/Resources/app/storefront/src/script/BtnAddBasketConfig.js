import Plugin from 'src/plugin-system/plugin.class'

export default class BtnAddBasketConfig extends Plugin {

    static options = {
        buyBtnText: 'Adding to cart',
        buyBtnBackgroundColor: 'grey'
    }
    
    init() {
        this.PluginManager = window.PluginManager

        this.registerEvent()
    }

    registerEvent() {
        this.el.removeEventListener('click', this.onClick.bind(this))
        this.el.addEventListener('click', this.onClick.bind(this))
    }

    onClick() {
        const buyBtnCurrentText = this.el.innerText
        const buyBtnCurrentColor = this.el.style.backgroundColor
        const buyBtnCurrentBorderColor = this.el.style.borderColor

        this.el.innerText = this.options.buyBtnText
        this.el.style.backgroundColor = this.options.buyBtnBackgroundColor
        this.el.style.borderColor = this.options.buyBtnBackgroundColor
        
        setTimeout(function() {
            this.el.innerText = buyBtnCurrentText
            this.el.style.backgroundColor = buyBtnCurrentColor
            this.el.style.borderColor = buyBtnCurrentBorderColor
        }.bind(this), 1000)
    }
}