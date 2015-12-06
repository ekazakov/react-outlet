import React, {PropTypes} from 'react';
import Outlet from './outlet';
import outletable from './outletable';


@outletable
class Template extends React.Component {
    static propTypes = {
        outlets: PropTypes.shape({
            header: PropTypes.node.isRequired,
            body: PropTypes.node.isRequired,
            footer: PropTypes.node.isRequired
        }).isRequired
    }

    render() {
        const outlets = this.props.outlets;

        return <div>
            <div id="header" style={{border: '1px solid red', padding: 10}}>
                {outlets.header}
            </div>
            <div id="body" style={{border: '1px solid gold', padding: 10}}>
                {outlets.body}
            </div>
            <div id="footer" style={{border: '1px solid blue', padding: 10}}>
                {outlets.footer}
            </div>
        </div>;
    }
}


export default (Template);