import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-[#9E4A47] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}