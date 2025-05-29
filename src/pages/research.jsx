import Section from '../components/Section';
import Card from '../components/Card';

export default function Research() {
  return (
    <>
      <Section title="Medical Imaging AI">
        <Card heading="Multimodal Fusion Framework" sub="First Author">
          Integrated CT imaging and clinical data to predict 10-year MACE with ROC up to XXX.
        </Card>
        {/* Add other research entries similarly */}
      </Section>
      <Section title="Integrated AI-based Discovery">
        <Card heading="Ensemble Portfolio Optimization" sub="Head of Quantitative Research">
          LSTM & Deep Q-Learning ensemble, outperforming benchmarks by 200%.
        </Card>
      </Section>
    </>
  );
}
