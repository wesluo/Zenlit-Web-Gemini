import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import Mission from '../components/Mission';
import BlogSection from '../components/BlogSection';
import FaqSection from '../components/FaqSection';
import InfoBlock from '../components/InfoBlock';

const Home = () => {
  return (
    <div className="min-h-screen bg-midnight overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        <Mission />

        {/* Why Zenlit? Section */}
        <section className="py-20 md:py-32 container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoBlock 
            title="DAILY EARNINGS"
            description="ZNLT based on safe miles. The better you drive, the more you earn—every single trip."
            accentColor="gold"
          />
          <InfoBlock 
            title="CLARITY & CONTROL"
            description="Transparent score, instant earnings, no hardware. Track your progress and redeem whenever you want."
            accentColor="purple"
          />
          <InfoBlock 
            title="FUTURE BENEFITS"
            description="Better quotes and discounts with strong ZenScore. Your safe driving pays off today and tomorrow."
            accentColor="emerald"
          />
        </section>

        <BlogSection />
        
        <FaqSection />

        <div id="how-it-works">
          <FeatureSection 
            id="download"
            title="Download the Zenlit App"
            subtitle="Step 1"
            description="Get started in minutes. Available on iOS and Android."
            imageSrc="/assets/drivescreen-design.png"
            accentColor="purple"
            alignment="left"
          />

          <FeatureSection 
            id="drive"
            title="Drive Smart to Build Your ZenScore"
            subtitle="Step 2"
            description="Our advanced technology measures your driving habits in real time."
            imageSrc="/assets/homescreen-design.png"
            accentColor="gold"
            alignment="right"
          />

          <FeatureSection 
            id="redeem"
            title="Earn ZNLT & Redeem Rewards"
            subtitle="Step 3"
            description="Exchange your tokens for exclusive perks, discounts, and more."
            imageSrc="/assets/profile-design.png"
            accentColor="emerald"
            alignment="left"
          />
        </div>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
