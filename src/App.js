import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/Experience/WorkExperience';
import SoftwareDevelopment from './components/Experience/SoftwareDevelopment';
import DataAnalytics from './components/Experience/DataAnalytics';
import AIML from './components/Experience/AIML';
import ProjectManagement from './components/Experience/ProjectManagement';
import StrategyBusiness from './components/Experience/StrategyBusiness';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="p-6 space-y-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<WorkExperience />} />
          <Route path="/work/software-development" element={<SoftwareDevelopment />} />
          <Route path="/work/data-analytics" element={<DataAnalytics />} />
          <Route path="/work/ai-ml" element={<AIML />} />
          <Route path="/work/project-management" element={<ProjectManagement />} />
          <Route path="/work/strategy-business" element={<StrategyBusiness />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;