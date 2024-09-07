import "./bootstrap";
import "../css/app.css";
import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";


ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
