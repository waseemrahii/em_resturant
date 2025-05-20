
import { useState, useEffect } from "react"
import { FaSave, FaUndo, FaUpload, FaPalette, FaFont, FaDesktop, FaGlobe, FaCode } from "react-icons/fa"
import { toast } from "react-toastify"
import {
  useGetAppearanceSettingsQuery,
  useUpdateAppearanceSettingsMutation,
  useResetAppearanceSettingsMutation,
} from "../../redux/services/appearanceService"

const AppearanceSettings = () => {
  const [activeTab, setActiveTab] = useState("branding")
  const [formData, setFormData] = useState({
    siteName: "",
    tagline: "",
    logo: null,
    favicon: null,
    footerLogo: null,
    mobileAppLogo: null,
    primaryColor: "",
    secondaryColor: "",
    accentColor: "",
    backgroundColor: "",
    textColor: "",
    linkColor: "",
    buttonColor: "",
    buttonTextColor: "",
    headerBackgroundColor: "",
    headerTextColor: "",
    footerBackgroundColor: "",
    footerTextColor: "",
    headingFont: "",
    bodyFont: "",
    fontSize: "",
    sidebarPosition: "",
    layoutWidth: "",
    footerText: "",
    socialLinks: [],
    mobileAppPrimaryColor: "",
    mobileAppAccentColor: "",
    customCSS: "",
    customJS: "",
    metaTitle: "",
    metaDescription: "",
    ogImage: null,
    googleAnalyticsId: "",
    facebookPixelId: "",
  })

  const [logoPreview, setLogoPreview] = useState(null)
  const [faviconPreview, setFaviconPreview] = useState(null)
  const [footerLogoPreview, setFooterLogoPreview] = useState(null)
  const [mobileAppLogoPreview, setMobileAppLogoPreview] = useState(null)
  const [ogImagePreview, setOgImagePreview] = useState(null)

  // RTK Query hooks
  const { data: appearanceData, isLoading, error } = useGetAppearanceSettingsQuery()
  const [updateAppearance, { isLoading: isUpdating }] = useUpdateAppearanceSettingsMutation()
  const [resetAppearance, { isLoading: isResetting }] = useResetAppearanceSettingsMutation()

  // Load data when available
  useEffect(() => {
    if (appearanceData) {
      setFormData({
        ...formData,
        ...appearanceData,
        // Don't override file inputs with URLs
        logo: null,
        favicon: null,
        footerLogo: null,
        mobileAppLogo: null,
        ogImage: null,
      })

      // Set preview images from URLs
      setLogoPreview(appearanceData.logo)
      setFaviconPreview(appearanceData.favicon)
      setFooterLogoPreview(appearanceData.footerLogo)
      setMobileAppLogoPreview(appearanceData.mobileAppLogo)
      setOgImagePreview(appearanceData.ogImage)
    }
  }, [appearanceData])

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target

    if (type === "file") {
      // Handle file uploads
      const file = files[0]
      if (file) {
        setFormData({
          ...formData,
          [name]: file,
        })

        // Create preview URL
        const reader = new FileReader()
        reader.onloadend = () => {
          switch (name) {
            case "logo":
              setLogoPreview(reader.result)
              break
            case "favicon":
              setFaviconPreview(reader.result)
              break
            case "footerLogo":
              setFooterLogoPreview(reader.result)
              break
            case "mobileAppLogo":
              setMobileAppLogoPreview(reader.result)
              break
            case "ogImage":
              setOgImagePreview(reader.result)
              break
            default:
              break
          }
        }
        reader.readAsDataURL(file)
      }
    } else {
      // Handle other inputs
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  // Handle social links changes
  const handleSocialLinkChange = (index, field, value) => {
    const updatedLinks = [...formData.socialLinks]
    updatedLinks[index] = {
      ...updatedLinks[index],
      [field]: value,
    }
    setFormData({
      ...formData,
      socialLinks: updatedLinks,
    })
  }

  // Add new social link
  const addSocialLink = () => {
    setFormData({
      ...formData,
      socialLinks: [
        ...formData.socialLinks,
        {
          platform: "facebook",
          url: "",
          isActive: true,
        },
      ],
    })
  }

  // Remove social link
  const removeSocialLink = (index) => {
    const updatedLinks = [...formData.socialLinks]
    updatedLinks.splice(index, 1)
    setFormData({
      ...formData,
      socialLinks: updatedLinks,
    })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateAppearance(formData).unwrap()
      toast.success("Appearance settings updated successfully")
    } catch (error) {
      toast.error(`Failed to update appearance settings: ${error.message || "Unknown error"}`)
    }
  }

  // Handle reset to defaults
  const handleReset = async () => {
    if (window.confirm("Are you sure you want to reset all appearance settings to default values?")) {
      try {
        await resetAppearance().unwrap()
        toast.success("Appearance settings reset to defaults")
      } catch (error) {
        toast.error(`Failed to reset appearance settings: ${error.message || "Unknown error"}`)
      }
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> Failed to load appearance settings.</span>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Appearance Settings</h1>
        <div className="flex space-x-2">
          <button
            onClick={handleReset}
            disabled={isResetting}
            className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
          >
            <FaUndo className="mr-2" />
            Reset to Defaults
          </button>
          <button
            onClick={handleSubmit}
            disabled={isUpdating}
            className="flex items-center px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors"
          >
            <FaSave className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "branding" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("branding")}
        >
          Branding
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "colors" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("colors")}
        >
          Colors
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "typography" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("typography")}
        >
          Typography
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "layout" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("layout")}
        >
          Layout
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "social" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("social")}
        >
          Social
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "advanced" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("advanced")}
        >
          Advanced
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "seo" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("seo")}
        >
          SEO
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Branding Tab */}
        {activeTab === "branding" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
                <input
                  type="text"
                  name="siteName"
                  value={formData.siteName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                <input
                  type="text"
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
                <div className="flex items-center space-x-4">
                  {logoPreview && (
                    <div className="w-16 h-16 border rounded flex items-center justify-center overflow-hidden">
                      <img src={logoPreview || "/placeholder.svg"} alt="Logo Preview" className="max-w-full max-h-full" />
                    </div>
                  )}
                  <label className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 cursor-pointer transition-colors">
                    <FaUpload className="mr-2" />
                    Upload Logo
                    <input
                      type="file"
                      name="logo"
                      onChange={handleChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">Recommended size: 200x60 pixels</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Favicon</label>
                <div className="flex items-center space-x-4">
                  {faviconPreview && (
                    <div className="w-16 h-16 border rounded flex items-center justify-center overflow-hidden">
                      <img src={faviconPreview || "/placeholder.svg"} alt="Favicon Preview" className="max-w-full max-h-full" />
                    </div>
                  )}
                  <label className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 cursor-pointer transition-colors">
                    <FaUpload className="mr-2" />
                    Upload Favicon
                    <input
                      type="file"
                      name="favicon"
                      onChange={handleChange}
                      accept="image/x-icon,image/png"
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">Recommended size: 32x32 pixels</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Footer Logo</label>
                <div className="flex items-center space-x-4">
                  {footerLogoPreview && (
                    <div className="w-16 h-16 border rounded flex items-center justify-center overflow-hidden">
                      <img src={footerLogoPreview || "/placeholder.svg"} alt="Footer Logo Preview" className="max-w-full max-h-full" />
                    </div>
                  )}
                  <label className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 cursor-pointer transition-colors">
                    <FaUpload className="mr-2" />
                    Upload Footer Logo
                    <input
                      type="file"
                      name="footerLogo"
                      onChange={handleChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">Recommended size: 180x50 pixels</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile App Logo</label>
                <div className="flex items-center space-x-4">
                  {mobileAppLogoPreview && (
                    <div className="w-16 h-16 border rounded flex items-center justify-center overflow-hidden">
                      <img src={mobileAppLogoPreview || "/placeholder.svg"} alt="Mobile App Logo Preview" className="max-w-full max-h-full" />
                    </div>
                  )}
                  <label className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 cursor-pointer transition-colors">
                    <FaUpload className="mr-2" />
                    Upload Mobile App Logo
                    <input
                      type="file"
                      name="mobileAppLogo"
                      onChange={handleChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">Recommended size: 512x512 pixels</p>
              </div>
            </div>
          </div>
        )}

        {/* Colors Tab */}
        {activeTab === "colors" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="primaryColor"
                    value={formData.primaryColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="primaryColor"
                    value={formData.primaryColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="secondaryColor"
                    value={formData.secondaryColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="secondaryColor"
                    value={formData.secondaryColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Accent Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="accentColor"
                    value={formData.accentColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="accentColor"
                    value={formData.accentColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Background Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Text Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="textColor"
                    value={formData.textColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="textColor"
                    value={formData.textColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="linkColor"
                    value={formData.linkColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="linkColor"
                    value={formData.linkColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="buttonColor"
                    value={formData.buttonColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="buttonColor"
                    value={formData.buttonColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Text Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="buttonTextColor"
                    value={formData.buttonTextColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="buttonTextColor"
                    value={formData.buttonTextColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Header Background Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="headerBackgroundColor"
                    value={formData.headerBackgroundColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="headerBackgroundColor"
                    value={formData.headerBackgroundColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Header Text Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="headerTextColor"
                    value={formData.headerTextColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="headerTextColor"
                    value={formData.headerTextColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Footer Background Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="footerBackgroundColor"
                    value={formData.footerBackgroundColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="footerBackgroundColor"
                    value={formData.footerBackgroundColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Footer Text Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="footerTextColor"
                    value={formData.footerTextColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="footerTextColor"
                    value={formData.footerTextColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile App Primary Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="mobileAppPrimaryColor"
                    value={formData.mobileAppPrimaryColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="mobileAppPrimaryColor"
                    value={formData.mobileAppPrimaryColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile App Accent Color</label>
                <div className="flex">
                  <input
                    type="color"
                    name="mobileAppAccentColor"
                    value={formData.mobileAppAccentColor}
                    onChange={handleChange}
                    className="w-12 h-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    name="mobileAppAccentColor"
                    value={formData.mobileAppAccentColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                <FaPalette className="mr-2 text-teal-500" />
                Color Preview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div
                    className="h-10 rounded"
                    style={{ backgroundColor: formData.primaryColor }}
                    title="Primary Color"
                  ></div>
                  <div
                    className="h-10 rounded"
                    style={{ backgroundColor: formData.secondaryColor }}
                    title="Secondary Color"
                  ></div>
                  <div
                    className="h-10 rounded"
                    style={{ backgroundColor: formData.accentColor }}
                    title="Accent Color"
                  ></div>
                </div>
                <div className="space-y-2">
                  <div
                    className="h-10 rounded flex items-center justify-center"
                    style={{ backgroundColor: formData.buttonColor }}
                    title="Button"
                  >
                    <span style={{ color: formData.buttonTextColor }}>Button</span>
                  </div>
                  <div
                    className="h-10 rounded flex items-center justify-center"
                    style={{ backgroundColor: formData.headerBackgroundColor }}
                    title="Header"
                  >
                    <span style={{ color: formData.headerTextColor }}>Header</span>
                  </div>
                  <div
                    className="h-10 rounded flex items-center justify-center"
                    style={{ backgroundColor: formData.footerBackgroundColor }}
                    title="Footer"
                  >
                    <span style={{ color: formData.footerTextColor }}>Footer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Typography Tab */}
        {activeTab === "typography" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Heading Font</label>
                <select
                  name="headingFont"
                  value={formData.headingFont}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Poppins, sans-serif">Poppins</option>
                  <option value="Roboto, sans-serif">Roboto</option>
                  <option value="Open Sans, sans-serif">Open Sans</option>
                  <option value="Montserrat, sans-serif">Montserrat</option>
                  <option value="Lato, sans-serif">Lato</option>
                  <option value="Raleway, sans-serif">Raleway</option>
                  <option value="Nunito, sans-serif">Nunito</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Body Font</label>
                <select
                  name="bodyFont"
                  value={formData.bodyFont}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Open Sans, sans-serif">Open Sans</option>
                  <option value="Roboto, sans-serif">Roboto</option>
                  <option value="Lato, sans-serif">Lato</option>
                  <option value="Nunito, sans-serif">Nunito</option>
                  <option value="Source Sans Pro, sans-serif">Source Sans Pro</option>
                  <option value="Poppins, sans-serif">Poppins</option>
                  <option value="Montserrat, sans-serif">Montserrat</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Font Size</label>
              <select
                name="fontSize"
                value={formData.fontSize}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="14px">Small (14px)</option>
                <option value="16px">Medium (16px)</option>
                <option value="18px">Large (18px)</option>
              </select>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <FaFont className="mr-2 text-teal-500" />
                Typography Preview
              </h3>
              <div className="space-y-4">
                <div>
                  <h1 style={{ fontFamily: formData.headingFont, fontSize: "2rem" }}>Heading 1</h1>
                  <h2 style={{ fontFamily: formData.headingFont, fontSize: "1.5rem" }}>Heading 2</h2>
                  <h3 style={{ fontFamily: formData.headingFont, fontSize: "1.25rem" }}>Heading 3</h3>
                </div>
                <div>
                  <p style={{ fontFamily: formData.bodyFont, fontSize: formData.fontSize }}>
                    This is a paragraph with body text. The quick brown fox jumps over the lazy dog. This text demonstrates how your body font will look on your website.
                  </p>
                  <p style={{ fontFamily: formData.bodyFont, fontSize: formData.fontSize, marginTop: "0.5rem" }}>
                    <a href="#" style={{ color: formData.linkColor }}>This is how links will appear</a> within your content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Layout Tab */}
        {activeTab === "layout" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sidebar Position</label>
                <select
                  name="sidebarPosition"
                  value={formData.sidebarPosition}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Layout Width</label>
                <select
                  name="layoutWidth"
                  value={formData.layoutWidth}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="boxed">Boxed</option>
                  <option value="full-width">Full Width</option>
                  <option value="contained">Contained</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Footer Text</label>
              <input
                type="text"
                name="footerText"
                value={formData.footerText}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <FaDesktop className="mr-2 text-teal-500" />
                Layout Preview
              </h3>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div
                  className="h-10 flex items-center px-4"
                  style={{ backgroundColor: formData.headerBackgroundColor, color: formData.headerTextColor }}
                >
                  Header
                </div>
                <div className="flex" style={{ minHeight: "200px" }}>
                  {formData.sidebarPosition === "left" && (
                    <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300">Sidebar</div>
                  )}
                  <div
                    className={`${formData.sidebarPosition === "left" || formData.sidebarPosition === "right" ? "w-3/4" : "w-full"} p-4`}
                    style={{ backgroundColor: formData.backgroundColor, color: formData.textColor }}
                  >
                    <div className="mb-2" style={{ fontFamily: formData.headingFont }}>
                      Main Content
                    </div>
                    <div style={{ fontFamily: formData.bodyFont, fontSize: formData.fontSize }}>
                      Content area with{" "}
                      <span style={{ color: formData.linkColor }}>links</span> and text.
                    </div>
                  </div>
                  {formData.sidebarPosition === "right" && (
                    <div className="w-1/4 bg-gray-100 p-4 border-l border-gray-300">Sidebar</div>
                  )}
                </div>
                <div
                  className="h-10 flex items-center justify-center text-sm"
                  style={{ backgroundColor: formData.footerBackgroundColor, color: formData.footerTextColor }}
                >
                  {formData.footerText}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Tab */}
        {activeTab === "social" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800 flex items-center">
                <FaGlobe className="mr-2 text-teal-500" />
                Social Media Links
              </h3>
              <button
                type="button"
                onClick={addSocialLink}
                className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors"
              >
                Add Link
              </button>
            </div>

            {formData.socialLinks.length === 0 ? (
              <div className="text-center py-6 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500">No social links added yet. Click "Add Link" to add your first social media link.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {formData.socialLinks.map((link, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium text-gray-700">Social Link #{index + 1}</h4>
                      <button
                        type="button"
                        onClick={() => removeSocialLink(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                        <select
                          value={link.platform}
                          onChange={(e) => handleSocialLinkChange(index, "platform", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                          <option value="facebook">Facebook</option>
                          <option value="twitter">Twitter</option>
                          <option value="instagram">Instagram</option>
                          <option value="youtube">YouTube</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="pinterest">Pinterest</option>
                          <option value="tiktok">TikTok</option>
                          <option value="snapchat">Snapchat</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="telegram">Telegram</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                        <input
                          type="url"
                          value={link.url}
                          onChange={(e) => handleSocialLinkChange(index, "url", e.target.value)}
                          placeholder="https://example.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={link.isActive}
                          onChange={(e) => handleSocialLinkChange(index, "isActive", e.target.checked)}
                          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">Active</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Advanced Tab */}
        {activeTab === "advanced" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Custom CSS</label>
              <textarea
                name="customCSS"
                value={formData.customCSS}
                onChange={handleChange}
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-sm"
                placeholder="/* Add your custom CSS here */"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                Custom CSS will be applied to the entire website. Use with caution.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Custom JavaScript</label>
              <textarea
                name="customJS"
                value={formData.customJS}
                onChange={handleChange}
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-sm"
                placeholder="// Add your custom JavaScript here"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                Custom JavaScript will be executed on the entire website. Use with caution.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-medium text-yellow-800 mb-2 flex items-center">
                <FaCode className="mr-2 text-yellow-600" />
                Advanced Settings Warning
              </h3>
              <p className="text-sm text-yellow-700">
                These settings are for advanced users only. Incorrect CSS or JavaScript can break your website's functionality. Always test your changes thoroughly.
              </p>
            </div>
          </div>
        )}

        {/* SEO Tab */}
        {activeTab === "seo" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Recommended length: 50-60 characters
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Recommended length: 150-160 characters
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">OG Image</label>
              <div className="flex items-center space-x-4">
                {ogImagePreview && (
                  <div className="w-32 h-20 border rounded flex items-center justify-center overflow-hidden">
                    <img src={ogImagePreview || "/placeholder.svg"} alt="OG Image Preview" className="max-w-full max-h-full" />
                  </div>
                )}
                <label className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 cursor-pointer transition-colors">
                  <FaUpload className="mr-2" />
                  Upload OG Image
                  <input
                    type="file"
                    name="ogImage"
                    onChange={handleChange}
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Recommended size: 1200x630 pixels. This image will be displayed when your site is shared on social media.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Google Analytics ID</label>
                <input
                  type="text"
                  name="googleAnalyticsId"
                  value={formData.googleAnalyticsId}
                  onChange={handleChange}
                  placeholder="G-XXXXXXXXXX or UA-XXXXXXXX-X"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Facebook Pixel ID</label>
                <input
                  type="text"
                  name="facebookPixelId"
                  value={formData.facebookPixelId}
                  onChange={handleChange}
                  placeholder="XXXXXXXXXXXXXXXXXX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4">SEO Preview</h3>
              <div className="border border-gray-300 rounded-lg p-4 bg-white">
                <div className="text-blue-600 text-lg font-medium truncate">{formData.metaTitle || "Your Website Title"}</div>
                <div className="text-green-700 text-sm truncate">www.yourwebsite.com</div>
                <div className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {formData.metaDescription || "Your website description will appear here. Make sure to write a compelling description that encourages users to visit your site."}
                </div>
              </div>
            </div>
          </div>
        )}
      </form>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleReset}
          disabled={isResetting}
          className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors mr-2"
        >
          <FaUndo className="mr-2" />
          Reset to Defaults
        </button>
        <button
          onClick={handleSubmit}
          disabled={isUpdating}
          className="flex items-center px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors"
        >
          <FaSave className="mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default AppearanceSettings