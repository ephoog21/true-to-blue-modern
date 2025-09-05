import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Roofers - Handle Storm Damage Calls Efficiently",
  description: "Smart voice assistant for roofing contractors. Manage storm damage emergencies, schedule inspections, and provide instant estimates while you're on a roof. Never miss high-value insurance jobs.",
  keywords: ["roofing software", "roofer answering service", "roofing voice assistant", "storm damage calls", "roof repair scheduling", "roofing contractor automation"],
};

const rooferData = {
  trade: "Roofers",
  headline: "Rise Above the Competition",
  subheadline: "Smart voice assistants that handle storm damage calls, schedule inspections, and manage insurance claims while you're 30 feet up keeping homes dry.",
  painPoints: [
    {
      title: "Storm Surge Overwhelm",
      description: "After hail or wind storms, hundreds call at once. You're tarping one roof while missing 99 other insurance jobs worth millions.",
    },
    {
      title: "Roof Safety vs Phone Calls",
      description: "You're on a steep pitch or icy surface. Reaching for a ringing phone could literally kill you. But that call could be a $30,000 job.",
    },
    {
      title: "Insurance vs Cash Confusion",
      description: "Every caller needs different information. Insurance claims need documentation, cash customers need prices. Explaining while working is impossible.",
    },
    {
      title: "Leak Emergency Triage",
      description: "Active leaks during storms are true emergencies. Missing gutters can wait. But you can't determine urgency if you can't answer.",
    },
    {
      title: "Material Cost Volatility",
      description: "Shingle prices change monthly. Quoting with outdated prices means losing money or customers to more responsive competitors.",
    },
    {
      title: "Commercial Property Delays",
      description: "Property managers need immediate response for tenant issues. While you're on a residence, you're losing lucrative commercial contracts.",
    },
  ],
  benefits: [
    {
      title: "Capture Storm Damage Gold Rush",
      description: "Handle hundreds of simultaneous calls after storms. Every insurance claim opportunity gets captured and prioritized.",
    },
    {
      title: "Work Safely Without Distractions",
      description: "Focus on dangerous roof work without phone interruptions. Complete jobs safer and faster with full concentration.",
    },
    {
      title: "Insurance Claim Assistance",
      description: "System explains your insurance claim process, collects policy information, and schedules inspections with documentation.",
    },
    {
      title: "Emergency Leak Response",
      description: "Active leaks get immediate attention. Missing shingles schedule for next dry day. System prioritizes by actual urgency.",
    },
    {
      title: "Current Material Pricing",
      description: "Quotes reflect this week's material costs. 'Architectural shingles are currently running $350-450 per square installed.'",
    },
    {
      title: "Commercial Priority Service",
      description: "Property managers and businesses get VIP response, protecting your highest-margin contracts.",
    },
  ],
  features: [
    {
      title: "Storm Damage Assessment",
      description: "Asks about visible damage, leaks, and insurance coverage to prioritize and route calls appropriately.",
    },
    {
      title: "Insurance Claim Support",
      description: "Collects insurance company, policy number, and claim status to streamline your inspection process.",
    },
    {
      title: "Roof Age & Type Database",
      description: "Gathers roof age, material type, and last replacement date for accurate repair vs replacement recommendations.",
    },
    {
      title: "Drone Inspection Scheduling",
      description: "Books specific time slots for drone inspections when ladder access isn't safe or practical.",
    },
    {
      title: "Tarp Service Dispatch",
      description: "For emergency leaks, can dispatch your tarp crew while scheduling full repairs for better weather.",
    },
    {
      title: "Multi-Property Management",
      description: "Handles landlords and property managers with multiple properties, tracking each location separately.",
    },
    {
      title: "Warranty Tracking",
      description: "Knows your workmanship and material warranties, informing customers about coverage for repairs.",
    },
    {
      title: "Weather-Based Scheduling",
      description: "Won't book installations during rain forecasts, automatically suggesting better weather windows.",
    },
    {
      title: "Financing Options Info",
      description: "Explains available financing for roof replacements, helping customers afford necessary repairs.",
    },
  ],
  testimonial: {
    text: "After last spring's hail storm, we had 400 calls in three days. The system captured every single one, scheduled inspections efficiently, and we completed 150 insurance jobs worth $2.8 million. Without it, we might have handled 30. This technology literally made our year.",
    author: "James Wilson",
    business: "Wilson Roofing & Restoration",
    location: "Oklahoma City, OK",
    metric: "$2.8M in storm damage contracts secured",
  },
  faqs: [
    {
      question: "How does it handle post-storm call surges?",
      answer: "The system handles unlimited simultaneous calls. Whether 10 or 1,000 people call after a storm, everyone gets immediate professional service.",
    },
    {
      question: "Can it help with insurance claims?",
      answer: "Yes. It collects insurance information, explains your documentation process, and schedules inspections with photo requirements for claims.",
    },
    {
      question: "Does it provide accurate roofing estimates?",
      answer: "For standard roof replacements, it provides square footage-based estimates. Complex repairs get scheduled for detailed inspection.",
    },
    {
      question: "How does it prioritize emergency leaks?",
      answer: "Active water intrusion gets immediate response. Missing shingles or cosmetic damage schedules based on weather and availability.",
    },
    {
      question: "Can it manage commercial and residential?",
      answer: "Absolutely. Different protocols, pricing, and response times for commercial properties versus residential homes.",
    },
  ],
  icon: <HardHat className="h-10 w-10 text-white" />,
  color: "from-slate-500 to-gray-500",
};

export default function RoofersPage() {
  return <TradeLandingTemplate {...rooferData} />;
}