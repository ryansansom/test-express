import ReactDOMServer from "react-dom/server";
import React from "react";

export default function(Page) {
    return new Promise((resolve, reject) => {
        try {
            return resolve(ReactDOMServer.renderToString(
                <Page />
            ));
        } catch (e) {
            reject(e);
        }
    });
}