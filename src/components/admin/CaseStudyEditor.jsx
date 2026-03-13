import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Save,
  Eye,
  Image as ImageIcon,
  Table,
  Settings,
  Type,
  Video,
  HelpCircle,
  Loader2,
  CheckCircle,
  AlertCircle,
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  User,
  Calendar,
  Activity,
  Scissors,
  Hospital,
  Globe,
  Film, // Added for SEO icon
} from "lucide-react";
import { caseStudyAPI, uploadAPI } from "../../services/api";
import ImageUploader from "../common/ImageUploader";

export default function CaseStudyEditor({ caseStudy, onBack, onSave }) {
  const [activeTab, setActiveTab] = useState("hero");
  const [formData, setFormData] = useState({
    // Basic Info
    name: "Lokesh Lohia",
    title: "Repair Hair Transplant | Medicine Failure to Natural Results",
    category: "hair",
    status: "draft",
    bannerImage: null,

    // ===== NEW SEO FIELDS =====
    seo: {
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      canonicalUrl: "",
      ogImage: "",
      noIndex: false,
    },

    // Patient Details
    patientDetails: {
      name: "Lokesh Lohia",
      age: "32",
      gender: "Male",
      grafts: {
        first: "2700",
        second: "3400",
      },
      technique: "MHT",
      techniqueDetail: "(Combined with DSFT)",
      clinic: "SATYA SKIN & HAIR SOLUTIONS",
      surgeryDate: "2023",
      followUp: "7 Months",
      medications: ["Finasteride 1mg", "Minoxidil"],
      donorArea: "Occipital region",
      complications: "Poor hairline design from previous surgery",
    },

    // Hero Images
    heroImages: {
      before: [],
      after: [],
    },

    // Table Data
    tableData: {
      rows: [
        { id: "front", label: "Front", order: 0 },
        { id: "right", label: "Right", order: 1 },
        { id: "left", label: "Left", order: 2 },
        { id: "back", label: "Top / Back", order: 3 },
      ],
      columns: [
        { id: "before1", label: "Before 1st Surgery", order: 0 },
        { id: "immediate1", label: "Immediate 1st Surgery", order: 1 },
        { id: "month6", label: "6 Months Post 1st Surgery", order: 2 },
        { id: "immediate2", label: "Immediate 2nd Surgery", order: 3 },
        { id: "month7", label: "7 Month Post 2nd Surgery", order: 4 },
      ],
      images: {},
    },

    // Content Sections
    content: [
      {
        id: "h1",
        type: "heading",
        level: "h1",
        content:
          "Repair Hair Transplant Case Study | Hair Transplant in Gurgaon",
        order: 0,
      },
      {
        id: "intro",
        type: "paragraph",
        className: "text-xl italic border-l-4 border-[#9E4A47] pl-6",
        content:
          "Repair hair transplant cases are more complex than first-time procedures. The process requires teams to fix existing surgical errors while dealing with restrictions on available donor sites.",
        order: 1,
      },
      // ... rest of your content array
    ],

    // Video
    video: {
      url: "https://www.youtube.com/embed/PWxwgQsRwcI",
      platform: "youtube",
      title: "Lokesh Lohia Hair Transplant Journey",
    },

    // FAQs
    faqs: [
      {
        id: 1,
        question: "What is a Repair Hair Transplant?",
        answer:
          "A Repair Hair Transplant is a procedure performed on patients who are unhappy with their previous hair transplants. It addresses issues such as poor design, incorrect angles, or improper use of the donor area.",
        order: 0,
      },
      {
        id: 2,
        question: "What is MHT (Maximum Harvest Technique)?",
        answer:
          "MHT is a method that combines FUE and FUT hair transplant techniques to safely extract a larger number of grafts from the donor area while keeping scarring to a minimum.",
        order: 1,
      },
      {
        id: 3,
        question: "Why use DSFT?",
        answer:
          "DSFT, or Direct Stimulation Follicular Transplant, helps stimulate the grafts during the implantation process, leading to a 97% graft survival rate and quicker hair growth.",
        order: 2,
      },
      {
        id: 4,
        question: "What is the Min-Med Approach?",
        answer:
          "The Min-Med Approach is a proprietary method developed by Dr. Satya that uses a low or no dose of Finasteride, helping to protect the patient's long-term health.",
        order: 3,
      },
      {
        id: 5,
        question: "Can repair transplants look natural?",
        answer:
          "Yes, a natural appearance can be achieved through proper angulation, careful planning of density, and conservation of the donor area, as demonstrated in Lokesh's case.",
        order: 4,
      },
    ],

    // Preview Image
    previewImage: "",

    // Metadata
    views: 0,
  });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    if (caseStudy) {
      loadCaseStudy();
    }
  }, [caseStudy]);

  const loadCaseStudy = async () => {
    setLoading(true);
    try {
      const response = await caseStudyAPI.getOne(caseStudy._id);
      setFormData(response.data.data);
    } catch (error) {
      console.error("Failed to load case study:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveStatus(null);

    try {
      if (caseStudy?._id) {
        await caseStudyAPI.update(caseStudy._id, formData);
      } else {
        await caseStudyAPI.create(formData);
      }
      setSaveStatus({ type: "success", message: "Saved successfully!" });
      onSave?.();
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (error) {
      setSaveStatus({ type: "error", message: "Save failed" });
      console.error(error);
    } finally {
      setSaving(false);
    }
  };
  // Add banner image handlers
  const handleBannerUpload = async (file) => {
    if (!caseStudy?._id) {
      setSaveStatus({
        type: "error",
        message: "Please save the case study first",
      });
      return;
    }

    setUploading(true);
    try {
      const response = await uploadAPI.uploadBannerImage(
        caseStudy._id,
        file,
        formData.name,
      );
      setFormData((prev) => ({
        ...prev,
        bannerImage: response.data.data,
      }));
      setSaveStatus({
        type: "success",
        message: "Banner image uploaded successfully!",
      });
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (error) {
      console.error("Banner upload failed:", error);
      setSaveStatus({
        type: "error",
        message: "Failed to upload banner image",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleBannerDelete = async () => {
    if (!caseStudy?._id) return;

    try {
      await uploadAPI.deleteBannerImage(caseStudy._id);
      setFormData((prev) => ({
        ...prev,
        bannerImage: null,
      }));
      setSaveStatus({ type: "success", message: "Banner image removed" });
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (error) {
      console.error("Banner delete failed:", error);
      setSaveStatus({
        type: "error",
        message: "Failed to delete banner image",
      });
    }
  };

  const handleHeroUpload = async (type, file, index) => {
    if (!caseStudy?._id) {
      setSaveStatus({
        type: "error",
        message: "Please save the case study first",
      });
      return;
    }

    setUploading(true);
    try {
      const response = await uploadAPI.uploadHeroImage(
        caseStudy._id,
        type,
        file,
        `Hero ${type} view ${index + 1}`,
      );

      setFormData((prev) => {
        const newImages = [...(prev.heroImages[type] || [])];
        newImages[index] = response.data.data;

        return {
          ...prev,
          heroImages: {
            ...prev.heroImages,
            [type]: newImages,
          },
        };
      });
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleHeroDelete = async (type, imageId, index) => {
    try {
      await uploadAPI.deleteImage(imageId);
      setFormData((prev) => {
        const newImages = [...(prev.heroImages[type] || [])];
        newImages[index] = null;

        return {
          ...prev,
          heroImages: {
            ...prev.heroImages,
            [type]: newImages,
          },
        };
      });
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleTableImageUpload = async (rowId, colId, file) => {
    if (!caseStudy?._id) {
      setSaveStatus({
        type: "error",
        message: "Please save the case study first",
      });
      return;
    }

    setUploading(true);
    try {
      const imageKey = `${rowId}_${colId}`;
      const response = await uploadAPI.uploadTableImage(
        caseStudy._id,
        rowId,
        colId,
        file,
        "",
      );
      setFormData((prev) => ({
        ...prev,
        tableData: {
          ...prev.tableData,
          images: {
            ...prev.tableData.images,
            [imageKey]: response.data.data[imageKey],
          },
        },
      }));
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleAddContent = (type) => {
    const newSection = {
      id: `section_${Date.now()}`,
      type,
      ...(type === "heading" && { level: "h2", content: "New Heading" }),
      ...(type === "paragraph" && { content: "New paragraph content" }),
      ...(type === "list" && { items: ["New list item"] }),
      order: formData.content.length,
    };

    setFormData((prev) => ({
      ...prev,
      content: [...prev.content, newSection],
    }));
  };

  const handleUpdateContent = (id, updates) => {
    setFormData((prev) => ({
      ...prev,
      content: prev.content.map((section) =>
        section.id === id ? { ...section, ...updates } : section,
      ),
    }));
  };

  const handleDeleteContent = (id) => {
    setFormData((prev) => ({
      ...prev,
      content: prev.content.filter((section) => section.id !== id),
    }));
  };

  const handleMoveContent = (id, direction) => {
    const index = formData.content.findIndex((s) => s.id === id);
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === formData.content.length - 1)
    )
      return;

    const newContent = [...formData.content];
    const newIndex = direction === "up" ? index - 1 : index + 1;

    const tempOrder = newContent[index].order;
    newContent[index].order = newContent[newIndex].order;
    newContent[newIndex].order = tempOrder;

    [newContent[index], newContent[newIndex]] = [
      newContent[newIndex],
      newContent[index],
    ];

    setFormData((prev) => ({
      ...prev,
      content: newContent,
    }));
  };

  // Updated tabs to include SEO
  const tabs = [
    { id: "banner", label: "Banner Image", icon: Film },
    { id: "hero", label: "Hero Images", icon: ImageIcon },
    { id: "table", label: "Progress Table", icon: Table },
    { id: "details", label: "Patient Details", icon: Settings },
    { id: "content", label: "Content", icon: Type },
    { id: "video", label: "Video", icon: Video },
    { id: "faq", label: "FAQs", icon: HelpCircle },
    { id: "seo", label: "SEO Settings", icon: Globe }, // New SEO tab
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 size={32} className="text-[#9E4A47] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-2xl font-semibold text-[#2B333C]">
              {caseStudy ? "Edit Case Study" : "New Case Study"}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {formData.name || "Untitled"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {saveStatus && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${
                saveStatus.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {saveStatus.type === "success" ? (
                <CheckCircle size={16} />
              ) : (
                <AlertCircle size={16} />
              )}
              {saveStatus.message}
            </motion.div>
          )}

          <button
            onClick={() => setPreviewMode(!previewMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              previewMode
                ? "bg-[#9E4A47] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Eye size={18} />
            {previewMode ? "Edit" : "Preview"}
          </button>

          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
          >
            {saving ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save size={18} />
                Save
              </>
            )}
          </button>
        </div>
      </div>

      {/* Basic Info Row */}
      <div className="bg-white rounded-xl shadow-sm p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Case Study Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded-lg"
            placeholder="e.g., Lokesh Lohia"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Page Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            placeholder="Page title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
          >
            <option value="hair">Hair Transplant</option>
            <option value="nose">Rhinoplasty</option>
            <option value="jaw">Jaw Surgery</option>
            <option value="face">Facial Surgery</option>
            <option value="beard">Beard Transplant</option>
            <option value="eyebrow">Eyebrow Transplant</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      {!previewMode && (
        <div className="border-b border-gray-200">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition ${
                  activeTab === tab.id
                    ? "bg-[#9E4A47] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Editor Content */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {previewMode ? (
          <div className="text-center py-12 text-gray-500">
            Preview mode - In production this would show the actual page
          </div>
        ) : (
          <>
            {/* Banner Image Tab */}
            {activeTab === "banner" && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Film className="text-[#9E4A47]" size={20} />
                  <h3 className="text-lg font-semibold text-[#2B333C]">
                    Banner Image
                  </h3>
                </div>

                

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Image Uploader */}
                  <div className="w-full md:w-96">
                    <ImageUploader
                      currentPreview={formData.bannerImage?.url}
                      onUpload={handleBannerUpload}
                      onRemove={
                        formData.bannerImage ? handleBannerDelete : undefined
                      }
                      uploading={uploading}
                      label="Upload Banner Image"
                    />
                  </div>

                  {/* Info and Preview */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Current Banner:</span>{" "}
                      {formData.bannerImage ? "Uploaded" : "Not set"}
                    </p>

                    {formData.bannerImage && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            ✓ Banner image ready
                          </span>
                        </div>

                        {/* Preview */}
                        <div className="border rounded-lg overflow-hidden max-w-md">
                          <img
                            src={formData.bannerImage.url}
                            alt="Banner preview"
                            className="w-full h-auto"
                          />
                        </div>

                        {/* Image details */}
                        <div className="text-xs text-gray-500 space-y-1">
                          <p>
                            🖼️ This image will appear on the Before/After page
                            gallery
                          </p>
                          <p>
                            📱 Will be automatically optimized for mobile
                            devices
                          </p>
                        </div>
                      </div>
                    )}

                    {!formData.bannerImage && (
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600">
                          No banner image uploaded yet. Upload a high-quality
                          image to make your case study stand out on the gallery
                          page.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            {/* Hero Images Tab */}
            {activeTab === "hero" && (
              <div className="space-y-8">
                {/* Before Images */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-[#9E4A47]">
                      Before Surgery Images
                    </h3>
                    <p className="text-sm text-gray-500">
                      Upload 4 images (Front, Left, Right, Back views)
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[0, 1, 2, 3].map((idx) => {
                      const image = formData.heroImages.before?.[idx];
                      return (
                        <div key={`before-${idx}`} className="space-y-2">
                          <ImageUploader
                            key={`before-uploader-${idx}-${image?._id || "empty"}`}
                            currentPreview={image?.url}
                            onUpload={(file) =>
                              handleHeroUpload("before", file, idx)
                            }
                            onRemove={
                              image
                                ? () =>
                                    handleHeroDelete("before", image._id, idx)
                                : undefined
                            }
                            uploading={uploading}
                            label={`Before View ${idx + 1}`}
                          />
                          <input
                            type="text"
                            value={image?.name || `Before View ${idx + 1}`}
                            onChange={(e) => {
                              if (image) {
                                const newImages = [
                                  ...formData.heroImages.before,
                                ];
                                newImages[idx] = {
                                  ...image,
                                  name: e.target.value,
                                };
                                setFormData((prev) => ({
                                  ...prev,
                                  heroImages: {
                                    ...prev.heroImages,
                                    before: newImages,
                                  },
                                }));
                              }
                            }}
                            className="w-full p-1 text-xs border rounded"
                            placeholder={`View ${idx + 1}`}
                            disabled={!image}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* After Images */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-[#9E4A47]">
                      After Surgery Images
                    </h3>
                    <p className="text-sm text-gray-500">
                      Upload 4 images (Front, Left, Right, Back views)
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[0, 1, 2, 3].map((idx) => {
                      const image = formData.heroImages.after?.[idx];
                      return (
                        <div key={`after-${idx}`} className="space-y-2">
                          <ImageUploader
                            key={`after-uploader-${idx}-${image?._id || "empty"}`}
                            currentPreview={image?.url}
                            onUpload={(file) =>
                              handleHeroUpload("after", file, idx)
                            }
                            onRemove={
                              image
                                ? () =>
                                    handleHeroDelete("after", image._id, idx)
                                : undefined
                            }
                            uploading={uploading}
                            label={`After View ${idx + 1}`}
                          />
                          <input
                            type="text"
                            value={image?.name || `After View ${idx + 1}`}
                            onChange={(e) => {
                              if (image) {
                                const newImages = [
                                  ...formData.heroImages.after,
                                ];
                                newImages[idx] = {
                                  ...image,
                                  name: e.target.value,
                                };
                                setFormData((prev) => ({
                                  ...prev,
                                  heroImages: {
                                    ...prev.heroImages,
                                    after: newImages,
                                  },
                                }));
                              }
                            }}
                            className="w-full p-1 text-xs border rounded"
                            placeholder={`View ${idx + 1}`}
                            disabled={!image}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Preview Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-700">
                  <p className="font-medium mb-1">📸 Hero Section Preview:</p>
                  <p>
                    The first image from Before and After sets will be shown in
                    the hero slider. Users can navigate through all 4 views
                    using the arrows.
                  </p>
                </div>
              </div>
            )}

            {/* Patient Details Tab */}
            {activeTab === "details" && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <User className="text-[#9E4A47]" size={20} />
                  <h3 className="text-lg font-semibold text-[#2B333C]">
                    Patient Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.patientDetails.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientDetails: {
                              ...formData.patientDetails,
                              name: e.target.value,
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Age
                        </label>
                        <input
                          type="text"
                          value={formData.patientDetails.age}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              patientDetails: {
                                ...formData.patientDetails,
                                age: e.target.value,
                              },
                            })
                          }
                          className="w-full p-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Gender
                        </label>
                        <select
                          value={formData.patientDetails.gender}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              patientDetails: {
                                ...formData.patientDetails,
                                gender: e.target.value,
                              },
                            })
                          }
                          className="w-full p-2 border rounded-lg"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Surgery Date
                      </label>
                      <input
                        type="text"
                        value={formData.patientDetails.surgeryDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientDetails: {
                              ...formData.patientDetails,
                              surgeryDate: e.target.value,
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                        placeholder="e.g., 2023"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Follow-up Period
                      </label>
                      <input
                        type="text"
                        value={formData.patientDetails.followUp}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientDetails: {
                              ...formData.patientDetails,
                              followUp: e.target.value,
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                        placeholder="e.g., 7 Months"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Donor Area
                      </label>
                      <input
                        type="text"
                        value={formData.patientDetails.donorArea}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientDetails: {
                              ...formData.patientDetails,
                              donorArea: e.target.value,
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                        placeholder="e.g., Occipital region"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Complications
                      </label>
                      <textarea
                        value={formData.patientDetails.complications}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientDetails: {
                              ...formData.patientDetails,
                              complications: e.target.value,
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                        rows="3"
                        placeholder="Previous surgery complications"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Medications
                      </label>
                      <div className="space-y-2">
                        {formData.patientDetails.medications?.map(
                          (med, idx) => (
                            <div key={idx} className="flex gap-2">
                              <input
                                type="text"
                                value={med}
                                onChange={(e) => {
                                  const newMeds = [
                                    ...formData.patientDetails.medications,
                                  ];
                                  newMeds[idx] = e.target.value;
                                  setFormData({
                                    ...formData,
                                    patientDetails: {
                                      ...formData.patientDetails,
                                      medications: newMeds,
                                    },
                                  });
                                }}
                                className="flex-1 p-2 border rounded-lg"
                                placeholder="Medication"
                              />
                              <button
                                onClick={() => {
                                  const newMeds =
                                    formData.patientDetails.medications.filter(
                                      (_, i) => i !== idx,
                                    );
                                  setFormData({
                                    ...formData,
                                    patientDetails: {
                                      ...formData.patientDetails,
                                      medications: newMeds,
                                    },
                                  });
                                }}
                                className="p-2 text-red-600 hover:bg-red-50 rounded"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          ),
                        )}
                        <button
                          onClick={() => {
                            const newMeds = [
                              ...(formData.patientDetails.medications || []),
                              "New medication",
                            ];
                            setFormData({
                              ...formData,
                              patientDetails: {
                                ...formData.patientDetails,
                                medications: newMeds,
                              },
                            });
                          }}
                          className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-sm"
                        >
                          <Plus size={14} /> Add Medication
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grafts Section */}
                <div className="border-t pt-6 mt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Scissors className="text-[#9E4A47]" size={20} />
                    <h4 className="font-medium">Grafts Information</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        1st Surgery Grafts
                      </label>
                      <input
                        type="text"
                        value={formData.patientDetails.grafts.first}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientDetails: {
                              ...formData.patientDetails,
                              grafts: {
                                ...formData.patientDetails.grafts,
                                first: e.target.value,
                              },
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                        placeholder="e.g., 2700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        2nd Surgery Grafts
                      </label>
                      <input
                        type="text"
                        value={formData.patientDetails.grafts.second}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientDetails: {
                              ...formData.patientDetails,
                              grafts: {
                                ...formData.patientDetails.grafts,
                                second: e.target.value,
                              },
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                        placeholder="e.g., 3400"
                      />
                    </div>
                  </div>
                </div>

                {/* Technique Section */}
                <div className="border-t pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="text-[#9E4A47]" size={20} />
                    <h4 className="font-medium">Technique Details</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Technique
                      </label>
                      <input
                        type="text"
                        value={formData.patientDetails.technique}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientDetails: {
                              ...formData.patientDetails,
                              technique: e.target.value,
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                        placeholder="e.g., MHT"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Technique Detail
                      </label>
                      <input
                        type="text"
                        value={formData.patientDetails.techniqueDetail}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientDetails: {
                              ...formData.patientDetails,
                              techniqueDetail: e.target.value,
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                        placeholder="e.g., (Combined with DSFT)"
                      />
                    </div>
                  </div>
                </div>

                {/* Clinic Section */}
                <div className="border-t pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Hospital className="text-[#9E4A47]" size={20} />
                    <h4 className="font-medium">Clinic Information</h4>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Clinic Name
                    </label>
                    <input
                      type="text"
                      value={formData.patientDetails.clinic}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          patientDetails: {
                            ...formData.patientDetails,
                            clinic: e.target.value,
                          },
                        })
                      }
                      className="w-full p-2 border rounded-lg"
                      placeholder="e.g., SATYA SKIN & HAIR SOLUTIONS"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Table Tab */}
            {activeTab === "table" && (
              <div className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full border">
                    <thead>
                      <tr className="bg-[#9E4A47] text-white">
                        <th className="p-3 border text-left">View</th>
                        {formData.tableData.columns.map((col) => (
                          <th key={col.id} className="p-3 border min-w-[180px]">
                            <input
                              type="text"
                              value={col.label}
                              onChange={(e) => {
                                const newCols = formData.tableData.columns.map(
                                  (c) =>
                                    c.id === col.id
                                      ? { ...c, label: e.target.value }
                                      : c,
                                );
                                setFormData({
                                  ...formData,
                                  tableData: {
                                    ...formData.tableData,
                                    columns: newCols,
                                  },
                                });
                              }}
                              className="bg-transparent text-white border-b border-white/30 px-2 py-1 w-full text-center"
                              placeholder="Column label"
                            />
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {formData.tableData.rows.map((row) => (
                        <tr key={row.id}>
                          <td className="p-3 border bg-[#9E4A47]/10 font-medium">
                            <input
                              type="text"
                              value={row.label}
                              onChange={(e) => {
                                const newRows = formData.tableData.rows.map(
                                  (r) =>
                                    r.id === row.id
                                      ? { ...r, label: e.target.value }
                                      : r,
                                );
                                setFormData({
                                  ...formData,
                                  tableData: {
                                    ...formData.tableData,
                                    rows: newRows,
                                  },
                                });
                              }}
                              className="bg-transparent border-b border-gray-300 px-2 py-1 w-full"
                              placeholder="Row label"
                            />
                          </td>
                          {formData.tableData.columns.map((col) => {
                            const imageKey = `${row.id}_${col.id}`;
                            const image = formData.tableData.images[imageKey];

                            return (
                              <td key={col.id} className="p-2 border">
                                <ImageUploader
                                  key={`table-${imageKey}-${image?._id || "empty"}`}
                                  currentPreview={image?.url}
                                  onUpload={(file) =>
                                    handleTableImageUpload(row.id, col.id, file)
                                  }
                                  onRemove={
                                    image
                                      ? () => {
                                          // Handle delete
                                        }
                                      : undefined
                                  }
                                  uploading={uploading}
                                  label="Upload"
                                />
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Table Note */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-700">
                  <p className="font-medium mb-1">📊 Progress Table:</p>
                  <p>
                    Each cell represents a specific view at a specific stage.
                    Upload images for each combination to show the patient's
                    progress.
                  </p>
                </div>
              </div>
            )}

            {/* Content Tab */}
            {activeTab === "content" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#2B333C]">
                    Content Sections
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddContent("heading")}
                      className="flex items-center gap-2 px-3 py-1 bg-[#9E4A47] text-white rounded-lg text-sm"
                    >
                      <Plus size={14} /> Heading
                    </button>
                    <button
                      onClick={() => handleAddContent("paragraph")}
                      className="flex items-center gap-2 px-3 py-1 bg-[#9E4A47] text-white rounded-lg text-sm"
                    >
                      <Plus size={14} /> Paragraph
                    </button>
                    <button
                      onClick={() => handleAddContent("list")}
                      className="flex items-center gap-2 px-3 py-1 bg-[#9E4A47] text-white rounded-lg text-sm"
                    >
                      <Plus size={14} /> List
                    </button>
                  </div>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {formData.content.map((section, index) => (
                    <div
                      key={section.id}
                      className="border rounded-lg p-4 bg-gray-50"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-gray-200 rounded text-xs">
                            {section.type}{" "}
                            {section.level && `- ${section.level}`}
                          </span>
                          <span className="text-xs text-gray-500">
                            Order: {index + 1}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleMoveContent(section.id, "up")}
                            className="p-1 hover:bg-gray-200 rounded"
                            disabled={index === 0}
                          >
                            <ChevronUp
                              size={16}
                              className={
                                index === 0 ? "text-gray-300" : "text-gray-600"
                              }
                            />
                          </button>
                          <button
                            onClick={() =>
                              handleMoveContent(section.id, "down")
                            }
                            className="p-1 hover:bg-gray-200 rounded"
                            disabled={index === formData.content.length - 1}
                          >
                            <ChevronDown
                              size={16}
                              className={
                                index === formData.content.length - 1
                                  ? "text-gray-300"
                                  : "text-gray-600"
                              }
                            />
                          </button>
                          <button
                            onClick={() => handleDeleteContent(section.id)}
                            className="p-1 hover:bg-red-100 rounded text-red-600"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      {section.type === "heading" && (
                        <div className="space-y-2">
                          <select
                            value={section.level || "h2"}
                            onChange={(e) =>
                              handleUpdateContent(section.id, {
                                level: e.target.value,
                              })
                            }
                            className="p-2 border rounded text-sm"
                          >
                            <option value="h1">H1 - Main Title</option>
                            <option value="h2">H2 - Section Title</option>
                            <option value="h3">H3 - Subsection</option>
                            <option value="h4">H4 - Small Heading</option>
                          </select>
                          <input
                            type="text"
                            value={section.content || ""}
                            onChange={(e) =>
                              handleUpdateContent(section.id, {
                                content: e.target.value,
                              })
                            }
                            className="w-full p-2 border rounded"
                            placeholder="Heading text"
                          />
                        </div>
                      )}

                      {section.type === "paragraph" && (
                        <div>
                          <textarea
                            value={section.content || ""}
                            onChange={(e) =>
                              handleUpdateContent(section.id, {
                                content: e.target.value,
                              })
                            }
                            className="w-full p-2 border rounded"
                            rows="4"
                            placeholder="Paragraph text"
                          />
                          <input
                            type="text"
                            value={section.className || ""}
                            onChange={(e) =>
                              handleUpdateContent(section.id, {
                                className: e.target.value,
                              })
                            }
                            className="w-full p-2 border rounded mt-2 text-sm"
                            placeholder="CSS classes (optional)"
                          />
                        </div>
                      )}

                      {section.type === "list" && (
                        <div className="space-y-2">
                          {section.items?.map((item, idx) => (
                            <div key={idx} className="flex gap-2">
                              <input
                                type="text"
                                value={item}
                                onChange={(e) => {
                                  const newItems = [...section.items];
                                  newItems[idx] = e.target.value;
                                  handleUpdateContent(section.id, {
                                    items: newItems,
                                  });
                                }}
                                className="flex-1 p-2 border rounded"
                                placeholder={`List item ${idx + 1}`}
                              />
                              <button
                                onClick={() => {
                                  const newItems = section.items.filter(
                                    (_, i) => i !== idx,
                                  );
                                  handleUpdateContent(section.id, {
                                    items: newItems,
                                  });
                                }}
                                className="p-2 text-red-600 hover:bg-red-50 rounded"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              const newItems = [
                                ...(section.items || []),
                                "New item",
                              ];
                              handleUpdateContent(section.id, {
                                items: newItems,
                              });
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

            {/* Video Tab */}
            {activeTab === "video" && (
              <div className="space-y-4 max-w-2xl">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    YouTube Embed URL
                  </label>
                  <input
                    type="text"
                    value={formData.video.url}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        video: { ...formData.video, url: e.target.value },
                      })
                    }
                    className="w-full p-2 border rounded"
                    placeholder="https://www.youtube.com/embed/..."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Use the embed URL format:
                    https://www.youtube.com/embed/VIDEO_ID
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Video Title
                  </label>
                  <input
                    type="text"
                    value={formData.video.title || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        video: { ...formData.video, title: e.target.value },
                      })
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Video title"
                  />
                </div>

                {/* Video Preview */}
                {formData.video.url && (
                  <div className="mt-4 aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={formData.video.url}
                      title={formData.video.title || "Video preview"}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            )}

            {/* FAQs Tab */}
            {activeTab === "faq" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#2B333C]">FAQs</h3>
                  <button
                    onClick={() => {
                      const newFaq = {
                        id: Date.now(),
                        question: "New Question",
                        answer: "New answer",
                        order: formData.faqs.length,
                      };
                      setFormData({
                        ...formData,
                        faqs: [...formData.faqs, newFaq],
                      });
                    }}
                    className="flex items-center gap-2 px-3 py-1 bg-[#9E4A47] text-white rounded-lg text-sm"
                  >
                    <Plus size={14} /> Add FAQ
                  </button>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {formData.faqs.map((faq, idx) => (
                    <div key={faq.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-sm font-medium">
                          FAQ #{idx + 1}
                        </span>
                        <button
                          onClick={() => {
                            setFormData({
                              ...formData,
                              faqs: formData.faqs.filter(
                                (f) => f.id !== faq.id,
                              ),
                            });
                          }}
                          className="p-1 text-red-600 hover:bg-red-50 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => {
                            const newFaqs = [...formData.faqs];
                            newFaqs[idx].question = e.target.value;
                            setFormData({ ...formData, faqs: newFaqs });
                          }}
                          className="w-full p-2 border rounded"
                          placeholder="Question"
                        />
                        <textarea
                          value={faq.answer}
                          onChange={(e) => {
                            const newFaqs = [...formData.faqs];
                            newFaqs[idx].answer = e.target.value;
                            setFormData({ ...formData, faqs: newFaqs });
                          }}
                          className="w-full p-2 border rounded"
                          rows="3"
                          placeholder="Answer"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ===== SEO TAB - WITH OG IMAGE UPLOADER ===== */}
            {activeTab === "seo" && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="text-[#9E4A47]" size={20} />
                  <h3 className="text-lg font-semibold text-[#2B333C]">
                    SEO Settings
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Meta Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Meta Title
                      <span className="text-xs text-gray-500 ml-2">
                        ({formData.seo?.metaTitle?.length || 0}/60)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={formData.seo?.metaTitle || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          seo: { ...formData.seo, metaTitle: e.target.value },
                        })
                      }
                      className="w-full p-2 border rounded-lg"
                      placeholder={`${formData.name}'s Hair Transplant Journey | Satya Skin & Hair`}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Leave empty to auto-generate from patient name
                    </p>
                  </div>

                  {/* Meta Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Meta Description
                      <span className="text-xs text-gray-500 ml-2">
                        ({formData.seo?.metaDescription?.length || 0}/160)
                      </span>
                    </label>
                    <textarea
                      value={formData.seo?.metaDescription || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          seo: {
                            ...formData.seo,
                            metaDescription: e.target.value,
                          },
                        })
                      }
                      className="w-full p-2 border rounded-lg"
                      rows="3"
                      placeholder={`View ${formData.name}'s hair transplant case study. See before and after results, graft details (${formData.patientDetails?.grafts?.first || "2700"} grafts), and transformation journey at Satya Skin & Hair.`}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Leave empty to auto-generate from patient details
                    </p>
                  </div>

                  {/* ===== OG IMAGE WITH UPLOADER ===== */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      OG Image (Social Media Feature Image)
                    </label>
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image Uploader */}
                      <div className="w-64">
                        <ImageUploader
                          currentPreview={
                            formData.seo?.ogImage ||
                            formData.heroImages?.after?.[0]?.url
                          }
                          onUpload={async (file) => {
                            if (!caseStudy?._id) {
                              setSaveStatus({
                                type: "error",
                                message: "Please save the case study first",
                              });
                              return;
                            }

                            setUploading(true);
                            try {
                              const response = await uploadAPI.uploadOGImage(
                                caseStudy._id,
                                file,
                              );
                              setFormData((prev) => ({
                                ...prev,
                                seo: {
                                  ...prev.seo,
                                  ogImage: response.data.data.url,
                                },
                              }));
                              setSaveStatus({
                                type: "success",
                                message: "OG Image uploaded successfully!",
                              });
                              setTimeout(() => setSaveStatus(null), 3000);
                            } catch (error) {
                              console.error("OG Image upload failed:", error);
                              setSaveStatus({
                                type: "error",
                                message: "Failed to upload OG Image",
                              });
                            } finally {
                              setUploading(false);
                            }
                          }}
                          onRemove={async () => {
                            setFormData((prev) => ({
                              ...prev,
                              seo: {
                                ...prev.seo,
                                ogImage: "",
                              },
                            }));
                          }}
                          uploading={uploading}
                          label="Upload OG Image"
                        />
                      </div>

                      {/* Info and Preview */}
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Recommended:</span>{" "}
                          1200×630 pixels (1.91:1 ratio)
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          This image will appear when your case study is shared
                          on WhatsApp, Facebook, Twitter, and other social
                          platforms.
                        </p>
                        <p className="text-sm text-gray-500">
                          {formData.seo?.ogImage
                            ? "Custom image uploaded"
                            : "Using default image from case study"}
                        </p>

                        {/* Size indicator */}
                        {formData.seo?.ogImage && (
                          <div className="mt-2 flex items-center gap-2">
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              ✓ Custom OG Image set
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
