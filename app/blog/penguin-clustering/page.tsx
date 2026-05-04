import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Can unsupervised learning identify penguin species on its own? | Anes Motam',
  description:
    'Using K-Means and t-SNE on the Palmer Penguins dataset to explore whether physical features alone reveal species groupings — and how sexual dimorphism transforms the results.',
}

export default function PenguinClustering() {
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
          {['Python', 'K-Means', 't-SNE', 'Clustering', 'Unsupervised Learning'].map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight leading-snug">
          Can unsupervised learning identify penguin species on its own?
        </h1>
        <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">4 May 2026</p>
      </header>

      {/* Body */}
      <article className="prose-custom">

        <p>
          This weekend I set myself a challenge: could a machine learning model identify penguin species
          without ever being told what they are? No labels. No supervision. Just raw physical measurements
          and a question.
        </p>

        <p>
          The <strong>Palmer Penguins</strong> dataset is a classic starting point for anyone exploring
          classification and clustering. It covers three species — Chinstrap, Gentoo, and Adélie — recorded
          across several Antarctic islands. The features I worked with were:
        </p>

        <ul>
          <li>Beak (culmen) length &amp; depth</li>
          <li>Flipper length</li>
          <li>Body mass</li>
          <li>Sex</li>
        </ul>

        <h2>The approach</h2>

        <p>
          I used two techniques together. <strong>K-Means</strong> to partition the data into clusters, and
          <strong> t-SNE</strong> (t-distributed Stochastic Neighbour Embedding) to project the
          high-dimensional feature space down to two dimensions — making the structure of the data visible.
        </p>

        <p>
          The first pass gave promising results. Three distinct groupings emerged, broadly aligning with the
          three species. But something was off: the clusters were messy in places, and one species in
          particular was being split across two groups.
        </p>

        <figure>
          <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white">
            <Image
              src="/blog/penguins-clustering-overview.png"
              alt="t-SNE plot showing penguin species clusters with K-Means centroids marked as blue X"
              width={1100}
              height={880}
              className="w-full h-auto"
            />
          </div>
          <figcaption>
            Initial t-SNE projection coloured by true species label. Blue Xs mark K-Means centroids.
            Notice the Adelie cluster splitting, and a centroid falling between two Chinstrap sub-clusters.
          </figcaption>
        </figure>

        <h2>The key discovery: sexual dimorphism</h2>

        <p>
          The culprit was <strong>sexual dimorphism</strong> — the systematic physical differences between
          male and female penguins. Males tend to be heavier and have longer flippers; females are smaller
          across most measurements. These differences were large enough that the model was effectively
          treating male Adélies and female Adélies as separate groups.
        </p>

        <p>
          Once I split the data by sex and visualised each group separately, the picture became much cleaner.
        </p>

        <figure>
          <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white">
            <Image
              src="/blog/penguins-clustering-gender.png"
              alt="Side-by-side t-SNE plots for male and female penguins, each showing three clean species clusters"
              width={1100}
              height={660}
              className="w-full h-auto"
            />
          </div>
          <figcaption>
            t-SNE projections split by sex. Each panel shows three tight, well-separated species clusters —
            a significant improvement over the combined view.
          </figcaption>
        </figure>

        <p>
          With sex accounted for, the clusters became tight and well-separated. From there, assigning species
          labels post-hoc was straightforward — the model had genuinely learned the structure in the data.
        </p>

        <h2>What I took away from this</h2>

        <p>
          A few things stood out:
        </p>

        <ul>
          <li>
            <strong>Data preprocessing unlocks the magic of ML.</strong> The model wasn&apos;t wrong on the
            first pass — it was faithfully reflecting a real signal in the data. Understanding that signal
            (sexual dimorphism) was what made the difference.
          </li>
          <li>
            <strong>Domain knowledge can matter as much as the model itself.</strong> No amount of
            hyperparameter tuning would have fixed the root issue. The insight was conceptual, not technical.
          </li>
          <li>
            <strong>&ldquo;Unsupervised&rdquo; doesn&apos;t mean &ldquo;hands-off&rdquo;.</strong> The
            algorithm found real structure, but interpreting and validating that structure required human
            judgement throughout.
          </li>
        </ul>

        <p>
          For anyone just getting into data science, I&apos;d strongly recommend the Palmer Penguins dataset
          as a playground. It&apos;s small enough to iterate on quickly, but rich enough to surface genuinely
          interesting problems around clustering, visualisation, and feature engineering.
        </p>

        <p>
          Curious — what&apos;s been your most surprising insight from a dataset?
        </p>

      </article>
    </div>
  )
}
