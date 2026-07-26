import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'K-Nearest Neighbours and the bias-variance tradeoff | Anes Motam',
  description:
    'A plain-English introduction to K-Nearest Neighbours, and why picking K is really a balancing act between overfitting and underfitting.',
}

export default function KNearestNeighbours() {
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
          {['Python', 'K-Nearest Neighbours', 'Classification', 'Bias-Variance Tradeoff'].map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight leading-snug">
          K-Nearest Neighbours: how many neighbours should you actually trust?
        </h1>
        <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">26 Jul 2026</p>
      </header>

      {/* Body */}
      <article className="prose-custom">

        <p>
          Imagine you move to a new street and want to guess how much your house is worth. A sensible
          shortcut: find the five houses nearest to yours and look at their sale prices. No spreadsheets,
          no formulas, just &ldquo;what did the people around me do?&rdquo;
        </p>

        <p>
          That instinct is the entire idea behind <strong>K-Nearest Neighbours (KNN)</strong>. To classify
          a new data point, KNN looks at the K closest points to it in the training data and lets them vote.
          Want to guess if someone will like a new coffee shop? Find the K people most similar to them
          (in taste, spending habits, location) and go with the majority opinion. No model is trained in
          advance, no assumptions about the shape of the data. You just ask the neighbours.
        </p>

        <p>
          It is popular because it is simple, requires almost no setup, and works surprisingly well when
          similar things really do behave similarly. The catch is a single number you have to choose
          yourself: K, the number of neighbours to consult.
        </p>

        <h2>How KNN actually draws the line</h2>

        <p>
          The plot below shows KNN in action on a simple two-class problem (blue vs orange).
        </p>

        <figure>
          <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white">
            <Image
              src="/blog/knn-decision-boundary.png"
              alt="Left panel shows a new observation classified by majority vote among its K nearest neighbours inside a circle. Right panel shows the resulting jagged KNN decision boundary separating blue and orange classes"
              width={742}
              height={420}
              className="w-full h-auto"
            />
          </div>
          <figcaption>
            Left: a new point (black x) is classified by drawing a circle around it that captures its K
            nearest neighbours, then taking a majority vote. Right: repeating this for every possible point
            traces out the full decision boundary.
          </figcaption>
        </figure>

        <p>
          On the left, the black x is a new observation. KNN draws a circle just big enough to capture its
          K nearest neighbours (here, mostly blue), and assigns the majority class. Do this for every point
          in the space and you get the jagged black boundary on the right, the line that separates &ldquo;KNN
          says blue&rdquo; from &ldquo;KNN says orange&rdquo;.
        </p>

        <h2>The problem: what is the right K?</h2>

        <p>
          Small K means each prediction is based on just a handful of very close neighbours, so the
          boundary above would twist and turn to chase every last data point. Large K means the boundary
          gets averaged over many neighbours and becomes smoother, but less sensitive to local detail.
          This trade-off shows up clearly when you plot error rate against model flexibility.
        </p>

        <figure>
          <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white">
            <Image
              src="/blog/knn-error-rate.png"
              alt="Plot of training and test error rate against 1/K, with training error falling steadily and test error forming a U-shape with a minimum around the dashed line"
              width={912}
              height={578}
              className="w-full h-auto"
            />
          </div>
          <figcaption>
            Training error (blue) falls steadily as 1/K increases and the model gets more flexible. Test
            error (orange) does not follow it down. It bottoms out and then rises again, tracing the
            classic U-shape of the bias-variance tradeoff. The dashed line marks the best achievable error.
          </figcaption>
        </figure>

        <p>
          The x-axis here is 1/K, so moving right means K is shrinking and the model is getting more
          flexible. The blue training error keeps falling, and if you push K all the way down to 1, it
          hits zero: the model just memorises every training point as its own nearest neighbour. That looks
          like a win, but it is not, because training error is not what we actually care about. What matters
          is the orange line: how well the model performs on data it has never seen.
        </p>

        <p>
          And the orange line does not cooperate. It falls for a while alongside the training error, then
          turns around and climbs back up. Past a certain point, extra flexibility stops capturing real
          signal and starts fitting noise, quirks specific to the training set that will not repeat in new
          data. That is <strong>overfitting</strong>, and it is exactly what the shrinking gap between the
          two lines on the right-hand side of the plot is showing you.
        </p>

        <p>
          Go too far the other way (K very large, 1/K near zero) and the model swings toward{' '}
          <strong>underfitting</strong>. Every prediction gets smoothed over such a large neighbourhood that
          real group differences get washed out, and the model becomes too biased to draw meaningful
          boundaries between classes at all.
        </p>

        <p>
          The sweet spot sits at the bottom of the orange U, marked by the dashed line. Somewhere in the
          middle, not so small that the model reacts to noise, not so large that it goes blind to real
          structure. That balance point, between variance on one side and bias on the other, is the entire
          job when tuning K.
        </p>

        <p>
          The lesson generalises well beyond KNN: a model that keeps getting better on training data is not
          necessarily getting better at its actual job. Always check the test error before you believe the
          training error.
        </p>

      </article>
    </div>
  )
}
