---
title: "English for Nearshore Developers: Skills US Teams Need"
excerpt: "B2 certificates don't predict performance on US teams. The real English skills nearshore developers need: sprint ceremonies, PR reviews, Slack, and demos."
publishDate: "2026-03-03"
lastmod: "2026-03-03"
categories:
  - "Tech English"
  - "Career & Leadership"
featuredImage: "./images/english-for-nearshore-developers.jpg"
imageAlt: "Nearshore developer collaborating with a US-based engineering team on a video call"
translations:
  es: "/es/blog/ingles-desarrolladores-nearshore-habilidades"
publish: true
seo:
  title: "English for Nearshore Developers: Must-Have Skills"
  description: "B2 certificates don't cut it. Learn the real English skills US companies expect from nearshore developers: standups, PRs, Slack, demos, and more."
---

## Your B2 Certificate Means Nothing on a US Sprint Team

Let's be honest about something the nearshore industry doesn't want to admit: **a B2 English certificate does not predict whether you'll succeed on a US engineering team.**

I've coached dozens of developers across Mexico and Latin America who hold B2 or even C1 certifications. Some of them freeze during standups. Others write PR descriptions that confuse reviewers. A few have lost contracts because a client demo went sideways—not because of their code, but because of how they communicated.

The problem isn't your grammar. It's that **certification English and workplace English are completely different skills.**

A B2 exam tests whether you can discuss abstract topics in a controlled environment. A US sprint team tests whether you can interrupt a heated architecture discussion to flag a dependency risk—in real time, with imperfect audio, while someone shares their screen.

This post breaks down the **specific English skills** that nearshore developers actually need, with phrases you can start using this week.

---

## Why Certifications Don't Predict Team Performance

Here's what B2/C1 exams measure versus what US teams actually evaluate:

| Certification Tests | Real Workplace Demands |
|---------------------|----------------------|
| Reading comprehension passages | Scanning a 47-message Slack thread for the decision |
| Writing structured essays | Writing a PR description in 90 seconds before standup |
| Listening to clear, slow recordings | Understanding a PM from Boston who talks at 180 words per minute |
| Speaking in a quiet room with preparation time | Explaining a production incident at 11 PM with stakeholders waiting |

The gap is enormous. And it's this gap—not your technical ability—that determines whether US companies renew your contract or find a different nearshore partner.

**The good news:** These skills are learnable. They're patterns, not talent. Let me show you exactly what they look like.

---

## Sprint Ceremony English: Standups, Planning, and Retros

Sprint ceremonies are where US teams form their first impression of you. Not your code—your **communication in these meetings** shapes how much they trust you with complex work.

### The Daily Standup

Most nearshore developers default to this pattern:

> "Yesterday I worked on the API. Today I will continue working on the API. No blockers."

This tells the team nothing useful. It sounds like you're reading a script—because you are.

**What strong communicators say instead:**

> "Yesterday I finished the authentication endpoint and opened a PR—it's ready for review. Today I'm starting the rate limiter, but I need to align with Sarah on the Redis configuration before I write the tests. No blockers yet, but I'll flag it by noon if we can't connect."

Notice the difference: **specificity, next steps, proactive risk communication.** You're not just reporting status—you're showing the team you're thinking ahead.

**Standup phrases that build trust:**

- "I'm blocked on [X] and need [person] to unblock me by [time]."
- "I discovered a dependency we didn't account for in planning—can we discuss after standup?"
- "I'll have the PR up by end of day. It touches [module], so [person] should review it."
- "Quick flag: the acceptance criteria for [ticket] are ambiguous. I made an assumption—I'll document it in the PR."

### Sprint Retrospectives

Retros are where many nearshore developers go silent. The cultural dynamic is real: you might feel uncomfortable criticizing a process when you're the external contractor. But **silence in retros signals disengagement to US teams.**

**Phrases for contributing to retros without overstepping:**

- "One thing that slowed me down this sprint was [X]. I think we could try [Y] next sprint."
- "I noticed we're duplicating effort on [area]. Would it help to [suggestion]?"
- "What worked well for me was [X]. I'd like to keep doing that."
- "I have a question about our process for [X]—is that intentional, or did it just evolve that way?"

The key is **framing observations as questions or suggestions, not complaints.** This is a cultural English skill that no certification teaches. It's also a common area where [Spanish language interference](/en/blog/business-english-mistakes-mexican-professionals/) creates unexpected tone problems.

---

## Code Review Communication: PRs That Get Approved Faster

Your pull request is a communication document. US reviewers spend 10-15 seconds deciding whether to prioritize your PR or push it to tomorrow. **The quality of your PR description determines your review speed.**

### Writing PR Descriptions

**Weak PR description (common pattern):**

> "Fixed the bug in user service"

**Strong PR description:**

> **What:** Fixes race condition in user service when concurrent registration requests hit the same email.
>
> **Why:** Production incident #247—two accounts were created for the same email when requests arrived within 50ms.
>
> **How:** Added a database-level unique constraint + application-level idempotency check using Redis SETNX before the INSERT.
>
> **Testing:** Added integration test simulating 10 concurrent registration attempts. All pass. Manual verification in staging complete.
>
> **Risk:** Low. The Redis check is a soft guard—the DB constraint is the real protection. If Redis is down, behavior is unchanged (DB constraint still catches duplicates).

This isn't about English fluency. It's about **communication structure**. The What/Why/How/Testing/Risk framework works regardless of your English level. If you want to sharpen how you explain technical decisions, the [Technical Explanation Formula](/en/resources/technical-explanation-formula/) is a practical tool for structuring these descriptions.

### Inline Code Review Comments

When reviewing others' code, your comments reveal your communication sophistication. Compare:

**Blunt (common from non-native speakers):**

> "This is wrong. Use a Map instead."

**Professional-direct (what US teams expect):**

> "Have you considered using a Map here? With 10K+ entries, the O(1) lookup would give us a measurable performance gain over the array filter. Happy to discuss if you see a reason to keep the current approach."

**Useful phrases for code reviews:**

- "Nit: [small suggestion]" — signals this isn't a blocker
- "Optional: [idea]" — take it or leave it
- "Blocking: [issue]" — this must be addressed before merge
- "I might be missing context here, but [question]?" — challenges without confrontation
- "Nice approach. One thought: [suggestion]" — leads with positive intent

---

## Slack Async Communication: The Professional-Casual Balance

Slack is where nearshore developers either build or destroy their reputation with US teams. The challenge: Slack has its own tone that's **neither formal email nor casual texting.** Get it wrong in either direction and you stand out for the wrong reasons.

### Too Formal (Signals Disconnect)

> "Dear Team, I would like to inform you that I have encountered an issue with the deployment pipeline. Please find attached the relevant logs. Kind regards."

This reads like you copied it from a business English textbook. US engineers will find it strange.

### Too Casual (Signals Unprofessionalism)

> "yo deployment is broken lol anyone know whats up"

This undermines credibility, especially as a contractor.

### The Right Tone

> "Heads up—deploy pipeline is failing on the staging environment. Error is a timeout on the Docker build step. Logs here: [link]. I'm investigating but wanted to flag it in case anyone else is hitting this. Will update in 30 min."

**The formula:** Direct opener + specific context + what you're doing about it + timeline.

**Slack phrases that hit the right tone:**

- "Quick question:" — better than "Sorry to bother you"
- "Heads up:" — for proactive information sharing
- "Update:" — for threads you started earlier
- "FYI—" — for information that doesn't require action
- "Looping in @person for visibility" — shows you know who needs to know
- "I'll take a crack at this" — volunteering ownership
- "Circling back on this—" — following up without nagging
- "TL;DR:" — when your message is long, put the summary first

### Thread Discipline

US teams **hate** when important decisions happen in the main channel instead of threads. Always reply in threads. If a thread conclusion needs visibility, post a summary to the main channel:

> "Resolved in thread: we're going with Option B (Redis cache with 5-min TTL). @backend-team—this changes nothing for you. @frontend-team—I'll update the API response format by EOD."

---

## Client Demos and Presentations

For nearshore developers working on client-facing projects, demos are the highest-stakes English moment. A client who sees you present confidently thinks: "This team is strong." A client who sees you stumble thinks: "Are we paying top dollar for junior talent?"

### Demo Structure That Works

**Opening (10 seconds):**

> "I'm going to walk you through three features we shipped this sprint. I'll show each one live and then open it up for questions."

**During the demo:**

> "So here's the dashboard. When a user clicks 'Export,' you'll notice the data generates in under two seconds—that's a 4x improvement from last sprint's version."

**Handling bugs during a live demo:**

> "Looks like we're hitting a caching issue in this environment. This is working correctly in staging—I can share my screen from that environment, or I can send you a recorded walkthrough after this call. Which would you prefer?"

**Never say:** "Sorry, it's not working, I don't know why." That answer kills client confidence instantly. For broader strategies on projecting confidence in these high-visibility moments, see [Executive Presence on Video Calls: 7 Trust-Building Habits](/en/blog/executive-video-call/).

**Key demo phrases:**

- "Let me walk you through..." — structured, confident opening
- "You'll notice that..." — directs attention to what matters
- "Behind the scenes, what's happening is..." — shows depth without overexplaining
- "That's the core flow. Questions before I move to the next feature?" — controlled pacing

---

## Incident Response Communication

When production breaks at 2 AM, your English skills are tested harder than in any meeting. You need to **communicate clearly under pressure, in real time, with stressed stakeholders reading every word.**

### The Incident Update Template

Every 30 minutes during an incident, post this to the incident channel:

> **Status:** Investigating / Identified / Mitigating / Resolved
>
> **Impact:** [Who is affected and how]
>
> **Current theory:** [What you think is happening]
>
> **Next step:** [What you're doing right now]
>
> **ETA:** [When you expect the next update]

**Example:**

> **Status:** Identified
>
> **Impact:** 15% of checkout requests are timing out in the US-East region. No data loss.
>
> **Current theory:** The connection pool to the read replica is exhausted. We're seeing max_connections errors in the logs.
>
> **Next step:** Increasing pool size from 20 to 50 and restarting the service. If that doesn't resolve it, we'll failover to the primary.
>
> **ETA:** Next update in 15 minutes.

**Incident phrases that show calm competence:**

- "We've identified the root cause. Here's our remediation plan."
- "Impact is contained to [scope]. No customer data is affected."
- "I'm escalating to [team] because this requires [access/knowledge] I don't have."
- "Incident is resolved. I'll have the postmortem document ready by [time]."

**Never say during an incident:**

- "I have no idea what's happening" — say "I'm investigating" instead
- "It should be fine" — say "I'll confirm and update in [time]" instead
- "Sorry" (repeatedly) — one acknowledgment is enough, then focus on the fix

For a deeper look at how these communication patterns shape your career trajectory, read [Why Senior Developers Need Advanced English, Not Conversational](/en/blog/why-senior-developers-need-advanced-english/).

---

## The Salary Premium: What Strong Communication Is Worth

Let's talk numbers. If you're a nearshore developer, your English communication skills directly impact your rate.

According to multiple industry reports and recruiter data from the LATAM tech market:

- **Developers with basic English** (can read docs, struggle in meetings): $25-45/hr USD
- **Developers with functional English** (survive meetings, limited influence): $45-70/hr USD
- **Developers with professional English** (lead discussions, write clearly, present to clients): $70-120/hr USD

That's not a marginal difference—it's a **2-3x multiplier** on the same technical skills.

Here's why: US companies hiring nearshore aren't just buying code. They're buying **a team member who reduces communication overhead.** Every time a US-side PM has to decode a confusing Slack message, rewrite a PR description, or re-explain requirements because a standup was unclear—that's friction. Friction has a cost. And companies will pay a significant premium to avoid it.

**The developers who earn top rates aren't always the best coders.** They're the ones who:

- Write PR descriptions that need zero follow-up questions
- Lead sprint ceremonies without the US team needing to "translate"
- Handle client demos without a US-side chaperone
- Communicate during incidents with clarity that reduces panic

**This is learnable.** It's not about having perfect pronunciation or knowing every idiom. It's about **patterns, structure, and confidence.**

---

## Your Next Step

If you recognized yourself in any of the "before" examples in this post, you're not alone. Most nearshore developers have the technical skills but haven't had the opportunity to develop **workplace English skills** in a structured way.

Here's what I'd recommend:

1. **Audit your last 5 PR descriptions.** Do they follow the What/Why/How/Testing/Risk structure? If not, rewrite one today.

2. **Record your next standup** (even just audio on your phone). Listen back. Are you giving specific, forward-looking updates or just reading yesterday's ticket titles?

3. **Review your last 10 Slack messages to US colleagues.** Are they too formal? Too vague? Do they follow the Direct opener + Context + Action + Timeline pattern?

4. **Take the [Speaking Confidence Quiz](/en/quiz/speaking-confidence/)** to identify your specific communication gaps.

5. **Explore [Tech English Coaching](/en/services/tech-english/)** if you want structured practice with real scenarios from sprint teams, code reviews, and client presentations.

Your code is already good enough. The question is whether your **communication** matches your technical ability. For most nearshore developers, closing that gap is the single highest-ROI investment they can make in their career.

---

## Keep Reading

- [Why Senior Developers Need Advanced English, Not Conversational](/en/blog/why-senior-developers-need-advanced-english/) — The four communication gaps that block promotions to senior roles at global companies.
- [The Real Cost of Weak English: Lost Deals, Blocked Promotions](/en/blog/real-cost-weak-english-mexican-companies/) — The business case for investing in English, with real numbers from Mexican companies.
- [Why IT Managers Lose Millions](/en/blog/managers-lose-millions/) — When communication gaps hit the P&L, the losses go far beyond missed deadlines.

---

*Robert Cushman is an English communication coach who works with tech professionals and nearshore development teams across Latin America. He specializes in the specific English patterns that US engineering teams expect—not textbook grammar, but real workplace communication.*
