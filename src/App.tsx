import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { getProjectBySlug } from './data/projects';

function App() {
  const projectMatch = window.location.pathname.match(/^\/portfolio\/([^/]+)\/?$/);
  const project = projectMatch ? getProjectBySlug(projectMatch[1]) : undefined;

  if (project) {
    return <ProjectDetail project={project} />;
  }

  return (
    <div className="min-h-screen bg-[#050607]">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
