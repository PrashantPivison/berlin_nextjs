// Content extracted verbatim from the live site (cheerio parse of the live HTML).
// Card/photo images reference the original hosted URLs (next.config remotePatterns
// whitelists www.berlinoffice-usa.com); decorative pattern SVGs are local.

export type KeyCard = {
  title: string;
  href: string;
  image: string;
  bg: string;
};
export type KeySection = { heading: string; cards: KeyCard[] };

export const keyIndustries: { sections: KeySection[] } = {
  sections: [
    {
      heading:
        "From AI to biotech to fashion, Berlin is ahead of the game. Germany’s capital is home to globally competitive industry clusters in healthcare, mobility, photonics, energy, ICT, and creative economy / new media.",
      cards: [
        {
          title: "Energy Technology",
          href: "https://www.businesslocationcenter.de/en/energytechnologies",
          image:
            "https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/02_Energy-Technology-Header-XXL-Cropped-Square-iStock-scaled.jpg",
          bg: "bg-orange",
        },
        {
          title: "Healthcare",
          href: "https://www.businesslocationcenter.de/en/healthcareindustries",
          image:
            "https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/03_Healthcare-Cropped-Square-BPWT.jpg",
          bg: "bg-blue-1",
        },
        {
          title: "ICT, Media & Creative Industries",
          href: "https://www.businesslocationcenter.de/en/ict",
          image:
            "https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/04_ICT-Media-Creative-Industries-XXL-Cropped-Square-iStock-scaled.jpg",
          bg: "bg-green-1",
        },
        {
          title: "Photonics",
          href: "https://www.businesslocationcenter.de/en/photonics",
          image:
            "https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/05_Photonics-Cropped-Square-webdesign-scaled.jpg",
          bg: "bg-blue-2",
        },
        {
          title: "Transport, Mobility & Aerospace",
          href: "https://www.businesslocationcenter.de/en/mobility",
          image:
            "https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/06_Transport-Mobility-Aerospace-Cropped-Square-Unsplash.jpg",
          bg: "bg-pink",
        },
      ],
    },
    {
      heading:
        "Berlin’s economy is complemented by the city’s extensive manufacturing and service sectors.",
      cards: [
        {
          title: "Manufacturing Industries",
          href: "https://www.businesslocationcenter.de/en/industry",
          image:
            "https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/07_Manufacturing-Industries-Cropped-Square-webdesign-scaled.jpg",
          bg: "bg-pink",
        },
        {
          title: "Service Industries",
          href: "https://www.businesslocationcenter.de/en/service-industries",
          image:
            "https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/08_Service-Industries-Cropped-Square-webdesign-scaled.jpg",
          bg: "bg-violet",
        },
      ],
    },
  ],
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bg: string;
  links: { type: string; href: string }[];
};

export const meetUs: { team: TeamMember[] } = {
  team: [
    {
      name: "Franziska Ehrhardt",
      role: "Managing Director",
      image:
        "https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/02_FE-Profile-Pic-scaled.jpg",
      bg: "bg-blue-1",
      links: [
        { type: "LinkedIn", href: "https://www.linkedin.com/in/franziska-ehrhardt-b7b368ba/" },
        { type: "E-Mail", href: "mailto:franziska.ehrhardt@berlinoffice-usa.com" },
      ],
    },
    {
      name: "Laurent Le Borgne",
      role: "Junior U.S. Market Manager",
      image:
        "https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/03_LLB-Profile-Pic-scaled.jpg",
      bg: "bg-green-1",
      links: [
        { type: "LinkedIn", href: "https://www.linkedin.com/in/laurent-le-borgne/" },
        { type: "E-Mail", href: "mailto:laurent.leborgne@berlinoffice-usa.com" },
      ],
    },
  ],
};

export type NewsItem = {
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  bg: string;
};
export type Newsletter = { label: string; href: string };
export type EventItem = {
  month: string;
  day: string;
  dateLine: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
  bg: string;
};

export const news: NewsItem[] = [
  { date: "06/23/2026", title: "Grocery Service Flink Secures New Growth Capital", excerpt: "The Berlin-based grocery delivery provider Flink raised $100M in new growth capital, which will help them push targeted expansion across Germany. A focus on unit economics, cost control, and top-up shopping has been key for this success, according to CEO Julian Dames.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/Digital-News-iStock.jpg", href: "https://invest-in.berlin/n/berlins-flink-hits-profitability-secures-100m/", bg: "bg-blue-1" },
  { date: "06/18/2026", title: "Remi Health Secures ~$3.5M for Diagnostics Platform", excerpt: "The new capital of the Berlin-based company will go towards expansion of its Diagnostics-as-a-Service platform that helps address Europe’s fragmented diagnostics industry.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/Medical-AI-iStock.jpg", href: "https://www.ibbventures.de/en/news/start-up-remi-health-raises-5m", bg: "" },
  { date: "06/16/2026", title: "Berlin Strategically Invests in DefenseTech", excerpt: "The Technology Hub for Security and Defense Industries East (TechHub SVI East) was officially launched. Next steps include positioning Berlin and eastern Germany as strategic partners for the Bundeswehr, the EU, and NATO allies.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/Digital-Technology-FinTech-iStock.jpg", href: "https://www.berlin-partner.de/en/news/detail/stark-verteidigt", bg: "bg-blue-1" },
  { date: "06/09/2026", title: "Andercore Raises $40M for Global Wholesale AI", excerpt: "With global wholesale still relying heavily on manual processes, Berlin-based Andercore is bringing a proprietary AI to industrial trade. “Our system brings prediction, discipline, and speed to supply chains,” elaborates Founder and CEO Philipp Andernach.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/AI-Chip-Monochrome-Unsplash-scaled.jpg", href: "https://invest-in.berlin/n/berlins-andercore-raises-40m-for-ai-trade-platform/", bg: "" },
  { date: "06/04/2026", title: "New Immunity Test from Max Delbrück Center", excerpt: "An estimated 70% of immune deficiencies go undiagnosed because current testing methods are simply not enough. Researchers at Berlin’s Max Delbrück Center have developed a new blood test that shows high accuracy.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/DNA-Strand-Unsplash-scaled.jpg", href: "https://www.mdc-berlin.de/news/news/blood-test-detect-immune-deficiency", bg: "bg-blue-1" },
  { date: "05/28/2026", title: "Winners of the 2026 Deep Tech Awards Announced", excerpt: "Five Berlin startups were honored for their outstanding solutions, including AI-powered fact-checking to combat disinformation, novel cell therapies for muscle tissue regeneration, sustainable 3D printing, and decentralized satellite communications.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/AI-Humanoid-Canva-AI-scaled.jpg", href: "https://braincity.berlin/en/stories/story/deep-tech-awards-2026-die-preistraegerinnen-stehen-fest", bg: "" },
  { date: "05/26/2026", title: "Berlin FinTech Duna Raises ~$35M Series A", excerpt: "Business identity verification has become a significant challenge in the age of the internet. Berlin-based Duna’s AI-native platform provides a “digital passport” for businesses, helping financial institutions to more quickly verify who they are doing business with.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/01/steve-johnson-WhAQMsdRKMI-unsplash-scaled.jpg", href: "https://invest-in.berlin/n/berlin-fintech-duna-secures-eur30m-series-a-round/", bg: "bg-blue-1" },
  { date: "05/19/2026", title: "Berlin’s Recare Pulls in ~$43.3M in Funding", excerpt: "As paperwork consumes an ever-increasing amount of time for medical staff, Berlin-based Recare provides a solution that helps coordinate medical administration. The new capital will fuel the rollout of a new AI agent and support international expansion.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/AI-Digital-Avatar-iStock.jpg", href: "https://recareai.com/pressemitteilung/recare-sichert-sich-37-mio-euro", bg: "" },
  { date: "05/14/2026", title: "Berlin-based Researchers Achieve Battery Tech Breakthrough", excerpt: "A team of researchers at the Federal Institute for Materials Research and Testing in Berlin have succeeded in creating a new anode design for sodium-ion batteries, dramatically improving their capacity.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/01/Gemini_Generated_Image_lx4g5ulx4g5ulx4g-scaled.png", href: "https://invest-in.berlin/n/berlin-scientists-boost-green-battery-tech-performance/", bg: "bg-blue-1" },
  { date: "05/12/2026", title: "NENNA.AI Secures Over ~$1.15M for AI Cybersecurity", excerpt: "As artificial intelligence becomes more commonly used by businesses, concerns are emerging regarding data protection. With NENNA.AI’s new cybersecurity solution, businesses can automatically mask sensitive information when entering it into AI models.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/01/steve-johnson-WhAQMsdRKMI-unsplash-scaled.jpg", href: "https://invest-in.berlin/n/nennaai-secures-funding-to-protect-corporate-ai-data/", bg: "" },
  { date: "05/07/2026", title: "Berlin’s Cloover Pushing for Clean Tech Financing", excerpt: "In one of the largest European climate tech financings, Berlin based Cloover has secured ~$1.2B to scale its AI-based renewable energy platform, which is already in use with hundreds of installers across Europe.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/Eco-Battery-iStock.jpg", href: "https://invest-in.berlin/n/berlins-cloover-secures-12-billion-for-energy-platform/", bg: "bg-blue-1" },
  { date: "05/05/2026", title: "Berlin Appoints New “Health Innovation Quarter Berlin-Mitte”", excerpt: "Initiated by Bayer and Charité, this new district in Berlin-Mitte will focus on healthcare innovations. It will offer companies and spin-offs from all over the world ideal conditions to be able to quickly develop, test, and translate their ideas into marketable therapies.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/Medical-AI-iStock.jpg", href: "https://zukunftsorte.berlin/presse/berlin-ernennt-bayer-und-charite-zum-neuen-zukunftsort/", bg: "" },
  { date: "04/30/2026", title: "Google Expands its Footprint in Berlin", excerpt: "Berlin has received an additional boost to its status as a top innovation center with the opening of the Google AI Center Berlin. The new center will strengthen Google’s decade-long legacy of AI innovation in Berlin with a dedicated research floor, a demo area, and event spaces.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/Digital-Technology-FinTech-iStock.jpg", href: "https://invest-in.berlin/n/google-ai-center-berlin-a-new-hub-for-innovation/", bg: "bg-blue-1" },
  { date: "04/28/2026", title: "Foresight Institute Chooses Berlin for AI Safety Hub", excerpt: "The California-based Foresight Institute opened its AI for Science & Safety Node in Berlin on April 1st. The hub will offer project funding, office and community space, and local computing power for AI researchers.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/AI-Chip-Colorful-iStock.jpg", href: "https://foresight.org/grants/grants-ai-for-science-safety/", bg: "" },
  { date: "04/23/2026", title: "GeneralMind Building AI for Supply Chain Processes", excerpt: "Enterprise resource planning (ERP) systems often struggle to fully address a company’s needs, resulting in bottlenecks and delays. Berlin-based GeneralMind is working to change that with their AI supply chain autopilot.", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2025/09/AI-Humanoid-Canva-AI-scaled.jpg", href: "https://invest-in.berlin/n/berlins-generalmind-raises-12m-for-ai-autopilot/", bg: "bg-blue-1" },
];

export const newsletters: Newsletter[] = [
  { label: "NEWS FROM BERLIN – 2026, Q2", href: "https://events.berlinoffice-usa.com/news-from-berlin-business-office-usa-q1-2027" },
  { label: "NEWS FROM BERLIN – 2026, Q1", href: "https://events.berlinoffice-usa.com/news-from-berlin-business-office-usa-q1-2026" },
  { label: "NEWS FROM BERLIN – 2025, Q4", href: "https://events.berlinoffice-usa.com/news-from-berlin-business-office-usa-q4-2027" },
  { label: "NEWS FROM BERLIN – 2025, Q3", href: "https://events.berlinoffice-usa.com/news-from-berlin-business-office-usa-q3-2028" },
  { label: "NEWS FROM BERLIN – 2025, Q2", href: "https://events.berlinoffice-usa.com/news-from-berlin-business-office-usa-q2-2025" },
  { label: "NEWS FROM BERLIN – 2025, Q1", href: "https://events.berlinoffice-usa.com/news-from-berlin-business-office-usa-q1-2025" },
  { label: "NEWS FROM BERLIN – 2024, Q4", href: "https://events.berlinoffice-usa.com/news-from-berlin-business-office-usa-q3-2027" },
  { label: "NEWS FROM BERLIN – 2024, Q3", href: "https://events.berlinoffice-usa.com/news-from-berlin-business-office-usa-q3-2024-517091245" },
  { label: "NEWS FROM BERLIN – 2024, Q2", href: "https://events.berlinoffice-usa.com/news-from-berlin-business-office-usa-q2-2024-276584" },
  { label: "NEWS FROM BERLIN – 2024, Q1", href: "https://events.berlinoffice-usa.com/news-from-berlin-business-office-usa-q1-2024" },
];

export const events: EventItem[] = [
  { month: "Jun", day: "30", dateLine: "06/30/2026 - 07/01/2026, Berlin, Germany", title: "GITEX Europe", excerpt: "Europe stands at the forefront of a digital transformation, and GITEX Europe is the platform where this revolution accelerates. As the largest enterprise tech and digital ecosystem in Europe, GITEX Europe connects visionaries, innovators, and leaders to explore opportunities, drive partnerships, and build a future-ready digital ecosystem. With backing from the European Commission and participation from national […]", href: "https://www.berlinoffice-usa.com/event/gitex-europe/", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/01/GITEX-Europe-Website-Picture.png", bg: "bg-green-1" },
  { month: "Sep", day: "04", dateLine: "09/04/2026 - 09/08/2026, Berlin, Germany", title: "IFA 2026", excerpt: "Showcasing the latest in consumer electronics, home appliances and technology, IFA creates a space where global innovators, thought leaders, professionals and consumers alike come together to shape the future of technology. With a variety of different exhibitors, attendees have the chance to experience a wide range of hands-on innovations that are reshaping the way we […]", href: "https://www.berlinoffice-usa.com/event/ifa-2026/", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/01/IFA-2026-Website-Picture.png", bg: "" },
  { month: "Sep", day: "22", dateLine: "09/22/2026 - 09/25/2026, Berlin, Germany", title: "InnoTrans 2026", excerpt: "Organized by Messe Berlin, InnoTrans is sub-divided into five distinct segments: Railway Technology, Railway Infrastructure, Public Transport, Interiors, and Tunnel Construction. The event is so large that it occupies all 42 halls at Berlin Exhibition Grounds. InnoTrans also offers vehicle manufacturers the possibility to demonstrate buses on a static Bus Display area and the adjacent […]", href: "https://www.berlinoffice-usa.com/event/innotrans-2026/", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/01/InnoTrans-2026-Website-Picture.png", bg: "bg-green-1" },
  { month: "Sep", day: "22", dateLine: "09/22/2026 - 09/23/2026, Berlin, Germany", title: "AI & Data Summit", excerpt: "The AI & Data Summit is Europe’s leading conference on the application of artificial intelligence and data in business. The event will showcase best practices and real-world examples, enabling businesses to progress beyond the initial stages of AI and data implementation. More information here.", href: "https://www.berlinoffice-usa.com/event/ai-data-summit/", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/01/AI-Data-Summit-Website-Picture.jpg", bg: "" },
  { month: "Oct", day: "07", dateLine: "10/07/2026 - 10/09/2026, Berlin, Germany", title: "flutterCon / droidCon", excerpt: "flutterCon and droidCon are two sub-events taking place as part of the larger “next.app devCon” conference happening this October at Berlin’s famous City Cube location. With a combined 2,400 developers, 205 sessions & workshops, and 190 speakers & panelists, flutterCon and droidCon are a fantastic opportunity for Android and Flutter innovators. Look forward to one-of-a-find […]", href: "https://www.berlinoffice-usa.com/event/fluttercon-droidcon/", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/04/nextcon-devapp.png", bg: "bg-green-1" },
  { month: "Oct", day: "11", dateLine: "10/11/2026 - 10/13/2026, Berlin, Germany", title: "The World Health Summit", excerpt: "The annual World Health Summit brings together global health stakeholders from all sectors and regions to find solutions for the most pressing health challenges. Across three conference days, the World Health Summit will spark exchange, generate insights, and catalyze science-based and interdisciplinary solutions. More information here.", href: "https://www.berlinoffice-usa.com/event/the-world-health-summit/", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/04/World-Health-Summit-White-Background.png", bg: "" },
  { month: "Oct", day: "13", dateLine: "10/13/2026 - 10/15/2026, Berlin, Germany", title: "Smart Country Convention", excerpt: "The Smart Country Convention puts the key topics for modern administrations, smart cities, and regions in the spotlight. Discover innovative solutions, proven projects, and forward-thinking approaches from politics, business, research, and society. The event will consist of three days of hands-on insights with engaging keynotes, inspiring panels, and proven best practices. More information here.", href: "https://www.berlinoffice-usa.com/event/smart-country-convention/", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/04/Smart-Country-Convention-White-Background.png", bg: "bg-green-1" },
  { month: "Oct", day: "20", dateLine: "10/20/2026 - 10/21/2026, Berlin, Germany", title: "Frontiers Health", excerpt: "Frontiers Health brings together global leaders, innovators, and changemakers shaping the future of health. Over the years the event has enriched its offerings with highly curated and innovative content, large ecosystem participation, and international standing. The 2026 program is structured over two days, featuring inspiring plenary talks, engaging discussions, and interactive sessions, all in the […]", href: "https://www.berlinoffice-usa.com/event/frontiers-health/", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/04/Frontiers-Health.jpg", bg: "" },
  { month: "Nov", day: "06", dateLine: "11/06/2026 - 11/09/2026, Berlin, Germany", title: "Falling Walls Science Summit", excerpt: "Since 2009, the Falling Walls Science Summit has united the world’s greatest minds to break down barriers in science and innovation. The event brings together global science leaders, business pioneers, and public sector visionaries to share knowledge, foster collaboration, and shape the future of the international innovation system – creating meaningful impact for humanity. More […]", href: "https://www.berlinoffice-usa.com/event/falling-walls-science-summit/", image: "https://www.berlinoffice-usa.com/wp-content/uploads/2026/04/Falling-Walls-Science-Summit.png", bg: "bg-green-1" },
];
