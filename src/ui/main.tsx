import { LogicalSide } from "@common/logical-side";
import { NetworkMessages } from "@common/network/messages";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

LogicalSide.current = LogicalSide.UI;

window.onmessage = (event) =>
  NetworkMessages.handleIncomingMessage(event.data.pluginMessage);

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
