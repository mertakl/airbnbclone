import React, {Component} from 'react';
import Login from "./src/screens/Login";
import {Provider} from "react-redux";
import store from "./src/redux/store";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <Login/>
            </Provider>
        );
    }
}
