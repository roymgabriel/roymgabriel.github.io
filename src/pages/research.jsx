import Section from '../components/Section';

export default function Research() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Research</h1>
        <p className="mt-2 text-gray-600">Working Papers</p>
        <p className="mt-4">
          <a
            href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800"
          >
            View my Google Scholar profile
          </a>
        </p>
      </div>

      <Section title="Medical Imaging AI">
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Multimodal AI Fusion Framework</strong> — First-author framework integrating CT imaging and clinical data
            (XGBoost with weighted loss) to predict 10-year MACE; ROC ≈ <strong>0.88</strong> on a <strong>25,514-patient</strong> multimodal dataset.
          </li>
          <li>
            <strong>Deep Learning Pipeline Beyond CAC</strong> — CT-based pipeline predicting MACE beyond calcium scoring with
            <strong> 78.8% accuracy</strong>, improving over traditional CAC by <strong>25.7%</strong>.
          </li>
          <li>
            <strong>Probability-Level Fusion</strong> — Chest X-rays + clinical data predicting rare outcomes with
            <strong> 92-99% accuracy</strong> and <strong>PR AUC 61-97%</strong> on imbalanced cohorts.
          </li>
          <li>
            <strong>Active Learning for Label Efficiency</strong> — Reduced labeling by &gt;75%, needing only
            <strong> 15.4%</strong> (binary) and <strong>23.1%</strong> (multi-class) of data to match full-model performance.
          </li>
          <li>
            <strong>Human-in-the-Loop Eye-Tracking</strong> — Co-authored model using gaze from <strong>8 radiologists</strong>,
            improving interpretability and accuracy by up to <strong>13%</strong>; collaborations with Emory clinicians
            (De Cecco, van Assen, Ardeshir-Larijani, Quyyumi, Krupinski).
          </li>
        </ul>
      </Section>

      <Section title="Publications & Preprints">
        <ul className="list-disc list-inside space-y-3">
          <li><strong>Deep Active Learning for Lung Disease Severity Classification from Chest X-rays</strong> — Under review at <em>Journal of Imaging Informatics in Medicine</em>.</li>
          <li><strong>Predicting 10-year MACE Using Multi-Source Modalities with XGBoost</strong> — Under review <em>Journal of Cardiovascular Computed Tomography</em>.</li>
          <li><strong>Imbalance-Aware Multimodal Fusion on Probability Distributions</strong> — In preparation to submit to <em>Radiology: Artificial Intelligence</em> (RSNA).</li>
          <li>Co-author: <em>Explainable ML for Risk Stratification of MACE</em> — AHA Scientific Sessions 2025 (ID: 4366633).</li>
          <li>Co-author: <em>Observer Performance and Eye-Tracking Variations as a Function of AI Output Format</em> — SPIE Medical Imaging (DOI: 10.1117/12.3048588).</li>
        </ul>
        <p className="mt-4">
          <a
            href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800"
          >
            View my Google Scholar profile
          </a>
        </p>
      </Section>

      <Section title="Integrated AI-Based Discovery & Innovation">
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Ensemble Portfolio Optimization</strong> — Pioneered LSTM + Deep Q-Learning ensemble, outperforming
            equal-weighted portfolios by 200%, SPX by 100%, and QQQ by 50%.
          </li>
          <li>
            <strong>Rebalancing via Reinforcement Learning</strong> — Replicated and advanced institutional portfolio rebalancing
            papers, achieving fast convergence on 512 assets using Linux, PyTorch, and GPU acceleration.
          </li>
          <li>
            <strong>100-Dimensional Ellipsoid Sampling</strong> — Conducted research on 100-dim sampling with Ellipsoid method
            under 20 minutes and analyzed stock universe volatility across look-back periods.
          </li>
          <li>
            <strong>Implied Volatility Curve Modeling</strong> — Created robust curves for derivatives, driving profitable trading strategies.
          </li>
          <li>
            <strong>Generative AI for Trading Decisions</strong> — Developed and optimized LLM-based models for trading reasoning.
          </li>
        </ul>
      </Section>
    </>
  );
}
