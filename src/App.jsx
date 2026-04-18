import './App.css';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Families from './components/Families';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';

export default function App() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Families />
      <EventDetails />
      <Footer />
    </main>
  );
}
