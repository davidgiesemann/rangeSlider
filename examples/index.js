/**
 * (c) David Giesemann
 * info@david-giesemann.de
 */

import "./index.scss"
import RangeSlider from "../src/js-rangeslider"

document.querySelectorAll(".default").forEach(el => {
    new RangeSlider(el)
})

document.querySelectorAll(".step-25").forEach(el => {
    new RangeSlider(el, {
        outputFormatter: o => `${o.toFixed(2)} kg`
    })
})

document.querySelectorAll(".step-lg").forEach(el => {
    new RangeSlider(el, {
        outputFormatter: o => `${o / 1000} k`
    })
})

document.querySelectorAll(".no-output").forEach(el => {
    const slider = new RangeSlider(el, {
        output: false
    })

    const button = document.createElement("button")
    button.textContent = "Alert slider values"
    button.onclick = () => alert(`Your values are: ${slider.min} and ${slider.max}`)

    el.after(button)
})

