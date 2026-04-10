import Section from '../components/Section';
import Card from '../components/Card';

export default function Projects() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-2 text-gray-600">
          All code available on{' '}
          <a
            href="https://github.com/roymgabriel"
            target="_blank"
            rel="noopener"
            className="underline hover:text-gray-800"
          >
            GitHub
          </a>
          {' '} and {' '}
          <a
            href="https://github.gatech.edu/rmg7"
            target="_blank"
            rel="noopener"
            className="underline hover:text-gray-800"
          >
            GT GitHub
          </a>
        </p>
      </div>

      <Section title="Computational Science & Engineering">
        <Card heading="Urban Autonomous Taxi Simulation">
          <ul className="list-disc list-inside space-y-1">
            <li>Agent-based SimPy simulation with NYC Taxi and OpenStreetMap data</li>
            <li>GCNN-DDGF demand forecasting with 49.6 RMSE</li>
            <li>5% increase in trip fulfillment and 38% fewer failures</li>
          </ul>
        </Card>

        <Card heading="Pneumonia Classification Project">
          <ul className="list-disc list-inside space-y-1">
            <li>Hybrid Bayesian-CNN with ResNet50 and EfficientNet B0, F1 up to 73.3%</li>
            <li>LoRA adaptation reducing trainable parameters by over 90%</li>
            <li>Benchmarked fine-tuning, transfer learning, and uncertainty-aware modeling</li>
          </ul>
        </Card>

        <Card heading="NASA JPL MOID Regression Analysis">
          <ul className="list-disc list-inside space-y-1">
            <li>Stepwise and Lasso regression in R, adjusted R² of 0.366</li>
            <li>End-to-end preprocessing, diagnostics, and model validation on astronomical data</li>
          </ul>
        </Card>
      </Section>

      <Section title="Quantitative Finance">
        <Card heading="Thesis and Capstone: LLMs for Market Forecasting">
          <ul className="list-disc list-inside space-y-1">
            <li>BERT-based sentiment modeling of FDA announcements</li>
            <li>Temporal Fusion Transformer and graph models for return prediction</li>
            <li>Weak supervision for knowledge graph construction and event modeling</li>
          </ul>
        </Card>

        <Card heading="Crypto Statistical Arbitrage">
          <ul className="list-disc list-inside space-y-1">
            <li>PCA eigenportfolios and autoregressive modeling across 120+ cryptocurrencies</li>
            <li>Sharpe ratio of 0.54 and maximum drawdown of -3.19%</li>
            <li>Dynamic signal mapping, backtesting, and risk-controlled portfolio simulation</li>
          </ul>
        </Card>

        <Card heading="Integrated AI-Based Discovery and Innovation">
          <ul className="list-disc list-inside space-y-1">
            <li>LSTM and Deep Q-Learning ensemble portfolio optimization</li>
            <li>Outperformed equal-weighted portfolios by 200%, SPX by 100%, and QQQ by 50%</li>
            <li>Reinforcement learning for institutional portfolio rebalancing at scale</li>
          </ul>
        </Card>
      </Section>

      <Section title="Industry & Other Projects">
        <Card heading="Amazon Robotics Senior Design">
          <ul className="list-disc list-inside space-y-1">
            <li>Gradient Boosting, SARIMAX, and empirical demand models for safety stock optimization</li>
            <li>4.67% reduction in service reports and 4.05% reduction in costs</li>
            <li>Integrated predictions into a Tableau interface for decision support</li>
          </ul>
        </Card>
      </Section>
    </>
  );
}
