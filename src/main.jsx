
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TextProvider } from "./TextContext.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <TextProvider>
    <App />
  </TextProvider>
);
