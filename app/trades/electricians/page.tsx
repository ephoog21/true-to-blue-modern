import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Electricians - 24/7 Emergency Call Management",
  description: "Smart voice assistant for electrical contractors. Handle emergency power outages, schedule installations, and provide instant quotes while you're on the job. Never miss another high-value emergency call.",
  keywords: ["electrician software", "electrical contractor answering service", "electrician voice assistant", "emergency electrical calls", "electrician scheduling software", "electrical business automation"],
};

const electricianData = {
  trade: "Electricians",
  headline: "Power Up Your Business Without Burning Out",
  subheadline: "Smart voice assistants that handle emergency outage calls, schedule installations, and keep your electrical business running smoothly 24/7.",
  painPoints: [
    {
      title: "Missing High-Value Emergency Calls",
      description: "Power outages and electrical emergencies are your highest-paying jobs, but you can't answer when you're in a panel or crawl space.",
    },
    {
      title: "Dangerous Work Interruptions",
      description: "Taking calls while working with live wires isn't just inconvenient - it's dangerous. But that call could be a $10,000 rewiring job.",
    },
    {
      title: "Code Questions You Can't Answer",
      description: "Customers call with permit questions and code compliance issues while you're on a ladder. By the time you call back, they've found someone else.",
    },
    {
      title: "Commercial vs Residential Chaos",
      description: "Commercial clients expect immediate response. Residential customers want evening availability. You're trying to serve both and failing.",
    },
    {
      title: "Inspector Scheduling Nightmares",
      description: "Coordinating between customers, your schedule, and inspection windows is a full-time job you don't have time for.",
    },
    {
      title: "Safety Liability Concerns",
      description: "DIY customers call for 'quick advice' that could make you liable. You need to capture these leads but protect yourself.",
    },
  ],
  benefits: [
    {
      title: "Capture Every Emergency Call",
      description: "Power outages, sparking outlets, and electrical fires get immediate attention. Routine installations are scheduled for normal hours.",
    },
    {
      title: "Safe, Uninterrupted Work",
      description: "Focus on live wires and complex installations without phone distractions. Complete jobs safer and faster.",
    },
    {
      title: "Instant Permit & Code Guidance",
      description: "System provides basic permit requirements and schedules consultations for complex code questions, capturing leads instead of losing them.",
    },
    {
      title: "Smart Client Prioritization",
      description: "Commercial emergencies get routed differently than residential requests. Each client gets the appropriate response time.",
    },
    {
      title: "Automated Inspection Coordination",
      description: "System handles the back-and-forth of scheduling inspections, confirming with customers and updating your calendar automatically.",
    },
    {
      title: "Liability Protection Built-In",
      description: "Never give electrical advice over the phone. System books consultations for all technical questions, protecting you legally.",
    },
  ],
  features: [
    {
      title: "Power Outage Triage",
      description: "Determines if it's a neighborhood outage or individual emergency, routing calls appropriately.",
    },
    {
      title: "Load Calculation Estimates",
      description: "Provides rough estimates for panel upgrades, EV charger installations, and service upgrades based on your pricing.",
    },
    {
      title: "Permit Requirement Database",
      description: "Knows which jobs require permits in your area and schedules accordingly with buffer time for approvals.",
    },
    {
      title: "Commercial Account Recognition",
      description: "Identifies and prioritizes calls from commercial clients, ensuring VIP treatment for your best customers.",
    },
    {
      title: "Smart Home Integration Info",
      description: "Answers questions about smart switches, EV chargers, and solar installations you offer.",
    },
    {
      title: "Safety Screening Questions",
      description: "Asks about burning smells, sparks, or warm outlets to identify true emergencies requiring immediate response.",
    },
    {
      title: "Parts & Availability Tracking",
      description: "Knows your common inventory and can tell customers if you have generators or transfer switches in stock.",
    },
    {
      title: "Code Update Notifications",
      description: "Keeps customers informed about electrical code changes that might affect their property.",
    },
    {
      title: "Insurance Coordination",
      description: "Helps customers understand what their insurance covers and assists with claim documentation.",
    },
  ],
  testimonial: {
    text: "As a master electrician, safety is everything. This system lets me focus completely on the job without worrying about missing calls. My commercial clients love the instant response, and I'm booking 60% more panel upgrades. Best investment I've made in 20 years.",
    author: "Sarah Chen",
    business: "Bright Spark Electrical",
    location: "Seattle, WA",
    metric: "+$22,000/month in new commercial contracts",
  },
  faqs: [
    {
      question: "How does it identify electrical emergencies?",
      answer: "The system asks about sparks, burning smells, power loss, and warm outlets. True emergencies like fires or complete outages get forwarded immediately. Flickering lights can wait.",
    },
    {
      question: "Can it quote complex electrical work?",
      answer: "For standard jobs like outlet installation, panel upgrades, or EV charger installation, yes. Complex commercial projects get scheduled for detailed estimates.",
    },
    {
      question: "Does it understand commercial vs residential needs?",
      answer: "Absolutely. You can set different response protocols, pricing structures, and availability for commercial versus residential clients.",
    },
    {
      question: "How does it handle permit and inspection scheduling?",
      answer: "It knows typical permit timelines in your area and books jobs accordingly. It can also coordinate inspection windows with customers.",
    },
    {
      question: "Can it protect me from liability issues?",
      answer: "Yes. It never provides electrical advice or troubleshooting steps. All technical questions result in scheduled consultations, protecting you legally.",
    },
  ],
  icon: <Zap className="h-10 w-10 text-white" />,
  color: "from-yellow-500 to-orange-500",
};

export default function ElectriciansPage() {
  return <TradeLandingTemplate {...electricianData} />;
}