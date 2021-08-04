import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import POAPClass from './Pages/POAP'

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">                
                    <POAPClass/>
                </Route>
                <Route path="/about">
                    
                    {/* <About/> */}

                </Route>
            </Switch>
        </BrowserRouter>

    );
}

