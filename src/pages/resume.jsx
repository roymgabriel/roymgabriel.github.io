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
          heading="Doctor of Philosophy, ECE (Machine Learning)"
          sub="Georgia Institute of Technology, Atlanta, GA | GPA: 4.0/4.0"
        >
          • Advised under Dr. Ali Adibi (ECE)
        </Card>
        <Card
          heading="Master of Science, Computational Science & Engineering"
          sub="Georgia Institute of Technology, Atlanta, GA | May 2026 | GPA: 4.0/4.0"
        />
        <Card
          heading="Master of Science, Industrial & Systems Engineering (Quantitative & Computational Finance)"
          sub="Georgia Institute of Technology, Atlanta, GA | Dec 2023 | GPA: 3.95/4.0"
        >
          • Key Coursework: Statistical Modeling, Computational Statistics, Option Pricing, Monte Carlo Simulation,
          Portfolio Optimization, Arbitrage Trading & Strategy, Machine Learning, Derivatives Trading, Risk Management, Data Analysis
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

      <Section title="Experience">
        <Card heading="Founder and Business Owner" sub="Makademy LLC, Chattanooga, TN | May 2021 – Present">
          • Create written, audio, and video educational content for institutions, transforming training programs
          <br />
          • Develop & deliver ML Implementation in Finance course for IvyLine Capital cohort (90+ universities, 10 countries)
          <br />
          • Innovate automated derivative trading algorithm (0.5% average weekly profit)
          <br />
          • Achieve 95% average business profit margin
        </Card>

        <Card heading="Graduate Teaching Assistant" sub="Georgia Institute of Technology, Atlanta, GA | Aug 2023 – Aug 2024">
          • Taught signal processing & random processes foundations (class size 121)
          <br />
          • Held weekly office hours and labs; graded 60+ lab reports
        </Card>

        <Card heading="Quantitative Researcher Intern" sub="Dimensional Fund Advisors, Charlotte, NC | Jun 2023 – Aug 2023">
          • Automated competitor ETF basket construction analysis (Python, SQL)
          <br />
          • Reduced memory storage by 85% on 1.5 TB dataset
          <br />
          • Analyzed quality, turnover, and cash-in-lieu markets for global ETF baskets
          <br />
          • Provided strategic recommendations for basket management with Depository Receipts
        </Card>

        <Card heading="FX Market Making & Trading Intern" sub="The Bank of New York Mellon, New York, NY | Jun 2022 – Aug 2022">
          • Priced FX spot, swaps, and options; paper-traded to $143K PnL in 8 weeks
          <br />
          • Backtested FX volatility strategies using Cho & Frees’ First Exit Time estimator
          <br />
          • Developed trading book with Bloomberg API for future interns
        </Card>

        <Card heading="Tech Consultant Intern" sub="PwC, Atlanta, GA | Jun 2021 – Aug 2021">
          • Extracted inefficient financial activity for a FED bank (Python, data wrangling; –99% code lines)
          <br />
          • Built dynamic relational database during client transition to Salesforce
          <br />
          • Co-authored 30-page Salesforce Operations Guide; debugged 130+ QA processes
          <br />
          • Presented on SCM & Salesforce SFDX to executive & engineering teams
        </Card>

        <Card heading="Software Engineering Research Intern" sub="Scinovia Corporation, Raleigh, NC | Jun 2020 – Aug 2020">
          • Analyzed lens & laser configurations to cut product costs by 35%
          <br />
          • Redesigned mechanical & 3D-printed parts, boosting efficiency by 83%
          <br />
          • Engineered machine-vision topography algorithm (Matlab, C++)
        </Card>

        <Card heading="Undergraduate Teaching Assistant" sub="Covenant College, Lookout Mountain, GA | Aug 2017 – May 2020">
          • Developed 20% of class from beginner to intermediate Arabic
          <br />
          • Raised math & physics grades from failing to B+
          <br />
          • Managed 48 Excel sheets for attendance, grades, coursework
        </Card>

        <Card heading="Sales Associate" sub="Bellhop Incorporated, Chattanooga, TN | Jul 2018 – Aug 2018">
          • Broke weekly sales record: 104 sales, 96% conversion accuracy
          <br />
          • Top salesman every week
          <br />
          • Improved conversion rate from 41% to 49%; hit rate from 54% to 96%
        </Card>
      </Section>

      <Section title="Awards & Honors">
        <ul className="list-disc list-inside space-y-2">
          <li>President’s Fellow at Georgia Tech</li>
          <li>Highest Honors at Georgia Tech</li>
          <li>Hope Scholarship at Georgia Tech</li>
          <li>Magna Cum Laude at Covenant College</li>
          <li>Maclellan Scholarship at Covenant College</li>
          <li>Dean’s List (18 semesters)</li>
          <li>Spoke at GT Industrial & Systems Engineering Annual Board Meeting</li>
        </ul>
      </Section>

      <Section title="Skills">
        <ul className="list-disc list-inside space-y-2 columns-2">
          <li>Python, R, SQL, Matlab, C/C++</li>
          <li>OPL, LaTeX, Linux, VBA, SAS</li>
          <li>Azure, Keras, TensorFlow, PyTorch, Jupyter</li>
          <li>Tableau, Microsoft SQL Server, Gurobi, Bloomberg, Jira</li>
          <li>Deep Learning, Convex Optimization, Pattern Recognition</li>
          <li>Bayesian Probability, Statistical Forecasting, Time Series Analysis</li>
          <li>Data Mining, Backtesting, Bootstrapping, Financial Econometrics</li>
          <li>Monte Carlo Simulation, Operations Research, API Accessing</li>
          <li>Communication, Public Speaking, Client Engagement</li>
          <li>English (fluent), Arabic (native), French (beginner)</li>
        </ul>
      </Section>
    </>
  );
}
