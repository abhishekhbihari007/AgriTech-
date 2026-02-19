export interface Article {
  id: string;
  title: string;
  authors: string[];
  affiliation: string;
  abstract: string;
  keywords: string[];
  category: string;
  /** e.g. "1-18" */
  pages?: string;
  /** e.g. "10.1234/agridoctor.2026.1.1" */
  doi?: string;
  /** Publication date for citation */
  publishedDate?: string;
}

export interface Issue {
  volume: number;
  issue: number;
  month: string;
  year: number;
  theme: string;
  /** Short line for magazine cover / "About this issue" */
  tagline?: string;
  articles: Article[];
  coverImage?: string;
}

export const currentIssue: Issue = {
  volume: 1,
  issue: 1,
  month: "January",
  year: 2026,
  theme: "Innovations in Sustainable Agriculture",
  tagline: "Research, technology, and farming for a sustainable tomorrow",
  articles: [
    {
      id: "1",
      title: "Climate-Smart Irrigation Strategies for Semi-Arid Regions: A Comprehensive Review",
      authors: ["Dr. Priya Sharma", "Dr. Rajesh Kumar"],
      affiliation: "Indian Agricultural Research Institute, New Delhi",
      abstract: "This comprehensive review examines the latest developments in climate-smart irrigation technologies specifically designed for semi-arid agricultural regions. We analyze various water-saving techniques including deficit irrigation, precision drip systems, and sensor-based automated irrigation. Our findings indicate that implementing these strategies can reduce water consumption by 30-45% while maintaining crop yields. The study also addresses the socio-economic factors affecting adoption rates among smallholder farmers.",
      keywords: ["Climate-smart agriculture", "Irrigation efficiency", "Water conservation", "Semi-arid farming"],
      category: "Agronomy",
      pages: "1-18",
      doi: "10.1234/agridoctor.2026.1.1",
      publishedDate: "January 2026",
    },
    {
      id: "2",
      title: "Soil Microbiome Dynamics Under Organic vs. Conventional Farming Systems",
      authors: ["Dr. Maria Santos", "Prof. James Wilson", "Dr. Lin Chen"],
      affiliation: "University of Agricultural Sciences, Bangalore",
      abstract: "This study investigates the differential impacts of organic and conventional farming practices on soil microbiome composition and functionality. Through metagenomic analysis of 120 soil samples collected over three growing seasons, we demonstrate significant differences in microbial diversity, nutrient cycling capacity, and disease suppression potential. Organic systems showed 40% higher microbial diversity and enhanced beneficial bacterial populations. These findings have important implications for sustainable soil management practices.",
      keywords: ["Soil microbiome", "Organic farming", "Microbial diversity", "Sustainable agriculture"],
      category: "Soil Science",
      pages: "19-35",
      doi: "10.1234/agridoctor.2026.1.2",
      publishedDate: "January 2026",
    },
    {
      id: "3",
      title: "Drone-Based Precision Agriculture: Applications in Pest Detection and Crop Monitoring",
      authors: ["Dr. Ahmed Hassan", "Dr. Sarah Mitchell"],
      affiliation: "Agricultural Technology Institute, Cairo",
      abstract: "Unmanned aerial vehicles (UAVs) equipped with multispectral imaging sensors represent a transformative technology for modern agriculture. This research presents a novel framework for real-time pest detection and crop health monitoring using machine learning algorithms applied to drone-captured imagery. Our system achieved 94% accuracy in early pest detection, enabling timely intervention and reducing pesticide use by 25%. We discuss implementation considerations for various farm scales and crop types.",
      keywords: ["Precision agriculture", "UAV technology", "Pest detection", "Machine learning"],
      category: "Agricultural Technology",
      pages: "36-52",
      doi: "10.1234/agridoctor.2026.1.3",
      publishedDate: "January 2026",
    },
    {
      id: "4",
      title: "Biofortification of Staple Crops: Addressing Micronutrient Deficiencies in Developing Nations",
      authors: ["Prof. Elizabeth Okonkwo", "Dr. David Mensah"],
      affiliation: "West African Centre for Crop Improvement, Ghana",
      abstract: "Micronutrient deficiencies affect over two billion people globally, with the highest prevalence in developing countries. This paper reviews recent advances in biofortification strategies for staple crops including rice, wheat, and cassava. We examine both conventional breeding approaches and genetic modification techniques for enhancing iron, zinc, and vitamin A content. Case studies from successful implementation programs in Sub-Saharan Africa demonstrate the potential for significant public health impact.",
      keywords: ["Biofortification", "Food security", "Micronutrients", "Crop improvement"],
      category: "Crop Sciences",
      pages: "53-71",
      doi: "10.1234/agridoctor.2026.1.4",
      publishedDate: "January 2026",
    },
    {
      id: "5",
      title: "Vertical Farming Economics: A Comparative Analysis of Urban Agricultural Models",
      authors: ["Dr. Kenji Tanaka", "Dr. Emma Larsson"],
      affiliation: "Tokyo Institute of Agricultural Innovation",
      abstract: "As urban populations grow, vertical farming emerges as a promising solution for local food production. This study presents a comprehensive economic analysis comparing different vertical farming models across five major cities. We evaluate capital costs, operational expenses, energy consumption, and yield metrics for leafy greens, herbs, and strawberries. Our findings identify optimal configurations for different urban contexts and provide a decision framework for prospective vertical farm operators.",
      keywords: ["Vertical farming", "Urban agriculture", "Economic analysis", "Food systems"],
      category: "Horticulture",
      pages: "72-89",
      doi: "10.1234/agridoctor.2026.1.5",
      publishedDate: "January 2026",
    },
    {
      id: "6",
      title: "Impact of Cover Crops on Soil Carbon Sequestration in Temperate Systems",
      authors: ["Dr. Anna Bergström", "Prof. Michael O'Brien"],
      affiliation: "European Centre for Agroecology, Netherlands",
      abstract: "Cover cropping is increasingly recognized as a key practice for building soil organic matter and mitigating climate change. This multi-site study across 45 farms in temperate Europe quantifies soil carbon stock changes under diverse cover crop mixtures over five years. Results show an average increase of 0.35 Mg C ha⁻¹ year⁻¹ in the top 30 cm, with legume–grass mixtures outperforming monocultures. We discuss implications for policy and farmer adoption.",
      keywords: ["Cover crops", "Carbon sequestration", "Soil health", "Climate mitigation"],
      category: "Agronomy",
      pages: "90-104",
      doi: "10.1234/agridoctor.2026.1.6",
      publishedDate: "January 2026",
    },
    {
      id: "7",
      title: "Farmer Perspectives on Digital Advisory Services: A Survey from South Asia",
      authors: ["Dr. Suresh Patel", "Dr. Fatima Rahman"],
      affiliation: "International Rice Research Institute, Philippines",
      abstract: "Digital advisory tools have potential to improve smallholder decision-making, but adoption remains uneven. We present survey results from 1,200 farmers in India, Bangladesh, and Nepal on awareness, use, and barriers related to mobile-based agronomic advice. Key findings include the importance of local language support, offline capability, and trust in the source. Recommendations for design and scaling are provided.",
      keywords: ["Digital extension", "Advisory services", "Smallholders", "South Asia"],
      category: "Agricultural Technology",
      pages: "105-118",
      doi: "10.1234/agridoctor.2026.1.7",
      publishedDate: "January 2026",
    },
  ],
};

/** Sample articles for archive issues – theme-matched so each issue has visible content */
const sampleArticlesByTheme: Record<string, Article[]> = {
  "Digital Transformation in Agriculture": [
    { id: "a1", title: "Blockchain for Traceability in Agri-Supply Chains", authors: ["Dr. Lisa Wong", "Dr. Carlos Mendez"], affiliation: "Digital Agriculture Lab, Singapore", abstract: "We evaluate blockchain-based traceability pilots in three commodity supply chains. Benefits include reduced transaction costs and improved buyer trust; challenges include smallholder onboarding and interoperability.", keywords: ["Blockchain", "Traceability", "Supply chain", "Digital"], category: "Agri-Business & Economics", pages: "1-14" },
    { id: "a2", title: "Mobile Apps for Pest and Disease Diagnosis: User Experience Study", authors: ["Dr. James Okello"], affiliation: "Nairobi University", abstract: "A study of 400 farmers using a mobile app for crop disease diagnosis. Accuracy and ease of use were rated highly; connectivity and literacy were main barriers to sustained use.", keywords: ["Mobile apps", "Pest diagnosis", "Extension", "ICT"], category: "Agricultural Technology", pages: "15-28" },
  ],
  "Climate Resilience and Adaptation": [
    { id: "a3", title: "Drought-Tolerant Maize Varieties: Adoption and Impact in East Africa", authors: ["Dr. Rose Mwangi", "Prof. John Dixon"], affiliation: "CIMMYT Kenya", abstract: "Adoption of drought-tolerant maize has increased yields by 20–40% in stress years. We report adoption rates, varietal preferences, and household-level impacts from panel data in Kenya and Tanzania.", keywords: ["Drought tolerance", "Maize", "Adoption", "Africa"], category: "Crop Sciences", pages: "1-16" },
    { id: "a4", title: "Weather-Index Insurance and Farmer Risk Management", authors: ["Dr. Helena Santos"], affiliation: "World Bank Research Group", abstract: "Review of weather-index insurance schemes in India and Senegal. We discuss basis risk, premium affordability, and links to credit and input use.", keywords: ["Insurance", "Climate risk", "Index insurance", "Risk"], category: "Agri-Business & Economics", pages: "17-30" },
  ],
  "Sustainable Livestock Management": [
    { id: "a5", title: "Silvopastoral Systems and Livestock Productivity in Colombia", authors: ["Dr. Maria Garcia", "Dr. Roberto Silva"], affiliation: "CIPAV, Colombia", abstract: "Comparison of silvopastoral vs. conventional grazing in the Colombian Andes. Silvopastoral systems showed better animal weight gain, biodiversity, and soil carbon.", keywords: ["Silvopastoral", "Livestock", "Colombia", "Sustainability"], category: "Animal Husbandry", pages: "1-15" },
    { id: "a6", title: "Methane Mitigation in Ruminants: Feed Additives and Breeding", authors: ["Dr. Emma Clark"], affiliation: "University of Edinburgh", abstract: "Overview of dietary and genetic strategies to reduce enteric methane in cattle and sheep. Evidence from meta-analyses and ongoing breeding programs is summarized.", keywords: ["Methane", "Ruminants", "Feed additives", "Breeding"], category: "Animal Husbandry", pages: "16-29" },
  ],
  "Precision Farming and IoT": [
    { id: "a7", title: "IoT Sensor Networks for Soil Moisture and Nutrient Mapping", authors: ["Dr. Yuki Tanaka", "Dr. Hans Mueller"], affiliation: "Precision Ag Institute, Japan", abstract: "Low-cost IoT sensor networks were deployed on 12 farms to map soil moisture and nitrate. We describe the system, calibration, and integration with irrigation and fertigation decisions.", keywords: ["IoT", "Sensors", "Soil moisture", "Precision"], category: "Agricultural Technology", pages: "1-14" },
    { id: "a8", title: "Variable-Rate Seeding and Yield Response in Wheat", authors: ["Dr. Pierre Dubois"], affiliation: "INRAE France", abstract: "On-farm trials of variable-rate seeding in wheat showed modest yield gains in heterogeneous fields. Economic analysis and practical recommendations are discussed.", keywords: ["Variable rate", "Seeding", "Wheat", "Precision"], category: "Agronomy", pages: "15-26" },
  ],
  "Organic and Regenerative Agriculture": [
    { id: "a9", title: "Compost and Compost Tea Effects on Vegetable Quality and Yield", authors: ["Dr. Sarah Green", "Dr. Tom Wilson"], affiliation: "Organic Research Centre, UK", abstract: "Two-year trial of compost and compost tea in organic broccoli and lettuce. Yield and nutrient content were positively associated with compost application rate.", keywords: ["Compost", "Organic", "Vegetables", "Quality"], category: "Horticulture", pages: "1-13" },
    { id: "a10", title: "Regenerative Grazing and Soil Health Indicators", authors: ["Dr. Jake Miller"], affiliation: "Savory Institute", abstract: "Case studies of regenerative grazing across five ranches. Soil organic matter, infiltration, and plant diversity improved over 3–5 years of adaptive grazing management.", keywords: ["Regenerative", "Grazing", "Soil health", "Indicators"], category: "Environmental Science", pages: "14-27" },
  ],
  "Water Management and Irrigation": [
    { id: "a11", title: "Solar-Powered Drip Irrigation: Economics and Adoption in India", authors: ["Dr. Rajiv Verma", "Dr. Priya Nair"], affiliation: "IWMI India", abstract: "Cost-benefit analysis of solar drip systems for smallholders in Gujarat and Rajasthan. Payback periods and factors affecting adoption are reported.", keywords: ["Solar", "Drip irrigation", "India", "Adoption"], category: "Irrigation & Farm Technology", pages: "1-14" },
    { id: "a12", title: "Managed Aquifer Recharge in Arid Cropping Systems", authors: ["Dr. Ahmed Al-Senafi"], affiliation: "Kuwait Institute for Scientific Research", abstract: "Pilot-scale managed aquifer recharge using treated wastewater and runoff. We discuss water quality, recharge rates, and suitability for supplementary irrigation.", keywords: ["Aquifer recharge", "Arid", "Water reuse", "Irrigation"], category: "Soil & Water Management", pages: "15-28" },
  ],
  "Crop Biotechnology and Breeding": [
    { id: "a13", title: "Gene Editing for Disease Resistance in Tomato", authors: ["Dr. Wei Zhang", "Dr. Anna Schmidt"], affiliation: "Max Planck Institute", abstract: "CRISPR-based editing of susceptibility genes in tomato reduced bacterial spot severity in greenhouse and field trials. Regulatory and breeding implications are discussed.", keywords: ["Gene editing", "Tomato", "Disease resistance", "CRISPR"], category: "Plant Protection & Biotechnology", pages: "1-12" },
    { id: "a14", title: "Genomic Selection in Pearl Millet: Progress and Prospects", authors: ["Dr. K. Venkatesan"], affiliation: "ICRISAT India", abstract: "Update on genomic selection pipelines for pearl millet in India and West Africa. Accuracy, cost, and integration with conventional breeding are reviewed.", keywords: ["Genomic selection", "Pearl millet", "Breeding", "Genomics"], category: "Crop Sciences", pages: "13-25" },
  ],
  "Food Security and Supply Chains": [
    { id: "a15", title: "Post-COVID Disruptions in Vegetable Supply Chains: Evidence from India", authors: ["Dr. Anjali Krishnan"], affiliation: "IFPRI", abstract: "Survey and interview data on how vegetable farmers and traders adapted to COVID-19 disruptions. Lessons for resilience and policy are drawn.", keywords: ["Supply chain", "COVID-19", "Vegetables", "India"], category: "Agri-Business & Economics", pages: "1-14" },
    { id: "a16", title: "School Feeding Programs and Local Procurement: Impact on Smallholders", authors: ["Dr. Maria Fernandez"], affiliation: "FAO", abstract: "Review of school feeding programs that source from smallholders. We summarize impacts on farmer income, diet diversity, and program sustainability.", keywords: ["School feeding", "Procurement", "Smallholders", "Nutrition"], category: "Agri-Business & Economics", pages: "15-28" },
  ],
  "Soil Health and Conservation": [
    { id: "a17", title: "No-Till and Cover Crops: Long-Term Effects on Soil Properties", authors: ["Dr. David Brown"], affiliation: "USDA-ARS", abstract: "Twenty-year comparison of tillage and cover crop systems in the Midwest. Soil carbon, aggregation, and water retention are reported.", keywords: ["No-till", "Cover crops", "Soil carbon", "Long-term"], category: "Soil Science", pages: "1-16" },
    { id: "a18", title: "Conservation Agriculture in Smallholder Systems: A Meta-Analysis", authors: ["Dr. Sophie Leroux"], affiliation: "CIRAD", abstract: "Meta-analysis of conservation agriculture effects on yield and profitability in smallholder contexts. Contextual factors affecting success are identified.", keywords: ["Conservation agriculture", "Smallholders", "Meta-analysis", "Yield"], category: "Agronomy", pages: "17-31" },
  ],
  "Agri-Tech Startups and Innovation": [
    { id: "a19", title: "Agri-Fintech and Smallholder Credit Access", authors: ["Dr. Omar Hassan"], affiliation: "CGAP", abstract: "Case studies of digital lending and credit scoring for smallholders in Kenya and Nigeria. Default rates, outreach, and scalability are discussed.", keywords: ["Agri-fintech", "Credit", "Smallholders", "Digital"], category: "Agri-Business & Economics", pages: "1-12" },
    { id: "a20", title: "Startup–Research Linkages in Agricultural Biotechnology", authors: ["Dr. Nina Volkova"], affiliation: "MIT Innovation Initiative", abstract: "How ag-biotech startups access public research and collaborate with universities. Survey results and recommendations for technology transfer.", keywords: ["Startups", "Biotechnology", "Innovation", "Research"], category: "Plant Protection & Biotechnology", pages: "13-24" },
  ],
  "Rural Development and Policy": [
    { id: "a21", title: "Agricultural Subsidies and Environmental Outcomes: A Review", authors: ["Dr. Paul Thompson"], affiliation: "OECD", abstract: "Review of evidence on how different subsidy instruments affect input use, land use, and environmental indicators. Implications for green architecture of support.", keywords: ["Subsidies", "Policy", "Environment", "Review"], category: "Agri-Business & Economics", pages: "1-15" },
    { id: "a22", title: "Rural Youth Employment in Agribusiness: Case Studies from Africa", authors: ["Dr. Grace Mwangi"], affiliation: "ILRI", abstract: "Qualitative study of youth engagement in agribusiness in Kenya and Uganda. Enablers and barriers and policy recommendations are presented.", keywords: ["Youth", "Employment", "Agribusiness", "Africa"], category: "Agri-Business & Economics", pages: "16-28" },
  ],
  "Climate-Smart Agriculture": [
    { id: "a23", title: "Climate-Smart Villages: Lessons from South Asia", authors: ["Dr. B. R. K. Reddy"], affiliation: "CCAFS", abstract: "Summary of climate-smart village pilots in India, Nepal, and Bangladesh. Portfolio of technologies and practices and adoption patterns.", keywords: ["Climate-smart", "Villages", "South Asia", "Adoption"], category: "Environmental Science", pages: "1-14" },
    { id: "a24", title: "Nitrogen Use Efficiency and GHG Emissions in Rice Systems", authors: ["Dr. Tran Van Minh"], affiliation: "IRRI Vietnam", abstract: "Field experiments on improved N management in rice. We report yield, N use efficiency, and nitrous oxide emissions under different practices.", keywords: ["Nitrogen", "Rice", "GHG", "Efficiency"], category: "Agronomy", pages: "15-27" },
  ],
  "Post-Harvest and Value Addition": [
    { id: "a25", title: "Solar Drying of Fruits and Vegetables: Technology and Economics", authors: ["Dr. Fatou Diallo"], affiliation: "ITA Senegal", abstract: "Evaluation of solar dryers for mango and tomato in Senegal. Drying time, quality, and cost per kg of dried product are reported.", keywords: ["Solar drying", "Post-harvest", "Value addition", "Senegal"], category: "Post-Harvest Technology", pages: "1-13" },
    { id: "a26", title: "Cold Chain Gaps and Food Loss in Dairy Supply Chains", authors: ["Dr. Ramesh Gupta"], affiliation: "NDDB India", abstract: "Assessment of cold chain infrastructure and milk loss in two Indian states. Investment and policy options for reducing loss are discussed.", keywords: ["Cold chain", "Dairy", "Food loss", "India"], category: "Post-Harvest Technology", pages: "14-26" },
  ],
  "Annual Review: Agriculture 2023": [
    { id: "a27", title: "Annual Review: Agriculture 2023 — Key Trends and Publications", authors: ["Editorial Board"], affiliation: "Agri Doctor E-Magazine", abstract: "A curated overview of major trends, policy shifts, and notable research in agriculture during 2023, with links to key publications and datasets.", keywords: ["Annual review", "Trends", "2023", "Overview"], category: "Environmental Science", pages: "1-18" },
    { id: "a28", title: "Editor's Pick: Top 10 Articles of 2023", authors: ["Editorial Board"], affiliation: "Agri Doctor E-Magazine", abstract: "The editorial board's selection of the most impactful and widely cited articles published in the past year across disciplines.", keywords: ["Editor's pick", "2023", "Impact", "Selection"], category: "Agronomy", pages: "19-32" },
  ],
};

/** All past issues (archives): newest first, 2026 → 2023. Each issue has theme-matched articles so the magazine is visible. */
export const archiveIssues: Issue[] = [
  { volume: 1, issue: 1, month: "January", year: 2026, theme: "Innovations in Sustainable Agriculture", articles: currentIssue.articles },
  { volume: 1, issue: 2, month: "February", year: 2026, theme: "Digital Transformation in Agriculture", articles: sampleArticlesByTheme["Digital Transformation in Agriculture"] ?? [] },
  { volume: 1, issue: 3, month: "March", year: 2026, theme: "Climate Resilience and Adaptation", articles: sampleArticlesByTheme["Climate Resilience and Adaptation"] ?? [] },
  { volume: 1, issue: 4, month: "April", year: 2026, theme: "Sustainable Livestock Management", articles: sampleArticlesByTheme["Sustainable Livestock Management"] ?? [] },
  { volume: 2, issue: 1, month: "January", year: 2025, theme: "Precision Farming and IoT", articles: sampleArticlesByTheme["Precision Farming and IoT"] ?? [] },
  { volume: 2, issue: 2, month: "March", year: 2025, theme: "Organic and Regenerative Agriculture", articles: sampleArticlesByTheme["Organic and Regenerative Agriculture"] ?? [] },
  { volume: 2, issue: 3, month: "June", year: 2025, theme: "Water Management and Irrigation", articles: sampleArticlesByTheme["Water Management and Irrigation"] ?? [] },
  { volume: 2, issue: 4, month: "September", year: 2025, theme: "Crop Biotechnology and Breeding", articles: sampleArticlesByTheme["Crop Biotechnology and Breeding"] ?? [] },
  { volume: 3, issue: 1, month: "January", year: 2024, theme: "Food Security and Supply Chains", articles: sampleArticlesByTheme["Food Security and Supply Chains"] ?? [] },
  { volume: 3, issue: 2, month: "April", year: 2024, theme: "Soil Health and Conservation", articles: sampleArticlesByTheme["Soil Health and Conservation"] ?? [] },
  { volume: 3, issue: 3, month: "July", year: 2024, theme: "Agri-Tech Startups and Innovation", articles: sampleArticlesByTheme["Agri-Tech Startups and Innovation"] ?? [] },
  { volume: 3, issue: 4, month: "October", year: 2024, theme: "Rural Development and Policy", articles: sampleArticlesByTheme["Rural Development and Policy"] ?? [] },
  { volume: 4, issue: 1, month: "January", year: 2023, theme: "Climate-Smart Agriculture", articles: sampleArticlesByTheme["Climate-Smart Agriculture"] ?? [] },
  { volume: 4, issue: 2, month: "June", year: 2023, theme: "Post-Harvest and Value Addition", articles: sampleArticlesByTheme["Post-Harvest and Value Addition"] ?? [] },
  { volume: 4, issue: 3, month: "December", year: 2023, theme: "Annual Review: Agriculture 2023", articles: sampleArticlesByTheme["Annual Review: Agriculture 2023"] ?? [] },
];

export const focusAreas = [
  {
    title: "Agriculture & Crop Sciences",
    description: "Advances in crop production, plant breeding, and agricultural systems",
    icon: "Wheat"
  },
  {
    title: "Soil & Water Management",
    description: "Sustainable soil health practices and water resource optimization",
    icon: "Droplets"
  },
  {
    title: "Horticulture and Plantation Crops",
    description: "Innovations in fruit, vegetable, and plantation crop cultivation",
    icon: "Flower2"
  },
  {
    title: "Plant Protection & Biotechnology",
    description: "Pest management, disease control, and biotechnological applications",
    icon: "Cpu"
  },
  {
    title: "Agri-Business & Marketing",
    description: "Market analysis, policy research, and agricultural economics",
    icon: "TrendingUp"
  },
  {
    title: "Farm Technology & Smart Farming",
    description: "Precision farming, IoT, drones, and digital agriculture solutions",
    icon: "Cpu"
  },
  {
    title: "Environmental Sustainability",
    description: "Climate-smart agriculture and ecological farming systems",
    icon: "Leaf"
  },
  {
    title: "Irrigation & Farm Technology",
    description: "Water management systems and advanced farming technologies",
    icon: "Droplets"
  }
];

export const editorialBoard = [
  {
    role: "Editor-in-Chief",
    description: "Oversees editorial direction, final publication decisions, and maintains journal standards"
  },
  {
    role: "Managing Editor",
    description: "Coordinates peer review process, manages editorial workflow, and ensures timely publication"
  },
  {
    role: "Associate Editors",
    description: "Handle submissions in specific subject areas and coordinate specialized peer reviews"
  },
  {
    role: "Advisory Board",
    description: "Provides strategic guidance on journal scope, policies, and emerging research directions"
  },
  {
    role: "Technical Editor",
    description: "Ensures manuscript formatting, reference accuracy, and digital publication quality"
  }
];

export const articleCategories = [
  "Agronomy",
  "Soil Science",
  "Horticulture",
  "Plant Protection",
  "Animal Husbandry",
  "Agri-Business & Economics",
  "Environmental Science",
  "Irrigation & Farm Technology",
  "Post-Harvest Technology"
];
