import { useState } from "react";
import { AppRoutes } from "./routes";
import { AppProvider } from "providers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  );
}

export default App;
