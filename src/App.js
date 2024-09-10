import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <Dashboard>
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} /> */}
        </Routes>
      </Dashboard>
    </Router>
  );
}

export default App;