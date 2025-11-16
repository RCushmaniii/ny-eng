/**
 * Device and Browser Detection Utilities
 * 
 * Lightweight detection for tracking behavioral data in quiz submissions.
 * Used to understand user context without external dependencies.
 */

/**
 * Detect device type from user agent
 * 
 * @returns Device type classification
 */
export function getDeviceType(): 'mobile' | 'desktop' | 'tablet' {
  // SSR fallback
  if (typeof window === 'undefined') return 'desktop';
  
  const ua = navigator.userAgent.toLowerCase();
  
  // Check for tablet first (more specific)
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  
  // Check for mobile
  if (/mobile|android|iphone|ipod|blackberry|opera mini|iemobile/i.test(ua)) {
    return 'mobile';
  }
  
  // Default to desktop
  return 'desktop';
}

/**
 * Detect browser from user agent
 * 
 * @returns Browser name
 */
export function getBrowser(): string {
  // SSR fallback
  if (typeof window === 'undefined') return 'unknown';
  
  const ua = navigator.userAgent;
  
  // Check for Edge (must be before Chrome check)
  if (ua.includes('Edg/')) return 'edge';
  
  // Check for Chrome (must be before Safari check)
  if (ua.includes('Chrome/') && !ua.includes('Edg/')) return 'chrome';
  
  // Check for Firefox
  if (ua.includes('Firefox/')) return 'firefox';
  
  // Check for Safari (must be after Chrome check)
  if (ua.includes('Safari/') && !ua.includes('Chrome/')) return 'safari';
  
  // Check for Opera
  if (ua.includes('OPR/') || ua.includes('Opera/')) return 'opera';
  
  // Fallback
  return 'other';
}

/**
 * Get referrer URL
 * 
 * @returns Referrer URL or empty string if not available
 */
export function getReferrer(): string {
  if (typeof document === 'undefined') return '';
  return document.referrer || '';
}

/**
 * Get UTM parameters from current URL
 * 
 * @returns Object with UTM parameters
 */
export function getUTMParams(): {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
} {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  
  return {
    utmSource: params.get('utm_source') || undefined,
    utmMedium: params.get('utm_medium') || undefined,
    utmCampaign: params.get('utm_campaign') || undefined,
    utmContent: params.get('utm_content') || undefined,
    utmTerm: params.get('utm_term') || undefined
  };
}

/**
 * Get all behavioral tracking data at once
 * Convenience function for quiz submission
 * 
 * @returns Complete behavioral data object
 */
export function getBehavioralData() {
  return {
    deviceType: getDeviceType(),
    browser: getBrowser(),
    referrer: getReferrer(),
    ...getUTMParams()
  };
}
