import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const Trending = lazy(() => import('./pages/Trending'));
const MustSee = lazy(() => import('./pages/MustSee'));
const HiddenGems = lazy(() => import('./pages/HiddenGems'));
const DramaDetail = lazy(() => import('./pages/DramaDetail'));
const Genres = lazy(() => import('./pages/Genres'));
const Search = lazy(() => import('./pages/Search'));
const GenreDetail = lazy(() => import('./pages/GenreDetail'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={
        <div className="full-page-loading">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/must-see" element={<MustSee />} />
          <Route path="/hidden-gems" element={<HiddenGems />} />
          <Route path="/drama/:id" element={<DramaDetail />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres/:genreId" element={<GenreDetail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;