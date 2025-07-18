import React, { useState } from 'react';
import { Mail, User, Lock, Eye, EyeOff, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase, constructEmail } from '../lib/supabase';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

type UserType = 'admin' | 'staff' | 'student';
type AuthStep = 'select' | 'login' | 'otp' | 'forgot-password' | 'success';

interface LoginFormData {
  email: string;
  staffId: string;
  rollNo: string;
  password: string;
  otp: string;
}

const LoginPage = () => {
  const componentRef = useGSAPAnimation();
  const [userType, setUserType] = useState<UserType>('admin');
  const [authStep, setAuthStep] = useState<AuthStep>('select');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    staffId: '',
    rollNo: '',
    password: '',
    otp: ''
  });

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleAdminEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      setError('Please enter your email address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: formData.email,
        options: {
          shouldCreateUser: false,
          emailRedirectTo: `${window.location.origin}/login?verified=true`
        }
      });

      if (error) throw error;

      setSuccess('Magic link sent to your email. Please check your inbox and click the link to login.');
      setTimeout(() => {
        setAuthStep('select');
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to send magic link');
    } finally {
      setLoading(false);
    }
  };

  // Check for magic link verification on component mount
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('verified') === 'true') {
      setSuccess('Login successful! Redirecting...');
      setAuthStep('success');
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  }, []);

  const handleStaffStudentLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = userType === 'staff' ? formData.staffId : formData.rollNo;
    
    if (!id || !formData.password) {
      setError(`Please enter your ${userType === 'staff' ? 'Staff ID' : 'Roll Number'} and password`);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const email = constructEmail(id, userType);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: formData.password
      });

      if (error) throw error;

      setSuccess('Login successful! Redirecting...');
      setAuthStep('success');
      
      // Redirect after successful login
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (err: any) {
      if (err.message.includes('Invalid login credentials')) {
        setError('Invalid credentials. If this is your first login, please use "Forgot Password" to set up your account.');
      } else {
        setError(err.message || 'Login failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = userType === 'staff' ? formData.staffId : formData.rollNo;
    
    if (!id) {
      setError(`Please enter your ${userType === 'staff' ? 'Staff ID' : 'Roll Number'}`);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const email = constructEmail(id, userType);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      });

      if (error) throw error;

      setSuccess('Password reset email sent. Please check your inbox.');
      setTimeout(() => setAuthStep('login'), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      staffId: '',
      rollNo: '',
      password: '',
      otp: ''
    });
    setError('');
    setSuccess('');
    setAuthStep('select');
  };

  const renderUserTypeSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 split-text">Welcome Back</h2>
        <p className="mt-2 text-gray-600 reveal">Please select your user type to continue</p>
      </div>

      <div className="grid grid-cols-1 gap-4 reveal">
        {[
          { type: 'admin' as UserType, title: 'Admin', description: 'Login with magic link', icon: Mail },
          { type: 'staff' as UserType, title: 'Staff', description: 'Login with Staff ID', icon: User },
          { type: 'student' as UserType, title: 'Student', description: 'Login with Roll Number', icon: User }
        ].map(({ type, title, description, icon: Icon }) => (
          <button
            key={type}
            onClick={() => {
              setUserType(type);
              setAuthStep('login');
            }}
            className="flex items-center p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex-shrink-0">
              <Icon className="w-8 h-8 text-gray-400 group-hover:text-blue-500" />
            </div>
            <div className="ml-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderAdminLogin = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={resetForm}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
          <p className="text-gray-600">Enter your email to receive a magic link</p>
        </div>
      </div>

      <form onSubmit={handleAdminEmailSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="admin@annamalaiuniversity.ac.in"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Sending Magic Link...' : 'Send Magic Link'}
        </button>
      </form>
    </div>
  );

  const renderStaffStudentLogin = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={resetForm}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {userType === 'staff' ? 'Staff' : 'Student'} Login
          </h2>
          <p className="text-gray-600">
            Enter your {userType === 'staff' ? 'Staff ID' : 'Roll Number'} and password
          </p>
        </div>
      </div>

      <form onSubmit={handleStaffStudentLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {userType === 'staff' ? 'Staff ID' : 'Roll Number'}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={userType === 'staff' ? formData.staffId : formData.rollNo}
              onChange={(e) => handleInputChange(userType === 'staff' ? 'staffId' : 'rollNo', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={userType === 'staff' ? 'Enter your Staff ID' : 'Enter your Roll Number'}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        <button
          type="button"
          onClick={() => setAuthStep('forgot-password')}
          className="w-full text-blue-600 hover:text-blue-700 py-2 text-sm"
        >
          Forgot Password? / First Time Login
        </button>
      </form>
    </div>
  );

  const renderForgotPassword = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setAuthStep('login')}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
          <p className="text-gray-600">
            Enter your {userType === 'staff' ? 'Staff ID' : 'Roll Number'} to reset password
          </p>
        </div>
      </div>

      <form onSubmit={handleForgotPassword} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {userType === 'staff' ? 'Staff ID' : 'Roll Number'}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={userType === 'staff' ? formData.staffId : formData.rollNo}
              onChange={(e) => handleInputChange(userType === 'staff' ? 'staffId' : 'rollNo', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={userType === 'staff' ? 'Enter your Staff ID' : 'Enter your Roll Number'}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Sending Reset Email...' : 'Send Reset Email'}
        </button>
      </form>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center space-y-6">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Success!</h2>
        <p className="text-gray-600 mt-2">{success}</p>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (authStep) {
      case 'select':
        return renderUserTypeSelection();
      case 'login':
        return userType === 'admin' ? renderAdminLogin() : renderStaffStudentLogin();
      case 'forgot-password':
        return renderForgotPassword();
      case 'success':
        return renderSuccess();
      default:
        return renderUserTypeSelection();
    }
  };

  return (
    <div ref={componentRef} className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center">
          <img
            className="h-12 w-auto"
            src="https://cdn.brandfetch.io/idMlWVcyNA/w/300/h/249/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
            alt="Annamalai University"
          />
        </Link>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-green-700 text-sm">{success}</span>
            </div>
          )}

          {renderCurrentStep()}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;