import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SliderSection from "./components/SliderSection";

const App = () => {
  return (
    <>
      <div className=" relative z-20 w-full">
        <Navbar />
        <Hero />
        <SliderSection />
        <AboutSection
          id="about"
          title="About Us"
          subtitle="It is a way of understanding a person's identity and purpose in life."
          image="/medias/images/me.jpg"
          heading="Know About us"
          description="Welcome to the mystical world of Sangeeta, your trusted guide on a transformative journey. With a passion for divination and a rich tapestry of skills, I am a seasoned practitioner in the arts of tarot card reading, numerology, crystal predictions, and Vedic wisdom. With three years of dedicated experience, I bring a unique blend of ancient knowledge and intuitive insights to illuminate your path. In the realm of tarot, each card unfolds a story, revealing the hidden threads of your life's tapestry. Numerology, a profound science, unveils the secrets encoded in numbers, offering a roadmap to self-discovery. Crystal predictions harness the energy of Earth's treasures to provide clarity and guidance. Rooted in the timeless wisdom of Vedic traditions, my practice is a harmonious fusion of ancient techniques and modern understanding. Allow me to be your beacon in navigating life's labyrinth, providing clarity, empowerment, and a deeper connection to your inner self. Embark on a journey of self-discovery with Sangeeta, where the magic of divination meets the wisdom of the ages."
        />
      </div>
    </>
  );
};

export default App;
