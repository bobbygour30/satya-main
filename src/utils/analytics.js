// src/utils/analytics.js
// Analytics utility for tracking form submissions and events

/**
 * Track form submission to Meta Pixel and Google Analytics 4
 * @param {FormData} formData - The form data submitted
 * @param {string} status - 'success' or 'error'
 * @param {string} formType - Type of form (e.g., 'consultation', 'contact')
 */
export const trackFormSubmission = (formData, status = 'success', formType = 'consultation') => {
  // Extract form data for enhanced tracking (without exposing sensitive info)
  const name = formData.get('name') || '';
  const phone = formData.get('phone') || '';
  const email = formData.get('email') || '';
  
  // ========== META PIXEL (Facebook) EVENT TRACKING ==========
  if (typeof fbq === 'function') {
    // Track standard Lead event (Meta's recommended event for form submissions)
    fbq('track', 'Lead', {
      content_name: `${formType.charAt(0).toUpperCase() + formType.slice(1)} Form Submission`,
      content_category: formType,
      status: status,
      // Include non-PII data for better matching
      name_provided: !!name,
      phone_provided: !!phone,
      email_provided: !!email,
      form_type: formType,
      timestamp: new Date().toISOString()
    });
    
    // Also track a custom event for more granular analysis
    fbq('trackCustom', 'FormSubmit', {
      form_type: formType,
      status: status,
      name_provided: !!name,
      phone_provided: !!phone,
      email_provided: !!email,
      timestamp: new Date().toISOString()
    });
    
    console.log(`✅ Meta Pixel Event Tracked: Lead (${formType} form - ${status})`);
  } else {
    console.warn('⚠️ Meta Pixel not available - fbq() not found');
  }
  
  // ========== GOOGLE ANALYTICS 4 (GA4) EVENT TRACKING ==========
  if (typeof gtag === 'function') {
    // Track generate_lead event (GA4 recommended for lead generation)
    gtag('event', 'generate_lead', {
      currency: 'INR',
      value: 0, // Free consultation
      form_type: formType,
      status: status,
      method: 'website_popup'
    });
    
    // Track custom form_submit event for detailed analysis
    gtag('event', 'form_submit', {
      form_name: `${formType}_form`,
      form_location: 'popup',
      form_type: formType,
      success: status === 'success',
      engagement_time_msec: 1000
    });
    
    console.log(`📊 GA4 Event Tracked: generate_lead & form_submit (${formType} form - ${status})`);
  } else {
    console.warn('⚠️ Google Analytics 4 not available - gtag() not found');
  }
  
  // ========== GOOGLE TAG MANAGER (Optional - if you want to push to dataLayer) ==========
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': formType,
      'formStatus': status,
      'formName': `${formType}_form`,
      'timestamp': new Date().toISOString()
    });
  }
};

/**
 * Track when user opens the consultation form popup
 * @param {string} formType - Type of form being opened
 */
export const trackFormOpen = (formType = 'consultation') => {
  // Meta Pixel - Track custom event for popup open
  if (typeof fbq === 'function') {
    fbq('trackCustom', 'InitiateConsultation', {
      form_type: formType,
      action: 'popup_opened',
      timestamp: new Date().toISOString()
    });
  }
  
  // GA4 - Track view_promotion or custom event
  if (typeof gtag === 'function') {
    gtag('event', 'view_promotion', {
      promotion_name: `${formType}_popup`,
      creative_slot: 'popup_modal',
      form_type: formType
    });
  }
  
  console.log(`📝 Tracked: ${formType} form popup opened`);
};

/**
 * Track form abandonment (when user closes popup without submitting)
 * @param {string} formType - Type of form
 * @param {number} timeSpentSeconds - Time spent on form before closing
 */
export const trackFormAbandonment = (formType = 'consultation', timeSpentSeconds = 0) => {
  if (typeof fbq === 'function') {
    fbq('trackCustom', 'AbandonedForm', {
      form_type: formType,
      time_spent_seconds: timeSpentSeconds,
      timestamp: new Date().toISOString()
    });
  }
  
  if (typeof gtag === 'function') {
    gtag('event', 'form_abandon', {
      form_name: `${formType}_form`,
      form_type: formType,
      time_spent: timeSpentSeconds
    });
  }
  
  console.log(`⚠️ Tracked: ${formType} form abandoned after ${timeSpentSeconds}s`);
};

/**
 * Track successful email sending
 * @param {string} formType - Type of form
 */
export const trackEmailSent = (formType = 'consultation') => {
  if (typeof fbq === 'function') {
    fbq('trackCustom', 'EmailSent', {
      form_type: formType,
      status: 'success'
    });
  }
  
  if (typeof gtag === 'function') {
    gtag('event', 'email_sent', {
      form_type: formType,
      status: 'success'
    });
  }
};