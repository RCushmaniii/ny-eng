# Quiz Lead Magnet System Documentation

**Last Updated:** November 14, 2025  
**Status:** ✅ Active & Optimized  
**Purpose:** Communication Confidence Assessment & Lead Generation  
**Recent Updates:** Streamlined report to be an effective lead magnet (removed categories, question-by-question analysis, and 90-day plan), added score-based dynamic impact statements, reduced from 10 to 6 questions for 60-90 second completion

---

## Overview

The Communication Confidence Quiz is a strategic lead magnet designed to:
- **Assess** team communication readiness in client-facing situations
- **Capture** qualified leads with contact information
- **Deliver** immediate value through a streamlined personalized report
- **Create urgency** by revealing gaps without giving all answers
- **Convert** leads through strong CTA to book discovery call

---

## User Journey Flow

### **1. Quiz Landing Page** (`/en/quiz/`)
- Streamlined landing page (~600 words)
- Punchy headline and value props
- Direct CTA to `/en/quiz/question/1` (bypasses start page)
- Trust signals: "90 seconds • Instant results • 200+ tech leaders assessed"

### **2. Question Flow** (`/en/quiz/question/[1-6]/`)
- 6 refined scenario-based questions (60-90 seconds to complete)
- Psychological flow: easy opener → technical → confidence gap → business impact → strategic vulnerability
- Progress indicator
- Session storage of answers
- Auto-navigation between questions

### **3. Lead Capture** (`/en/quiz/results/`)
- Form appears after completing all questions
- Required fields: Name, Email, Company, Phone
- Privacy policy acknowledgment
- **Immediate redirect to full report** (no intermediary page)

### **4. Streamlined Lead Magnet Report** (`/en/quiz/report/`)
- **Score Display:** Clean score out of 100 with tier label
- **Top 2-3 Insights:** Shows only weakest areas (lowest scoring questions)
- **Dynamic Business Impact:** Changes based on score tier:
  - < 40: "Deals are falling through due to communication breakdowns"
  - 40-69: "You're leaving money on the table in negotiations"
  - 70+: "You're close—but small gaps are limiting your ceiling"
- **Elite Comparison:** What top firms do differently
- **Strong CTA:** "Let's See If This Applies to Your Team" → Calendly booking
- **Design Philosophy:** Creates curiosity, not satisfaction. Drives action.

### **5. Detailed Pre-Call Report** (`/en/quiz/report-pre-call.astro`)
- Backup file with comprehensive 6-page analysis
- Question-by-question breakdown
- 90-day action plan
- Used as pre-call deliverable after booking
- Not shown to leads initially

---

## Technical Architecture

### **File Structure**
```
src/pages/en/quiz/
├── index.astro              # Streamlined landing page (~600 words)
├── start.astro              # [BYPASSED] Old start page (not used)
├── question/[id].astro      # Dynamic question pages (1-6)
├── results.astro            # Lead capture form (redirects to report)
├── report.astro             # Streamlined lead magnet report
└── report-pre-call.astro    # Detailed report (backup, for post-booking)

src/pages/es/quiz/        # Spanish version (parallel structure)
├── index.astro
├── start.astro
├── question/[id].astro
├── results.astro
└── report.astro

src/components/           # Reusable report components
├── action-plan.astro     # [NOT USED IN LEAD MAGNET] 90-day plan
├── action-plan-es.astro  # [NOT USED IN LEAD MAGNET] Spanish version
├── next-steps-en.astro   # [NOT USED IN LEAD MAGNET] Path recommendations
├── next-steps-es.astro   # [NOT USED IN LEAD MAGNET] Spanish version
├── mid-cta-en.astro      # [NOT USED IN LEAD MAGNET] Mid-report CTA
└── mid-cta-es.astro      # [NOT USED IN LEAD MAGNET] Spanish version

Note: These components are preserved in report-pre-call.astro for post-booking use
```

### **Data Flow**

#### **Session Storage Keys:**
- `quizAnswers` - JSON array of user responses
- `quizScore` - Calculated score (0-100)
- `leadData` - Contact information and metadata

#### **Score Calculation:**
```javascript
// Each question worth 10 points
// Total possible: 60 points (6 questions × 10 points)
// Normalized to 0-100 scale
// Scoring tiers:
// - 70-100: Conversation-Ready (Self-Study recommended)
// - 40-69:  Million-Dollar Gap (Coaching recommended)
// - 0-39:   Credibility Block (Coaching strongly recommended)
```

### **Lead Capture Process**

**Form Submission Flow:**
1. User completes form on `/en/quiz/results/`
2. JavaScript validates and captures data
3. Score calculated from session storage
4. Lead data stored in sessionStorage
5. **Direct redirect to `/en/quiz/report/`**
6. Report page reads score/data from sessionStorage
7. Personalized report rendered

**Lead Data Structure:**
```javascript
{
  name: string,
  email: string,
  company: string,
  phone: string,
  score: number,
  totalPoints: number,
  timestamp: ISO string
}
```

### **Complete Submission Flow (Detailed)**

**Updated:** October 29, 2025

#### **Phase 1: Client-Side Validation (Browser)**
```javascript
// 1. Strict email validation with TLD whitelist
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|...)$/i;
if (!emailRegex.test(email)) {
  alert('Please enter a valid email address.');
  return; // STOPS HERE if invalid
}

// 2. Gather form data
const name = formData.get('name');           // "Tom Smith"
const email = formData.get('email');         // "tom@company.com"
const company = formData.get('company');     // "Acme Corp" (optional)
const phone = formData.get('phone');         // "+52..." (optional)

// 3. Retrieve quiz answers from sessionStorage
const answers = JSON.parse(sessionStorage.getItem('quizAnswers')); 
// Format: { q1: 10, q2: 7, q3: 4, q4: 10, q5: 6, ... }
// Note: Values are POINT VALUES (not indices)

// 4. Gather UTM parameters for marketing attribution
const utm_source = urlParams.get('utm_source') || sessionStorage.getItem('utm_source');
const utm_medium = urlParams.get('utm_medium') || sessionStorage.getItem('utm_medium');
const utm_campaign = urlParams.get('utm_campaign') || sessionStorage.getItem('utm_campaign');
const referrer = document.referrer; // Where they came from

// 5. Show loading state
submitButton.disabled = true;
submitButton.innerHTML = 'Submitting...';
```

#### **Phase 2: API Request**
```javascript
// POST to API endpoint
POST /api/quiz/submit
Headers: { 'Content-Type': 'application/json' }
Body: {
  name: "Tom Smith",
  email: "tom@company.com",
  company: "Acme Corp",
  phone: "+52...",
  answers: { q1: 10, q2: 7, q3: 4, q4: 10, q5: 6, q6: 8, q7: 7, q8: 7, q9: 6, q10: 10 },
  language: "en",
  utm_source: "google",
  utm_medium: "cpc",
  utm_campaign: "quiz-campaign",
  referrer: "https://google.com",
  gdpr_consent: true,
  marketing_opt_in: false
}
```

#### **Phase 3: Server-Side Processing (API Endpoint)**

**File:** `src/pages/api/quiz/submit.ts`

```typescript
// 1. Validate required fields
if (!body.name || !body.email || !body.answers || !body.language) {
  return 400 error: "Missing required fields"
}

// 2. Load question data based on language
const questions = body.language === 'es' ? questionsEs : questionsEn;

// 3. Calculate comprehensive score breakdown
const scoreBreakdown = calculateQuizScore(body.answers);
// Returns:
{
  totalScore: 72,              // 0-100 normalized score
  rawScore: 180,               // Actual points earned (out of 250)
  maxPossible: 250,            // Maximum possible points
  scoreTier: "Million-Dollar Gap", // Tier classification
  categoryScores: {
    clarity: 68,               // Individual category scores
    confidence: 75,
    realTime: 70,
    negotiation: 65,
    cultural: 80
  },
  primaryGap: {                // Weakest area
    category: 'negotiation',
    score: 65,
    impact: "...",
    recommendation: "...",
    urgency: 'high'
  },
  secondaryGap: {              // Second weakest area
    category: 'clarity',
    score: 68,
    ...
  }
}

// 4. Build detailed answer records
// Maps point values to full answer context
const answerRecords = Object.entries(body.answers).map(([qId, answerValue]) => {
  const questionNum = parseInt(qId.replace('q', ''));
  const question = questions.find(q => q.id === questionNum);
  const questionConfig = QUESTION_SCORES[qId];
  
  // Find answer by matching SCORE VALUE (not index)
  const answerConfig = questionConfig.answers.find(a => a.score === answerValue);
  
  return {
    question_number: 1,
    question_text: "When your team presents to North American clients...",
    answer_text: "Occasionally—once per meeting",
    points: 7,
    category: "clarity"
  };
});

// 5. Prepare Supabase payload
const payload = {
  // Contact info
  name: "Tom Smith",
  email: "tom@company.com",
  company: "Acme Corp",
  phone: "+52...",
  language: "en",
  
  // Score data
  total_score: 72,
  raw_score: 180,
  score_tier: "Million-Dollar Gap",
  
  // Category scores (for detailed analysis)
  clarity_score: 68,
  confidence_score: 75,
  real_time_score: 70,
  negotiation_score: 65,
  cultural_score: 80,
  
  // Gap analysis (for personalized recommendations)
  primary_gap_category: "negotiation",
  primary_gap_score: 65,
  secondary_gap_category: "clarity",
  secondary_gap_score: 68,
  
  // Full answer details (JSON array)
  answers: answerRecords,
  
  // Marketing attribution
  utm_source: "google",
  utm_medium: "cpc",
  utm_campaign: "quiz-campaign",
  referrer: "https://google.com",
  
  // Compliance
  gdpr_consent: true,
  marketing_opt_in: false,
  
  // Metadata
  submitted_at: "2025-10-29T22:56:00Z",
  ip_address: "192.168.1.1" // (if available)
};

// 6. Insert into Supabase
const { data, error } = await supabase
  .from('quiz_submissions')
  .insert([payload])
  .select()
  .single();

if (error) throw error;

// 7. Return success response
return {
  success: true,
  submission_id: "uuid-123-456-789",
  score: 72,
  score_tier: "Million-Dollar Gap",
  message: "Quiz submitted successfully"
};
```

#### **Phase 4: Client-Side Response Handling**

```javascript
// 1. Receive API response
const result = await response.json();
console.log('API result:', result);
// { success: true, submission_id: "...", score: 72, score_tier: "..." }

// 2. Store data in sessionStorage for report page
sessionStorage.setItem('quizScore', '72');
sessionStorage.setItem('submissionId', 'uuid-123-456-789');
sessionStorage.setItem('leadData', JSON.stringify({
  name: "Tom Smith",
  email: "tom@company.com",
  company: "Acme Corp",
  phone: "+52...",
  score: 72,
  score_tier: "Million-Dollar Gap"
}));

// 3. Redirect to full report page
window.location.href = '/en/quiz/report/';
```

#### **Phase 5: Supabase Database Storage**

**Table:** `quiz_submissions`

```sql
CREATE TABLE quiz_submissions (
  -- Primary key
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Contact information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  language TEXT NOT NULL, -- 'en' or 'es'
  
  -- Score data
  total_score INTEGER NOT NULL,      -- 0-100
  raw_score INTEGER NOT NULL,        -- Actual points (0-250)
  score_tier TEXT NOT NULL,          -- Tier classification
  
  -- Category scores
  clarity_score INTEGER,
  confidence_score INTEGER,
  real_time_score INTEGER,
  negotiation_score INTEGER,
  cultural_score INTEGER,
  
  -- Gap analysis
  primary_gap_category TEXT,
  primary_gap_score INTEGER,
  secondary_gap_category TEXT,
  secondary_gap_score INTEGER,
  
  -- Detailed answers (JSON)
  answers JSONB NOT NULL,
  
  -- Marketing attribution
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer TEXT,
  
  -- Compliance
  gdpr_consent BOOLEAN DEFAULT true,
  marketing_opt_in BOOLEAN DEFAULT false,
  
  -- Metadata
  submitted_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Indexes
  INDEX idx_email (email),
  INDEX idx_score (total_score),
  INDEX idx_submitted_at (submitted_at)
);
```

#### **Data Flow Summary**

```
User Browser
    ↓
[1] Validate Email (Client)
    ↓
[2] Gather Form + Quiz Data
    ↓
[3] POST /api/quiz/submit
    ↓
API Endpoint (src/pages/api/quiz/submit.ts)
    ↓
[4] Validate Required Fields
    ↓
[5] Calculate Score (0-100)
    ↓
[6] Analyze Gaps (Primary/Secondary)
    ↓
[7] Build Answer Records
    ↓
[8] Prepare Supabase Payload
    ↓
Supabase Database
    ↓
[9] INSERT INTO quiz_submissions
    ↓
[10] Return Success + submission_id
    ↓
User Browser
    ↓
[11] Store in sessionStorage
    ↓
[12] Redirect to /quiz/report/
    ↓
Report Page Displays Results
```

#### **Key Technical Details**

**Answer Format:**
- Stored as point values: `{ q1: 10, q2: 7, q3: 4, ... }`
- NOT indices: `{ q1: 0, q2: 1, q3: 2, ... }`
- API finds answer config by matching score value

**Email Validation:**
- Strict TLD whitelist (70+ common TLDs)
- Blocks invalid domains like `.comj`, `.comk`
- Validates on both client and server

**Error Handling:**
- Client-side validation before submission
- Server-side validation with detailed errors
- User-friendly error messages
- Automatic button state restoration on error

**Data Persistence:**
- Permanent: Supabase database
- Temporary: sessionStorage (for report page)
- No cookies or localStorage used

---

## Streamlined Lead Magnet Report Structure

### **Section 1: Header & Score**
- Personalized header with name and company
- Large score circle (0-100)
- Tier label with color coding:
  - **Conversation-Ready** (70-100): Green `#10b981`
  - **Million-Dollar Gap** (40-69): Orange `#f59e0b`
  - **Credibility Block** (0-39): Red `#ef4444`
- Brief tier description

### **Section 2: Key Insights (Top 2-3 Weakest Areas)**
- Dynamically shows lowest scoring questions
- Each insight includes:
  - Question number
  - Specific gap identified
  - Business impact statement
- Styled with tier color accent
- Creates awareness without overwhelming detail

### **Section 3: Dynamic Business Impact**
- **Score-based personalization:**
  - **< 40 (Credibility Block):**
    - Headline: "Deals are falling through due to communication breakdowns"
    - Copy: Focuses on lost contracts and client uncertainty
  - **40-69 (Million-Dollar Gap):**
    - Headline: "You're leaving money on the table in negotiations"
    - Copy: Focuses on pricing concessions and scope creep (15-20% loss per contract)
  - **70+ (Conversation-Ready):**
    - Headline: "You're close—but small gaps are limiting your ceiling"
    - Copy: Focuses on elite positioning and 30-40% premium rates

### **Section 4: What Elite Firms Do Differently**
- 5 bullet points showing best practices:
  - Answer questions in real-time (never defer to email)
  - Defend pricing without hesitation
  - Junior team members lead meetings independently
  - Build rapport through natural conversation
  - Explain complex solutions clearly
- Aspirational positioning
- Creates desire for transformation

### **Section 5: Strong CTA**
- Headline: "Let's See If This Applies to Your Team"
- Subtext: "This assessment reveals patterns. A 15-minute conversation reveals solutions."
- Primary button: "Book Your Free Discovery Call" → Calendly
- Trust statement: "No pitch. No pressure. Just a conversation about what's possible for your team."
- Prominent styling with calendar icon

### **What's NOT Included (Intentionally):**
- ❌ Category breakdowns (clarity, confidence, negotiation)
- ❌ Question-by-question analysis
- ❌ Comparison charts or percentile rankings
- ❌ 90-day action plan
- ❌ Path recommendations (self-study vs coaching)
- ❌ Mid-report CTAs

**Rationale:** Lead magnet should create curiosity and urgency, not satisfy it. Detailed analysis is reserved for post-booking deliverable (`report-pre-call.astro`).

---

## Design System

### **Color Palette**
- **Primary Blue:** `#1e40af` (recommended cards)
- **Action Plan Progression:**
  - 30-day: `#3b82f6` (light blue)
  - 60-day: `#023E8A` (medium blue)
  - 90-day: `#03045E` (dark navy)
- **CTA Gradient:** `#f97316` → `#dc2626` (orange to red)
- **Recommended Badge:** `#f97316` (orange)

### **Typography**
- Headlines: 2-2.5rem, bold
- Body: 1.125-1.25rem
- Action items: 0.875-1rem

### **Icons**
- Modern SVG line icons
- Adaptive colors (white on blue, blue on white)
- 48px size for path cards

---

## Conversion Optimization Features

### **1. Immediate Value Delivery**
- No delay between form submission and report
- Professional report shows expertise without overwhelming
- Eliminates friction and drop-off points
- **Balances value with curiosity** - shows gaps without giving all solutions

### **2. Personalization**
- Score-based content adaptation
- Tier-specific action plans
- Customized recommendations

### **3. Social Proof & Trust**
- Professional design quality
- Comprehensive analysis depth
- Clear privacy policy acknowledgment

### **4. Strategic Multi-Level CTAs**
- **Mid-Report CTA** (After Business Impact)
  - Blue gradient (softer, less aggressive)
  - Positioned at peak pain awareness
  - Catches users who won't scroll to bottom
  - Mobile-optimized for long-scroll scenarios
- **Final CTA** (Bottom of Report)
  - Orange-to-red gradient (high urgency)
  - Positioned after full value delivery
  - Larger, more prominent styling
  - Converts highly engaged users
- **Benefit-focused messaging** throughout
- **Risk reversal language** on both CTAs
- **Visual hierarchy** differentiates primary vs secondary CTAs

### **5. Path Clarity**
- Two clear options (self-study vs coaching)
- Visual differentiation
- Recommendation guidance
- No decision paralysis

### **6. Mobile-First Optimization**
- Responsive typography with `clamp()` functions
- Touch-friendly button sizes
- Optimized padding for small screens
- Prevents text overflow on narrow viewports

---

## SEO & Technical Considerations

### **Meta Tags**
- Each page has unique title/description
- Proper canonical URLs
- Hreflang tags for bilingual support

### **Performance**
- Client-side rendering for interactivity
- Session storage for data persistence
- No external dependencies for core functionality

### **Privacy**
- Clear privacy policy link
- Explicit consent language
- Data stored client-side only (until backend integration)

---

## Booking System Integration

### **Cloudflare Worker API**
**File:** `cloudflare-worker.js` (root directory)

**Purpose:** Handles calendar availability and booking creation via Google Calendar API

### **Key Features:**
1. **Dual Calendar Checking**
   - Queries both personal (`rcushmaniii@gmail.com`) and work calendars
   - Combines busy times from both sources
   - Prevents double-booking across calendars

2. **Timezone Management**
   - Default timezone: `America/Mexico_City` (UTC-6)
   - Proper ISO format with timezone offset: `-06:00`
   - Handles Mexico's no-DST policy (since 2022)
   - Consistent timezone handling throughout

3. **Business Hours Configuration**
   - **Weekday Morning:** 9:00 AM - 2:00 PM
   - **Weekday Afternoon:** 4:00 PM - 8:00 PM
   - **Saturday:** 9:00 AM - 1:00 PM
   - **Sunday:** Blocked (no availability)

4. **Preparation Buffer**
   - **3.5-hour minimum booking window**
   - Filters out slots less than 210 minutes from current time
   - Ensures adequate class preparation time
   - Applied to all slot availability checks

5. **30-Minute Slot Generation**
   - Generates slots in 30-minute increments
   - Filters out busy times from Google Calendar
   - Applies preparation buffer
   - Returns only truly available slots

### **API Endpoints:**

**GET `/slots/:date`**
- Returns available 30-minute slots for specified date
- Query params: `?lang=en|es` (optional)
- Response: `{ ok: true, slots: ["16:00", "16:30", ...] }`

**POST `/book`**
- Creates Google Calendar event with Meet link
- Body: `{ name, email, date, time, lang }`
- Sends calendar invites to both parties
- Returns: `{ ok: true, eventId, meetLink }`

**GET `/debug`**
- Environment variable verification
- Shows timezone, business hours, calendar IDs
- Useful for troubleshooting

### **Integration Points:**

1. **Quiz Report CTAs** → `/en/book` or `/es/book`
2. **Booking Page** → Cloudflare Worker API
3. **Calendar Widget** → Displays available slots
4. **Confirmation** → Google Calendar event created

### **Technical Implementation:**

```javascript
// Timezone handling
function toISO(dateStr, hhmm, timeZone) {
  const date = new Date(`${dateStr}T${hhmm}:00-06:00`);
  return date.toISOString();
}

// 3.5-hour buffer
const minBookingTime = new Date(nowUTC.getTime() + (210 * 60 * 1000));
if (slotStart < minBookingTime) return false;

// Busy time overlap check
return !busy.some(b => overlaps(slotStart, slotEnd, b.start, b.end));
```

### **Environment Variables Required:**
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `CALENDAR_ID` (or `GOOGLE_CALENDAR_ID`)
- `TIMEZONE` (optional, defaults to `America/Mexico_City`)
- `WEEKDAY_MORNING_HOURS` (optional)
- `WEEKDAY_AFTERNOON_HOURS` (optional)
- `SATURDAY_HOURS` (optional)

---

## Future Enhancements

### **Backend Integration (TODO)**
```javascript
// Current: console.log('Lead captured:', leadData);
// Future: Send to CRM/backend
async function submitLead(leadData) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(leadData)
  });
  return response.json();
}
```

### **Email Automation**
- Trigger welcome email with report PDF
- Follow-up sequence based on score tier
- Nurture campaign for non-converters

### **Analytics Tracking**
- Quiz start rate
- Completion rate (by question)
- Form submission rate
- Report view duration
- CTA click-through rate

### **A/B Testing Opportunities**
- CTA button copy variations
- Path recommendation presentation
- Action plan detail level
- Report page order

---

## Maintenance Checklist

### **Monthly:**
- [ ] Review lead capture rate
- [ ] Check for broken links
- [ ] Verify sessionStorage functionality
- [ ] Test mobile responsiveness

### **Quarterly:**
- [ ] Analyze score distribution
- [ ] Review question effectiveness
- [ ] Update action plan recommendations
- [ ] Refresh CTA messaging

### **Annually:**
- [ ] Comprehensive content audit
- [ ] Design refresh evaluation
- [ ] Competitor analysis
- [ ] User feedback integration

---

## Key Metrics to Track

1. **Quiz Start Rate** - Landing page → Question 1 (direct)
2. **Completion Rate** - Question 1 → Question 6 (all answered)
3. **Form Submission Rate** - Question 6 → Lead capture form submit
4. **Report View Rate** - Form submit → Report page load
5. **CTA Click Rate** - Report view → "Book Discovery Call" click
6. **Booking Completion Rate** - CTA click → Calendar booking confirmed
7. **Overall Conversion** - Landing page → Consultation booked

**Target Benchmarks (Streamlined Funnel):**
- Quiz Start Rate: >25% (improved with direct CTA to Q1)
- Completion Rate: >70% (improved with 6 questions vs 10)
- Form Submission: >85% (improved with shorter quiz)
- Report View Rate: >95% (automatic redirect)
- CTA Click Rate: >20% (improved with urgency-focused report)
- Booking Completion: >70% (from CTA click to confirmed booking)
- Overall Conversion: >8-12% (improved with streamlined funnel)

**Key Improvements vs Old Funnel:**
- Removed `/start` page → Reduced friction
- 6 questions vs 10 → Higher completion rate
- Streamlined report → Creates urgency vs satisfaction
- Single strong CTA → Clear next action
- Score-based impact → Personalized urgency

---

## Support & Contact

**Documentation Owner:** Development Team  
**Last Review:** November 14, 2025  
**Next Review:** February 14, 2026

For questions or updates, refer to the main documentation index at `/docs/INDEX.md`
