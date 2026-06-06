import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Predicting Titanic survival: my first Kaggle ML project | Anes Motam',
  description:
    'How I built a Gradient Boosting classifier to predict Titanic passenger survival, achieving a Kaggle score of 0.78, and what the feature analysis revealed about who was most likely to survive.',
}

export default function TitanicSurvival() {
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
          {['Python', 'scikit-learn', 'Classification', 'Gradient Boosting', 'Kaggle', 'Feature Engineering'].map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight leading-snug">
          Predicting Titanic survival: my first Kaggle ML project
        </h1>
        <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">6 Jun 2026</p>
      </header>

      {/* Body */}
      <article className="prose-custom">

        <h2>Context</h2>

        <p>
          If you have spent any time in the data science world, you know the Titanic dataset. It is
          the classic entry point for supervised machine learning on Kaggle, and for good reason: the
          problem is intuitive, the data is approachable, and there is just enough messiness in it to
          teach you real skills. Missing values, mixed feature types, noisy columns -- it covers the
          fundamentals.
        </p>

        <p>
          This was my first proper ML project. I wanted a challenge that would force me to build a
          complete pipeline from scratch: loading raw data, cleaning it, engineering features,
          comparing models, tuning hyperparameters, and submitting predictions. The Titanic
          competition gave me all of that in one place.
        </p>

        <h2>Objective</h2>

        <p>
          The task is a binary classification problem: given a set of features about each passenger,
          predict whether they survived (1) or did not survive (0). The dataset contains 891 labelled
          training records and 418 unlabelled test records. Submissions are scored on prediction
          accuracy against the held-out ground truth.
        </p>

        <p>
          My final Gradient Boosting model achieved a <strong>Kaggle score of 0.78</strong>, which
          is a strong result for a first attempt and sits comfortably above many baseline
          submissions. The model reached 83.4% accuracy in cross-validation and 92.7% on the
          training set.
        </p>

        <h2>Method</h2>

        <p>
          The first challenge was preprocessing. The dataset has missing values in <code>Age</code>{' '}
          (about 20% missing), <code>Cabin</code> (77% missing), <code>Fare</code>, and{' '}
          <code>Embarked</code>. I built a <code>ColumnTransformer</code> pipeline to handle each
          feature type separately:
        </p>

        <ul>
          <li>
            <strong>Numeric features</strong> (<code>Age</code>, <code>Fare</code>,{' '}
            <code>SibSp</code>, <code>Parch</code>): median imputation for missing values
          </li>
          <li>
            <strong>Categorical features</strong> (<code>Sex</code>, <code>Pclass</code>,{' '}
            <code>Embarked</code>, <code>Cabin</code>): mode imputation then one-hot encoding
          </li>
        </ul>

        <p>
          The <code>Cabin</code> column required extra attention. Most values were missing, and those
          that existed contained a deck letter followed by a cabin number (e.g. <code>C123</code>).
          I stripped the numbers and kept only the deck letter, turning a mostly-useless free-text
          column into a meaningful categorical feature.
        </p>

        <p>
          I then ran five classifiers through 5-fold cross-validation to identify the best
          performers:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <th className="text-left py-2 pr-6 font-semibold text-zinc-700 dark:text-zinc-300">Model</th>
                <th className="text-left py-2 font-semibold text-zinc-700 dark:text-zinc-300">CV Accuracy</th>
              </tr>
            </thead>
            <tbody className="text-zinc-500 dark:text-zinc-400">
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-6">Decision Tree</td>
                <td className="py-2">0.783</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-6">Logistic Regression</td>
                <td className="py-2">0.792</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-6">AdaBoost</td>
                <td className="py-2">0.794</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-6">Gradient Boosting</td>
                <td className="py-2">0.797</td>
              </tr>
              <tr>
                <td className="py-2 pr-6">Random Forest</td>
                <td className="py-2">0.808</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Random Forest and Gradient Boosting were the top two. I ran <code>GridSearchCV</code> on
          both, tuning depth, number of estimators, and learning rate. Gradient Boosting came out
          ahead at <strong>0.834</strong> and was selected for the final submission.
        </p>

        <h2>Findings</h2>

        <p>
          Before committing to the final model, I fitted a Logistic Regression and inspected the
          absolute values of its coefficients to understand which features were driving predictions.
          The results were striking.
        </p>

        <p>
          <strong>Sex was the dominant predictor by a wide margin.</strong> The coefficient for
          being male (2.59) was more than twice the next largest feature. This reflects the
          historical reality of the disaster: women and children were prioritised for lifeboats, and
          survival rates for women were dramatically higher than for men.
        </p>

        <p>
          <strong>Cabin deck came next.</strong> Decks C, G, E, F, and D all appeared in the top
          features. Cabin deck is a rough proxy for passenger class and location on the ship. Cabins
          on higher decks tended to belong to wealthier passengers with faster access to lifeboats.
          The fact that this feature held predictive power despite the high proportion of missing
          cabin values shows it was worth engineering.
        </p>

        <p>
          <strong>Port of embarkation had a smaller but noticeable effect.</strong> Passengers who
          boarded at Southampton (S) or Queenstown (Q) showed a different survival profile compared
          to those from Cherbourg (C), which is the reference category. Cherbourg had a higher share
          of first-class passengers, which partly explains the difference.
        </p>

        <p>
          <strong>Family size played a role.</strong> <code>SibSp</code> (number of siblings and
          spouses aboard) had a meaningful coefficient, suggesting that travelling with a small
          family was associated with slightly different survival odds compared to travelling alone or
          in a large group.
        </p>

        <p>
          Taken together, the picture that emerges is consistent with historical accounts: survival
          on the Titanic was heavily influenced by gender, wealth (proxied by cabin and embarkation
          port), and to a lesser extent, family structure. The model learned these patterns from the
          data without any prior knowledge of the event.
        </p>

        <p>
          The full notebook is on{' '}
          <a
            href="https://github.com/AnesTheDataGuy/titanic-survival-prediction"
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
