import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import VerifyOTP from './pages/Auth/VerifyOTP';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import MockTest from './pages/MockTest/MockTest';
import MockSession from './pages/MockTest/MockSession';
import MockHistory from './pages/MockTest/MockHistory';

function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#18181b',
            color: '#fff',
            border: '1px solid #333',
          },
        }}
      />
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/mock-test" element={<MockTest />} />
          <Route path="/mock-test/history" element={<MockHistory />} />
          <Route path="/mock-test/session/new" element={<MockSession />} />
          <Route path="/mock-test/session/:sessionId" element={<MockSession />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
