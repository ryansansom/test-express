import ReactDOMServer from "react-dom/server";
import React from "react";

export default function(Page, props) {
    return new Promise((resolve, reject) => {
        try {
            return resolve(ReactDOMServer.renderToString(
                <Page {...props}/>
            ));
        } catch (e) {
            reject(e);
        }
    });
}