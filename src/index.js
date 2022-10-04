/**
 * (c) David Giesemann
 * info@david-giesemann.de
 */

class RangeSlider {
    #element
    #maxInput
    #maxOutput
    #minInput
    #minOutput
    #progress
    #settings

    constructor(element,options){
        this.#element = element
        this.#settings = Object.assign({
            min: this.#element.dataset.min || 0,
            max: this.#element.dataset.max || 100,
            minInputName: "min",
            maxInputName: "max",
            minInputValue: this.#element.dataset.vmin,
            maxInputValue: this.#element.dataset.vmax,
            step: this.#element.dataset.step || 1,
            outputFormatter: output => output,
            outputPrefix: "",
            outputSuffix: "&nbsp;&euro;",
            progress: true,
            output: true,
        },options)

        const slider = this.#getHTMLElement("div")
        slider.className = "slider"

        if(this.#settings.progress){
            this.#progress = this.#getHTMLElement("div")
            this.#progress.className = "progress"
            slider.appendChild(this.#progress)
        }

        this.#minInput = this.#getHTMLElement("input",{
            type: "range",
            min: this.#settings.min,
            max: this.#settings.max,
            name: this.#settings.minInputName,
            value: this.#settings.minInputValue,
            step: this.#settings.step
        })
        slider.appendChild(this.#minInput)

        this.#maxInput = this.#getHTMLElement("input",{
            type: "range",
            min: this.#settings.min,
            max: this.#settings.max,
            name: this.#settings.maxInputName,
            value: this.#settings.maxInputValue,
            step: this.#settings.step
        })
        slider.appendChild(this.#maxInput)

        this.#element.appendChild(slider)

        if(this.#settings.output){
            const output = this.#getHTMLElement("div")
            output.className = "output"

            this.#minOutput = this.#getHTMLElement("span")
            output.appendChild(this.#minOutput)

            this.#maxOutput = this.#getHTMLElement("span")
            output.appendChild(this.#maxOutput)

            this.#element.appendChild(output)
        }

        this.min = this.#settings.minInputValue
        this.max = this.#settings.maxInputValue

        this.#init()
    }

    get min(){
        return this.#minInput.value * 1
    }

    get max(){
        return this.#maxInput.value * 1
    }

    set min(v){
        this.#minInput.value = v <= this.max ? v : this.max

        if(this.#settings.output) this.#minOutput.innerHTML = `${this.#settings.outputPrefix}${this.#settings.outputFormatter(this.min)}${this.#settings.outputSuffix}`

        const quotient = (this.min - this.#settings.min) / (this.#settings.max - this.#settings.min)
        const percentage = quotient * 100
        const handleDiameter = this.#element.querySelector(".slider").clientHeight

        if(this.#settings.progress) this.#progress.style.left = `calc( ${percentage}% - ${quotient} * ${handleDiameter}px )`
    }

    set max(v){
        this.#maxInput.value = v >= this.min ? v : this.min

        if(this.#settings.output) this.#maxOutput.innerHTML = `${this.#settings.outputPrefix}${this.#settings.outputFormatter(this.max)}${this.#settings.outputSuffix}`

        const quotient = 1 - ((this.max - this.#settings.min) / (this.#settings.max - this.#settings.min))
        const percentage = quotient * 100
        const handleDiameter = this.#element.querySelector(".slider").clientHeight

        if(this.#settings.progress) this.#progress.style.right = `calc( ${percentage}% - ${quotient} * ${handleDiameter}px )`
    }

    static #getHTMLElement(tagName,attributes){
        const element = document.createElement(tagName)

        for (const attribute in attributes){
            element.setAttribute(attribute,attributes[attribute])
        }

        return element
    }

    #init(){
        this.#element.addEventListener("input", e => {
            if(e.target === this.#minInput) this.min = e.target.value
            if(e.target === this.#maxInput) this.max = e.target.value
        })
    }
}

module.exports = RangeSlider
