import Section from '../components/Section';
import Card from '../components/Card';

export default function Resume() {
  return (
    <>
      <Section title="Education">
        <Card heading="Ph.D. in ECE, Machine Learning" sub="Georgia Institute of Technology, 4.0/4.0">
          Advised under Dr. Ali Adibi.
        </Card>
        {/* Add other degrees similarly */}
      </Section>
      <Section title="Experience">
        <Card heading="Founder & Business Owner" sub="Makademy LLC, May 2021 – Present">
          • Create written, audio, and video educational content…
        </Card>
        {/* Add other roles similarly */}
      </Section>
      {/* Additional sections: Projects, Skills, Leadership */}
    </>
  );
}
