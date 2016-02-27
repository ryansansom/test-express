import React from "react";
import renderClient from '../../client.js';
import render from '../../server.js';

class TestPage1 extends React.Component {
    render() {
        return <div>This is the test page 1...</div>;
    }
}

export default function () {
    return render(TestPage1);
}

//client rendering
if (process.env.CLIENT_RENDER) {
    require('../../small.less');
    renderClient(TestPage1);
}