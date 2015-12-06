import React from 'react';
import Outlet from './outlet';
import Template from './template';

export default class Sample extends React.Component {
    render() {
        return <div>
            <Template>
                <Outlet name="header">
                    Hello from Header
                    \nsd
                </Outlet>
                <Outlet name="body">
                    <p>Hello from Body</p>
                    <p>Hello from Body 2</p>
                </Outlet>

            </Template>
        </div>;
    }
}