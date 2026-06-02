import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Predicting DVD rental duration with regression models | Anes Motam',
  description:
    'How I used Lasso feature selection and five regression models to predict how long a customer will rent a DVD, hitting an MSE of 2.50 against a target of 3.',
}

export default function DvdRentalPrediction() {
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
          {['Python', 'scikit-learn', 'Regression', 'Lasso', 'Random Forest', 'Feature Engineering'].map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight leading-snug">
          Predicting DVD rental duration with regression models
        </h1>
        <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">1 Jun 2026</p>
      </header>

      {/* Body */}
      <article className="prose-custom">

        <h2>Objective</h2>

        <p>
          A DVD rental company wanted to improve inventory planning by predicting how many days a
          customer would keep a rental before returning it. The brief was straightforward: build a
          regression model that achieves a mean squared error of 3 or less on a held-out test set.
        </p>

        <p>
          The dataset contained 15,861 rental records with features covering transaction details
          (amount paid, rental rate), movie attributes (release year, length, replacement cost,
          rating), and a <code>special_features</code> column listing extras like deleted scenes or
          behind-the-scenes footage.
        </p>

        <h2>Approach</h2>

        <p>
          Before touching any models, the data needed some work. The <code>special_features</code> column
          was a free-text field, so I extracted two binary flags from it: <code>deleted_scenes</code> and{' '}
          <code>behind_the_scenes</code>. The target variable, <code>rental_length_days</code>, was
          computed directly from the difference between return and rental timestamps.
        </p>

        <p>
          With the features prepared, the next question was which ones actually mattered. I used
          Lasso regression with cross-validated alpha tuning to perform automatic feature selection.
          Lasso shrinks less useful coefficients toward zero, which makes it a clean way to cut noise
          before committing to a model. After fitting, only three features had non-zero coefficients:
          <code> amount</code>, <code>rental_rate</code>, and <code>rental_rate_2</code>.
        </p>

        <p>
          From there I trained and tuned five models on the selected features, evaluating each on a
          20% held-out test set:
        </p>

        <ul>
          <li>Linear Regression (baseline)</li>
          <li>Decision Tree (with GridSearchCV tuning)</li>
          <li>Bagging Regressor (with GridSearchCV tuning)</li>
          <li>Random Forest (with GridSearchCV tuning)</li>
          <li>Gradient Boosting</li>
        </ul>

        <h2>Findings</h2>

        <p>
          The baseline linear model fell just short of the target at MSE 3.02. Every tuned tree-based
          model cleared it comfortably:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <th className="text-left py-2 pr-6 font-semibold text-zinc-700 dark:text-zinc-300">Model</th>
                <th className="text-left py-2 font-semibold text-zinc-700 dark:text-zinc-300">Test MSE</th>
              </tr>
            </thead>
            <tbody className="text-zinc-500 dark:text-zinc-400">
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-6">Linear Regression</td>
                <td className="py-2">3.02</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-6">Decision Tree (tuned)</td>
                <td className="py-2 font-semibold text-zinc-700 dark:text-zinc-200">2.50</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-6">Bagging Regressor (tuned)</td>
                <td className="py-2 font-semibold text-zinc-700 dark:text-zinc-200">2.50</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-6">Random Forest (tuned)</td>
                <td className="py-2 font-semibold text-zinc-700 dark:text-zinc-200">2.50</td>
              </tr>
              <tr>
                <td className="py-2 pr-6">Gradient Boosting</td>
                <td className="py-2">2.78</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The tuned Decision Tree, Bagging Regressor, and Random Forest all tied at the top with MSE 2.50 --
          a 17% improvement over the linear baseline. Gradient Boosting also beat the target but sat slightly
          behind the others, likely because the shallow trees used to control overfitting limited its
          expressiveness on this dataset.
        </p>

        <p>
          One result that stood out: Lasso selected only three features from a much wider set, yet those
          three were enough for tree-based models to outperform the linear baseline by a meaningful margin.
          The price of the rental, not the movie metadata, turned out to be the most predictive signal.
        </p>

        <h2>Takeaway</h2>

        <p>
          A few things I will carry forward from this project:
        </p>

        <ul>
          <li>
            <strong>Feature selection before modelling pays off.</strong> Starting with Lasso reduced
            dimensionality without losing the signal that mattered, and kept subsequent training fast
            and interpretable.
          </li>
          <li>
            <strong>Hyperparameter tuning has real impact.</strong> The untuned Decision Tree would
            have missed the target. The tuned version hit the best score in the comparison. GridSearchCV
            is not just housekeeping.
          </li>
          <li>
            <strong>Simpler models can match complex ones on the right data.</strong> A single Decision
            Tree, properly tuned, matched the Bagging Regressor and Random Forest. That is a useful
            reminder that more complexity is not always better.
          </li>
        </ul>

        <p>
          The full notebook and dataset are on{' '}
          <a
            href="https://github.com/AnesTheDataGuy/dvd-rental-duration-prediction"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>

      </article>
    </div>
  )
}
