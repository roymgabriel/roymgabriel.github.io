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
          • Agent-based SimPy simulation with NYC Taxi & OpenStreetMap data<br />
          • GCNN-DDGF demand forecasting, 49.6 RMSE<br />
          • 5% increase in trip fulfillment, 38% fewer failures
        </Card>
        <Card heading="Pneumonia Classification Project">
          • Hybrid Bayesian-CNN with ResNet50 & EfficientNet B0 (F1 up to 73.3%)<br />
          • LoRA adaptation reducing parameters by 90%
        </Card>
      </Section>

      <Section title="Quantitative Finance">
        <Card heading="Thesis: LLMs & Portfolio Forecasting">
          • BERT-based sentiment analysis of FDA announcements<br />
          • Temporal Fusion Transformer & GCN for price prediction
        </Card>
        <Card heading="Crypto Statistical Arbitrage">
          • PCA eigenportfolios, AR modeling, Sharpe 0.54<br />
          • Dynamic signal mapping & backtesting routines
        </Card>
      </Section>

      <Section title="Industry & Other Projects">
        <Card heading="NASA JPL MOID Regression Analysis">
          • R stepwise & Lasso regression (adj. R²=0.366)<br />
          • Q-Q plots, residual diagnostics, cross-validated lambda tuning
        </Card>
        <Card heading="Amazon Robotics Senior Design">
          • Gradient Boosting & SARIMAX for stock optimization<br />
          • Tableau integration & 4.05% cost reduction
        </Card>
      </Section>
    </>
  );
}
