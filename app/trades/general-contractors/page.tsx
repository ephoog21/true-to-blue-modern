import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for General Contractors - Manage Complex Projects Efficiently",
  description: "Smart voice assistant for general contractors. Handle multiple project inquiries, coordinate subcontractors, and manage client communications while you're on job sites. Never lose another big project to poor communication.",
  keywords: ["general contractor software", "GC answering service", "contractor voice assistant", "construction project management", "general contractor automation", "construction scheduling software"],
};

const generalContractorData = {
  trade: "General Contractors",
  headline: "Build Better Business Relationships",
  subheadline: "Smart voice assistants that manage multiple project inquiries, coordinate communications, and qualify opportunities while you're managing job sites.",
  painPoints: [
    {
      title: "Multi-Project Communication Chaos",
      description: "You're managing five projects with 50 subs. Every call could be a crisis, new opportunity, or time-waster, but you can't tell which.",
    },
    {
      title: "Subcontractor Coordination Nightmare",
      description: "Plumbers calling about tomorrow, electricians about permits, roofers about weather. Your phone never stops, and projects suffer.",
    },
    {
      title: "Big Opportunity Losses",
      description: "While handling a minor issue on-site, you miss a call about a million-dollar commercial project that goes to your competitor.",
    },
    {
      title: "Client Update Demands",
      description: "Homeowners want constant updates. Commercial clients need reports. You're building, not talking, but communication drives referrals.",
    },
    {
      title: "Change Order Confusion",
      description: "Clients call with changes while you're coordinating crews. These need documentation, pricing, and approval - impossible while working.",
    },
    {
      title: "Permit and Inspection Juggling",
      description: "Inspector calling while you're in a client meeting. Missing these calls delays projects and costs thousands in idle crews.",
    },
  ],
  benefits: [
    {
      title: "Capture Every Project Opportunity",
      description: "From bathroom remodels to commercial buildouts, every inquiry gets professional attention while you manage active sites.",
    },
    {
      title: "Streamlined Communication Hub",
      description: "System categorizes calls: new projects, sub coordination, client updates, inspections. You handle what's truly urgent.",
    },
    {
      title: "Project Qualification Excellence",
      description: "Determines project scope, budget reality, and timeline expectations before you invest time in estimates.",
    },
    {
      title: "Automated Client Updates",
      description: "Keeps clients informed about project status, weather delays, and next steps without constant phone time.",
    },
    {
      title: "Change Order Documentation",
      description: "Captures change requests with details, explains approval process, and schedules discussion time for pricing.",
    },
    {
      title: "Subcontractor Efficiency",
      description: "Routes sub calls appropriately, answers basic scheduling questions, and maintains project flow without your constant input.",
    },
  ],
  features: [
    {
      title: "Project Scope Intelligence",
      description: "Detailed questions about project type, size, budget, and timeline to qualify leads effectively.",
    },
    {
      title: "Multi-Trade Coordination",
      description: "Knows which trades are on which projects, routing calls and messages appropriately.",
    },
    {
      title: "Budget Reality Check",
      description: "Discusses typical costs for project types, filtering out unrealistic expectations before you waste time.",
    },
    {
      title: "Permit Status Tracking",
      description: "Provides updates on permit status and inspection schedules, keeping projects moving smoothly.",
    },
    {
      title: "Commercial vs Residential Routing",
      description: "Different handling for commercial property managers versus homeowners, with appropriate response levels.",
    },
    {
      title: "Design-Build Services Info",
      description: "Explains your design services, architectural partnerships, and full-service capabilities to capture larger projects.",
    },
    {
      title: "Insurance Claim Assistance",
      description: "For restoration work, handles insurance information gathering and claim coordination details.",
    },
    {
      title: "Warranty and Service Tracking",
      description: "Manages warranty periods and schedules service calls for completed projects, protecting your reputation.",
    },
    {
      title: "Referral Source Tracking",
      description: "Identifies how clients found you, helping optimize marketing and reward referral sources.",
    },
  ],
  testimonial: {
    text: "Managing 8 concurrent projects meant living on my phone instead of managing jobs. Now the system handles all routine calls, qualifies new projects, and keeps clients happy with updates. I landed two commercial projects worth $3M because I didn't miss those crucial first calls. This system paid for itself in one month.",
    author: "Michael Chen",
    business: "Chen Construction Group",
    location: "San Francisco, CA",
    metric: "$3M in new contracts, 40% efficiency improvement",
  },
  faqs: [
    {
      question: "How does it handle complex project inquiries?",
      answer: "It asks detailed questions about project type, scope, timeline, and budget, providing you with qualified leads worth your time to estimate.",
    },
    {
      question: "Can it coordinate between multiple projects?",
      answer: "Yes. It knows your active projects and can route calls appropriately, whether from subs, suppliers, clients, or inspectors.",
    },
    {
      question: "Does it manage subcontractor communications?",
      answer: "It can answer basic scheduling questions, take messages for specific trades, and alert you to urgent issues requiring attention.",
    },
    {
      question: "How does it keep clients updated?",
      answer: "Based on your project schedules, it can provide status updates, explain next phases, and schedule meetings for detailed discussions.",
    },
    {
      question: "Can it handle both residential and commercial?",
      answer: "Absolutely. Different protocols, communication styles, and priority levels for residential remodels versus commercial construction.",
    },
  ],
  icon: <Settings className="h-10 w-10 text-white" />,
  color: "from-indigo-500 to-purple-500",
};

export default function GeneralContractorsPage() {
  return <TradeLandingTemplate {...generalContractorData} />;
}