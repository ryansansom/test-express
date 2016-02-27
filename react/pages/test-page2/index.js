import React from "react";
import renderClient from '../../client.js';
import render from '../../server.js';

class TestPage2 extends React.Component {
    render() {
        return <div>This is the test page 2...</div>;
    }
}

export default function () {
    return render(TestPage2);
}

//client rendering
if (process.env.CLIENT_RENDER) {
    require('../../small.less');
    renderClient(TestPage2);
}