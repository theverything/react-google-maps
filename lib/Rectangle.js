"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _creators_RectangleCreator = require("./creators/_RectangleCreator");

/*
 * Original author: @alistairjcbrown
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/80
 */

var _creators_RectangleCreator2 = _interopRequireDefault(_creators_RectangleCreator);

var Rectangle = (function (_Component) {
  _inherits(Rectangle, _Component);

  function Rectangle() {
    _classCallCheck(this, Rectangle);

    _get(Object.getPrototypeOf(Rectangle.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Rectangle, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getBounds() {
      return this.state.rectangle.getBounds();
    }
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state.rectangle.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.rectangle.getEditable();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.rectangle.getVisible();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;

      var rectangleProps = _objectWithoutProperties(_props, ["mapHolderRef"]);

      var rectangle = _creators_RectangleCreator2["default"]._createRectangle(mapHolderRef, rectangleProps);

      this.setState({ rectangle: rectangle });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.rectangle) {
        return _react2["default"].createElement(
          _creators_RectangleCreator2["default"],
          _extends({ rectangle: this.state.rectangle }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creators_RectangleCreator.rectangleDefaultPropTypes, _creators_RectangleCreator.rectangleControlledPropTypes, _creators_RectangleCreator.rectangleEventPropTypes),
    enumerable: true
  }]);

  return Rectangle;
})(_react.Component);

exports["default"] = Rectangle;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]