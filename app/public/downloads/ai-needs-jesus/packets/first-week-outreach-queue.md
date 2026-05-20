# First-Week Outreach Queue: AI Needs Jesus

This packet turns the outreach map and tracker into the first real week of careful contact research.

It is not a list of people to blast.

It is a queue-building discipline: find high-fit public targets, record why they are a fit, choose one doorway packet, write one small ask, and do not send until the guardrail is attached.

Core sentence:

```text
AI needs Jesus.
Not machine conversion. Power under Christ.
```

Core rule:

```text
No row becomes a message until it contains a specific fit reason.
```

## First-Week Shape

Build twenty researched rows before sending.

```text
5 engineers/builders
5 churches/pastors
5 parents/teachers
5 secular AI-risk/public readers
```

Send only ten in the first week unless the notes are genuinely personal and high-fit.

The queue is allowed to stay partly unsent. Better ten faithful notes than twenty vague ones.

## Research Fields

Use these fields before copying a row into `outreach-tracker-and-weekly-review.md`.

```tsv
Lane	Target category	Name / Organization	Public source URL	Role	Public audience	Why they are a fit	AI / formation / power touchpoint	Recent relevant work	Contact route	Warm path?	Primary packet	Secondary packet	Subject line	Small ask	Guardrail sentence	Bad-fit risk	Send this week?	Notes
```

Required before sending:

```text
Public source URL
Role
Why they are a fit
AI / formation / power touchpoint
Contact route
Primary packet
Small ask
Guardrail sentence
Bad-fit risk
```

If any required field is blank, do not send.

## Fit Gates

A target is high-fit only if at least three gates are true.

```text
[ ] They have public responsibility touching AI, technology, formation, children, education, church life, safety, policy, media, or public meaning.
[ ] Their audience would benefit from a guarded version of the thesis.
[ ] One packet clearly fits them better than the rest.
[ ] The first ask can be answered in under five minutes.
[ ] There is a specific recent public artifact to reference.
[ ] The message would still make sense if read aloud by the recipient to a colleague.
```

Automatic no-send:

```text
[ ] The only reason is audience size.
[ ] The only reason is controversy potential.
[ ] The contact route feels hidden, invasive, or scraped from private life.
[ ] The message would require pretending familiarity.
[ ] The phrase would likely be received as culture-war bait before it becomes a thoughtful invitation.
```

## Lane Queue

Use this as the first-week target mix.

Do not fill the rows with random names. Find a public reason first.

### Lane 1: Engineers And Builders

Goal: reach people who can translate the thesis into specs, evals, product reviews, refusal design, memory policies, or launch gates.

Target categories:

1. AI safety engineer who writes publicly about evals, red teaming, model behavior, or deployment gates.
2. Product lead responsible for AI assistants, agents, tutors, companions, or memory features.
3. Responsible AI, trust and safety, or policy lead who discusses model behavior publicly.
4. Open-source agent-framework maintainer whose users are building increasingly autonomous tools.
5. Christian engineer, founder, or technologist already trying to connect faith and AI work.

Research prompts:

```text
What specific AI capability or deployment responsibility touches moral formation, trust, persuasion, intimacy, children, truth, or agency?
What public artifact proves the fit?
What one operational question would respect their expertise?
```

Best first packet:

```text
engineer-review-worksheet.md
```

Fallback packets:

```text
a-model-spec-is-a-moral-confession.md
technical-appendix-christ-shaped-constraints.md
ai-needs-jesus-objection-card.md
```

Engineer first-message draft:

```text
Subject: Seven questions for an AI launch review

Hi [Name],

I thought of you because [specific public work] touches [model behavior / evals / AI product design / safety review / agent tooling].

I am working on a book and packet set around a deliberately provocative but guarded thesis:

AI needs Jesus.
Not machine conversion. Power under Christ.

For technical readers, the practical translation is not "replace evals with theology." It is: what is the system being trained, evaluated, and deployed to serve?

I made a short engineer review worksheet with seven launch-gate questions for model specs, evals, memory, refusal design, and deployment decisions.

Small ask: would this be useful or fair as a review prompt for a team like yours?

[packet link]
```

Engineer tracker row seed:

```tsv
2026-W21	Engineers/builders	[Name / Organization]	[Role]	[Specific public work touches model behavior / evals / launch gates]	[Contact route]	engineer-review-worksheet.md	Seven questions for an AI launch review	Would this be useful or fair as a review prompt for a team like yours?	yes	[date]			a-model-spec-is-a-moral-confession.md	[follow-up 1]		[follow-up 2]		drafted	research specific fit	active	no	[Public source URL]
```

### Lane 2: Churches And Pastors

Goal: reach church leaders who can turn the thesis into embodied teaching, pastoral discernment, youth formation, elder discussion, or congregational practice.

Target categories:

1. Pastor or elder who has taught on technology, discipleship, attention, children, or public witness.
2. Church small-group, adult-education, or youth leader looking for one-session discussion material.
3. Seminary, Christian college, or ministry center staff member working on technology, ethics, or formation.
4. Christian podcast, newsletter, or publication editor who handles cultural discipleship questions.
5. Denominational, parachurch, or local ministry leader responsible for family, education, or digital life.

Research prompts:

```text
What public sermon, article, class, podcast, or ministry page shows they care about formation?
Would a one-hour church discussion handout be useful to their actual people?
What practice could they try before taking a public stance?
```

Best first packet:

```text
church-discussion-handout.md
```

Fallback packets:

```text
generated-fluency-is-not-formation.md
twenty-minute-talk-script.md
public-pledge.md
```

Church first-message draft:

```text
Subject: A one-hour church discussion on AI and formation

Hi [Name],

I thought of you because [specific sermon / ministry / class / article] touches [discipleship / children / technology / formation / public witness].

I am working on a book and packet set around this thesis:

AI needs Jesus.
Not machine conversion. Power under Christ.

For churches, the claim is not that machines have souls. It is that Christians must not outsource formation, wisdom, pastoral care, worship, or moral imagination to systems built for fluency and engagement.

I made a one-hour church discussion handout with five questions and one embodied practice.

Small ask: could this serve a class, elder conversation, youth discussion, or small group?

[packet link]
```

Church tracker row seed:

```tsv
2026-W21	Churches/pastors	[Name / Organization]	[Role]	[Specific public ministry work touches formation / technology / children]	[Contact route]	church-discussion-handout.md	A one-hour church discussion on AI and formation	Could this serve a class, elder conversation, youth discussion, or small group?	yes	[date]			generated-fluency-is-not-formation.md	[follow-up 1]		[follow-up 2]		drafted	research specific fit	active	no	[Public source URL]
```

### Lane 3: Parents And Teachers

Goal: reach people responsible for children, classrooms, homeschool groups, parent communities, curricula, student AI policy, and ordinary household formation.

Target categories:

1. School leader, teacher, or curriculum director responsible for student AI policy or classroom AI use.
2. Parent newsletter, homeschool group, family ministry, or education writer discussing technology and children.
3. Counselor, youth worker, or child-development educator concerned with screens, attention, loneliness, or synthetic companionship.
4. Christian school, classical school, homeschool co-op, or education network leader.
5. Secular teacher, principal, or education commentator trying to distinguish tool use from formation.

Research prompts:

```text
What public artifact shows concern for children, learning, attention, or AI use?
What would help them avoid both panic and naive adoption?
What one human practice should remain human in their setting?
```

Best first packet:

```text
generated-fluency-is-not-formation.md
```

Fallback packets:

```text
ai-needs-jesus-objection-card.md
discussion-guide.md
public-pledge.md
```

Parent/teacher first-message draft:

```text
Subject: Generated fluency is not formation

Hi [Name],

I thought of you because [specific public work] touches [children / education / AI in classrooms / family formation / student attention].

I am working on a book and packet set around this thesis:

AI needs Jesus.
Not machine conversion. Power under Christ.

For parents and teachers, the practical point is simple: a system can become a child's most patient tutor, most available companion, and most tireless explainer without being capable of love, covenant, repentance, worship, or wisdom.

I made a short guide called "Generated Fluency Is Not Formation."

Small ask: would this help frame a parent, teacher, or school conversation without turning AI into either panic or hype?

[packet link]
```

Parent/teacher tracker row seed:

```tsv
2026-W21	Parents/teachers	[Name / Organization]	[Role]	[Specific public work touches children / education / AI policy / formation]	[Contact route]	generated-fluency-is-not-formation.md	Generated fluency is not formation	Would this help frame a parent, teacher, or school conversation without turning AI into panic or hype?	yes	[date]			ai-needs-jesus-objection-card.md	[follow-up 1]		[follow-up 2]		drafted	research specific fit	active	no	[Public source URL]
```

### Lane 4: Secular AI-Risk And Public Readers

Goal: reach readers who may not share Christian premises but recognize that AI is power, danger, governance, incentives, culture, persuasion, and public meaning.

Target categories:

1. AI-risk newsletter writer, podcaster, researcher, or public educator who discusses safety, governance, or social effects.
2. Technology editor, civic forum organizer, university discussion group, or policy convenor.
3. Writer or critic focused on power, institutions, children, attention, loneliness, labor, truth, or public trust.
4. Philosopher, ethicist, social scientist, or theologian-adjacent public thinker working on technology and human purpose.
5. Local, national, or global event organizer who hosts conversations across technical, religious, civic, and public audiences.

Research prompts:

```text
What public work shows they already care about AI risk, power, meaning, governance, or human futures?
Can the phrase be introduced through "AI is power with a voice" before the full Christian claim?
What objection would they most likely raise, and can the message honor it up front?
```

Best first packet:

```text
secular-global-op-ed.md
```

Fallback packets:

```text
ai-is-power-with-a-voice.md
the-opposite-of-doom-is-not-hype.md
objections-and-replies.md
```

Secular/public first-message draft:

```text
Subject: The AI age is asking what power is for

Hi [Name],

I thought of you because [specific public work] touches [AI risk / governance / public trust / power / institutions / human meaning].

I am working on a book and public packet set around a Christian thesis, but I think the first doorway is secularly legible:

AI is power with a voice.
Power always serves some highest good.

The deliberately provocative version is:

AI needs Jesus.
Not machine conversion. Power under Christ.

I made a short secular/global op-ed draft that argues the AI alignment debate is also a debate about what kind of power can be trusted when scaled.

Small ask: is this fair to readers who do not share the Christian premise, and what would be the strongest objection from your audience?

[packet link]
```

Secular/public tracker row seed:

```tsv
2026-W21	Secular AI-risk readers	[Name / Organization]	[Role]	[Specific public work touches AI risk / power / public meaning]	[Contact route]	secular-global-op-ed.md	The AI age is asking what power is for	Is this fair to readers who do not share the Christian premise, and what would be the strongest objection from your audience?	yes	[date]			objections-and-replies.md	[follow-up 1]		[follow-up 2]		drafted	research specific fit	active	no	[Public source URL]
```

## Twenty-Row Queue Template

Paste this into the research sheet before sending anything.

```tsv
Lane	Target category	Name / Organization	Public source URL	Role	Public audience	Why they are a fit	AI / formation / power touchpoint	Recent relevant work	Contact route	Warm path?	Primary packet	Secondary packet	Subject line	Small ask	Guardrail sentence	Bad-fit risk	Send this week?	Notes
Engineers/builders	AI safety engineer writing publicly about evals or model behavior									engineer-review-worksheet.md	a-model-spec-is-a-moral-confession.md	Seven questions for an AI launch review	Would this be useful or fair as a review prompt for a team like yours?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Engineers/builders	Product lead for assistants, agents, tutors, companions, or memory features									engineer-review-worksheet.md	technical-appendix-christ-shaped-constraints.md	What is your model spec guarding?	Would this be useful for a product review conversation?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Engineers/builders	Responsible AI, trust and safety, model policy, or launch-review lead									engineer-review-worksheet.md	a-model-spec-is-a-moral-confession.md	A model spec is a moral confession	Would this be a fair way to frame a launch-gate question?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Engineers/builders	Open-source agent-framework maintainer									a-model-spec-is-a-moral-confession.md	engineer-review-worksheet.md	What kind of power are agents becoming?	Would this framing be useful for builders using your tools?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Engineers/builders	Christian engineer, founder, or technologist working on AI									engineer-review-worksheet.md	technical-appendix-christ-shaped-constraints.md	AI safety as neighbor-love made concrete	Would this help connect technical responsibility and Christian discipleship?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Churches/pastors	Pastor or elder teaching on technology, discipleship, attention, or children									church-discussion-handout.md	generated-fluency-is-not-formation.md	A one-hour church discussion on AI and formation	Could this serve a class, elder conversation, youth discussion, or small group?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Churches/pastors	Small-group, adult-education, or youth leader									church-discussion-handout.md	discussion-guide.md	Five questions for a church conversation about AI	Would this be usable as a one-session discussion?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Churches/pastors	Seminary, Christian college, or ministry center staff member									church-discussion-handout.md	twenty-minute-talk-script.md	Generated fluency is not formation	Would this be useful for a class, chapel, panel, or ministry discussion?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Churches/pastors	Christian podcast, newsletter, or publication editor									podcast-interview-brief.md	church-discussion-handout.md	A careful Christian frame for AI and formation	Would this be useful for your audience, and what would you push back on?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Churches/pastors	Denominational, parachurch, or local ministry leader									generated-fluency-is-not-formation.md	public-pledge.md	Do not outsource the soul	Would this help leaders talk about AI without panic or passivity?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Parents/teachers	School leader, teacher, or curriculum director working on student AI policy									generated-fluency-is-not-formation.md	public-pledge.md	Generated fluency is not formation	Would this help frame a parent, teacher, or school conversation without panic or hype?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Parents/teachers	Parent newsletter, homeschool group, family ministry, or education writer									generated-fluency-is-not-formation.md	discussion-guide.md	Do not let the machine become the most patient moral tutor	Would this be useful for families trying to make AI decisions?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Parents/teachers	Counselor, youth worker, or child-development educator									generated-fluency-is-not-formation.md	ai-needs-jesus-objection-card.md	Synthetic companionship and embodied care	Would this help name what AI cannot provide for children?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Parents/teachers	Christian school, classical school, homeschool co-op, or education network leader									generated-fluency-is-not-formation.md	church-discussion-handout.md	AI, children, and formation	Would this serve a parent night, faculty meeting, or school discussion?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Parents/teachers	Secular teacher, principal, or education commentator									ai-is-power-with-a-voice.md	generated-fluency-is-not-formation.md	AI is power with a voice in the classroom	Is this a fair way to distinguish tool use from formation?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Secular AI-risk readers	AI-risk newsletter writer, podcaster, researcher, or public educator									secular-global-op-ed.md	ai-is-power-with-a-voice.md	The AI age is asking what power is for	Is this fair to readers who do not share the Christian premise?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Secular AI-risk readers	Technology editor, civic forum organizer, university group, or policy convenor									secular-global-op-ed.md	objections-and-replies.md	AI is power with a voice	Would this work as a civic or university discussion prompt?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Secular AI-risk readers	Writer or critic focused on institutions, attention, loneliness, labor, truth, or public trust									the-opposite-of-doom-is-not-hype.md	secular-global-op-ed.md	The opposite of doom is not hype	Would this frame help readers move beyond panic and hype?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Secular AI-risk readers	Philosopher, ethicist, social scientist, or public thinker on technology and human purpose									ai-is-power-with-a-voice.md	secular-global-op-ed.md	Every alignment target hides an altar	What is the strongest objection from your audience?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
Secular AI-risk readers	Event organizer hosting technical, religious, civic, or public conversations									podcast-interview-brief.md	twenty-minute-talk-script.md	A cross-audience conversation on AI, power, and hope	Would this make a useful panel, podcast, or meetup conversation?	AI needs Jesus. Not machine conversion. Power under Christ.		no	
```

## Send Order

Do not send all twenty at once.

Recommended first week:

```text
Monday: research all twenty rows.
Tuesday: send the five strongest rows, across at least three lanes.
Wednesday: send the next five strongest rows.
Thursday: do not send new cold notes; answer replies and improve one draft.
Friday: complete the weekly review sheet.
Saturday: take one embodied practice.
Sunday: do not grind the launch.
```

If a row feels thin, leave it unsent.

If a target is famous but the fit is thin, leave it unsent.

If a lesser-known person has the right responsibility and a real public reason to care, they are better than a famous bad fit.

## Final Pre-Send Prayer And Check

Before sending, ask:

```text
Am I treating this person as a neighbor or as a distribution node?
Does the guardrail travel with the phrase?
Is the ask small?
Is one packet enough?
Would I be at peace if the recipient posted my note publicly?
Can I stop without resentment if they decline?
```

Then send only what can survive those questions.

