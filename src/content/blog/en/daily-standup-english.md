---
title: "English for Daily Standups: What to Say"
excerpt: "Master the English phrases for daily standup meetings, sprint planning, retros, and code reviews. Copy-paste templates that make you sound like a senior engineer."
publishDate: "2026-03-04"
lastmod: "2026-03-04"
categories:
  - "Tech English"
  - "Career & Leadership"
featuredImage: "./images/daily-standup-english.jpg"
imageAlt: "Software developer giving a confident daily standup update on a video call with a distributed engineering team"
translations:
  es: "/es/blog/ingles-para-daily-standup-frases/"
publish: true
seo:
  title: "English Phrases for Daily Standup Meetings"
  description: "Practical English phrases for daily standup meetings, sprint planning, retros, and code reviews. Templates nearshore developers can copy and use today."
---

## Your Standup Update Shouldn't Sound Like a Robot Wrote It

Every weekday morning, thousands of nearshore developers across Latin America unmute their microphones and deliver some version of this:

> "Yesterday I worked on the ticket. Today I will continue with the ticket. No blockers."

If that sounds familiar, you're not alone. And if you think that's an acceptable standup update, I need to tell you something uncomfortable: **your US teammates are tuning you out.**

Not because they don't respect you. Not because of your accent. Because your update contains zero useful information. It's verbal wallpaper—it fills the time slot without adding value.

I coach nearshore developers in Guadalajara and across Mexico who write production-grade code for US companies. Their technical skills are excellent. But the moment they open their mouths in a standup, sprint planning, or retro, they default to safe, vague, textbook English that makes them sound junior—regardless of their actual seniority level.

This post gives you the **exact English phrases for daily standup meetings** and every other Scrum ceremony. These aren't academic phrases from an English textbook. They're patterns I've extracted from observing how senior engineers at US companies actually communicate in these meetings.

Copy them. Adapt them. Start using them tomorrow morning.

---

## Certification English vs. Real Standup English

Before we get into the phrases, let's address the elephant in the room. If you studied English in a language school or have a B2/C1 certificate, the phrases you learned are not the phrases US engineers use in daily standups. The gap is wide:

| Certification English | Real Standup English |
|----------------------|---------------------|
| "I would like to inform the team that I completed the task assigned to me." | "I finished the auth endpoint and opened a PR." |
| "I am currently experiencing a difficulty with the database." | "I'm blocked on the DB migration—need Maria to review the schema change." |
| "I do not have any impediments at this time." | "No blockers, but I want to flag something after standup." |
| "I plan to continue my work on the same task." | "I'm picking up the rate limiter next. Should have a PR up by EOD." |
| "I respectfully suggest that we might consider discussing this matter." | "Can we take this offline? I think it affects the sprint goal." |

Notice the pattern: **certification English is longer, more formal, and less specific.** Real standup English is short, direct, and loaded with actionable information. Every word earns its place.

If you want to understand why this gap exists and how it affects your career trajectory, read [English for Nearshore Developers: Skills US Teams Need](/en/blog/english-nearshore-developers-skills/)—it covers the full picture beyond just standups.

---

## The Daily Standup: The 3 Questions Done Right

Let's start with the core of every standup: the three questions. What did you do yesterday? What will you do today? Any blockers?

Most developers treat these as a checklist to survive. Senior engineers treat them as a **90-second trust-building opportunity.**

### Question 1: "What I Did Yesterday"

**The weak version:**

> "Yesterday I worked on the payment feature."

**Why it's weak:** It tells the team nothing. Worked on it how? Did you start it? Finish it? Get stuck? What's the output? Your scrum master is now going to ask a follow-up question, which wastes everyone's time.

**The strong version:**

> "Yesterday I completed the Stripe webhook handler and opened PR #342. It covers the three payment events we discussed in planning. Ready for review."

**The formula:** [Specific action] + [Deliverable or output] + [Current status].

**More templates you can copy:**

- "I spent yesterday debugging the timeout issue on the checkout flow. Root cause was a missing index on the orders table. Fix is in PR #287—one-line change, low risk."
- "I paired with Diego on the auth refactor. We split the work—I took the middleware, he took the token service. My half is done; waiting on his PR to integrate."
- "I reviewed three PRs yesterday and left feedback on all of them. Two are approved. The third needs a change to the error handling—I left a detailed comment."
- "I got pulled into the staging incident for about two hours. The rest of the day I continued on the search feature. I'm at about 70%."

**Key vocabulary that signals seniority:**

- "opened a PR" (not "I made a pull request")
- "ready for review" (proactive—you're telling people what to do next)
- "root cause was..." (shows analytical thinking)
- "low risk" or "high risk" (shows you're thinking about impact)
- "paired with [name]" (shows collaboration)

---

### Question 2: "What I'll Do Today"

**The weak version:**

> "Today I will continue working on the same thing."

**Why it's weak:** "Continue working" is the vaguest possible description. Your team learns nothing about what to expect from you by end of day.

**The strong version:**

> "Today I'm writing the integration tests for the webhook handler, then starting on the refund flow. If testing goes smoothly, I should have the refund endpoint scaffolded by end of day."

**The formula:** [Specific task] + [Expected output] + [Conditional qualifier if needed].

**More templates:**

- "I'm picking up JIRA-456 today—the user notification service. I'll start with the email templates and work toward the API layer."
- "Today I need to address the review feedback on PR #342. After that, I'll move to the dashboard filters that were in our sprint backlog."
- "I have two things today: finishing the unit tests for the payment module, and a design review with the frontend team at 2 PM. I'll focus on tests in the morning."
- "I'm going to spike on the caching approach for the product catalog. Goal is to have a recommendation by end of day so we can discuss it in tomorrow's standup."

**Key vocabulary:**

- "picking up" (natural way to say you're starting a new ticket)
- "spike on" (short investigation to explore a technical approach)
- "scaffold" (set up the basic structure)
- "address the review feedback" (not "fix the things the reviewer said")
- "by end of day" or "by EOD" (sets a clear expectation)

---

### Question 3: "Blockers"

**The weak version:**

> "No blockers."

**Why it's sometimes weak:** "No blockers" is perfectly fine when it's true. But many developers say "no blockers" when they actually have risks, dependencies, or questions they're sitting on because they don't want to seem like they're struggling. In US engineering culture, **raising risks early is a sign of seniority, not weakness.**

**When you have a blocker:**

> "I'm blocked on the database migration. I need Carlos to review the schema change before I can run it in staging. If I don't get the review by noon, it pushes the whole feature to next sprint."

**The formula:** [What's blocking you] + [Who can unblock you] + [Deadline] + [Impact if unresolved].

**When you don't have a blocker but have a risk:**

> "No blockers right now, but I want to flag something. The third-party API we're integrating has been returning intermittent 503s in their sandbox. If it continues, I'll need to build a mock for testing, which adds about a day."

**More templates:**

- "I'm soft-blocked—I can make progress, but I need a decision on whether we're using Redis or Memcached for the session store. Can we resolve that today?"
- "No blockers on my side, but heads up: the feature I'm building depends on Ana's PR #301. If that doesn't merge today, I'll need to rebase and there might be conflicts."
- "I have a question about the acceptance criteria on JIRA-789. The ticket says 'support multiple currencies' but doesn't specify which ones. I'm going to assume USD and MXN for now and document it in the PR."
- "Blocked on environment access. I submitted the VPN request on Monday and haven't heard back. Can someone escalate?"

**Phrases that demonstrate senior-level thinking:**

- "soft-blocked" (you can keep working but something is impeding full progress)
- "flag something" (proactive risk communication)
- "heads up" (alerting the team without asking for action)
- "I'm going to assume X and document it" (shows initiative and traceability)

---

## Sprint Planning: How to Participate (Not Just Listen)

Sprint planning is where many nearshore developers go quiet. The product owner talks, the scrum master facilitates, and you sit there waiting for tickets to be assigned to you.

**This is a mistake.** Sprint planning is your chance to influence what you work on, catch unrealistic estimates, and show that you understand the product—not just the code.

### Asking Clarifying Questions

**Weak (or silent):** You accept the ticket without comment.

**Strong:**

- "Before we estimate this, I have a question about the scope. Does 'user notifications' include push notifications, or just email?"
- "I want to make sure I understand the acceptance criteria. When the ticket says 'real-time,' are we talking WebSocket, or is polling at a 5-second interval acceptable?"
- "This ticket depends on the new API from the partner team. Do we have a confirmed delivery date, or should we plan for a fallback?"

### Estimating and Negotiating Scope

- "I'd estimate this at 5 points, but that assumes the database schema is already migrated. If it's not, add 3 points for the migration and testing."
- "This looks like an 8-pointer to me. Can we break it into two stories? The API layer is independent of the UI, and shipping the API first unblocks the mobile team."
- "I think we're underestimating this. Last sprint, a similar ticket took us two extra days because of the edge cases in the validation logic. I'd add a buffer."

### Volunteering and Taking Ownership

- "I'd like to pick this one up. I touched this module last sprint and I'm familiar with the codebase."
- "I can take this, but I'll need a pairing session with someone who knows the legacy payment system. Diego, are you available Wednesday?"
- "I'll own the backend for this feature. Who's handling the frontend? We should align on the API contract before we start."

The ability to speak up in planning like this is exactly what separates a developer who gets renewed from one who gets replaced. If you want to build these skills systematically, [Tech English Coaching](/en/services/tech-english/) focuses specifically on the communication patterns US teams expect in Scrum ceremonies.

---

## Sprint Retrospectives: Speaking Up Without Overstepping

Retros are where many nearshore developers struggle the most. There's a cultural dynamic at play: in many Latin American workplaces, criticizing a process—especially as an external contractor—feels risky. But in US Scrum culture, **silence in retros is a bigger red flag than honest criticism.**

US teams interpret silence as: "This person isn't engaged enough to care about improving our process."

The trick is framing. You're not complaining—you're contributing. Here's how.

### What Went Well

- "One thing that worked really well this sprint was the way we broke down the stories. Having smaller PRs made reviews faster and reduced merge conflicts."
- "I want to call out the pairing sessions we did on Thursday. That saved me at least a day on the caching implementation."
- "The new PR template is great. It's helping me structure my descriptions better, and I've noticed reviews are coming back faster."

### What Could Be Improved

**Before (weak):**

> "The deployments were slow."

**After (strong):**

> "I noticed our deployments took 40 minutes on average this sprint. I think the bottleneck is the integration test suite—it runs sequentially. Would it be worth parallelizing it? I could spike on that next sprint."

More templates:

- "One thing that slowed me down was context-switching between three different tickets. I think I'd be more productive if I could focus on one feature end-to-end. Is that something we can try next sprint?"
- "I think our estimation was off on the notification feature. We estimated 5 points but it took 13. The gap was in the edge cases we didn't discuss during planning. Could we add a 'risk check' step to our estimation process?"
- "The handoff between frontend and backend wasn't smooth this sprint. We had different assumptions about the API response format. I'd suggest we write a quick API contract before we start coding."

### Asking Process Questions

- "I have a question about how we handle hotfixes. Are we supposed to go through the full PR review process, or is there a fast track for production issues?"
- "Is there a reason we don't do async standups on Fridays? I've seen other teams use Slack bots for that, and it frees up 15 minutes."
- "I noticed we don't have a runbook for the deployment process. Would it be helpful if I documented the steps this sprint?"

Notice the pattern in all of these: **observation + impact + suggestion.** You're not just pointing out problems—you're proposing solutions. That's how senior engineers communicate in retros, and it's exactly what US teams want to hear from their nearshore teammates.

---

## Code Review Comments: Professional and Direct

Code reviews are written communication, but they happen in the context of Scrum work. The way you write review comments shapes how your team perceives your technical judgment and your professionalism.

### Leaving Comments on Others' Code

**Too blunt (common mistake):**

> "This is wrong."

**Too soft (another common mistake):**

> "I'm sorry, but I was wondering if maybe perhaps you might consider possibly using a different approach here? Only if you think it's a good idea, of course."

**Just right:**

> "Have you considered using a Set here instead of an Array? With the expected data size, the O(1) lookup would make a noticeable difference. Happy to discuss."

**Comment prefixes that US teams understand:**

- **"Nit:"** — Minor style or preference issue. Not a blocker. Example: "Nit: we usually use camelCase for variable names in this module."
- **"Optional:"** — A suggestion the author can take or leave. Example: "Optional: you could extract this into a helper function for readability."
- **"Blocking:"** — Must be addressed before merge. Example: "Blocking: this query doesn't have a WHERE clause on tenant_id, which would return data from all tenants."
- **"Question:"** — Genuine question, not a disguised criticism. Example: "Question: is there a reason we're not using the existing validation middleware here?"
- **"Suggestion:"** — A concrete alternative you're proposing. Example: "Suggestion: we could use a Map instead of repeated if/else blocks. Here's what that might look like: [code snippet]."

### Responding to Review Feedback on Your PRs

**Weak responses:**

> "OK, fixed."
> "Done."

**Strong responses:**

- "Good catch—I missed that edge case. Fixed in the latest commit. I also added a test for it."
- "I see your point about the naming. I went with `processPayment` because it handles both creation and validation, but I agree `validateAndCreatePayment` is clearer. Updated."
- "I considered that approach, but I went this route because [reason]. Here's the tradeoff I was weighing: [explanation]. Happy to change it if you feel strongly."
- "Thanks for the detailed feedback. I addressed all five comments. The biggest change was restructuring the error handling—take another look when you get a chance."

The ability to discuss technical tradeoffs in written English is a high-value skill. For more on how to structure technical explanations, the [10 Business English Mistakes Mexican Professionals Make](/en/blog/business-english-mistakes-mexican-professionals/) post covers common patterns where Spanish language habits create unintended friction in written code reviews.

---

## Before and After: A Complete Standup Transformation

Let's put it all together. Here's what a typical standup update sounds like before and after applying these patterns:

### Before (Typical Nearshore Developer)

> "Yesterday I worked on the ticket for the user profile page. Today I will continue working on it. No blockers."

**Time:** 8 seconds.
**Information transferred:** Almost zero.
**Impression on US team:** This person is doing the minimum.

### After (Senior-Level Communication)

> "Yesterday I finished the user profile API and opened PR #415—it covers the read and update endpoints. I still need to add the image upload, which I'll do today. I'm planning to use S3 pre-signed URLs for the upload flow. One thing to flag: the design spec shows a crop tool for profile photos, but that wasn't in the acceptance criteria. I'm going to build it without the crop and we can add it as a follow-up if the PO wants it. No blockers."

**Time:** 25 seconds.
**Information transferred:** Specific progress, deliverable status, technical approach, scope clarification, proactive decision-making.
**Impression on US team:** This person is thinking ahead, communicating clearly, and managing scope proactively. They're a senior contributor.

The difference has nothing to do with English fluency. It has everything to do with **communication structure and specificity.** Both developers might have the exact same English level. The second one just knows what information to include and how to frame it.

---

## Quick-Reference Phrase Bank

Here are additional phrases organized by situation. Bookmark this section.

### Starting Your Standup Update

- "Quick update from my side..."
- "Three things from yesterday..."
- "Short update—I'll keep it tight..."

### Flagging Risks

- "I want to flag a potential issue..."
- "Heads up for the team..."
- "Something to be aware of..."
- "This isn't a blocker yet, but it could become one if..."

### Asking for Help

- "I could use a second pair of eyes on..."
- "Does anyone have experience with [X]? I'm running into..."
- "I'd like to pair on this if someone has 30 minutes today."

### Referencing Other People's Work

- "This depends on [name]'s PR, which is in review."
- "Once [name]'s migration is merged, I can proceed with..."
- "I aligned with [name] offline—we're going with approach B."

### Closing Your Update

- "That's it from me."
- "That's my update. Happy to take questions."
- "I'll post the PR link in the channel after standup."

---

## The 5 Mistakes That Make You Sound Junior in Standups

Avoid these, and you'll immediately stand out:

1. **Over-apologizing.** Don't say "Sorry, I didn't finish" or "Sorry to take up time." State facts. "I didn't finish the feature because I hit an unexpected edge case. I'll complete it today."

2. **Using "try" instead of committing.** Don't say "I'll try to finish it." Say "I'll finish it by EOD" or "I expect to have it done by 3 PM." If there's uncertainty, name the uncertainty: "I'll finish it by EOD unless the API dependency isn't resolved."

3. **Saying "no blockers" when you have questions.** Questions that prevent you from making progress are blockers. Raise them.

4. **Reading ticket titles instead of giving updates.** "JIRA-456: User notifications" is not an update. It's a ticket title. Tell the team what you *did* with that ticket.

5. **Going too long.** A good standup update is 20-40 seconds. If you're talking for two minutes, you're having a discussion, not giving an update. Save discussions for after standup: "Can we take this offline? I think it needs more than 30 seconds."

---

## Keep Reading

- [English for Nearshore Developers: Skills US Teams Need](/en/blog/english-nearshore-developers-skills/) — The complete guide to workplace English for developers on US teams, from Slack to incident response.
- [Lead Meetings in English: 25 Phrases That Command Respect](/en/blog/lead-meeting-english-phrases/) — When you're ready to move beyond participating and start facilitating Scrum ceremonies yourself.
- [Why Senior Developers Need Advanced English, Not Conversational](/en/blog/why-senior-developers-need-advanced-english/) — The communication gaps that block promotions to senior and staff engineer roles.

---

## Your Standup Is Tomorrow Morning. Be Ready.

You have a standup meeting within the next 24 hours. That's your opportunity to practice.

Here's what I want you to do: before tomorrow's standup, write out your update using the formulas in this post. [Specific action] + [Deliverable] + [Status]. Keep it under 30 seconds. Include one proactive flag or risk.

If your team notices the difference—and they will—that's a signal that your English communication has been holding you back more than you realized.

For developers who want to systematically upgrade their standup, planning, and retro communication, I offer [Tech English Coaching](/en/services/tech-english/) designed specifically for nearshore engineers working on US sprint teams. We practice with real scenarios—your actual standups, your actual PRs, your actual retros—not textbook exercises.

**[Book a free strategy session](/en/book/)** and let's make sure your English matches your code quality.

---

*Robert Cushman is an English communication coach based in Guadalajara, Mexico, who works with nearshore developers and tech teams across Latin America. He specializes in the specific English patterns that US engineering teams expect—not textbook grammar, but real workplace communication that builds trust and accelerates careers.*
