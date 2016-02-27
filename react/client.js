import ReactDOM from 'react-dom';
import React from 'react';

export default function (Page) {
    return ReactDOM.render(<Page />, document.getElementById("content"));
}