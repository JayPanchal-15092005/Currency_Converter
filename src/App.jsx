import React from "react";
import CurrencyConverter from "./currencyConverter.jsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
   <div>
     <div>
      <CurrencyConverter />
    </div>
    <div>
      <Analytics />
    </div>
   </div>
  );
}

export default App;
