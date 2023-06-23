import React from "react";
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

const App = ({ history }) => {
    console.log(history)
    return (
        <StylesProvider generateClassName={generateClassName} >
            {/* This means history path */}
            <Router history={history}>
                <Switch>
                    
                </Switch>
            </Router>
        </StylesProvider>
    )
}

export default App