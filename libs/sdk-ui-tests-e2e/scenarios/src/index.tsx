// (C) 2022-2023 GoodData Corporation
import React from "react";
import { createRoot } from "react-dom/client";
import "@babel/polyfill";
import App from "./App";
import { AppProviders } from "./contexts";

import "@gooddata/sdk-ui-filters/styles/css/main.css";
import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "@gooddata/sdk-ui-pivot/styles/css/main.css";
import "@gooddata/sdk-ui-geo/styles/css/main.css";
import "@gooddata/sdk-ui-kit/styles/css/main.css";
import "@gooddata/sdk-ui-ext/styles/css/main.css";
import "@gooddata/sdk-ui-dashboard/styles/css/main.css";

const rootDOMNode = document.getElementById("root");
const root = createRoot(rootDOMNode!);

root.render(
    <AppProviders>
        <App />
    </AppProviders>,
);
