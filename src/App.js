import "./App.css";
import ComparePage from "./pages/ComparePage";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter, Route, Routes } from "react-router";
import WatchlistPage from "./pages/WatchlistPage";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
