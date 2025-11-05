import type { Project, ProjectStatus } from "types/project.types";

const projectTemplates = [
  {
    name: "Workflow Builder",
    description: "Internal automation tool for streamlining business processes",
  },
  {
    name: "Customer Portal",
    description: "Frontend revamp for clients with modern UI/UX",
  },
  {
    name: "Notification System",
    description: "Async messaging setup with real-time notifications",
  },
  {
    name: "Analytics Dashboard",
    description: "Real-time data visualization and reporting platform",
  },
  {
    name: "Payment Gateway",
    description: "Secure payment processing integration with Stripe",
  },
  {
    name: "Mobile App",
    description: "Cross-platform mobile application using React Native",
  },
  {
    name: "API Documentation",
    description: "Comprehensive API docs with interactive examples",
  },
  {
    name: "Email Templates",
    description: "Responsive email template system for marketing",
  },
  {
    name: "CRM Integration",
    description: "Salesforce integration for customer management",
  },
  {
    name: "Search Engine",
    description: "Elasticsearch implementation for full-text search",
  },
  { name: "Chat System", description: "Real-time chat with WebSocket support" },
  {
    name: "Admin Panel",
    description: "Internal admin dashboard for system management",
  },
  {
    name: "Data Pipeline",
    description: "ETL pipeline for data processing and transformation",
  },
  {
    name: "Machine Learning Model",
    description: "Predictive analytics using deep learning algorithms",
  },
  {
    name: "Inventory Management",
    description: "Real-time inventory tracking and optimization",
  },
  {
    name: "Task Scheduler",
    description: "Automated task scheduling and resource allocation",
  },
  {
    name: "Video Streaming",
    description: "Live video streaming with adaptive bitrate",
  },
  {
    name: "Authentication Service",
    description: "OAuth2 and SSO authentication provider",
  },
  {
    name: "File Storage",
    description: "Distributed file storage with CDN integration",
  },
  {
    name: "Monitoring Platform",
    description: "System health monitoring and alerting",
  },
  {
    name: "Report Generator",
    description: "Automated report generation with custom templates",
  },
  {
    name: "Translation Service",
    description: "Multi-language translation with AI assistance",
  },
  {
    name: "Backup Solution",
    description: "Automated backup and disaster recovery system",
  },
  {
    name: "Load Balancer",
    description: "Intelligent traffic distribution and scaling",
  },
  {
    name: "Cache Manager",
    description: "Distributed caching with Redis implementation",
  },
  {
    name: "Event Tracking",
    description: "User behavior analytics and event tracking",
  },
  {
    name: "Push Notifications",
    description: "Cross-platform push notification system",
  },
  {
    name: "Social Media Integration",
    description: "Multi-platform social media connectivity",
  },
  {
    name: "Calendar System",
    description: "Scheduling and appointment management platform",
  },
  {
    name: "Invoice Generator",
    description: "Automated invoicing and billing system",
  },
  {
    name: "Content Management",
    description: "Headless CMS for content distribution",
  },
  {
    name: "API Gateway",
    description: "Microservices API gateway with rate limiting",
  },
  {
    name: "Database Migration",
    description: "Schema migration and database versioning",
  },
  {
    name: "User Feedback",
    description: "Customer feedback collection and analysis",
  },
  {
    name: "A/B Testing",
    description: "Feature flag and A/B testing framework",
  },
  {
    name: "Document Scanner",
    description: "OCR and document digitization service",
  },
  {
    name: "Recommendation Engine",
    description: "Personalized content recommendation system",
  },
  {
    name: "Code Review",
    description: "Automated code quality and review platform",
  },
  {
    name: "Container Registry",
    description: "Docker image management and distribution",
  },
  {
    name: "Network Monitor",
    description: "Network performance and security monitoring",
  },
];

const suffixes = [
  "v1",
  "v2",
  "v3",
  "Pro",
  "Plus",
  "Enterprise",
  "Lite",
  "Beta",
  "Alpha",
  "Next",
  "Advanced",
  "Premium",
  "Standard",
  "Basic",
  "Custom",
  "Legacy",
  "Modern",
  "Cloud",
  "Edge",
  "Core",
  "Flex",
  "Max",
  "Mini",
  "Micro",
  "Ultra",
];

const statuses: ProjectStatus[] = ["active", "pending", "archived"];

const generateProjects = (): Project[] => {
  const projects: Project[] = [];
  let idCounter = 1;

  for (let i = 0; i < projectTemplates.length; i++) {
    const template = projectTemplates[i];

    for (let j = 0; j < 20; j++) {
      const suffix = suffixes[j % suffixes.length];
      const status = statuses[idCounter % 3];

      projects.push({
        id: String(idCounter),
        name: `${template.name} ${suffix}`,
        description: template.description,
        status,
      });

      idCounter++;
    }
  }

  return projects;
};

export const projects: Project[] = generateProjects();
