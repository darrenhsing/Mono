import React, { Component } from "react"
import { Provider } from "react-redux"
import { View, Text, StatusBar } from "react-native"
import store from "./store"

import { NativeRouter as Router, Switch, Route, AndroidBackButton } from "react-router-native"
import Home from "./screens/Home"
import SleepMode from "./screens/SleepMode"

export default class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{
                    backgroundColor: "#FFFFFF",
                    flex: 1
                }}>
                    <StatusBar
                        backgroundColor="#FFFFFF"
                        barStyle="dark-content" />
                    <Router>
                        <AndroidBackButton>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/sleep" component={SleepMode} />
                            </Switch>
                        </AndroidBackButton>
                    </Router>
                </View>
            </Provider>
        )
    }
}