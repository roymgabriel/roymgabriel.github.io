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
          sub="Georgia Institute of Technology, Atlanta, GA | May 2026 | GPA: 4.0/4.0"
        />

        <Card
          heading="Master of Science, Industrial & Systems Engineering (Quantitative & Computational Finance)"
          sub="Georgia Institute of Technology, Atlanta, GA | Dec 2023 | GPA: 3.95/4.0"
        >
          <ul className="list-disc list-inside space-y-1">
            <li>Statistical Modeling</li>
            <li>Computational Statistics</li>
            <li>Option Pricing</li>
            <li>Monte Carlo Simulation</li>
            <li>Portfolio Optimization</li>
            <li>Arbitrage Trading &amp; Strategy</li>
            <li>Machine Learning</li>
            <li>Derivatives Trading</li>
            <li>Risk Management</li>
            <li>Data Analysis</li>
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

      <Section title="Experience">
        <Card heading="Founder and Business Owner" sub="Makademy LLC, Chattanooga, TN | May 2021 – Present">
          <ul className="list-disc list-inside space-y-1">
            <li>Create written, audio, and video educational content for institutions, transforming training programs</li>
            <li>Develop &amp; deliver ML Implementation in Finance course for IvyLine Capital cohort (90+ universities, 10 countries)</li>
            <li>Innovate automated derivative trading algorithm (0.5% average weekly profit)</li>
            <li>Achieve 95% average business profit margin</li>
          </ul>
        </Card>

        <Card heading="Graduate Teaching Assistant" sub="Georgia Institute of Technology, Atlanta, GA | Aug 2023 – Aug 2024">
          <ul className="list-disc list-inside space-y-1">
            <li>Taught signal processing &amp; random processes foundations (class size 121)</li>
            <li>Held weekly office hours and labs; graded 60+ lab reports</li>
          </ul>
        </Card>

        <Card heading="Quantitative Researcher Intern" sub="Dimensional Fund Advisors, Charlotte, NC | Jun 2023 – Aug 2023">
          <ul className="list-disc list-inside space-y-1">
            <li>Automated competitor ETF basket construction analysis (Python, SQL)</li>
            <li>Reduced memory storage by 85% on 1.5 TB dataset</li>
            <li>Analyzed quality, turnover, and cash-in-lieu markets for global ETF baskets</li>
            <li>Provided strategic recommendations for basket management with Depository Receipts</li>
          </ul>
        </Card>

        <Card heading="FX Market Making & Trading Intern" sub="The Bank of New York Mellon, New York, NY | Jun 2022 – Aug 2022">
          <ul className="list-disc list-inside space-y-1">
            <li>Priced FX spot, swaps, and options; paper-traded to $143K PnL in 8 weeks</li>
            <li>Backtested FX volatility strategies using Cho &amp; Frees' First Exit Time estimator</li>
            <li>Developed trading book with Bloomberg API for future interns</li>
          </ul>
        </Card>

        <Card heading="Tech Consultant Intern" sub="PwC, Atlanta, GA | Jun 2021 – Aug 2021">
          <ul className="list-disc list-inside space-y-1">
            <li>Extracted inefficient financial activity for a FED bank (Python, data wrangling; –99% code lines)</li>
            <li>Built dynamic relational database during client transition to Salesforce</li>
            <li>Co-authored 30-page Salesforce Operations Guide; debugged 130+ QA processes</li>
            <li>Presented on SCM &amp; Salesforce SFDX to executive &amp; engineering teams</li>
          </ul>
        </Card>

        <Card heading="Software Engineering Research Intern" sub="Scinovia Corporation, Raleigh, NC | Jun 2020 – Aug 2020">
          <ul className="list-disc list-inside space-y-1">
            <li>Analyzed lens &amp; laser configurations to cut product costs by 35%</li>
            <li>Redesigned mechanical &amp; 3D-printed parts, boosting efficiency by 83%</li>
            <li>Engineered machine-vision topography algorithm (Matlab, C++)</li>
          </ul>
        </Card>

        <Card heading="Undergraduate Teaching Assistant" sub="Covenant College, Lookout Mountain, GA | Aug 2017 – May 2020">
          <ul className="list-disc list-inside space-y-1">
            <li>Developed 20% of class from beginner to intermediate Arabic</li>
            <li>Raised math &amp; physics grades from failing to B+</li>
            <li>Managed 48 Excel sheets for attendance, grades, coursework</li>
          </ul>
        </Card>

        <Card heading="Sales Associate" sub="Bellhop Incorporated, Chattanooga, TN | Jul 2018 – Aug 2018">
          <ul className="list-disc list-inside space-y-1">
            <li>Broke weekly sales record: 104 sales, 96% conversion accuracy</li>
            <li>Top salesman every week</li>
            <li>Improved conversion rate from 41% to 49%; hit rate from 54% to 96%</li>
          </ul>
        </Card>
      </Section>

      <Section title="Awards & Honors">
        <ul className="list-disc list-inside space-y-2">
          <li>President's Fellow, Georgia Tech</li>
          <li>VIP Outstanding Mentor Award</li>
          <li>Highest Honors, Georgia Tech (GPA 3.95)</li>
          <li>Hope Scholarship, Georgia Tech</li>
          <li>Magna Cum Laude, Covenant College</li>
          <li>Maclellan Scholarship (full-tuition merit/leadership)</li>
          <li>Selected to present startup (Makademy) at GT ISyE Annual Board Meeting</li>
          <li>Dean's List (18 semesters)</li>
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
          <li>English (fluent), Arabic (native)</li>
        </ul>
      </Section>
    </>
  );
}
