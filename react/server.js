import AppTest from './AppTest';
import ReactDOMServer from "react-dom/server";
import React from "react";

export const content = ReactDOMServer.renderToString(<AppTest />);