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

Four stages, and every week's content should visibly build on the one before
rather than reading as a standalone topic:

| Stage | Weeks | Question |
|---|---|---|
| I. Seeing Bad Design | 1–3 | What makes something hateable? |
| II. Building Bad Design | 4–7 | How can we deliberately create it? |
| III. Breaking Bad Design | 8–10 | How do we test and understand it? |
| IV. Becoming the Designer | 11–12 | Can we design, defend, and redesign it? |

The through-line, one clause per week, is: I hate this → who designed it this
way → why does it work on people → what techniques are being used → can I
deliberately make it worse → what kind of friction am I creating → does this
exist outside software → what if the entire system is the interface → does my
bad design actually work → is bad design always bad → can I fix it → what does
"good design" actually mean. Each week's lecture/session should name what it
builds on, the way the proposal's "Builds From" sections do — don't let a week
stand alone.

Per-week theme, activity and key question are all specified in the proposal
document; pull each week's content from there rather than inventing new topics,
and preserve the specific activities named (Hate Wall, Follow the Incentive,
Make Me Click It, Dark Pattern Bingo, Friction Mapping, Hostile Object Safari,
The Maze, Human Guinea Pigs, The Defence, The Redesign Review, The Worst Design
Awards).

## Assessment structure (must sum to 100 — `spec/assignment-2.test.ts` checks this)

| Assessment | Weight | Roughly when |
|---|---:|---|
| Hate Catalogue | 15% | collected across weeks 1–4 |
| The Worst Interface | 25% | week 5 |
| Hostile Design Experiment | 20% | week 9 |
| The Redemption Project (final) | 40% | week 11–12 |

Model these as this site's `assessments` collection entries — they are the
fictional course's own assessments, distinct from COMP4020's Assignment 2
itself.

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
