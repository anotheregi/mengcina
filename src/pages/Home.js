import { useEffect, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { getTrending, getMustSee, getHiddenGems } from '../api';

// Lazy load the DramaCard component
const DramaCard = lazy(() => import('../components/DramaCard'));

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [mustSee, setMustSee] = useState([]);
  const [hiddenGems, setHiddenGems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [trendingResponse, mustSeeResponse, hiddenGemsResponse] = await Promise.all([
          getTrending(),
          getMustSee(),
          getHiddenGems()
        ]);

        setTrending(Array.isArray(trendingResponse) ? trendingResponse.slice(0, 6) : []);
        setMustSee(Array.isArray(mustSeeResponse) ? mustSeeResponse.slice(0, 6) : []);
        setHiddenGems(Array.isArray(hiddenGemsResponse) ? hiddenGemsResponse.slice(0, 6) : []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
        setTrending([]);
        setMustSee([]);
        setHiddenGems([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <main>
      <section className="hero">
        <h1>Discover the Best Asian Dramas</h1>
        <p>Explore trending and must-watch dramas from across Asia</p>
      </section>

      <TrendingSection dramas={trending} />
      <MustSeeSection dramas={mustSee} />
      <HiddenGemsSection dramas={hiddenGems} />
    </main>
  );
}

// Sub-components with proper Suspense boundaries
const TrendingSection = ({ dramas }) => (
  <section className="section">
    <h2>Trending Now</h2>
    <DramaGrid dramas={dramas} />
    <Link to="/trending" className="see-more">View All Trending →</Link>
  </section>
);

const MustSeeSection = ({ dramas }) => (
  <section className="section">
    <h2>Must See Dramas</h2>
    <DramaGrid dramas={dramas} />
    <Link to="/must-see" className="see-more">View All Must See →</Link>
  </section>
);

const HiddenGemsSection = ({ dramas }) => (
  <section className="section">
    <h2>Hidden Gems</h2>
    <DramaGrid dramas={dramas} />
    <Link to="/hidden-gems" className="see-more">View All Hidden Gems →</Link>
  </section>
);

const DramaGrid = ({ dramas }) => (
  <div className="drama-grid">
    {dramas.length > 0 ? (
      dramas.map(drama => (
        <Suspense key={drama.id} fallback={<div className="card-skeleton">Loading...</div>}>
          <DramaCard drama={drama} />
        </Suspense>
      ))
    ) : (
      <p>No dramas found in this category</p>
    )}
  </div>
);