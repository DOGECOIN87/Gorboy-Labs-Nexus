import { Toaster } from "sonner";
import Home from "@/pages/Home";

function App() {
  return (
    <>
      <Toaster position="top-right" theme="dark" />
      <div className="min-h-screen bg-black text-white font-['Space_Grotesk']">
        <Home />
      </div>
    </>
  );
}

export default App;
