import { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Plus, 
  Trash2, 
  Edit3, 
  Save,
  Eye,
  Settings,
  Image as ImageIcon,
  Type,
  Table as TableIcon,
  Video,
  HelpCircle,
  ArrowUpDown,
  Grid,
  Upload,
  FileImage,
  FolderOpen
} from "lucide-react";

export default function Admin() {
  // ================= STATE MANAGEMENT =================
  
  // Hero Section Images
  const [heroImages, setHeroImages] = useState({
    before: [
      { id: "before1", file: null, preview: "/api/placeholder/400/500", name: "Front View Before" },
      { id: "before2", file: null, preview: "/api/placeholder/400/500", name: "Left View Before" },
      { id: "before3", file: null, preview: "/api/placeholder/400/500", name: "Right View Before" },
      { id: "before4", file: null, preview: "/api/placeholder/400/500", name: "Back View Before" },
    ],
    after: [
      { id: "after1", file: null, preview: "/api/placeholder/400/500", name: "Front View After" },
      { id: "after2", file: null, preview: "/api/placeholder/400/500", name: "Left View After" },
      { id: "after3", file: null, preview: "/api/placeholder/400/500", name: "Right View After" },
      { id: "after4", file: null, preview: "/api/placeholder/400/500", name: "Back View After" },
    ]
  });

  // Table Data - Dynamic rows and columns
  const [tableData, setTableData] = useState({
    rows: [
      { id: "front", label: "Front" },
      { id: "right", label: "Right" },
      { id: "left", label: "Left" },
      { id: "back", label: "Top / Back" }
    ],
    columns: [
      { id: "before1", label: "Before 1st Surgery" },
      { id: "immediate1", label: "Immediate 1st Surgery" },
      { id: "month6", label: "6 Months Post 1st Surgery" },
      { id: "immediate2", label: "Immediate 2nd Surgery" },
      { id: "month7", label: "7 Month Post 2nd Surgery" }
    ],
    images: {} // Will store image objects in format: `${rowId}_${colId}`
  });

  // Patient Details
  const [patientDetails, setPatientDetails] = useState({
    name: "Lokesh Lohia",
    title: "Repair Hair Transplant | Medicine Failure to Natural Results",
    grafts: {
      first: "2700",
      second: "3400"
    },
    technique: "MHT",
    techniqueDetail: "(Combined with DSFT)",
    clinic: "SATYA SKIN & HAIR SOLUTIONS"
  });

  // Content Sections
  const [contentSections, setContentSections] = useState([
    {
      id: "h1",
      type: "heading",
      level: "h1",
      content: "Repair Hair Transplant Case Study | Hair Transplant in Gurgaon"
    },
    {
      id: "intro",
      type: "paragraph",
      className: "text-xl italic border-l-4 border-[#9E4A47] pl-6",
      content: "Repair hair transplant cases are more complex than first-time procedures. The process requires teams to fix existing surgical errors while dealing with restrictions on available donor sites."
    },
    {
      id: "p1",
      type: "paragraph",
      content: "The case study documents Lokesh Lohia's hair restoration journey while demonstrating how sustained outcomes depend on comprehensive planning and ethical procedures and surgical expertise."
    },
    {
      id: "p2",
      type: "paragraph",
      content: "Lokesh's experience also demonstrates how excessive medication can temporarily hide poor transplant outcomes, only for problems to surface later."
    },
    {
      id: "heading1",
      type: "heading",
      level: "h3",
      content: "Lokesh First Hair Transplant By Other Clinic"
    },
    {
      id: "p3",
      type: "paragraph",
      content: "Before getting in touch with Satyaskinhair, Lokesh Lohia already had undergone a hair transplant."
    },
    {
      id: "list1",
      type: "list",
      items: [
        "The results appeared acceptable",
        "Density appeared appropriate.",
        "Problems with the hairline were not immediately apparent."
      ]
    }
  ]);

  // Video URL
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/PWxwgQsRwcI");

  // FAQs
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What is a Repair Hair Transplant?",
      answer: "A Repair Hair Transplant is a procedure performed on patients who are unhappy with their previous hair transplants. It addresses issues such as poor design, incorrect angles, or improper use of the donor area."
    },
    {
      id: 2,
      question: "What is MHT (Maximum Harvest Technique)?",
      answer: "MHT is a method that combines FUE and FUT hair transplant techniques to safely extract a larger number of grafts from the donor area while keeping scarring to a minimum."
    },
    {
      id: 3,
      question: "Why use DSFT?",
      answer: "DSFT, or Direct Stimulation Follicular Transplant, helps stimulate the grafts during the implantation process, leading to a 97% graft survival rate and quicker hair growth."
    },
    {
      id: 4,
      question: "What is the Min-Med Approach?",
      answer: "The Min-Med Approach is a proprietary method developed by Dr. Satya that uses a low or no dose of Finasteride, helping to protect the patient's long-term health."
    },
    {
      id: 5,
      question: "Can repair transplants look natural?",
      answer: "Yes, a natural appearance can be achieved through proper angulation, careful planning of density, and conservation of the donor area, as demonstrated in Lokesh's case."
    }
  ]);

  // UI State
  const [activeTab, setActiveTab] = useState("hero");
  const [selectedImage, setSelectedImage] = useState(null);
  const [editingSection, setEditingSection] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [uploadingFor, setUploadingFor] = useState(null);

  // ================= IMAGE HANDLING FUNCTIONS =================

  const handleImageUpload = (event, type, index, category = null) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (category === 'hero') {
          // Update hero images
          setHeroImages(prev => ({
            ...prev,
            [type]: prev[type].map((img, i) => 
              i === index ? { ...img, file: file, preview: reader.result } : img
            )
          }));
        } else if (category === 'table') {
          // Update table images
          setTableData(prev => ({
            ...prev,
            images: {
              ...prev.images,
              [type]: { file: file, preview: reader.result }
            }
          }));
        }
      };
      reader.readAsDataURL(file);
    }
    setUploadingFor(null);
  };

  const handleBulkImageUpload = (event, category, type) => {
    const files = Array.from(event.target.files);
    
    if (category === 'hero') {
      files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setHeroImages(prev => ({
            ...prev,
            [type]: prev[type].map((img, i) => 
              i === index ? { ...img, file: file, preview: reader.result } : img
            )
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const addHeroImage = (type) => {
    const newId = `${type}_${Date.now()}`;
    setHeroImages(prev => ({
      ...prev,
      [type]: [...prev[type], { 
        id: newId, 
        file: null, 
        preview: "/api/placeholder/400/500", 
        name: `New ${type} image` 
      }]
    }));
  };

  const removeHeroImage = (type, index) => {
    setHeroImages(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  const addTableRow = () => {
    const newRowId = `row_${Date.now()}`;
    setTableData(prev => ({
      ...prev,
      rows: [...prev.rows, { id: newRowId, label: "New View" }]
    }));
  };

  const addTableColumn = () => {
    const newColId = `col_${Date.now()}`;
    setTableData(prev => ({
      ...prev,
      columns: [...prev.columns, { id: newColId, label: "New Stage" }]
    }));
  };

  const removeTableRow = (rowId) => {
    setTableData(prev => ({
      ...prev,
      rows: prev.rows.filter(row => row.id !== rowId)
    }));
  };

  const removeTableColumn = (colId) => {
    setTableData(prev => ({
      ...prev,
      columns: prev.columns.filter(col => col.id !== colId)
    }));
  };

  const addContentSection = (type) => {
    const newSection = {
      id: `section_${Date.now()}`,
      type: type,
      content: type === 'heading' ? 'New Heading' : 
               type === 'list' ? ['New list item'] : 
               'New paragraph content'
    };
    if (type === 'heading') newSection.level = 'h2';
    setContentSections(prev => [...prev, newSection]);
  };

  const updateContentSection = (id, updates) => {
    setContentSections(prev => 
      prev.map(section => section.id === id ? { ...section, ...updates } : section)
    );
  };

  const removeContentSection = (id) => {
    setContentSections(prev => prev.filter(section => section.id !== id));
  };

  const addFaq = () => {
    setFaqs(prev => [
      ...prev,
      {
        id: Date.now(),
        question: "New Question",
        answer: "New answer"
      }
    ]);
  };

  const updateFaq = (id, field, value) => {
    setFaqs(prev =>
      prev.map(faq => faq.id === id ? { ...faq, [field]: value } : faq)
    );
  };

  const removeFaq = (id) => {
    setFaqs(prev => prev.filter(faq => faq.id !== id));
  };

  // ================= RENDER PREVIEW =================
  
  const renderPreview = () => (
    <div className="bg-[#FFF8EF] min-h-screen text-[#2B333C] p-4">
      {/* Hero Section Preview */}
      <section className="mb-8">
        <div className="max-w-[1380px] mx-auto">
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden">
            <div className="relative bg-gray-200 aspect-[4/5]">
              <img 
                src={heroImages.before[0]?.preview || "/api/placeholder/400/500"} 
                alt="Preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur rounded-full px-3 py-2">
                <div className="flex gap-2">
                  <button className="text-white"><ChevronLeft size={16} /></button>
                  <span className="text-white text-xs px-3 py-1">Before</span>
                  <span className="text-white/50 text-xs px-3 py-1">After</span>
                  <button className="text-white"><ChevronRight size={16} /></button>
                </div>
              </div>
            </div>
            <div className="bg-[#2B333C] text-white p-8">
              <h2 className="text-2xl font-semibold">{patientDetails.name}'s Hair Restoration Journey</h2>
              <div className="w-24 h-[2px] bg-[#9E4A47] my-4" />
              <p><span className="text-white/70">Patient Name</span></p>
              <p className="text-lg font-medium mt-1">{patientDetails.name}</p>
              <p className="mt-4"><span className="text-white/70">Total Grafts Implanted</span></p>
              <p>1st Surgery: {patientDetails.grafts.first} MHT | 2nd Surgery: {patientDetails.grafts.second} MHT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Table Preview */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-[#FCEBDE] bg-white">
          <thead>
            <tr className="bg-[#9E4A47] text-white">
              <th className="border p-3 text-left">View</th>
              {tableData.columns.map(col => (
                <th key={col.id} className="border p-3 text-center">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map(row => (
              <tr key={row.id}>
                <td className="border p-3 font-medium bg-[#9E4A47] text-white">{row.label}</td>
                {tableData.columns.map(col => {
                  const imageKey = `${row.id}_${col.id}`;
                  const image = tableData.images[imageKey];
                  return (
                    <td key={col.id} className="border p-2">
                      <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                        {image?.preview ? (
                          <img src={image.preview} alt="" className="w-full h-full object-cover rounded" />
                        ) : (
                          <ImageIcon size={24} className="text-gray-400" />
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Content Preview */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {contentSections.map(section => (
          <div key={section.id}>
            {section.type === 'heading' && section.level === 'h1' && (
              <h1 className="text-3xl font-semibold text-[#0E3A43]">{section.content}</h1>
            )}
            {section.type === 'heading' && section.level === 'h3' && (
              <h3 className="text-2xl font-semibold text-[#0E3A43]">{section.content}</h3>
            )}
            {section.type === 'paragraph' && (
              <p className={section.className || ''}>{section.content}</p>
            )}
            {section.type === 'list' && (
              <ul className="list-disc pl-6 space-y-2">
                {section.items?.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Video Preview */}
      <div className="py-10 max-w-4xl mx-auto">
        <div className="aspect-video bg-gray-200 rounded-3xl flex items-center justify-center">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              title="Preview"
              className="w-full h-full rounded-3xl"
              allowFullScreen
            />
          ) : (
            <Video size={48} className="text-gray-400" />
          )}
        </div>
      </div>

      {/* FAQs Preview */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h3 className="text-2xl font-semibold text-[#0E3A43]">FAQs</h3>
        {faqs.map(faq => (
          <div key={faq.id}>
            <p className="font-semibold">{faq.question}</p>
            <p className="mt-1">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // ================= IMAGE UPLOAD COMPONENT =================
  
  const ImageUploader = ({ onUpload, currentPreview, label }) => (
    <div className="relative">
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 hover:border-[#9E4A47] transition group">
        {currentPreview && currentPreview !== "/api/placeholder/400/500" ? (
          <img src={currentPreview} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <Upload size={24} className="text-gray-400 group-hover:text-[#9E4A47] mb-2" />
            <span className="text-xs text-gray-500 text-center">{label || 'Click to upload'}</span>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={onUpload}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );

  // ================= RENDER EDITOR =================
  
  const tabs = [
    { id: "hero", label: "Hero Section", icon: ImageIcon },
    { id: "table", label: "Progress Table", icon: TableIcon },
    { id: "details", label: "Patient Details", icon: Type },
    { id: "content", label: "Content Sections", icon: Edit3 },
    { id: "video", label: "Video", icon: Video },
    { id: "faqs", label: "FAQs", icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#2B333C] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Case Study Admin</h1>
            <div className="flex gap-3">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center gap-2 px-4 py-2 bg-[#9E4A47] rounded-lg hover:bg-[#8a3f3a] transition"
              >
                <Eye size={18} />
                {previewMode ? "Edit Mode" : "Preview Mode"}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition">
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          {!previewMode && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition ${
                    activeTab === tab.id 
                      ? 'bg-[#9E4A47] text-white' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {previewMode ? (
          renderPreview()
        ) : (
          <>
            {/* Hero Section Editor */}
            {activeTab === "hero" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-[#2B333C]">Hero Images</h2>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-2 px-4 py-2 bg-[#9E4A47] text-white rounded-lg cursor-pointer">
                      <FolderOpen size={16} />
                      Bulk Upload Before
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleBulkImageUpload(e, 'hero', 'before')}
                      />
                    </label>
                    <label className="flex items-center gap-2 px-4 py-2 bg-[#9E4A47] text-white rounded-lg cursor-pointer">
                      <FolderOpen size={16} />
                      Bulk Upload After
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleBulkImageUpload(e, 'hero', 'after')}
                      />
                    </label>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Before Images */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-[#9E4A47]">Before Surgery</h3>
                      <button
                        onClick={() => addHeroImage('before')}
                        className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded-lg text-sm"
                      >
                        <Plus size={14} /> Add Image
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {heroImages.before.map((img, index) => (
                        <div key={img.id} className="space-y-2">
                          <ImageUploader
                            onUpload={(e) => handleImageUpload(e, 'before', index, 'hero')}
                            currentPreview={img.preview}
                            label={img.name}
                          />
                          <input
                            type="text"
                            value={img.name}
                            onChange={(e) => {
                              const newImages = [...heroImages.before];
                              newImages[index].name = e.target.value;
                              setHeroImages(prev => ({ ...prev, before: newImages }));
                            }}
                            className="w-full p-1 text-xs border rounded"
                            placeholder="Image name"
                          />
                          <button
                            onClick={() => removeHeroImage('before', index)}
                            className="w-full p-1 text-xs text-red-600 hover:bg-red-50 rounded flex items-center justify-center gap-1"
                          >
                            <Trash2 size={12} /> Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* After Images */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-[#9E4A47]">After Surgery</h3>
                      <button
                        onClick={() => addHeroImage('after')}
                        className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded-lg text-sm"
                      >
                        <Plus size={14} /> Add Image
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {heroImages.after.map((img, index) => (
                        <div key={img.id} className="space-y-2">
                          <ImageUploader
                            onUpload={(e) => handleImageUpload(e, 'after', index, 'hero')}
                            currentPreview={img.preview}
                            label={img.name}
                          />
                          <input
                            type="text"
                            value={img.name}
                            onChange={(e) => {
                              const newImages = [...heroImages.after];
                              newImages[index].name = e.target.value;
                              setHeroImages(prev => ({ ...prev, after: newImages }));
                            }}
                            className="w-full p-1 text-xs border rounded"
                            placeholder="Image name"
                          />
                          <button
                            onClick={() => removeHeroImage('after', index)}
                            className="w-full p-1 text-xs text-red-600 hover:bg-red-50 rounded flex items-center justify-center gap-1"
                          >
                            <Trash2 size={12} /> Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Table Editor */}
            {activeTab === "table" && (
              <div className="space-y-6">
                <div className="flex gap-4 justify-between items-center">
                  <h2 className="text-2xl font-semibold text-[#2B333C]">Progress Table</h2>
                  <div className="flex gap-3">
                    <button
                      onClick={addTableRow}
                      className="flex items-center gap-2 px-4 py-2 bg-[#9E4A47] text-white rounded-lg"
                    >
                      <Plus size={16} /> Add Row
                    </button>
                    <button
                      onClick={addTableColumn}
                      className="flex items-center gap-2 px-4 py-2 bg-[#9E4A47] text-white rounded-lg"
                    >
                      <Plus size={16} /> Add Column
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm overflow-x-auto">
                  <table className="w-full border">
                    <thead>
                      <tr className="bg-[#9E4A47] text-white">
                        <th className="border p-3">View</th>
                        {tableData.columns.map(col => (
                          <th key={col.id} className="border p-3 min-w-[150px]">
                            <div className="flex items-center justify-between gap-2">
                              <input
                                type="text"
                                value={col.label}
                                onChange={(e) => {
                                  const newColumns = tableData.columns.map(c =>
                                    c.id === col.id ? { ...c, label: e.target.value } : c
                                  );
                                  setTableData(prev => ({ ...prev, columns: newColumns }));
                                }}
                                className="bg-transparent text-white border-white/30 border-b px-2 py-1 w-full"
                              />
                              <button
                                onClick={() => removeTableColumn(col.id)}
                                className="text-white/70 hover:text-white"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.rows.map(row => (
                        <tr key={row.id}>
                          <td className="border p-3 bg-[#9E4A47] text-white">
                            <div className="flex items-center justify-between">
                              <input
                                type="text"
                                value={row.label}
                                onChange={(e) => {
                                  const newRows = tableData.rows.map(r =>
                                    r.id === row.id ? { ...r, label: e.target.value } : r
                                  );
                                  setTableData(prev => ({ ...prev, rows: newRows }));
                                }}
                                className="bg-transparent text-white border-white/30 border-b px-2 py-1 w-full"
                              />
                              <button
                                onClick={() => removeTableRow(row.id)}
                                className="text-white/70 hover:text-white ml-2"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                          {tableData.columns.map(col => {
                            const imageKey = `${row.id}_${col.id}`;
                            const image = tableData.images[imageKey];
                            
                            return (
                              <td key={col.id} className="border p-2">
                                <div className="space-y-2">
                                  <ImageUploader
                                    onUpload={(e) => handleImageUpload(e, imageKey, null, 'table')}
                                    currentPreview={image?.preview}
                                    label="Upload image"
                                  />
                                  <input
                                    type="text"
                                    placeholder="Alt text"
                                    value={image?.alt || ''}
                                    onChange={(e) => {
                                      setTableData(prev => ({
                                        ...prev,
                                        images: {
                                          ...prev.images,
                                          [imageKey]: {
                                            ...prev.images[imageKey],
                                            alt: e.target.value
                                          }
                                        }
                                      }));
                                    }}
                                    className="w-full p-1 text-xs border rounded"
                                  />
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Patient Details Editor */}
            {activeTab === "details" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#2B333C]">Patient Details</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Patient Name</label>
                    <input
                      type="text"
                      value={patientDetails.name}
                      onChange={(e) => setPatientDetails(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Page Title</label>
                    <input
                      type="text"
                      value={patientDetails.title}
                      onChange={(e) => setPatientDetails(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">1st Surgery Grafts</label>
                      <input
                        type="text"
                        value={patientDetails.grafts.first}
                        onChange={(e) => setPatientDetails(prev => ({
                          ...prev,
                          grafts: { ...prev.grafts, first: e.target.value }
                        }))}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">2nd Surgery Grafts</label>
                      <input
                        type="text"
                        value={patientDetails.grafts.second}
                        onChange={(e) => setPatientDetails(prev => ({
                          ...prev,
                          grafts: { ...prev.grafts, second: e.target.value }
                        }))}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Technique</label>
                    <input
                      type="text"
                      value={patientDetails.technique}
                      onChange={(e) => setPatientDetails(prev => ({ ...prev, technique: e.target.value }))}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Technique Detail</label>
                    <input
                      type="text"
                      value={patientDetails.techniqueDetail}
                      onChange={(e) => setPatientDetails(prev => ({ ...prev, techniqueDetail: e.target.value }))}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Clinic Name</label>
                    <input
                      type="text"
                      value={patientDetails.clinic}
                      onChange={(e) => setPatientDetails(prev => ({ ...prev, clinic: e.target.value }))}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Content Sections Editor */}
            {activeTab === "content" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-[#2B333C]">Content Sections</h2>
                  <div className="flex gap-3">
                    <button
                      onClick={() => addContentSection('heading')}
                      className="flex items-center gap-2 px-4 py-2 bg-[#9E4A47] text-white rounded-lg"
                    >
                      <Plus size={16} /> Add Heading
                    </button>
                    <button
                      onClick={() => addContentSection('paragraph')}
                      className="flex items-center gap-2 px-4 py-2 bg-[#9E4A47] text-white rounded-lg"
                    >
                      <Plus size={16} /> Add Paragraph
                    </button>
                    <button
                      onClick={() => addContentSection('list')}
                      className="flex items-center gap-2 px-4 py-2 bg-[#9E4A47] text-white rounded-lg"
                    >
                      <Plus size={16} /> Add List
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {contentSections.map(section => (
                    <div key={section.id} className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-gray-200 text-xs rounded">
                            {section.type} {section.level && `- ${section.level}`}
                          </span>
                        </div>
                        <button
                          onClick={() => removeContentSection(section.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      {section.type === 'heading' && (
                        <div className="space-y-3">
                          <select
                            value={section.level || 'h2'}
                            onChange={(e) => updateContentSection(section.id, { level: e.target.value })}
                            className="p-2 border rounded"
                          >
                            <option value="h1">H1</option>
                            <option value="h2">H2</option>
                            <option value="h3">H3</option>
                            <option value="h4">H4</option>
                          </select>
                          <input
                            type="text"
                            value={section.content || ''}
                            onChange={(e) => updateContentSection(section.id, { content: e.target.value })}
                            className="w-full p-2 border rounded"
                            placeholder="Heading text"
                          />
                        </div>
                      )}

                      {section.type === 'paragraph' && (
                        <textarea
                          value={section.content || ''}
                          onChange={(e) => updateContentSection(section.id, { content: e.target.value })}
                          className="w-full p-2 border rounded"
                          rows="3"
                          placeholder="Paragraph text"
                        />
                      )}

                      {section.type === 'list' && (
                        <div className="space-y-2">
                          {section.items?.map((item, idx) => (
                            <div key={idx} className="flex gap-2">
                              <input
                                type="text"
                                value={item}
                                onChange={(e) => {
                                  const newItems = [...section.items];
                                  newItems[idx] = e.target.value;
                                  updateContentSection(section.id, { items: newItems });
                                }}
                                className="flex-1 p-2 border rounded"
                                placeholder="List item"
                              />
                              <button
                                onClick={() => {
                                  const newItems = section.items.filter((_, i) => i !== idx);
                                  updateContentSection(section.id, { items: newItems });
                                }}
                                className="p-2 text-red-600"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              const newItems = [...(section.items || []), 'New item'];
                              updateContentSection(section.id, { items: newItems });
                            }}
                            className="flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-lg text-sm"
                          >
                            <Plus size={14} /> Add Item
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video Editor */}
            {activeTab === "video" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#2B333C]">Video</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <label className="block text-sm font-medium mb-1">YouTube Embed URL</label>
                  <input
                    type="text"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="https://www.youtube.com/embed/..."
                  />
                  <div className="mt-4 aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    {videoUrl ? (
                      <iframe
                        src={videoUrl}
                        title="Preview"
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                      />
                    ) : (
                      <Video size={48} className="text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* FAQs Editor */}
            {activeTab === "faqs" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-[#2B333C]">FAQs</h2>
                  <button
                    onClick={addFaq}
                    className="flex items-center gap-2 px-4 py-2 bg-[#9E4A47] text-white rounded-lg"
                  >
                    <Plus size={16} /> Add FAQ
                  </button>
                </div>

                <div className="space-y-4">
                  {faqs.map(faq => (
                    <div key={faq.id} className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-medium">FAQ #{faq.id}</h3>
                        <button
                          onClick={() => removeFaq(faq.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium mb-1">Question</label>
                          <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => updateFaq(faq.id, 'question', e.target.value)}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Answer</label>
                          <textarea
                            value={faq.answer}
                            onChange={(e) => updateFaq(faq.id, 'answer', e.target.value)}
                            className="w-full p-2 border rounded"
                            rows="3"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}