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
          <Badge text="Medical Imaging AI" />
          <Badge text="Cardiovascular AI" />
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
          <a
            href="mailto:roy.makkargabriel@gatech.edu"
            className="hover:underline"
          >
            Email
          </a>
        </div>
      </div>

      {/* About Me */}
      <Section title="About Me">
        <p>
          I am a PhD candidate in Electrical and Computer Engineering at Georgia Tech,
          advised by Dr. Ali Adibi. My research focuses on medical imaging AI, clinically
          grounded representation learning, multimodal fusion, and long-horizon cardiovascular
          risk prediction. I develop AI systems that learn from complex clinical and imaging data,
          with recent work spanning CT-based prediction of major adverse cardiac events, probability-level
          multimodal fusion, active learning, cross-modal prediction of coronary artery calcium from chest
          X-rays, human-in-the-loop eye-tracking systems, and emerging work in women&apos;s health and fairness
          in medical AI. Outside the lab, I mentor students, build educational programs through Makademy,
          play piano, and enjoy soccer.
        </p>
      </Section>

      {/* Research Snapshot */}
      <Section title="Research Snapshot">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card heading="CARDINAL" sub="CT Representation Learning for Cardiac Risk">
            <ul className="list-disc list-inside space-y-1">
              <li>Clinically grounded representation learning from non-contrast CT</li>
              <li>Predicts 10-year major adverse cardiac events beyond traditional biomarkers</li>
              <li>Improves long-horizon risk prediction over standard clinical and imaging baselines</li>
            </ul>
          </Card>

          <Card heading="Multimodal Cardiovascular AI" sub="Imaging + Clinical Data">
            <ul className="list-disc list-inside space-y-1">
              <li>Multimodal framework achieving AUROC up to 0.88 on rare cardiac outcomes</li>
              <li>~30% improvement over clinical and imaging baselines</li>
              <li>Probability-level fusion for robust, interpretable rare-outcome prediction</li>
            </ul>
          </Card>

          <Card heading="Data-Efficient and Cross-Modal AI" sub="Label Efficiency and Accessibility">
            <ul className="list-disc list-inside space-y-1">
              <li>Active learning reduced labeling burden by over 75%</li>
              <li>Chest X-ray to coronary artery calcium prediction up to 80% AUROC</li>
              <li>Research in women&apos;s health and fairness in medical AI</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Experience Snapshot */}
      <Section title="Experience Snapshot">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card heading="Founder & Owner" sub="Makademy LLC (May 2021 – Jan 2026)">
            <ul className="list-disc list-inside space-y-1">
              <li>Built an ML-in-Finance course for IvyLine, reaching 90+ universities and 10 countries</li>
              <li>Developed an automated derivatives trading algorithm</li>
              <li>Scaled operations with a 95% average profit margin</li>
            </ul>
          </Card>

          <Card heading="Quant Research Intern" sub="Dimensional Fund Advisors (Jun – Aug 2023)">
            <ul className="list-disc list-inside space-y-1">
              <li>Automated ETF basket analysis on a 1.5 TB dataset</li>
              <li>Reduced storage requirements by 85%</li>
              <li>Delivered portfolio and basket management recommendations</li>
            </ul>
          </Card>

          <Card heading="FX Trading Intern" sub="BNY Mellon (Jun – Aug 2022)">
            <ul className="list-disc list-inside space-y-1">
              <li>Priced FX spot, swaps, and options</li>
              <li>Backtested volatility strategies in Python</li>
              <li>Built a Bloomberg API trading book for future interns</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <a
          href="/research"
          className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-full hover:opacity-90 mr-4"
        >
          View Research
        </a>
        <a
          href="/resume"
          className="inline-block px-6 py-3 border border-black text-black font-semibold rounded-full hover:bg-black hover:text-white"
        >
          View Full Resume
        </a>
      </div>
    </>
  );
}
