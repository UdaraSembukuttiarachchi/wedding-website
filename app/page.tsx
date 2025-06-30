import WeddingLanding from '../components/WeddingLanding';
import OurStory from '@/components/OurStory';

export default function Home() {
  return (
    <div>
      {/* Your landing page content */}
      <section className="hero">
        <WeddingLanding />
      </section>
      
      {/* Our Story section */}
      <OurStory tiktokVideoId="7447758598588992784"/>
      
      {/* Other sections */}
    </div>
  );
}