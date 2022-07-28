import "./App.css";
import Movies from "./components/Movies";
import Movie from "./components/movie";
import { Routes, Route, Navigate } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/Customers";
import NotFound from "./components/not-found";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Routes>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<Movie />}></Route>
        <Route index element={<Navigate to="/movies" replace />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default App;
