'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, domElement) {
    app.onStart(function (initialView) {
        var component = _react2.default.createClass({
            getInitialState: function getInitialState() {
                return {
                    view: initialView
                };
            },
            componentDidMount: function componentDidMount() {
                var _this = this;

                app.onView(function (view) {
                    _this.setState({ view: view });
                });
            },
            render: function render() {
                return this.state.view;
            }
        });

        var element = _react2.default.createElement(component);
        _reactDom2.default.render(element, domElement);
    });
};
