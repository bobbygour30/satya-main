import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Edit3, 
  Trash2, 
  Eye, 
  Copy,
  MoreVertical,
  Calendar,
  Image as ImageIcon,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { caseStudyAPI } from '../../services/api';
import LoadingSpinner from '../common/LoadingSpinner';

export default function CaseStudyList({ caseStudies, loading, onEdit, onRefresh }) {
  const [selectedId, setSelectedId] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const handleDelete = async (id) => {
    setDeleting(true);
    try {
      await caseStudyAPI.delete(id);
      onRefresh();
      setDeleteConfirm(null);
    } catch (error) {
      console.error('Delete failed:', error);
    } finally {
      setDeleting(false);
    }
  };

  const handleDuplicate = async (id) => {
    try {
      await caseStudyAPI.duplicate(id);
      onRefresh();
    } catch (error) {
      console.error('Duplicate failed:', error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await caseStudyAPI.updateStatus(id, status);
      onRefresh();
    } catch (error) {
      console.error('Status update failed:', error);
    }
  };

  const openDropdown = (e, id) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY + 5,
      left: rect.left + window.scrollX - 140
    });
    setSelectedId(selectedId === id ? null : id);
  };

  // Helper function to get the first after image
  const getFirstAfterImage = (caseStudy) => {
    try {
      // Check if heroImages exists and has after array
      if (caseStudy.heroImages?.after && Array.isArray(caseStudy.heroImages.after) && caseStudy.heroImages.after.length > 0) {
        // Get the first image from after array
        const firstImage = caseStudy.heroImages.after[0];
        // Return the URL if it exists
        return firstImage?.url || null;
      }
    } catch (error) {
      console.error('Error getting after image:', error);
    }
    return null;
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-[#2B333C]">All Case Studies</h2>
        <p className="text-gray-600">{caseStudies.length} total</p>
      </div>

      {caseStudies.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <ImageIcon size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No case studies yet</h3>
          <p className="text-gray-600">Click "New Case Study" to create your first one.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => {
            const previewImage = getFirstAfterImage(cs);
            
            // Debug log to see what's being returned
            console.log(`Case study ${cs.name}:`, {
              hasHeroImages: !!cs.heroImages,
              afterArray: cs.heroImages?.after,
              afterLength: cs.heroImages?.after?.length,
              previewImage: previewImage
            });

            return (
              <motion.div
                key={cs._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden relative"
              >
                {/* Preview - First After Image */}
                <div className="relative h-40 bg-gradient-to-br from-[#1a1f26] to-[#2B333C]">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt={`${cs.name} after result`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Image failed to load:', previewImage);
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-8 h-8 text-gray-500" ... /></div>';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <ImageIcon size={32} className="text-gray-500 mb-2" />
                      <span className="text-xs text-gray-400">
                        {cs.heroImages?.after?.length > 0 ? 'Error loading image' : 'No after image'}
                      </span>
                    </div>
                  )}
                  
                  {/* Image count badge */}
                  {cs.heroImages?.after && cs.heroImages.after.length > 0 && (
                    <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {cs.heroImages.after.length} after {cs.heroImages.after.length === 1 ? 'image' : 'images'}
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${
                      cs.status === 'published' 
                        ? 'bg-green-500/20 text-green-700 backdrop-blur-sm' 
                        : 'bg-yellow-500/20 text-yellow-700 backdrop-blur-sm'
                    }`}>
                      {cs.status === 'published' ? (
                        <><CheckCircle size={12} /> Published</>
                      ) : (
                        <><XCircle size={12} /> Draft</>
                      )}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#2B333C] truncate">{cs.name}</h3>
                      <p className="text-xs text-gray-500 mt-1 truncate">{cs.slug}</p>
                    </div>
                    
                    <button
                      onClick={(e) => openDropdown(e, cs._id)}
                      className="p-1 hover:bg-gray-100 rounded ml-2 flex-shrink-0 relative z-10"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                    <Calendar size={12} />
                    <span>{new Date(cs.createdAt).toLocaleDateString()}</span>
                    <span className="text-gray-300">•</span>
                    <span>{cs.views || 0} views</span>
                  </div>

                  {/* Before/After stats */}
                  <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                    <div className="flex-1 text-center">
                      <span className="text-xs font-medium text-[#9E4A47]">
                        {cs.heroImages?.before?.length || 0}
                      </span>
                      <p className="text-xs text-gray-500">Before</p>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs font-medium text-[#9E4A47]">
                        {cs.heroImages?.after?.length || 0}
                      </span>
                      <p className="text-xs text-gray-500">After</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Global Dropdown Menu */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{
              position: 'fixed',
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              zIndex: 9999
            }}
            className="w-48 bg-white rounded-lg shadow-xl border border-gray-200"
          >
            <div className="py-1">
              <button
                onClick={() => {
                  onEdit(caseStudies.find(cs => cs._id === selectedId));
                  setSelectedId(null);
                }}
                className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
              >
                <Edit3 size={14} /> Edit
              </button>
              <button
                onClick={() => {
                  const cs = caseStudies.find(c => c._id === selectedId);
                  window.open(`/case/${cs.slug}`, '_blank');
                  setSelectedId(null);
                }}
                className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
              >
                <Eye size={14} /> View
              </button>
              <button
                onClick={() => {
                  handleDuplicate(selectedId);
                  setSelectedId(null);
                }}
                className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
              >
                <Copy size={14} /> Duplicate
              </button>
              <button
                onClick={() => {
                  const cs = caseStudies.find(c => c._id === selectedId);
                  handleStatusChange(selectedId, cs.status === 'published' ? 'draft' : 'published');
                  setSelectedId(null);
                }}
                className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
              >
                {caseStudies.find(c => c._id === selectedId)?.status === 'published' ? (
                  <><XCircle size={14} /> Unpublish</>
                ) : (
                  <><CheckCircle size={14} /> Publish</>
                )}
              </button>
              <button
                onClick={() => {
                  setDeleteConfirm(selectedId);
                  setSelectedId(null);
                }}
                className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 border-t border-gray-100 mt-1"
              >
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close dropdown */}
      {selectedId && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setSelectedId(null)}
        />
      )}

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4"
            onClick={() => setDeleteConfirm(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 text-red-600 mb-4">
                <AlertCircle size={24} />
                <h3 className="text-lg font-semibold">Delete Case Study</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this case study? This action cannot be undone and all associated images will be permanently removed.
              </p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
                  disabled={deleting}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  disabled={deleting}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 font-medium flex items-center gap-2"
                >
                  {deleting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    'Delete'
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 