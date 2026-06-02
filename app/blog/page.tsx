import Link from 'next/link'

const posts = [
  {
    slug: 'dvd-rental-prediction',
    title: 'Predicting DVD rental duration with regression models',
    date: '1 Jun 2026',
    summary:
      'How I used Lasso feature selection and five regression models to predict how long a customer will rent a DVD, hitting an MSE of 2.50 against a target of 3.',
    tags: ['Python', 'scikit-learn', 'Regression', 'Lasso', 'Random Forest', 'Feature Engineering'],
  },
  {
    slug: 'penguin-clustering',
    title: 'Can unsupervised learning identify penguin species on its own?',
    date: '4 May 2026',
    summary:
      'Using K-Means and t-SNE on the Palmer Penguins dataset, I explored whether physical features alone can reveal species groupings — and how accounting for sexual dimorphism transformed the results.',
    tags: ['Python', 'K-Means', 't-SNE', 'Clustering', 'Unsupervised Learning'],
  },
]

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 animate-fade-in">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight">
          Blog
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Thoughts on data science, machine learning, and beyond.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">{post.date}</span>
            </div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
              {post.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
