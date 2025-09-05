import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Grid3X3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Flooring Contractors - Quote Jobs Instantly",
  description: "Smart voice assistant for flooring contractors. Handle measurement scheduling, provide installation quotes, and manage projects while you're laying floors. Convert more estimates into jobs.",
  keywords: ["flooring contractor software", "floor installation scheduling", "flooring voice assistant", "carpet installation quotes", "hardwood flooring automation", "tile contractor software"],
};

const flooringData = {
  trade: "Flooring Contractors",
  headline: "Floor Your Competition With Better Service",
  subheadline: "Smart voice assistants that handle quote requests, schedule measurements, and manage installations while you're on your knees perfecting floors.",
  painPoints: [
    {
      title: "Dusty Hands, Ringing Phone",
      description: "You're covered in sawdust or tile adhesive. That call could be a whole-house installation worth $15,000, but you can't stop.",
    },
    {
      title: "Measurement Scheduling Nightmare",
      description: "Every job needs measuring first. Coordinating these appointments while installing floors is impossible.",
    },
    {
      title: "Material Cost Fluctuations",
      description: "Hardwood and carpet prices change weekly. Quoting with outdated prices means losing money or customers.",
    },
    {
      title: "Builder Bulk Orders",
      description: "Contractors need 20 houses floored yesterday. While installing one floor, you're missing these game-changing contracts.",
    },
    {
      title: "Sample Request Management",
      description: "Customers want to see samples, compare options, discuss materials. Handling this during installations ruins productivity.",
    },
    {
      title: "Insurance Job Documentation",
      description: "Water damage claims need specific documentation. Missing these high-margin calls while working costs thousands.",
    },
  ],
  benefits: [
    {
      title: "Install Floors, Book Jobs",
      description: "Keep laying that perfect floor. System captures every opportunity and books measurements automatically.",
    },
    {
      title: "Streamlined Measurement Process",
      description: "System schedules measurements with proper time gaps, confirms customer availability, and sends reminders.",
    },
    {
      title: "Current Material Pricing",
      description: "Quotes reflect this week's material costs. 'Luxury vinyl plank is currently $3-5 per square foot installed.'",
    },
    {
      title: "Capture Builder Contracts",
      description: "Immediate response to bulk orders with volume pricing, helping you land those career-making contracts.",
    },
    {
      title: "Professional Sample Service",
      description: "Schedules sample drop-offs and consultations separately from installation time, maximizing efficiency.",
    },
    {
      title: "Insurance Claim Excellence",
      description: "Handles documentation requirements, explains your insurance process, and prioritizes these profitable jobs.",
    },
  ],
  features: [
    {
      title: "Square Footage Estimator",
      description: "Asks room dimensions and counts to provide accurate initial quotes for materials and labor.",
    },
    {
      title: "Material Options Presentation",
      description: "Explains carpet, hardwood, luxury vinyl, tile options with price ranges for each.",
    },
    {
      title: "Subfloor Condition Questions",
      description: "Asks about squeaks, levelness, and moisture to identify potential prep work needed.",
    },
    {
      title: "Furniture Moving Coordination",
      description: "Determines if customers need furniture moving assistance and adjusts quotes accordingly.",
    },
    {
      title: "Pattern Matching Advisement",
      description: "For tile and pattern work, explains additional costs and time requirements.",
    },
    {
      title: "Commercial Grade Options",
      description: "Different products and pricing for commercial versus residential installations.",
    },
    {
      title: "Warranty Information System",
      description: "Explains manufacturer and installation warranties for different flooring types.",
    },
    {
      title: "Timeline Expectation Setting",
      description: "Provides realistic timeframes including acclimation time for hardwood and curing time for adhesives.",
    },
    {
      title: "Moisture Testing Scheduling",
      description: "For concrete subfloors, schedules moisture testing before final quotes.",
    },
  ],
  testimonial: {
    text: "I landed a 50-home builder contract because the system answered their call immediately with professional pricing while I was installing floors. That one call changed my business forever. Now I have three crews and still never miss an opportunity.",
    author: "Carlos Mendez",
    business: "Premier Flooring Solutions",
    location: "Dallas, TX",
    metric: "50-home contract, $750K in revenue",
  },
  faqs: [
    {
      question: "How does it quote different flooring types?",
      answer: "It knows your pricing for carpet, hardwood, LVP, and tile per square foot. Provides ranges based on quality levels and includes installation.",
    },
    {
      question: "Can it handle both residential and commercial?",
      answer: "Yes. Different product lines, pricing structures, and timeline discussions for homes versus commercial spaces.",
    },
    {
      question: "Does it manage the measurement process?",
      answer: "Absolutely. Schedules measurements, sends confirmations, and ensures someone will be home to provide access.",
    },
    {
      question: "How does it handle insurance jobs?",
      answer: "It identifies water damage claims, explains your insurance billing process, and prioritizes these high-margin jobs.",
    },
    {
      question: "Can it manage material availability?",
      answer: "Yes. It knows typical lead times for different materials and sets appropriate installation expectations.",
    },
  ],
  icon: <Grid3X3 className="h-10 w-10 text-white" />,
  color: "from-amber-600 to-yellow-600",
};

export default function FlooringPage() {
  return <TradeLandingTemplate {...flooringData} />;
}