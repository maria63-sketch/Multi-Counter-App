import { Routes, Route } from "react-router-dom";
import MultiCounterApp from "./page/MultiCounterApp";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export default function App() {
  return (
    <div className="bg-[#171717] text-white">
      <Routes>
        <Route path="/" element={<MultiCounterApp/>} />
      </Routes>

    </div>
  )
}

