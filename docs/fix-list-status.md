# Portfolio fix list

Status: 24 of 32 items addressed, including five requirements that were already satisfied or are preserved. Eight items still need personal evidence or completed project work. Each implemented change was committed and pushed separately; unchanged requirements did not receive empty commits.

| Item | Status | Result or remaining requirement |
| --- | --- | --- |
| 1 | Done | View CV links directly to the PDF. |
| 2 | Done | CV title: Software Developer & Big Data Analytics Student. |
| 3 | Done | Broader hero, tagline, and introduction. |
| 4 | Done | CV availability includes software engineering, data, and AI-oriented internships. |
| 5 | Done | Summary distinguishes existing engineering work from learning and interests. |
| 6 | Done | Education follows the summary in the CV and introduction on the site. |
| 7 | Awaiting evidence | Confirm officially completed Calculus I/II, Linear Algebra, Discrete Mathematics, and programming courses before adding them. |
| 8 | Done, conservative | Python is in Programming, labeled foundational coursework; no unverified libraries added. |
| 9 | Done | Broader title, metadata, site copy, and generated social preview; web development remains one skill area. |
| 10 | Awaiting project | No Net-Link repository appeared in the public repository listing. Provide its source and implemented capabilities, or another completed non-frontend project. |
| 11 | Awaiting project | Needs actual dataset, analysis, preprocessing, baseline/model, evaluation protocol, metrics, and error analysis. No placeholder project published. |
| 12 | Awaiting project | Connectome analysis remains a future project until code, data provenance, results, and interpretation exist. |
| 13 | Done | Qoldanba emphasizes protected routes, authentication, database integration, and deployment. |
| 14 | Done | Shaqr emphasizes persistent data, authentication, and form-to-public-preview workflow. |
| 15 | Done | Source-verified scope: four Qoldanba application tables and eight Shaqr Prisma models. No invented adoption or performance metrics. |
| 16 | Awaiting evidence | Decentrathon challenge, team size, personal contribution, stack, and outcome are not established here. |
| 17 | Awaiting evidence | HackNU entries remain concise participation records until project and personal-contribution details are confirmed. |
| 18 | Awaiting evidence | GPA and official ranking omitted until supplied and verified. |
| 19 | Preserved | No invented research section or research claims. |
| 20 | Done | Achievements & Technical Activities heading on the site and CV. |
| 21 | Done | IBM certificate retained as compact supporting coursework on the website. |
| 22 | Done | Leadership follows technical content on the site; remains near the bottom of the CV. |
| 23 | Done | Technical Focus replaces Practical Skills, with learning explicitly labeled. |
| 24 | Done | Currently-looking-for text includes software engineering, data, and AI-oriented internships. |
| 25 | Done | Selected Technical Projects heading and implementation-focused introduction. |
| 26 | Awaiting projects | Keep existing projects in their current order until a completed data/ML or systems project is available. |
| 27 | Done | Portfolio, Qoldanba, and Shaqr READMEs explain problem, architecture, contribution, setup, examples, limitations, and next improvements. |
| 28 | Preserved | Skills stay limited to supported experience and labeled learning. |
| 29 | Preserved | One-page A4 CV design retained and visually checked. |
| 30 | Addressed by copy edits | Repeated responsive/UI wording removed from summaries, project bullets, case studies, and focus section. |
| 31 | Preserved | Alibay Arlan Akhanuly remains the primary English name; native name retained. |
| 32 | Done | Phone removed from homepage UI, structured data, and client profile data; retained in application CV. The downloadable CV is still public. |

## Evidence and repository documentation

- Qoldanba source reviewed at `e0c3e23`: application queries reference `deadlines`, `schedules`, `academic_calendar_activities`, and `learn_reminders`. Tutorial-only `notes` queries are excluded. [README update](https://github.com/arlan-6/qoldanba/commit/c72b5a1).
- Shaqr source reviewed at `83891e1`: `prisma/schema.prisma` defines eight models. [README update](https://github.com/arlan-6/invites/commit/ecd9d86).
- Project READMEs were checked against source; external database/auth services were not provisioned or tested. They document missing seeds/migrations and existing limitations rather than promising a fully reproducible deployment.

## Validation

- ESLint: passed without warnings.
- TypeScript: passed, including production build validation.
- Next.js production static export: passed; home, CV, PDF, and social preview assets generated.
- Desktop visual check at 1440px; mobile check at an emulated 390px, with document width also 390px.
- Browser inspection confirmed the View CV href and absence of a visible homepage phone number.
- PDF: one A4 page, expected section order and updated text, retained CV phone, 18 link annotations, and visual checks after content changes.

## Information needed to finish

Provide completed coursework, GPA/official ranking if useful, a Net-Link source link, any real data/ML/connectome project, and the challenge/contribution/outcome for each hackathon. New project implementation is separate substantive work; it must produce reviewable results before being presented as completed experience.
