import React, {Component} from 'react';
import LoggedOut from "./src/screens/LoggedOut";
import Login from "./src/screens/Login";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Login/>
        );
    }
}
