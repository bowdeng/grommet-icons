'use strict';

exports.__esModule = true;
exports.Servers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Servers = exports.Servers = function Servers(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Servers' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M7,19 L8,19 L8,18 L7,18 L7,19 Z M18,19 L19,19 L19,18 L18,18 L18,19 Z M1,23 L12,23 L12,1 L1,1 L1,23 Z M12,23 L23,23 L23,1 L12,1 L12,23 Z M4,5 L9,5 L4,5 Z M15,5 L20,5 L15,5 Z M4,9 L9,9 L4,9 Z M15,9 L20,9 L15,9 Z M4,13 L9,13 L4,13 Z M15,13 L20,13 L15,13 Z' })
  );
};