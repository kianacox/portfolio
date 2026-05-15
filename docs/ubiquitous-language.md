# Ubiquitous Language

Canonical terms for this codebase, grouped by domain. Use these terms consistently in code, components, data, tests, and conversation.

---

## Domain: Employment History

| Canonical Term       | Interchangeable Terms                | Meaning                                                                                         | Example Usage                        |
| -------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------ |
| **Employment Entry** | job, role, position, work experience | A single job held at a company, with title, company, date range, description, and skills        | `flutterContent`, `saleCycleContent` |
| **Title**            | job title, role name, position       | The official role name held at the company                                                      | `'Senior Frontend Engineer'`         |
| **Company**          | employer, organisation               | The name of the employing organisation                                                          | `'SaleCycle'`, `'Flutter UK&I'`      |
| **Date Range**       | tenure, period, employment dates     | Start and end dates of the role, displayed as `'MMM YYYY - MMM YYYY'` or `'MMM YYYY - Present'` | `'Sep 2025 - Present'`               |
| **Present Role**     | current role, active position        | Employment entry where the end date is "Present" — receives `presentTitle` styling              | SaleCycle entry                      |
| **Description**      | summary, blurb, copy                 | Prose paragraph summarising impact and responsibilities for the role. Not bullet points         | `saleCycleContent.description`       |

---

## Domain: Skills

| Canonical Term   | Interchangeable Terms                   | Meaning                                                                       | Example Usage                        |
| ---------------- | --------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------ |
| **Skills Panel** | skills sidebar, tech icons, skills list | The left-hand column in a timeline entry showing technology icons with labels | `<TimelineOppositeContent>`          |
| **Skill**        | technology, tech, tool                  | A single named technology with an associated icon                             | `{ name: 'Vite', icon: <SiVite /> }` |
| **Skill Set**    | skills array, tech stack                | The array of skills associated with one Employment Entry                      | `skillsSaleCycle`, `skillsFlutter`   |
| **Icon**         | tech icon, logo                         | A `react-icons` component representing a technology                           | `<SiCypress size={iconSize} />`      |

---

## Domain: UI / Animation

| Canonical Term         | Interchangeable Terms        | Meaning                                                                                      | Example Usage                         |
| ---------------------- | ---------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------- |
| **Timeline**           | employment timeline, history | The vertically stacked MUI Timeline component rendering all Employment Entries               | `<Timeline data-testid="employment">` |
| **Timeline Item**      | entry, card, row             | A single MUI `TimelineItem` wrapping one Employment Entry                                    | `<TimelineItem role="listitem">`      |
| **Timeline Connector** | line, connector              | The vertical line joining Timeline Items                                                     | `<TimelineConnector>`                 |
| **Timeline Dot**       | dot, node, marker            | The circular marker on the timeline spine for each item                                      | `<TimelineDot>`                       |
| **Container Variant**  | parent animation             | Framer Motion `Variants` object applied to the Timeline wrapper; controls stagger timing     | `containerVariants`                   |
| **Item Variant**       | child animation              | Framer Motion `Variants` object applied to each Timeline Item; controls fade-in and slide-up | `itemVariants`                        |

---

## Domain: Projects

| Canonical Term | Interchangeable Terms | Meaning | Example Usage |
|---|---|---|---|
| **Project Entry** | project, card data | A single project object with title, description, image, link, and github fields | `{ title: 'Titch Tattoo', ... }` |
| **Project Card** | card, tile | The rendered UI card for a Project Entry | `<motion.div data-testid="project-Titch Tattoo">` |
| **Live Website Link** | live link, site link | Anchor pointing to the deployed project URL; always rendered | `data-testid="live-website-link"` |
| **GitHub Link** | repo link, source link | Anchor pointing to the source repository; conditionally rendered only when `github` is non-empty | `data-testid="github-link"` |
| **Private Repo** | private project, no repo | Project Entry where `github` is an empty string — GitHub Link is hidden from the UI | Titch Tattoo entry |
| **Project Description** | description, blurb | 1–2 sentence prose summary of the project's purpose and technical highlights | `project.description` |
| **Project Image** | screenshot, thumbnail | A static image from `/public` displayed on the Project Card | `/titch-tattoo.png` |

---

## Domain: Profile

| Canonical Term | Interchangeable Terms | Meaning | Example Usage |
|---|---|---|---|
| **Profile Summary** | bio, summary, about | The gamified prose paragraph describing the engineer's skills, history, and traits | `data-testid="profile-summary"` |
| **Gamified Language** | RPG language, flavour text | RPG/game-themed vocabulary used throughout the Profile Summary to give it personality | "critical hits", "respec'd", "changed classes", "alchemist" |
| **Class Change** | career change, role change | RPG term for moving between employers or domains; preferred over "career transition" in copy | "changed classes into marketing tech" |
| **Buff** | strength, positive trait | RPG term for a positive contribution the engineer provides to the team | "Buffs entire squad with clean UI components" |
| **Weakness** | weak to, negative trait | RPG term for a known pain point or disliked working condition | "Weak to flaky tests" |

---

## Domain: Portfolio (General)

| Canonical Term | Interchangeable Terms            | Meaning                                                                      | Example Usage              |
| -------------- | -------------------------------- | ---------------------------------------------------------------------------- | -------------------------- |
| **Portfolio**  | site, personal site, website     | The Next.js application as a whole                                           | repo root                  |
| **Section**    | page area, block                 | A distinct content area of the portfolio (e.g. Employment, Projects, Skills) | Employment section         |
| **Accent**     | highlight colour, primary colour | The primary brand colour used for borders, glows, and interactive elements   | `COLORS['primary-accent']` |
| **Highlight**  | card border colour               | Secondary colour used for Timeline Item card borders and glows               | `COLORS.highlights`        |
