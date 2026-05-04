import Avatar from '@/components/Avatar'

const skills = [
  'Python', 'SQL', 'R', 'AWS', 'Tableau', 'Power BI',
  'Alteryx', 'Machine Learning', 'ETL Pipelines',
  'Data Modelling', 'Statistical Analysis', 'CI/CD', 'Git', 'STATA',
]

const experience = [
  {
    role: 'Data Analyst',
    company: 'Zeno London',
    period: 'Dec 2024 – Present',
    description:
      'Leveraging Alteryx and Tableau to automate reporting and deliver brand intelligence insights. Led a recurring reporting service for Lenovo, created Power BI dashboards for senior leadership, and was promoted within nine months for outstanding client impact.',
  },
  {
    role: 'Data Engineering Bootcamp',
    company: 'Northcoders',
    period: 'Jun 2024 – Sep 2024',
    description:
      'Built a fully automated ETL pipeline using Python on AWS. Designed a star-schema data model in SQL and delivered an interactive Tableau dashboard for sales insights.',
  },
  {
    role: 'Assistant Economist & Statistician',
    company: 'Dept. for Environment, Food & Rural Affairs',
    period: 'Jan 2022 – May 2024',
    description:
      'Delivered national air pollution modelling informing the National Air Pollution Control Programme (award of recognition). Automated official statistics production in R with up to 80% efficiency savings.',
  },
  {
    role: 'Junior Data Analyst',
    company: 'Leading Point',
    period: 'Aug 2021 – Dec 2021',
    description:
      'Built an automated VBA marketing dashboard that contributed to a 400% increase in social media followers.',
  },
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 animate-fade-in">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-20">
        <Avatar />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 tracking-tight">
            Anes Motam
          </h1>
          <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-5">
            Data Scientist &amp; Enthusiast
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-7 max-w-lg">
            With five years of experience across data and analytics roles in the Civil Service, PR, and
            startups, I&apos;ve built a track record of extracting value from data and driving decisions through
            insight. I&apos;m now focused on deepening my expertise in statistical modelling and data science —
            exploring the fascinating possibilities they unlock in prediction, classification, and beyond.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1lojz8thVrnq3amfVYLXE7lAd5coU7HYY/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              View CV
            </a>
            <a
              href="https://github.com/AnesTheDataGuy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 rounded-md text-sm font-medium transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anes-motam-59347a194/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 rounded-md text-sm font-medium transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:anesmotam@outlook.com"
              className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 rounded-md text-sm font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-5">
          Tools &amp; Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-5">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div
              key={exp.role + exp.company}
              className="flex flex-col sm:flex-row gap-1 sm:gap-8 pb-8 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
            >
              <div className="sm:w-44 flex-shrink-0 pt-0.5">
                <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono whitespace-nowrap">
                  {exp.period}
                </p>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">{exp.role}</p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">{exp.company}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
