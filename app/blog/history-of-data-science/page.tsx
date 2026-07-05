import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A brief history of data science | Anes Motam',
  description:
    'From least squares in the 19th century to Python and modern machine learning — a short tour of how data science became what it is today.',
}

export default function HistoryOfDataScience() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 animate-fade-in">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Back to blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {['Data Science', 'Machine Learning', 'History', 'Statistics'].map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight leading-snug">
          A brief history of data science
        </h1>
        <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">5 Jul 2026</p>
      </header>

      {/* Body */}
      <article className="prose-custom">

        <p>
          Data science can feel like a recent invention, something that emerged from Silicon Valley
          in the 2010s alongside big tech and big data. In reality, the foundations stretch back
          nearly two centuries, built up gradually by statisticians, mathematicians, and computer
          scientists long before the term itself existed.
        </p>

        <h2>19th century: the first models</h2>

        <p>
          The story starts in the early 1800s, when astronomers needed a principled way to fit
          observations to predictions. The method of least squares, developed independently by
          Gauss and Legendre, gave them exactly that: a technique for finding the line that
          minimises the total error across a set of data points. It is the earliest form of linear
          regression, and it remains one of the most widely used tools in statistics today.
        </p>

        <h2>1930s to 1970s: classification and generalisation</h2>

        <p>
          The next major wave came in the mid-20th century, when statisticians turned their
          attention from prediction to classification. Ronald Fisher developed linear discriminant
          analysis in the 1930s to separate groups based on measured features. Logistic regression
          followed as an alternative approach for modelling binary outcomes.
        </p>

        <p>
          These were powerful but specialised tools. In the early 1970s, statisticians unified them
          under a single theoretical framework: generalised linear models. GLMs extended the logic
          of linear regression to handle a much wider range of response types, from proportions to
          counts, and provided a coherent foundation for the field.
        </p>

        <h2>1980s: computation opens new doors</h2>

        <p>
          By the late 1970s, the statistical toolkit was rich but largely limited to linear
          relationships. Non-linear modelling was theoretically possible but computationally
          prohibitive on the hardware of the time. As processing power improved through the 1980s,
          that barrier fell.
        </p>

        <p>
          Two important methods emerged as a result. Classification and regression trees offered an
          intuitive, interpretable way to model non-linear relationships by recursively splitting
          data on the most informative features. Generalised additive models provided a more
          flexible extension of GLMs, allowing smooth, non-linear terms for individual predictors
          while retaining much of the interpretability of linear models.
        </p>

        <p>
          The same decade also saw neural networks gain serious attention. Inspired loosely by the
          structure of biological neurons, multi-layer networks trained with backpropagation showed
          that machines could learn complex patterns from data, not just fit pre-specified equations.
        </p>

        <h2>1990s: support vector machines and the modern era</h2>

        <p>
          Support vector machines arrived in the 1990s with a different geometric intuition: find
          the boundary between classes that maximises the margin between them. With the kernel trick,
          SVMs could also handle non-linear decision boundaries without explicitly mapping data into
          higher-dimensional space. For a period, they were state of the art across many
          classification tasks.
        </p>

        <h2>The democratisation of the field</h2>

        <p>
          What changed most in the decades that followed was not the invention of entirely new
          methods, but access. Tools like Python, with libraries such as scikit-learn, NumPy, and
          pandas, took techniques that had previously required specialist mathematical training and
          made them available to anyone willing to learn. A student could implement a random forest
          or a neural network in an afternoon. The barrier to entry dropped dramatically, and the
          field grew accordingly.
        </p>

        <p>
          That accessibility is what drew me in. The history of data science is a history of ideas
          that started in astronomy and statistics, were shaped by decades of computational
          progress, and eventually became tools that almost anyone can pick up and apply.
        </p>

      </article>
    </div>
  )
}
