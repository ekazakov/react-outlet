import ReactDOM from 'react-dom';
import React from 'react';
import Sample from './sample';

class App extends React.Component {
    render() {
        return <div>
            <h1>Hello</h1>
            <Sample/>
        </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));