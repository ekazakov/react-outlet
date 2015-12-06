import React from 'react';
const {toArray: childrenToArray} = React.Children;

const outletable = Wrapped => props => {
    const outlets = childrenToArray(props.children).reduce((result, child) => {
        result[child.props.name] = child.props.children;
        return result;
    }, {});

    return <Wrapped outlets={outlets} {...props}/>
};

export default outletable;