import React from 'react';
import ReactDOM from 'react-dom';

export default (app, domElement) => {
    app.onStart(initialView => {
        const component = React.createClass({
            getInitialState() {
                return {
                    view: initialView
                };
            },
            componentDidMount() {
                app.onView(view => {
                    this.setState({view});
                });
            },
            render() {
                return this.state.view;
            }
        });

        const element = React.createElement(component);
        ReactDOM.render(
            element,
            domElement
        );
    });
};
