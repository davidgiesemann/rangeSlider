# RangeSlider

## Installation

    npm install js-rangeslider

## Usage

Either use the minified scripts and styles from the dist folder:

    <link rel="stylesheet" href="dist/js-rangeslider.min.css" />
    <script src="dist/js-rangeslider.min.js"></script>

or use the source files in your own workflow/bundle-tool:

    import styles from "js-rangeslider/src/js-rangeslider"
    import RangeSlider from "js-rangeslider/src/js-rangeslider"

If you want to override the default styling, use scss to override the default values before importing:

    // custom-rangeslider-styles.scss
    $barBackground: #dedede;
    $handleBackground: #444444;
    $progressBackground: #c00;

    @import "js-rangeslider/src/js-rangeslider";

Finally, add an HTML-Element with class "rangeSlider" to your markup an initialize you rangeSlider:

    <div class="rangeSlider" data-min="0" data-max="100" data-step="1" data-vmin="20" data-vmax="80"></div>

    <script>
        new RangeSlider(document.querySelector(".rangeSlider"))
    </script>

## Options

Initialize your rangeSlider using an Object with some or all of these options:

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>min</td>
            <td>Number</td>
            <td>0</td>
            <td>The absolute minimum of your rangeSlider</td>
        </tr>
        <tr>
            <td>max</td>
            <td>Number</td>
            <td>100</td>
            <td>The absolute maximum of your rangeSlider</td>
        </tr>
        <tr>
            <td>minInputName</td>
            <td>String</td></td>
            <td>"min"</td></td>
            <td>The name of the input holding the minimum-value, might be important when using server-side input-processing</td>
        </tr>
        <tr>
            <td>maxInputName</td>
            <td>String</td>
            <td>"max"</td>
            <td>The name of the input holding the maximum-value, might be important when using server-side input-processing</td>
        </tr>
        <tr>
            <td>minInputValue</td>
            <td>Number</td>
            <td>0</td>
            <td>The current minimum-value</td>
        </tr>
        <tr>
            <td>maxInputValue</td>
            <td>Number</td>
            <td>100</td>
            <td>The current maximum-value</td>
        </tr>
        <tr>
            <td>step</td>
            <td>Number</td>
            <td>1</td>
            <td>The value between each separate step of your range</td>
        </tr>
        <tr>
            <td>outputFormatter</td>
            <td>Function</td>
            <td>output => `${output} &amp;euro;`</td>
            <td>A function accepting the current output as a parameter and returning a formatted string to output</td>
        </tr>
        <tr>
            <td>progress</td>
            <td>Boolean</td>
            <td>true</td>
            <td>Wether or not a progress bar between each of the rangeSlider-handles will be rendered</td>
        </tr>
        <tr>
            <td>output</td>
            <td>Boolean</td>
            <td>true</td>
            <td>Wether or not two output-fields will be rendered on the bottom left and right ends of your rangeSlider</td>
        </tr>
    </tbody>
</table>
