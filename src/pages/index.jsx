import Section from '../components/Section';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center text-center mb-16">
        <img src="/placeholder-profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-4xl font-bold">Roy Gabriel, PhD Candidate</h1>
        <p className="mt-2 text-lg text-gray-600">Electrical & Computer Engineering | Machine Learning</p>
      </div>
      <Section title="About Me">
        <p>I am a second-year PhD student at Georgia Tech, advised by Dr. Ali Adibi, specializing in medical imaging AI and multimodal deep fusion. My goal is to translate cutting-edge AI research into real-world impact through my startup.</p>
      </Section>
      <Section title="Experience Highlights">
        <ul className="list-disc list-inside space-y-2">
          <li>Founder at Makademy LLC: Built ML finance education content reaching 90+ universities.</li>
          <li>Quantitative Research Intern at Dimensional Fund Advisors: Automated ETF analysis, managed 1.5TB dataset.</li>
          <li>FX Trading Intern at BNY Mellon: Generated $143K PnL in 8 weeks with Python & Excel.</li>
        </ul>
      </Section>
    </>
  );
}
