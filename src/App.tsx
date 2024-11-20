import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import PrivateLayout from './components/layout/PrivateLayout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import PasswordReset from './pages/PasswordReset';
import VideoLibrary from './pages/VideoLibrary';
import HandsOnLabs from './pages/HandsOnLabs';
import DiscussionForum from './pages/DiscussionForum';
import Support from './pages/Support';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Certifications from './pages/Certifications';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/certifications" element={<Certifications />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/video-library" element={<VideoLibrary />} />
          <Route path="/hands-on-labs" element={<HandsOnLabs />} />
          <Route path="/discussion-forum" element={<DiscussionForum />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;