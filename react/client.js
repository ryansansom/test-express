import ReactDOM from 'react-dom';

export default function (Page) {
    return ReactDOM.render(Page, document.getElementById("content"));
}