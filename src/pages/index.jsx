// src/pages/index.jsx
import Image from 'next/image';
import Section from '../components/Section';
import Badge from '../components/Badge';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="flex flex-col items-center text-center mb-16 px-6">
        <div className="w-48 h-48 relative rounded-full ring-4 ring-gray-100 overflow-hidden shadow-xl">
          <Image
            src="/placeholder-profile.jpeg"
            alt="Portrait of Roy Gabriel"
            fill
            className="object-cover"
            priority
          />
        </div>


        <h1 className="mt-6 text-5xl font-extrabold">Roy Gabriel, PhD Candidate</h1>
          <p className="mt-2 text-xl text-gray-600">
            Medical Imaging AI • Multimodal Fusion • Cardiovascular Risk Prediction
          </p>


        {/* Badges */}
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Badge text="Georgia Tech" />
          <Badge text="AI & ML" />
          <Badge text="Entrepreneur" />
        </div>

        {/* Social Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-gray-700">
          <a
            href="https://github.com/roymgabriel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://github.gatech.edu/rmg7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GT GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/roy-makkar-gabriel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://scholar.google.com/citations?user=6WfmcMEAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Scholar
          </a>
          <a
            href="https://sites.gatech.edu/ece-prg/roy-makkar-gabriel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GT Profile
          </a>
          <a
            href="mailto:makademyllc@gmail.com"
            className="hover:underline"
          >
            Makademy
          </a>
          <a href="mailto:roy.makkargabriel@gatech.edu" className="hover:underline">Email</a>
        </div>
      </div>

      {/* About Me */}
      <Section title="About Me">
        <p>
          I’m a second-year PhD candidate at Georgia Tech (Advised by Dr. Ali Adibi), specializing in
          medical imaging AI and multimodal deep fusion. I founded Makademy LLC to bridge academia and
          industry through ML education and algorithmic trading. Outside the lab, I mentor students,
          host workshops, play piano, and enjoy soccer.
        </p>
      </Section>

      {/* Experience Snapshot */}
      <Section title="Experience Snapshot">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card heading="Founder & Owner" sub="Makademy LLC (May 2021 – Present)">
            • Built an ML-in-Finance course for IvyLine (90+ universities, 10 countries)
            <br />• Automated derivative trading algorithm (0.5% avg weekly profit)
            <br />• Sustained a 95% profit margin
          </Card>
          <Card heading="Quant Research Intern" sub="Dimensional Fund Advisors (Jun – Aug 2023)">
            • Automated ETF basket analysis on 1.5 TB data
            <br />• Reduced storage by 85%
            <br />• Delivered ETF management recommendations
          </Card>
          <Card heading="FX Trading Intern" sub="BNY Mellon (Jun – Aug 2022)">
            • Priced FX spot, swaps, & options → $143K PnL
            <br />• Backtested volatility strategies (Cho & Frees)
            <br />• Built a Bloomberg-API trading book
          </Card>
        </div>
      </Section>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <a
          href="/resume"
          className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-full hover:opacity-90"
        >
          View Full Resume
        </a>
      </div>
    </>
  );
}
