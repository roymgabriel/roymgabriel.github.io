import Section from '../components/Section';
import Card from '../components/Card';

export default function Resume() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Resume</h1>
      </div>

      <Section title="Education">
        <Card
          heading="Doctor of Philosophy, Electrical & Computer Engineering (Machine Learning)"
          sub="Georgia Institute of Technology, Atlanta, GA | Expected May 2028 | GPA: 4.0/4.0"
        >
          <ul className="list-disc list-inside space-y-1">
            <li>Advised by Dr. Ali Adibi (ECE)</li>
          </ul>
        </Card>

        <Card
          heading="Master of Science, Computational Science & Engineering"
          sub="Georgia Institute of Technology, Atlanta, GA | Expected May 2026 | GPA: 4.0/4.0"
        />

        <Card
          heading="Master of Science, Industrial & Systems Engineering (Quantitative & Computational Finance)"
          sub="Georgia Institute of Technology, Atlanta, GA | Dec 2023 | GPA: 3.95/4.0"
        >
          <ul className="list-disc list-inside space-y-1">
            <li>Coursework included statistical modeling, computational statistics, option pricing, Monte Carlo simulation, portfolio optimization, machine learning, and derivatives trading</li>
          </ul>
        </Card>

        <Card
          heading="Bachelor of Science, Industrial & Systems Engineering (Analytics & Data Science)"
          sub="Georgia Institute of Technology, Atlanta, GA | May 2022 | GPA: 3.95/4.0"
        />

        <Card
          heading="Bachelor of Arts, Natural Sciences (Physics, Pre-Engineering)"
          sub="Covenant College, Lookout Mountain, GA | May 2021 | GPA: 3.85/4.0"
        />
      </Section>

      <Section title="Awards & Honors">
        <ul className="list-disc list-inside space-y-2">
          <li>President&apos;s Fellow, Georgia Tech, top 10% of PhD applicant pool</li>
          <li>VIP Outstanding Mentor Award, Georgia Tech</li>
          <li>Highest Honors, Georgia Tech</li>
          <li>Hope Scholarship, Georgia Tech</li>
          <li>Magna Cum Laude, Covenant College</li>
          <li>Maclellan Scholarship, full-tuition leadership and merit scholarship</li>
          <li>Georgia Tech Industrial and Systems Engineering Annual Board Meeting Fellow, selected 5 out of 100+</li>
        </ul>
      </Section>

      <Section title="Publications & Working Papers">
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Deep Active Learning for Lung Disease Severity Classification from Chest X-rays: Learning with Less Data in the Presence of Class Imbalance</strong><br />
            Journal of Imaging Informatics in Medicine, 2025
          </li>
          <li>
            <strong>Observer Performance and Eye-Tracking Variations as a Function of AI Output Format</strong><br />
            SPIE Medical Imaging, 2025
          </li>
          <li>
            <strong>Explainable Machine Learning for Risk Stratification of Major Adverse Cardiac Events Using Clinical and Imaging Data</strong><br />
            Circulation, 2025 Abstract
          </li>
          <li>
            <strong>Predicting 10-year Major Adverse Cardiac Events Using Multi-Source Modalities with XGBoost: Establishing a Baseline for Multimodal Fusion in Cardiac Risk Assessment</strong><br />
            medRxiv, 2025, under review
          </li>
          <li>
            <strong>CARDINAL: Clinically Grounded Representation Learning from CT for Long-Term Cardiovascular Risk Prediction</strong><br />
            In preparation
          </li>
          <li>
            <strong>Multimodal Fusion for Cardiovascular Risk Prediction Using Imaging and Clinical Data</strong><br />
            In preparation
          </li>
          <li>
            <strong>GazeRIB-CXR: Gaze-guided Radiologist-Informed Blackout AI for Chest X-ray Analysis</strong><br />
            In preparation
          </li>
        </ul>
      </Section>

      <Section title="Research">
        <Card heading="Medical Imaging AI" sub="PhD Research, Georgia Institute of Technology">
          <ul className="list-disc list-inside space-y-1">
            <li>Developed CARDINAL, a representation learning framework for clinically grounded features from non-contrast CT scans</li>
            <li>Led multimodal AI framework for long-horizon cardiac risk prediction, AUROC up to 0.88, ~30% improvement over baselines</li>
            <li>Proposed probability-level multimodal fusion improving AUROC, AUPRC, and F1 on rare disease outcomes</li>
            <li>Built large-scale XGBoost pipeline for 10-year cardiac event prediction across 27,000+ patients</li>
            <li>Developed cross-modal chest X-ray to coronary artery calcium prediction up to 80% AUROC</li>
            <li>Conducting research in women&apos;s health and fairness in medical AI</li>
            <li>Collaborated with leading Emory clinicians to support clinical validity and translation</li>
          </ul>
        </Card>

        <Card heading="Integrated AI-Based Discovery and Innovation" sub="Head of Quantitative Research">
          <ul className="list-disc list-inside space-y-1">
            <li>Pioneered LSTM and Deep Q-Learning ensemble portfolio optimization</li>
            <li>Outperformed equal-weighted portfolios by 200%, SPX by 100%, and QQQ by 50%</li>
            <li>Advanced reinforcement learning methods for institutional portfolio rebalancing</li>
            <li>Developed implied volatility models and LLM-based financial decision systems</li>
          </ul>
        </Card>
      </Section>

      <Section title="Experience">
        <Card heading="Founder and Business Owner" sub="Makademy LLC, Chattanooga, TN | May 2021 – Jan 2026">
          <ul className="list-disc list-inside space-y-1">
            <li>Created written, audio, and video educational content for institutions</li>
            <li>Developed and delivered a machine learning in finance course for IvyLine Capital, reaching 90+ universities and 10 countries</li>
            <li>Built an automated derivatives trading algorithm</li>
            <li>Maintained a 95% average business profit margin</li>
          </ul>
        </Card>

        <Card heading="Quantitative Researcher Intern" sub="Dimensional Fund Advisors, Charlotte, NC | Jun 2023 – Aug 2023">
          <ul className="list-disc list-inside space-y-1">
            <li>Automated ETF basket construction analysis using Python and SQL</li>
            <li>Reduced storage requirements by 85% on a 1.5 TB dataset</li>
            <li>Delivered strategic recommendations for ETF basket management</li>
          </ul>
        </Card>

        <Card heading="FX Market Making & Trading Intern" sub="The Bank of New York Mellon, New York, NY | Jun 2022 – Aug 2022">
          <ul className="list-disc list-inside space-y-1">
            <li>Priced FX spot, swaps, and options with paper-trading PnL of $143K in 8 weeks</li>
            <li>Backtested volatility strategies in Python and Excel</li>
            <li>Developed a Bloomberg API trading book for future interns</li>
          </ul>
        </Card>

        <Card heading="Tech Consultant Intern" sub="PwC, Atlanta, GA | Jun 2021 – Aug 2021">
          <ul className="list-disc list-inside space-y-1">
            <li>Reduced code lines by 99% while extracting inefficient financial activity for a FED bank</li>
            <li>Built a dynamic relational database during a Salesforce transition</li>
            <li>Documented operations and debugged 130+ QA testing processes</li>
          </ul>
        </Card>
      </Section>

      <Section title="Projects">
        <Card heading="Urban Autonomous Taxi Simulation">
          <ul className="list-disc list-inside space-y-1">
            <li>SimPy simulation with NYC Taxi and OpenStreetMap data</li>
            <li>GCNN-DDGF demand forecasting with 49.6 RMSE</li>
            <li>5% increase in trip fulfillment and 38% fewer failures</li>
          </ul>
        </Card>

        <Card heading="Pneumonia Classification Project">
          <ul className="list-disc list-inside space-y-1">
            <li>Hybrid Bayesian-CNN with F1 up to 73.3%</li>
            <li>LoRA adaptation reducing trainable parameters by over 90%</li>
          </ul>
        </Card>

        <Card heading="NASA JPL MOID Regression Analysis">
          <ul className="list-disc list-inside space-y-1">
            <li>Stepwise and Lasso regression with adjusted R² of 0.366</li>
            <li>Model diagnostics, preprocessing, and validation in R</li>
          </ul>
        </Card>
      </Section>

      <Section title="Leadership">
        <Card heading="Makademy and VIP Personal Mentorship" sub="Student Career Mentor">
          <ul className="list-disc list-inside space-y-1">
            <li>Mentored over 40 graduate, undergraduate, and high school students</li>
            <li>Hosted resume workshops, mock technical interviews, and application strategy sessions</li>
            <li>Supported placements into MIT, Harvard, Georgia Tech, Millennium, DRW, and Chicago Trading Company</li>
          </ul>
        </Card>

        <Card heading="IvyLine Capital Group" sub="Investments & Derivatives Mentor">
          <ul className="list-disc list-inside space-y-1">
            <li>Taught portfolio optimization and derivatives applications using Python</li>
            <li>Selected from 600+ students across 80+ top U.S. universities</li>
            <li>Engaged students and professionals through weekly lectures and challenges</li>
          </ul>
        </Card>
      </Section>

      <Section title="Skills">
        <ul className="list-disc list-inside space-y-2 columns-2">
          <li>Python, R, SQL, MATLAB, C/C++</li>
          <li>LaTeX, Linux, VBA, SAS</li>
          <li>PyTorch, TensorFlow, Keras, Jupyter</li>
          <li>Tableau, Bloomberg, Gurobi, Microsoft SQL Server, Jira</li>
          <li>Multimodal Fusion, Representation Learning, Active Learning</li>
          <li>Bayesian Probability and Statistics, Time Series Analysis, Hypothesis Testing</li>
          <li>Convex Optimization, Linear Programming, Mixed Integer Programming</li>
          <li>Image Processing, NLP, LLMs, Human-Machine Interaction</li>
          <li>Technical Writing, Public Speaking, Conflict Resolution</li>
          <li>English (fluent), Arabic (native)</li>
        </ul>
      </Section>
    </>
  );
}
