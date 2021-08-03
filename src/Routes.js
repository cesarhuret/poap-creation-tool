import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { POAP } from './Pages/POAP'

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">                
                    <POAP/>
                </Route>
                <Route path="/about">
                    
                    {/* <About/> */}

                </Route>
            </Switch>
        </BrowserRouter>

    );
}

