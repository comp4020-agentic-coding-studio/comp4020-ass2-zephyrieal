# Process overview

Written by you, for a reader: how you got from the brief to the harness and
agentic workflow behind this submission. Markers read this file and follow its
citations; they don't trawl the repo for evidence you didn't point at.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## What I built

**Designing Things People Hate** (`SLOP3308`) — a twelve-week undergraduate
course where students learn manipulative design by building it themselves:
four three-week stages (Observe, Create, Test, Question + Redesign), each
closing with the assessment it was working toward, and a running through-line
so no week reads as a standalone topic. The site itself plays along —
the homepage's "Enter Course" button flees the cursor, in-universe evidence of
the course's own subject matter, kept inside the platform's accessibility and
link-checking guarantees rather than actually breaking anything.

## How I got here

The brief asked for a course design encoded as a working site, not just
placeholder content wearing a new title, so the first real decision was
structural rather than visual: what does this course teach, week by week, and
which assessment does each stage actually build toward. That decision is
recorded in `CLAUDE.md` as the source of truth
([`b8689e4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/b8689e4)),
so later content work pulled from one place instead of re-deriving the
curriculum each session — the harness names this explicitly ("pull each
week's content from there rather than inventing new topics").

> Encode the course-design proposal into CLAUDE.md as the source of truth for
> the course's structure, then pin each assessment to an explicit due week
> that lines up with the four-stage table.

The course code and each assessment's due week were fixed early
([`611cdf2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/611cdf2),
[`59434bf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/59434bf))
so the schema-level constraints (weights summing to 100, `SLOP\d{3}` matching
the assigned `308`) had something concrete to validate against, and Assignment
2's published spec was turned into `spec/assignment-2.test.ts` at the same
point
([`922ae3a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/922ae3a)) —
before most of the content existed, so the suite started red and stayed the
backpressure for everything that followed.

Content then went in stage by stage, each commit closing one three-week block
alongside the assessment it leads into, rather than as one undifferentiated
content dump:

- weeks 1–2
  ([`74d6d32`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/74d6d32))
- Stage I (Observe), closing with the Hate Catalogue
  ([`a76b0e5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/a76b0e5))
- Stage II (Create), closing with The Worst Interface
  ([`806d1ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/806d1ee))
- Stage III (Test), closing with the Hostile Design Experiment
  ([`844b421`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/844b421))
- Stage IV (Question + Redesign), closing with the Redemption Project
  ([`04da41e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/04da41e))

> Implement the rest of the weeks' content, replacing the mismatched
> assessment placeholders with the four real assessments matching
> `CLAUDE.md`'s structure.

That range
([`74d6d32...04da41e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/compare/74d6d32...04da41e))
is where `spec/assignment-2.test.ts` actually turned green: the 12-week
coverage check and the weight-sums-to-100 check both depend on every
assessment file existing with the right `week` and `weight`, so each commit's
correctness was checked against `pnpm check` before moving to the next stage,
not just at the end.

The homepage's visual identity — brand palette, typography, the fleeing
"Enter Course" button — came after the content, once there was real course
material to design around rather than lorem-ipsum placeholders
([`8913d95`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/8913d95)).
Deliberately last: a distinctive look designed against real week titles and
real assessment names holds up better than one designed against filler text
and then hoping the content fits it later.

I knew the result was right when `pnpm check` — typecheck, build (which runs
the theme's accessibility checker and link checker), and the vitest spec
suite — passed clean, and separately when `pnpm check:evidence` caught the
starter-content markers, placeholder bios and unfilled `PROCESS.md` that a
green `pnpm check` alone doesn't see: the two checks verify different things,
and both needed to pass before this was actually done.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
