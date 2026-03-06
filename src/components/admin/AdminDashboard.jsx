import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import CaseStudyList from './CaseStudyList';
import CaseStudyEditor from './CaseStudyEditor';
import { LogOut, LayoutDashboard, Users, Plus } from 'lucide-react';
import { caseStudyAPI } from '../../services/api';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [activeView, setActiveView] = useState('list');
  const [selectedCase, setSelectedCase] = useState(null);
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    try {
      const response = await caseStudyAPI.getAll();
      setCaseStudies(response.data.data);
    } catch (error) {
      console.error('Failed to load case studies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleEdit = (caseStudy) => {
    setSelectedCase(caseStudy);
    setActiveView('edit');
  };

  const handleNew = () => {
    setSelectedCase(null);
    setActiveView('edit');
  };

  const handleBack = () => {
    setSelectedCase(null);
    setActiveView('list');
    loadCaseStudies(); // Refresh list
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#2B333C] text-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">Case Study Admin</h1>
              {user && (
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  {user.name}
                </span>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* Navigation */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setActiveView('list')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                activeView === 'list' 
                  ? 'bg-[#9E4A47] text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Users size={18} />
              Case Studies
            </button>
            <button
              onClick={handleNew}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <Plus size={18} />
              New Case Study
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeView === 'list' && (
          <CaseStudyList
            caseStudies={caseStudies}
            loading={loading}
            onEdit={handleEdit}
            onRefresh={loadCaseStudies}
          />
        )}

        {activeView === 'edit' && (
          <CaseStudyEditor
            caseStudy={selectedCase}
            onBack={handleBack}
            onSave={loadCaseStudies}
          />
        )}
      </div>
    </div>
  );
}