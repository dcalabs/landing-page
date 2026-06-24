import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import PortfolioList from './components/PortfolioList';
import { getProjectBySlug } from './data/projects';

function App() {
  const isPortfolioList = window.location.pathname === '/portfolio' || window.location.pathname === '/portfolio/';
  const projectMatch = window.location.pathname.match(/^\/portfolio\/([^/]+)\/?$/);
  const project = projectMatch ? getProjectBySlug(projectMatch[1]) : undefined;

  if (isPortfolioList) {
    return <PortfolioList />;
  }

  if (projectMatch && project) {
    return <ProjectDetail project={project} />;
  }

  if (projectMatch && !project) {
    return <PortfolioList />;
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
