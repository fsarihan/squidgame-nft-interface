import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {DAppProvider} from "@usedapp/core";
import GA4React from "ga-4-react";

ReactDOM.render(
    <React.StrictMode>
        <DAppProvider config={{}}>
            <App/>
        </DAppProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
try {
    setTimeout(_ => {
        const ga4react = new GA4React("G-1Y990174FG");
        ga4react.initialize();
    }, 4000);
} catch (err) {
    console.log(err);
}

