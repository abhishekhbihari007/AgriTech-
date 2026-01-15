export interface Article {
  id: string;
  title: string;
  authors: string[];
  affiliation: string;
  abstract: string;
  keywords: string[];
  category: string;
  doi?: string;
  pages?: string;
}

export interface Issue {
  volume: number;
  issue: number;
  month: string;
  year: number;
  theme: string;
  articles: Article[];
  coverImage?: string;
}

export const currentIssue: Issue = {
  volume: 1,
  issue: 1,
  month: "January",
  year: 2026,
  theme: "Innovations in Sustainable Agriculture",
  articles: [
    {
      id: "1",
      title: "Climate-Smart Irrigation Strategies for Semi-Arid Regions: A Comprehensive Review",
      authors: ["Dr. Priya Sharma", "Dr. Rajesh Kumar"],
      affiliation: "Indian Agricultural Research Institute, New Delhi",
      abstract: "This comprehensive review examines the latest developments in climate-smart irrigation technologies specifically designed for semi-arid agricultural regions. We analyze various water-saving techniques including deficit irrigation, precision drip systems, and sensor-based automated irrigation. Our findings indicate that implementing these strategies can reduce water consumption by 30-45% while maintaining crop yields. The study also addresses the socio-economic factors affecting adoption rates among smallholder farmers.",
      keywords: ["Climate-smart agriculture", "Irrigation efficiency", "Water conservation", "Semi-arid farming"],
      category: "Agronomy",
      pages: "1-18"
    },
    {
      id: "2",
      title: "Soil Microbiome Dynamics Under Organic vs. Conventional Farming Systems",
      authors: ["Dr. Maria Santos", "Prof. James Wilson", "Dr. Lin Chen"],
      affiliation: "University of Agricultural Sciences, Bangalore",
      abstract: "This study investigates the differential impacts of organic and conventional farming practices on soil microbiome composition and functionality. Through metagenomic analysis of 120 soil samples collected over three growing seasons, we demonstrate significant differences in microbial diversity, nutrient cycling capacity, and disease suppression potential. Organic systems showed 40% higher microbial diversity and enhanced beneficial bacterial populations. These findings have important implications for sustainable soil management practices.",
      keywords: ["Soil microbiome", "Organic farming", "Microbial diversity", "Sustainable agriculture"],
      category: "Soil Science",
      pages: "19-35"
    },
    {
      id: "3",
      title: "Drone-Based Precision Agriculture: Applications in Pest Detection and Crop Monitoring",
      authors: ["Dr. Ahmed Hassan", "Dr. Sarah Mitchell"],
      affiliation: "Agricultural Technology Institute, Cairo",
      abstract: "Unmanned aerial vehicles (UAVs) equipped with multispectral imaging sensors represent a transformative technology for modern agriculture. This research presents a novel framework for real-time pest detection and crop health monitoring using machine learning algorithms applied to drone-captured imagery. Our system achieved 94% accuracy in early pest detection, enabling timely intervention and reducing pesticide use by 25%. We discuss implementation considerations for various farm scales and crop types.",
      keywords: ["Precision agriculture", "UAV technology", "Pest detection", "Machine learning"],
      category: "Agricultural Technology",
      pages: "36-52"
    },
    {
      id: "4",
      title: "Biofortification of Staple Crops: Addressing Micronutrient Deficiencies in Developing Nations",
      authors: ["Prof. Elizabeth Okonkwo", "Dr. David Mensah"],
      affiliation: "West African Centre for Crop Improvement, Ghana",
      abstract: "Micronutrient deficiencies affect over two billion people globally, with the highest prevalence in developing countries. This paper reviews recent advances in biofortification strategies for staple crops including rice, wheat, and cassava. We examine both conventional breeding approaches and genetic modification techniques for enhancing iron, zinc, and vitamin A content. Case studies from successful implementation programs in Sub-Saharan Africa demonstrate the potential for significant public health impact.",
      keywords: ["Biofortification", "Food security", "Micronutrients", "Crop improvement"],
      category: "Crop Sciences",
      pages: "53-71"
    },
    {
      id: "5",
      title: "Vertical Farming Economics: A Comparative Analysis of Urban Agricultural Models",
      authors: ["Dr. Kenji Tanaka", "Dr. Emma Larsson"],
      affiliation: "Tokyo Institute of Agricultural Innovation",
      abstract: "As urban populations grow, vertical farming emerges as a promising solution for local food production. This study presents a comprehensive economic analysis comparing different vertical farming models across five major cities. We evaluate capital costs, operational expenses, energy consumption, and yield metrics for leafy greens, herbs, and strawberries. Our findings identify optimal configurations for different urban contexts and provide a decision framework for prospective vertical farm operators.",
      keywords: ["Vertical farming", "Urban agriculture", "Economic analysis", "Food systems"],
      category: "Horticulture",
      pages: "72-89"
    }
  ]
};

export const archiveIssues: Issue[] = [
  currentIssue,
  {
    volume: 1,
    issue: 2,
    month: "February",
    year: 2026,
    theme: "Digital Transformation in Agriculture",
    articles: []
  },
  {
    volume: 1,
    issue: 3,
    month: "March",
    year: 2026,
    theme: "Climate Resilience and Adaptation",
    articles: []
  },
  {
    volume: 1,
    issue: 4,
    month: "April",
    year: 2026,
    theme: "Sustainable Livestock Management",
    articles: []
  },
  {
    volume: 1,
    issue: 5,
    month: "May",
    year: 2026,
    theme: "Agroforestry and Land Use",
    articles: []
  },
  {
    volume: 1,
    issue: 6,
    month: "June",
    year: 2026,
    theme: "Post-Harvest Technology",
    articles: []
  }
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
