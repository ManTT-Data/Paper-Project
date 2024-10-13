import React from "react";
import Index from "../Pages/LoginPage/index.js";
import AppRouter from "../Routes/index.js";

function App() {
  return (
    <React.Fragment>
      <AppRouter>
        <Index />
      </AppRouter>
    </React.Fragment>
  );
}
export default App;
