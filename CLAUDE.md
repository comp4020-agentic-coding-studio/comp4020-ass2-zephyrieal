# Your harness

The platform under you is fixed and documented in `README.md`; this deliverable's
brief and spec live on the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/).
Below is this course's own design, decided in `course-proposal.md`. Treat it as
the source of truth for course content; don't re-derive the curriculum from
scratch each session.

## Course identity

- Title: **Designing Things People Hate**. Code targets `SLOP3308` — level `3`
  (undergraduate), keeping the `308` this repo was provisioned with.
- Central thesis: design is the deliberate arrangement of choices, and
  controlling the choices controls the behaviour. Not "here are 25 dark
  patterns, memorise them" — the dark patterns are evidence for the thesis, not
  the point of the course.
- One-sentence pitch: the course teaches how interfaces, objects and systems
  manipulate human behaviour, by making them deliberately terrible, testing how
  terrible, and then fixing them.

## Structure — hold the twelve weeks together

Per `course-proposal.md`'s addendum (§12), which supersedes its original §4/§7:
four three-week blocks, each closing with the assessment due that week — every
week's content should visibly build on the one before, and each block should
point forward to the assessment it's building toward.

| Stage | Weeks | Question | Closes with |
|---|---|---|---|
| I. Observe | 1–3 | What makes something hateable? | Assessment 1 — Hate Catalogue (15%, due wk 3) |
| II. Create | 4–6 | Can I deliberately make it worse? | Assessment 2 — The Worst Interface (25%, due wk 6) |
| III. Test | 7–9 | Does my bad design actually work? | Assessment 3 — Hostile Design Experiment (20%, due wk 9) |
| IV. Question + Redesign | 10–12 | Is it actually bad, and can I do better? | Final — The Redemption Project (40%, due wk 12) |

The through-line, one clause per week, is: I hate this → who designed it this
way → why does it work on people → what techniques are being used → can I
deliberately make it worse → what kind of friction am I creating → does this
exist outside software → what if the entire system is the interface → does my
bad design actually work → is bad design always bad → can I fix it → what does
"good design" actually mean. Each week's lecture/session should name what it
builds on, the way the proposal's "Builds From" sections do — don't let a week
stand alone.

Weeks 10–12 are the final project's own workshop, not new unrelated material:
week 10 (renamed "Is Bad Design Actually Bad?") has students defend a hated
design, week 11 develops and critiques their redesign, and week 12's "Worst
Design Awards" doubles as final presentations of the Redemption Project. Point
these three weeks explicitly at the final assessment rather than treating them
as standalone topics.

Per-week theme, activity and key question are otherwise as specified in the
proposal document; pull each week's content from there rather than inventing
new topics, and preserve the specific activities named (Hate Wall, Follow the
Incentive, Make Me Click It, Dark Pattern Bingo, Friction Mapping, Hostile
Object Safari, The Maze, Human Guinea Pigs, The Defence, The Redesign Review,
The Worst Design Awards).

## Assessment structure (must sum to 100 — `spec/assignment-2.test.ts` checks this)

Each assessment has one explicit due week, since the site models it as a
discrete `assessments` entry:

| Assessment | Due | Weight | Purpose |
|---|---:|---:|---|
| Hate Catalogue | week 3 | 15% | learn to observe and analyse bad design |
| The Worst Interface | week 6 | 25% | deliberately create bad design |
| Hostile Design Experiment | week 9 | 20% | test whether the bad design actually works |
| The Redemption Project (final) | week 12 | 40% | analyse, defend, test and redesign a real system |

These are the fictional course's own assessments, distinct from COMP4020's
Assignment 2 itself.

## Voice

Sincere and a little funny, not deadpan-only and not "AI slop": the proposal's
own prose (e.g. "a truly effective terrible design does not necessarily look
terrible") is the register to match. Avoid restating the proposal as bullet
dumps — write it as pages a prospective student would actually want to read.
The humour is in the framing (a serious HCI/UX course under a ridiculous title),
not in making the content hollow.

## Site gimmicks are content, not sabotage

Section 8 of the proposal (moving "ENTER COURSE" button, confusing nav labels,
a fake unskippable "drop course" flow, a calendar that buries real dates, a
hidden deadline, a broken feedback form) are in-universe demonstrations of the
course's own subject matter. They must not break the platform's real checks:
`pnpm build` runs axe over every page and a link checker that fails on a
dangling ref, and a marker still has to navigate the whole site in about ten
minutes. So: fake friction lives in copy, animation and interaction detail on
pages that still resolve, still link correctly, and still pass accessibility —
never in an actually-dead link, an actually-unreachable page, or an axe
violation.
