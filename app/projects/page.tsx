const projects = [
  {
    title: 'Automated AWS ETL Pipeline',
    description:
      'Designed and built a fully automated, end-to-end data engineering pipeline on AWS to ingest, transform, and serve data from a simulated operational database into a cloud-based data warehouse. The pipeline uses scheduled Lambda functions to incrementally extract data from a relational source, storing immutable snapshots in a structured S3 data lake. A transformation layer remodels raw data into a star schema optimised for analytics, outputting Parquet files for efficient querying. A loading process keeps the warehouse updated within 30-minute windows. Built with 90%+ test coverage, CI/CD via GitHub Actions, and security scanning throughout.',
    tags: ['Python', 'AWS', 'S3', 'Lambda', 'CloudWatch', 'EventBridge', 'SQL', 'Star Schema', 'Parquet', 'CI/CD', 'GitHub Actions'],
    github: 'https://github.com/AnesTheDataGuy/totesys-ETL-new',
  },
]

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 animate-fade-in">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight">
          Projects
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Things I&apos;ve built. More on the way.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h2>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
