import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY:  'scroll', border: '2px dashed teal', height: '760px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;