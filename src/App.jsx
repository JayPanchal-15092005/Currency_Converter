import React from "react";
import CurrencyConverter from "./currencyConverter.jsx";
import { Analytics } from "@vercel/analytics/react;"

function App() {
  return (
    <div>
      <CurrencyConverter />
      <Analytics />
    </div>
    
  );
}

export default App;
