import Section from '../components/Section';

export default function Research() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Research</h1>
        <p className="mt-2 text-gray-600">Working Papers</p>
        <p className="mt-4">
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800"
          >
            View my Google Scholar Profile
          </a>
        </p>
      </div>

      <Section title="Medical Imaging AI">
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Multimodal AI Fusion Framework</strong> – First-author framework integrating CT imaging and clinical
            data to predict 10-year major adverse cardiac events (MACE) via XGBoost fusion, achieving ROC up to XXX and PRC up to XXX.
          </li>
          <li>
            <strong>Deep Learning Pipeline Beyond CAC</strong> – Developed image-based pipeline that identifies MACE beyond
            traditional calcium and risk scores, achieving diagnostic accuracy up to XXX% using CT-derived imaging features.
          </li>
          <li>
            <strong>Sequential Feature Learning with Weighted XGBoost</strong> – Designed a model using XGBoost with weighted loss,
            reporting ROC of 88% on a cohort of 27K+ patients.
          </li>
          <li>
            <strong>Active Learning Strategy for Label Efficiency</strong> – Created an active learning approach reducing labeling
            burden by 75%, requiring only 15.4% of data for binary and 23.1% for multi-class classification to match full-data performance.
          </li>
          <li>
            <strong>Human-in-the-Loop Eye-Tracking Model</strong> – Co-authored model leveraging radiologists’ eye-tracking to guide
            AI focus on pulmonary regions, improving interpretability and alignment with clinical attention.
          </li>
          <li>
            <strong>Clinical Collaboration & Validation</strong> – Partnered with Emory doctors (De Cecco, van Assen, Ardeshir-Larijani,
            Quyyumi, Krupinski) to ensure robustness and translational impact across all AI models.
          </li>
        </ul>
      </Section>

      <Section title="Integrated AI-Based Discovery & Innovation">
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Ensemble Portfolio Optimization</strong> – Pioneered LSTM + Deep Q-Learning ensemble, outperforming
            equal-weighted portfolios by 200%, SPX by 100%, and QQQ by 50%.
          </li>
          <li>
            <strong>Rebalancing via Reinforcement Learning</strong> – Replicated and advanced institutional portfolio rebalancing
            papers, achieving fast convergence on 512 assets using Linux, PyTorch, and GPU acceleration.
          </li>
          <li>
            <strong>100-Dimensional Ellipsoid Sampling</strong> – Conducted research on 100-dim sampling with Ellipsoid method
            under 20 minutes and analyzed stock universe volatility across look-back periods.
          </li>
          <li>
            <strong>Implied Volatility Curve Modeling</strong> – Created robust curves for derivatives, driving profitable trading strategies.
          </li>
          <li>
            <strong>Generative AI for Trading Decisions</strong> – Developed and optimized LLM-based models for trading reasoning.
          </li>
        </ul>
      </Section>
    </>
  );
}
