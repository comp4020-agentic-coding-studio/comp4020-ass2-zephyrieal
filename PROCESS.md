# Process

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
so no week reads as a standalone topic. The site itself plays along — the
homepage's "Enter Course" button flees the cursor, a confirmshaming dialog
talks you out of dropping the course, and the policies page's feedback form
always reports success while sending nothing — in-universe evidence of the
course's own subject matter, kept inside the platform's accessibility and
link-checking guarantees rather than actually breaking anything.

## How I designed the harness

I started with a simple idea: a course about frustrating and hostile design.
My first concern was making sure that this could sustain a twelve-week
university course rather than becoming twelve disconnected examples of bad
UX. I decided that a good course should have a clear progression, where later
weeks depend on ideas and skills introduced earlier. This produced the
structure **observe → analyse → create → test → question → redesign**. The
weekly topics and assessments were then organised around that progression
rather than generated independently.
([`b8689e4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/b8689e4))

This decision changed how I directed the agent. I did not want it to treat
each page as an isolated content-generation task. I encoded rules in
`CLAUDE.md` requiring weekly material to remain consistent with the course
progression, use concepts already introduced where appropriate, and prepare
students for upcoming assessments. I also specified that lectures and
tutorials have different roles: lectures introduce and explain concepts, while
tutorials require students to apply them through activities such as the Hate
Wall, Friction Lab, and user testing. These constraints were intended to stop
the agent from producing plausible individual pages that did not form a
coherent course.
([`d4b71a3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/d4b71a3))

Assessment design became another part of the harness. I wanted assessments to
demonstrate increasing capability rather than simply test different topics.
The **Hate Catalogue** asks students to analyse bad design, **The Worst
Interface** asks them to deliberately create it, the **Hostile Design
Experiment** tests whether their predictions survive contact with users, and
the **Redemption Project** requires them to understand and redesign a real
system. I added checks/rules so that assessment due weeks, weights, referenced
concepts, and weekly material agree across the site. This was particularly
useful because assessment information appears in multiple places and
inconsistencies are easy for an agent to introduce.
([`922ae3a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/922ae3a))

I also wanted the course's unusual premise to affect the website itself. I
asked the agent to use controlled examples of hostile design and humour, but
rejected the idea of simply making the site difficult to use. The joke only
works if the site remains a believable university course website. This became
a boundary for what I accepted from the agent: playful interactions were
appropriate when they demonstrated course concepts, but important information
such as deadlines, assessment requirements, and navigation still needed to be
accessible.
([`8913d95`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/8913d95))

I deliberately did not encode every design decision into the harness. Exact
lecture wording, examples, visual composition, and individual jokes were left
open because rigid checks would encourage repetition and make the generated
pages feel templated. The harness instead concentrates on properties that need
to remain true across the whole site: curriculum progression, internal
consistency, assessment alignment, usable navigation, and the distinction
between lecture and tutorial content.
([`a623b94`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/a623b94))

The harness therefore became less about telling the agent exactly what to
write and more about defining what I considered an acceptable course. The
agent could generate and revise individual pages, while `CLAUDE.md` and the
checks in `spec/` preserved the decisions that made those pages belong to the
same course.

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

A revision pass followed once the whole course existed end to end. Lecture
and assessment descriptions were reworded away from abstract-sounding phrasing
toward plainer, more concrete language, and the four assessment briefs were
rewritten against the actual specifics of the published assignment brief —
word ranges, participant counts, exact criteria weights — while keeping the
site's own voice rather than pasting the brief's bullet-point structure
directly
([`a623b94`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/a623b94)).
The same pass caught a routing mistake — the homepage's "Enter Course" button
pointed at Sessions instead of Lectures
([`96bdb04`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/96bdb04)) —
and filled out each week's lecture body with the specific mechanisms and
cross-week callbacks the outline had only gestured at
([`8706f86`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/8706f86)),
removing a leftover explanatory paragraph from the Lectures index once it
stopped adding anything
([`dad7766`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/dad7766)).

> Reword lecture and assessment descriptions in plainer language, then rewrite
> the four assessment briefs against the published assignment brief's actual
> specifics without copying its bullet-dump structure.

The site's own dark-pattern gimmick was extended past the fleeing "Enter
Course" button on the same principle: broken in copy and interaction, never in
an actual link, contrast ratio, or keyboard path. A confirmshaming "drop the
course" dialog on the homepage and a feedback form on the policies page that
always reports success and never sends anything both use native `<dialog>`
and form semantics so they stay fully keyboard-reachable and announce their
own state changes to a screen reader
([`5f3a953`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zephyrieal/commit/5f3a953)).

I knew the result was right when `pnpm check` — typecheck, build (which runs
the theme's accessibility checker and link checker), and the vitest spec
suite — passed clean, and separately when `pnpm check:evidence` caught the
starter-content markers, placeholder bios and unfilled `PROCESS.md` that a
green `pnpm check` alone doesn't see: the two checks verify different things,
and both needed to pass before this was actually done.
