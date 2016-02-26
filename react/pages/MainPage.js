import React from "react";
import renderClient from '../client.js';
import render from '../server.js';

class MainPage extends React.Component {
    render() {
        return <div>This is the main page wrapper...</div>;
    }
}

export default function () {
    console.log('RS2016', MainPage);
    return render(MainPage);
}

//client rendering
//renderClient(MainPage);