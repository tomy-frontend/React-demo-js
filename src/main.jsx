// 最初の雛形的なもの
import  { StrictMode } from "react";
import  { createRoot } from "react-dom/client";
import  { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //より堅実なルールでReactを書いていくよという宣言、必須でつける
  <StrictMode>
    <App />
  </StrictMode>
); 

