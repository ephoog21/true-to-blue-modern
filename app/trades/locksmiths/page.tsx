import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { KeyRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Locksmiths - 24/7 Emergency Response System",
  description: "Smart voice assistant for locksmith businesses. Handle lockout emergencies, schedule rekeying jobs, and provide instant quotes round the clock. Never miss another high-paying emergency call.",
  keywords: ["locksmith software", "locksmith answering service", "locksmith voice assistant", "emergency lockout calls", "24 hour locksmith", "locksmith automation"],
};

const locksmithData = {
  trade: "Locksmiths",
  headline: "Unlock More Revenue, Lock In More Customers",
  subheadline: "Smart voice assistants that handle emergency lockouts, schedule security upgrades, and provide instant quotes while you're helping stranded customers.",
  painPoints: [
    {
      title: "3 AM Lockout Emergencies",
      description: "People locked out at night are desperate and willing to pay premium rates, but you need sleep to function safely.",
    },
    {
      title: "Driving = Lost Opportunities",
      description: "While racing to help one locked-out customer, you're missing five more emergency calls worth thousands.",
    },
    {
      title: "Price Shopping Chaos",
      description: "Everyone wants instant quotes over the phone. By the time you call back, they've found someone cheaper or faster.",
    },
    {
      title: "Scam Call Filtering",
      description: "Half your calls are scammers or people wanting free advice on picking locks. Real emergencies get lost in the noise.",
    },
    {
      title: "Commercial vs Emergency Balance",
      description: "Scheduling commercial rekeying while handling emergencies is impossible when you're working with precision tools.",
    },
    {
      title: "Location Verification Time",
      description: "Determining if customers are in your service area and getting exact locations wastes precious response time.",
    },
  ],
  benefits: [
    {
      title: "Capture Every Emergency",
      description: "24/7/365 response to lockouts. Real emergencies get immediate attention while routine work schedules appropriately.",
    },
    {
      title: "Drive Safely, Earn More",
      description: "Focus on the road and the customer you're helping. System captures and qualifies new emergencies while you drive.",
    },
    {
      title: "Instant Accurate Quotes",
      description: "'Residential lockout? That's $75-125 depending on time and location. Commercial rekey? Let me schedule an assessment.'",
    },
    {
      title: "Scam-Proof Screening",
      description: "System identifies legitimate emergencies versus curiosity calls, protecting your time for real paying customers.",
    },
    {
      title: "Smart Dispatch Logic",
      description: "Routes calls based on location, urgency, and job type. Emergencies to you, appointments to your calendar.",
    },
    {
      title: "Precise Location Gathering",
      description: "Gets exact addresses, landmarks, and vehicle descriptions for car lockouts, speeding up response time.",
    },
  ],
  features: [
    {
      title: "Emergency Verification",
      description: "Confirms customer is actually locked out versus planning a break-in, protecting you legally.",
    },
    {
      title: "Service Area Mapping",
      description: "Instantly determines if location is in your service area and quotes accordingly, including travel fees.",
    },
    {
      title: "ID Verification Process",
      description: "Explains your ID requirements for property access, setting proper expectations before arrival.",
    },
    {
      title: "Vehicle Information Collection",
      description: "For automotive work, gathers year, make, model for accurate key programming quotes.",
    },
    {
      title: "Security Upgrade Sales",
      description: "When fixing one lock, offers full security assessments and upgrades, increasing ticket value.",
    },
    {
      title: "Commercial Account Management",
      description: "Handles master key systems, access control quotes, and scheduled maintenance for business clients.",
    },
    {
      title: "Payment Expectation Setting",
      description: "Explains cash/card requirements and after-hours rates, preventing payment disputes on arrival.",
    },
    {
      title: "Competitor Price Matching",
      description: "Can offer to match legitimate competitor quotes, keeping price shoppers from calling around.",
    },
    {
      title: "Insurance Claim Assistance",
      description: "Helps customers understand what their insurance covers for lockouts and break-in repairs.",
    },
  ],
  testimonial: {
    text: "I was burning out from 24/7 calls and missing half of them while helping other customers. Now I sleep through the night knowing real emergencies still reach me, and I'm booking 3x more commercial rekeying jobs. My revenue doubled in 6 months.",
    author: "Marcus Thompson",
    business: "SecureKey Locksmith Services",
    location: "Las Vegas, NV",
    metric: "+$12,000/month, 50% less night calls",
  },
  faqs: [
    {
      question: "How does it verify real emergencies?",
      answer: "It asks where they are, what they're locked out of, confirms they have ID for that address, and identifies genuine distress versus casual inquiries.",
    },
    {
      question: "Can it provide accurate locksmith quotes?",
      answer: "Yes, for standard services like lockouts, rekeys, and new locks. Complex automotive or commercial security gets scheduled for assessment.",
    },
    {
      question: "Does it handle after-hours differently?",
      answer: "Absolutely. Different rates and urgency thresholds for nights and weekends. Real emergencies get through, others schedule for normal hours.",
    },
    {
      question: "How does it protect me from scams?",
      answer: "Never provides lock-picking instructions, requires ID verification commitments, and screens for suspicious requests.",
    },
    {
      question: "Can it manage both emergency and scheduled work?",
      answer: "Yes. Emergency lockouts get immediate response while commercial rekeying and security upgrades book into your calendar.",
    },
  ],
  icon: <KeyRound className="h-10 w-10 text-white" />,
  color: "from-yellow-500 to-amber-500",
};

export default function LocksmithsPage() {
  return <TradeLandingTemplate {...locksmithData} />;
}