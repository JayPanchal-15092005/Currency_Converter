import React from "react";
import CurrencyConverter from "./currencyConverter.jsx";
import { Analytics } from "@vercel/analytics/react;"

function App() {
  return (
    <div>
      <CurrencyConverter />
      <div>
        <Analytics />
      </div>
    </div>
    
  );
}

export default App;
