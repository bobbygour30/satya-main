import React, { useRef, useState } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';

export default function ImageUploader({ 
  onUpload, 
  currentPreview, 
  onRemove,
  label = 'Click to upload',
  uploading = false,
  className = ''
}) {
  const [preview, setPreview] = useState(currentPreview);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onUpload(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onRemove?.();
  };

  // Update preview when currentPreview prop changes
  React.useEffect(() => {
    setPreview(currentPreview);
  }, [currentPreview]);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer
          ${dragActive ? 'border-[#9E4A47] bg-[#9E4A47]/10' : 'border-gray-300'}
          border-2 border-dashed transition-all group hover:border-[#9E4A47]`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        {uploading ? (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Loader2 size={32} className="text-white animate-spin" />
          </div>
        ) : preview ? (
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-50">
            <Upload size={24} className="text-gray-400 mb-2 group-hover:text-[#9E4A47] transition" />
            <span className="text-xs text-gray-500 text-center">{label}</span>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/gif,image/webp"
          onChange={handleChange}
          className="hidden"
        />
      </div>

      {preview && !uploading && (
        <button
          onClick={handleRemove}
          className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition z-10"
        >
          <X size={14} />
        </button>
      )}

      {dragActive && (
        <div className="absolute inset-0 bg-[#9E4A47]/20 rounded-lg pointer-events-none flex items-center justify-center">
          <p className="text-white font-medium">Drop to upload</p>
        </div>
      )}
    </div>
  );
}