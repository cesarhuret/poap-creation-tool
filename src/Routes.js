import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import EditPOAP from './Pages/EditPOAP';
import POAPClass from './Pages/POAP'

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">            
                    <POAPClass/>
                </Route>
                <Route path="/edit">
                    
                    <EditPOAP/>

                </Route>
            </Switch>
        </BrowserRouter>

    );
}

