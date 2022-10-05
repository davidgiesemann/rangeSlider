/**
 * (c) David Giesemann
 * info@david-giesemann.de
 */

import "../src/js-rangeslider.scss"
import RangeSlider from "../src/js-rangeslider"

document.querySelectorAll(".default").forEach(el => {
    new RangeSlider(el)
})

document.querySelectorAll(".step-25").forEach(el => {
    new RangeSlider(el,{
        outputFormatter: o => `${o.toFixed(2)} kg`
    })
})
