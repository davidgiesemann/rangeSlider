"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _element = /*#__PURE__*/new WeakMap();

var _maxInput = /*#__PURE__*/new WeakMap();

var _maxOutput = /*#__PURE__*/new WeakMap();

var _minInput = /*#__PURE__*/new WeakMap();

var _minOutput = /*#__PURE__*/new WeakMap();

var _progress = /*#__PURE__*/new WeakMap();

var _settings = /*#__PURE__*/new WeakMap();

var _getHTMLElement = /*#__PURE__*/new WeakSet();

var _init = /*#__PURE__*/new WeakSet();

/**
 * (c) David Giesemann
 * info@david-giesemann.de
 */
var RangeSlider = /*#__PURE__*/function () {
  function RangeSlider(_element2, options) {
    _classCallCheck(this, RangeSlider);

    _classPrivateMethodInitSpec(this, _init);

    _classPrivateMethodInitSpec(this, _getHTMLElement);

    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _maxInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _maxOutput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _minInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _minOutput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _progress, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _settings, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _element, _element2);

    _classPrivateFieldSet(this, _settings, Object.assign({
      min: _classPrivateFieldGet(this, _element).dataset.min || 0,
      max: _classPrivateFieldGet(this, _element).dataset.max || 100,
      minInputName: "min",
      maxInputName: "max",
      minInputValue: _classPrivateFieldGet(this, _element).dataset.vmin,
      maxInputValue: _classPrivateFieldGet(this, _element).dataset.vmax,
      step: _classPrivateFieldGet(this, _element).dataset.step || 1,
      outputFormatter: function outputFormatter(output) {
        return output;
      },
      outputPrefix: "",
      outputSuffix: "&nbsp;&euro;",
      progress: true,
      output: true
    }, options));

    var slider = _classPrivateMethodGet(this, _getHTMLElement, _getHTMLElement2).call(this, "div");

    slider.className = "slider";

    if (_classPrivateFieldGet(this, _settings).progress) {
      _classPrivateFieldSet(this, _progress, _classPrivateMethodGet(this, _getHTMLElement, _getHTMLElement2).call(this, "div"));

      _classPrivateFieldGet(this, _progress).className = "progress";
      slider.appendChild(_classPrivateFieldGet(this, _progress));
    }

    _classPrivateFieldSet(this, _minInput, _classPrivateMethodGet(this, _getHTMLElement, _getHTMLElement2).call(this, "input", {
      type: "range",
      min: _classPrivateFieldGet(this, _settings).min,
      max: _classPrivateFieldGet(this, _settings).max,
      name: _classPrivateFieldGet(this, _settings).minInputName,
      value: _classPrivateFieldGet(this, _settings).minInputValue,
      step: _classPrivateFieldGet(this, _settings).step
    }));

    slider.appendChild(_classPrivateFieldGet(this, _minInput));

    _classPrivateFieldSet(this, _maxInput, _classPrivateMethodGet(this, _getHTMLElement, _getHTMLElement2).call(this, "input", {
      type: "range",
      min: _classPrivateFieldGet(this, _settings).min,
      max: _classPrivateFieldGet(this, _settings).max,
      name: _classPrivateFieldGet(this, _settings).maxInputName,
      value: _classPrivateFieldGet(this, _settings).maxInputValue,
      step: _classPrivateFieldGet(this, _settings).step
    }));

    slider.appendChild(_classPrivateFieldGet(this, _maxInput));

    _classPrivateFieldGet(this, _element).appendChild(slider);

    if (_classPrivateFieldGet(this, _settings).output) {
      var output = _classPrivateMethodGet(this, _getHTMLElement, _getHTMLElement2).call(this, "div");

      output.className = "output";

      _classPrivateFieldSet(this, _minOutput, _classPrivateMethodGet(this, _getHTMLElement, _getHTMLElement2).call(this, "span"));

      output.appendChild(_classPrivateFieldGet(this, _minOutput));

      _classPrivateFieldSet(this, _maxOutput, _classPrivateMethodGet(this, _getHTMLElement, _getHTMLElement2).call(this, "span"));

      output.appendChild(_classPrivateFieldGet(this, _maxOutput));

      _classPrivateFieldGet(this, _element).appendChild(output);
    }

    this.min = _classPrivateFieldGet(this, _settings).minInputValue;
    this.max = _classPrivateFieldGet(this, _settings).maxInputValue;

    _classPrivateMethodGet(this, _init, _init2).call(this);
  }

  _createClass(RangeSlider, [{
    key: "min",
    get: function get() {
      return _classPrivateFieldGet(this, _minInput).value * 1;
    },
    set: function set(v) {
      _classPrivateFieldGet(this, _minInput).value = v <= this.max ? v : this.max;
      if (_classPrivateFieldGet(this, _settings).output) _classPrivateFieldGet(this, _minOutput).innerHTML = "".concat(_classPrivateFieldGet(this, _settings).outputPrefix).concat(_classPrivateFieldGet(this, _settings).outputFormatter(this.min)).concat(_classPrivateFieldGet(this, _settings).outputSuffix);

      var quotient = (this.min - _classPrivateFieldGet(this, _settings).min) / (_classPrivateFieldGet(this, _settings).max - _classPrivateFieldGet(this, _settings).min);

      var percentage = quotient * 100;

      var handleDiameter = _classPrivateFieldGet(this, _element).querySelector(".slider").clientHeight;

      if (_classPrivateFieldGet(this, _settings).progress) _classPrivateFieldGet(this, _progress).style.left = "calc( ".concat(percentage, "% - ").concat(quotient, " * ").concat(handleDiameter, "px )");
    }
  }, {
    key: "max",
    get: function get() {
      return _classPrivateFieldGet(this, _maxInput).value * 1;
    },
    set: function set(v) {
      _classPrivateFieldGet(this, _maxInput).value = v >= this.min ? v : this.min;
      if (_classPrivateFieldGet(this, _settings).output) _classPrivateFieldGet(this, _maxOutput).innerHTML = "".concat(_classPrivateFieldGet(this, _settings).outputPrefix).concat(_classPrivateFieldGet(this, _settings).outputFormatter(this.max)).concat(_classPrivateFieldGet(this, _settings).outputSuffix);

      var quotient = 1 - (this.max - _classPrivateFieldGet(this, _settings).min) / (_classPrivateFieldGet(this, _settings).max - _classPrivateFieldGet(this, _settings).min);

      var percentage = quotient * 100;

      var handleDiameter = _classPrivateFieldGet(this, _element).querySelector(".slider").clientHeight;

      if (_classPrivateFieldGet(this, _settings).progress) _classPrivateFieldGet(this, _progress).style.right = "calc( ".concat(percentage, "% - ").concat(quotient, " * ").concat(handleDiameter, "px )");
    }
  }]);

  return RangeSlider;
}();

function _getHTMLElement2(tagName, attributes) {
  var element = document.createElement(tagName);

  for (var attribute in attributes) {
    element.setAttribute(attribute, attributes[attribute]);
  }

  return element;
}

function _init2() {
  var _this = this;

  _classPrivateFieldGet(this, _element).addEventListener("input", function (e) {
    if (e.target === _classPrivateFieldGet(_this, _minInput)) _this.min = e.target.value;
    if (e.target === _classPrivateFieldGet(_this, _maxInput)) _this.max = e.target.value;
  });
}

module.exports = RangeSlider;
