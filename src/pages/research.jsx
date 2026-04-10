import Section from '../components/Section';

export default function Research() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Research</h1>
        <p className="mt-2 text-gray-600">Medical Imaging AI, Multimodal Fusion, and Quantitative Research</p>
        <p className="mt-4">
          <a
            href="https://scholar.google.com/citations?user=6WfmcMEAAAAJ&hl=en"
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
            <strong>CARDINAL, Clinically Grounded CT Representation Learning</strong>, developed a novel representation learning
            framework that extracts clinically grounded latent features directly from non-contrast CT scans, enabling prediction
            of 10-year major adverse cardiac events beyond traditional imaging biomarkers and risk scores.
          </li>
          <li>
            <strong>Multimodal Cardiovascular Risk Prediction</strong>, led development of a multimodal AI framework integrating
            imaging-derived representations and structured clinical data for long-horizon cardiac risk prediction, achieving
            <strong> AUROC up to 0.88</strong> on rare outcomes and improving performance by <strong>~30%</strong> over clinical
            and imaging baselines.
          </li>
          <li>
            <strong>Probability-Level Multimodal Fusion</strong>, proposed a probability-level multimodal fusion method for rare
            downstream outcome prediction, improving <strong>AUROC by 32.4%</strong>, <strong>AUPRC by 60.0%</strong>, and
            <strong> F1 by 46.3%</strong> while outperforming standard fusion techniques on imbalanced datasets.
          </li>
          <li>
            <strong>Large-Scale Tabular Clinical Modeling</strong>, built a weighted-loss XGBoost pipeline with sequential feature
            integration, achieving <strong>AUC 0.88</strong> for 10-year cardiac event prediction across
            <strong> 27,000+ patients</strong>, exceeding established clinical risk scores by <strong>30%</strong>.
          </li>
          <li>
            <strong>Active Learning for Label Efficiency</strong>, first author on a peer-reviewed framework reducing labeling
            requirements by over <strong>75%</strong>, matching full-model performance using only
            <strong> 15.4%</strong> of data in binary classification and <strong>23.1%</strong> in multi-class classification.
          </li>
          <li>
            <strong>Cross-Modal Cardiovascular Screening</strong>, developed models that predict coronary artery calcium scores
            from chest X-rays, achieving up to <strong>80% AUROC</strong> and enabling lower-cost cardiovascular screening.
          </li>
          <li>
            <strong>Women&apos;s Health AI</strong>, conducting research on multimodal models for heavy menstrual bleeding using
            imaging and structured clinical data, achieving <strong>sub-1 mL RMSE</strong> with internally developed systems.
          </li>
          <li>
            <strong>Human-in-the-Loop Eye-Tracking AI</strong>, co-authored a system leveraging radiologists&apos; eye-tracking
            data to guide model attention, improving interpretability and alignment with clinical decision-making.
          </li>
          <li>
            <strong>Fairness in Medical AI</strong>, investigating methods to mitigate racial and gender bias in medical AI models,
            with a focus on fairness and generalization across diverse patient populations.
          </li>
          <li>
            <strong>Clinical Collaboration</strong>, working with leading Emory clinicians including Drs. Carlo De Cecco,
            Marly van Assen, Fatemeh Ardeshir-Larijani, Arshed Quyyumi, and Elizabeth Krupinski to ensure clinical validity,
            robustness, and translational relevance.
          </li>
        </ul>
      </Section>

      <Section title="Publications and Working Papers">
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Deep Active Learning for Lung Disease Severity Classification from Chest X-rays: Learning with Less Data in the Presence of Class Imbalance</strong><br />
            Journal of Imaging Informatics in Medicine, 2025.<br />
            Demonstrates a deep active learning framework reducing labeling requirements by over 75% while maintaining full-model performance under class imbalance.
          </li>

          <li>
            <strong>Observer Performance and Eye-Tracking Variations as a Function of AI Output Format</strong><br />
            SPIE Medical Imaging 2025: Image Perception, Observer Performance, and Technology Assessment.<br />
            Evaluates how different AI output formats influence radiologist decision-making and diagnostic behavior.
          </li>

          <li>
            <strong>Explainable Machine Learning for Risk Stratification of Major Adverse Cardiac Events Using Clinical and Imaging Data</strong><br />
            Circulation, 2025 Abstract.<br />
            Demonstrates interpretable multimodal machine learning models outperforming traditional cardiovascular risk scores.
          </li>

          <li>
            <strong>Predicting 10-year Major Adverse Cardiac Events Using Multi-Source Modalities with XGBoost: Establishing a Baseline for Multimodal Fusion in Cardiac Risk Assessment</strong><br />
            medRxiv, 2025. Under review at Journal of Cardiovascular Computed Tomography.<br />
            Establishes a large-scale multimodal baseline achieving AUC 0.883 on 27,000+ patients and improving performance by ~30% over clinical risk models.
          </li>

          <li>
            <strong>CARDINAL: Clinically Grounded Representation Learning from CT for Long-Term Cardiovascular Risk Prediction</strong><br />
            In preparation, target submission 2026.<br />
            Introduces a representation learning framework that learns prognostic features directly from CT imaging for long-horizon cardiovascular risk prediction.
          </li>

          <li>
            <strong>Multimodal Fusion for Cardiovascular Risk Prediction Using Imaging and Clinical Data</strong><br />
            In preparation, target submission 2026.<br />
            Develops a principled multimodal fusion framework for rare outcome prediction with improved robustness and interpretability.
          </li>

          <li>
            <strong>GazeRIB-CXR: Gaze-guided Radiologist-Informed Blackout AI for Chest X-ray Analysis</strong><br />
            In preparation, target submission 2026.<br />
            Introduces a radiologist-informed training paradigm using multi-reader eye-tracking data, with up to 14% improvement across classification metrics.
          </li>
        </ul>

        <p className="mt-4">
          <a
            href="https://scholar.google.com/citations?user=6WfmcMEAAAAJ&hl=en"
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
            <strong>Ensemble Portfolio Optimization</strong>, pioneered an ensemble portfolio optimization algorithm incorporating
            LSTM neural networks and Deep Q-Learning, surpassing equal-weighted portfolios by 200%, SPX by 100%, and QQQ by 50%.
          </li>
          <li>
            <strong>Reinforcement Learning for Rebalancing</strong>, replicated and advanced research in institutional portfolio
            rebalancing, achieving fast convergence using Linux, PyTorch, and GPU acceleration at scales up to 512 assets.
          </li>
          <li>
            <strong>High-Dimensional Sampling and Volatility Analysis</strong>, conducted research on 100-dimensional sampling
            with the Ellipsoid method in under 20 minutes while analyzing stock-universe volatility across look-back periods.
          </li>
          <li>
            <strong>Implied Volatility Curve Modeling</strong>, created robust implied volatility curves for derivatives and developed
            profitable trading strategies.
          </li>
          <li>
            <strong>Generative AI for Trading Decisions</strong>, developed and optimized LLM-based systems for financial reasoning
            and trading decision support.
          </li>
        </ul>
      </Section>
    </>
  );
}
