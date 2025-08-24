import Section from '../components/Section';
import Card from '../components/Card';

export default function Projects() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-2 text-gray-600">
          All code available on{' '}
          <a href="https://github.com/roymgabriel" target="_blank" rel="noopener" className="underline hover:text-gray-800">
            GitHub
          </a>
          {' '} and {' '}
          <a href="https://github.com/rmg7" target="_blank" rel="noopener" className="underline hover:text-gray-800">
            GT GitHub
          </a>
        </p>
      </div>

      <Section title="Computational Science & Engineering">
        <Card heading="Urban Autonomous Taxi Simulation">
          <ul className="list-disc list-inside space-y-1">
            <li>Agent-based SimPy simulation with NYC Taxi &amp; OpenStreetMap data</li>
            <li>GCNN-DDGF demand forecasting, 49.6 RMSE</li>
            <li>5% increase in trip fulfillment, 38% fewer failures</li>
          </ul>
        </Card>

        <Card heading="Pneumonia Classification Project">
          <ul className="list-disc list-inside space-y-1">
            <li>Hybrid Bayesian-CNN with ResNet50 &amp; EfficientNet B0 (F1 up to 73.3%)</li>
            <li>LoRA adaptation reducing parameters by 90%</li>
          </ul>
        </Card>
      </Section>

      <Section title="Quantitative Finance">
        <Card heading="Thesis: LLMs & Portfolio Forecasting">
          <ul className="list-disc list-inside space-y-1">
            <li>BERT-based sentiment analysis of FDA announcements</li>
            <li>Temporal Fusion Transformer &amp; GCN for price prediction</li>
          </ul>
        </Card>

        <Card heading="Crypto Statistical Arbitrage">
          <ul className="list-disc list-inside space-y-1">
            <li>PCA eigenportfolios, AR modeling, Sharpe 0.54</li>
            <li>Dynamic signal mapping &amp; backtesting routines</li>
          </ul>
        </Card>
      </Section>

      <Section title="Industry & Other Projects">
        <Card heading="NASA JPL MOID Regression Analysis">
          <ul className="list-disc list-inside space-y-1">
            <li>R stepwise &amp; Lasso regression (adj. R²=0.366)</li>
            <li>Q-Q plots, residual diagnostics, cross-validated lambda tuning</li>
          </ul>
        </Card>

        <Card heading="Amazon Robotics Senior Design">
          <ul className="list-disc list-inside space-y-1">
            <li>Gradient Boosting &amp; SARIMAX for stock optimization</li>
            <li>Tableau integration &amp; 4.05% cost reduction</li>
          </ul>
        </Card>
      </Section>
    </>
  );
}
