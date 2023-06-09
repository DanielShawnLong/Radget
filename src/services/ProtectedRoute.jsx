import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import Auth from '../../Services/Auth';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest} 
            render={ props => {
                if (Auth.isAuthenticated()) {
                    return <Component {...props} />
                }
                else {
                    window.location.href = '/';

                    return <Redirect to={ {
                        pathname: "/",
                        state: {
                            from: props.location
                        }
                    } }
                    />
                }
            } }
        />
    );
};