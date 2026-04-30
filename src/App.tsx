/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <AuthLayout 
            title="Sign in to your account" 
            subtitle="Enter your details to access your secure portal"
          >
            <LoginForm />
          </AuthLayout>
        } />
        
        <Route path="/signup" element={
          <AuthLayout 
            title="Create your account" 
            subtitle="Join SecureAuth Pro and start protecting your identity"
          >
            <SignupForm />
          </AuthLayout>
        } />
        
        <Route path="/forgot-password" element={
          <AuthLayout 
            title="Reset your password" 
            subtitle="We'll send you a link to get back into your account"
          >
            <ForgotPasswordForm />
          </AuthLayout>
        } />
        
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

