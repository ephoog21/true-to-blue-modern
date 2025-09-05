import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Trees } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Landscapers - Manage Seasonal Demand Efficiently",
  description: "Smart voice assistant for landscaping businesses. Handle quote requests, schedule recurring maintenance, and manage seasonal rushes without missing family time. Grow your landscaping business on autopilot.",
  keywords: ["landscaping software", "lawn care answering service", "landscaper voice assistant", "lawn maintenance scheduling", "landscaping business automation", "seasonal landscaping management"],
};

const landscapingData = {
  trade: "Landscapers",
  headline: "Grow Your Business, Not Just Grass",
  subheadline: "Smart voice assistants that handle quote requests, schedule recurring maintenance, and manage your seasonal rushes while you're out making properties beautiful.",
  painPoints: [
    {
      title: "Spring Rush Overwhelm",
      description: "When spring hits, everyone wants service NOW. You're mowing one lawn while 50 potential customers can't reach you.",
    },
    {
      title: "Mower Noise = Missed Calls",
      description: "You can't hear your phone over equipment. By the time you check messages, customers have hired your competition.",
    },
    {
      title: "Weekly Route Disruptions",
      description: "One rain delay throws off your entire week. Calling every customer to reschedule is a nightmare you don't have time for.",
    },
    {
      title: "Quote Delays Kill Sales",
      description: "Property walks take time. By the time you measure, calculate, and send quotes, customers have moved on to faster competitors.",
    },
    {
      title: "Recurring Billing Headaches",
      description: "Chasing payments for weekly service wastes hours. Meanwhile, equipment needs maintenance and crews need managing.",
    },
    {
      title: "One-Time vs Recurring Confusion",
      description: "Every caller thinks their overgrown jungle is an emergency. Sorting urgent cleanups from routine maintenance is exhausting.",
    },
  ],
  benefits: [
    {
      title: "Handle Seasonal Volume Spikes",
      description: "When spring fever hits, capture every lead. System handles unlimited simultaneous calls during your busy season.",
    },
    {
      title: "Work Without Phone Stress",
      description: "Run equipment all day without checking your phone. Every customer gets professional service while you focus on the job.",
    },
    {
      title: "Automated Weather Rescheduling",
      description: "Rain delays? System automatically notifies affected customers and reschedules based on your rules and availability.",
    },
    {
      title: "Instant Property Quotes",
      description: "Basic lawn sizes get immediate estimates. 'Quarter acre weekly mowing? That's $50-60 per cut. Let me schedule your free walkthrough.'",
    },
    {
      title: "Recurring Revenue Protection",
      description: "Automatically enrolls new customers in seasonal contracts, sets up billing, and handles service agreements.",
    },
    {
      title: "Smart Service Prioritization",
      description: "New sod installations get priority. Weekly mowing gets scheduled efficiently. System knows the difference.",
    },
  ],
  features: [
    {
      title: "Property Size Calculator",
      description: "Asks for approximate lawn size and provides instant ballpark quotes for standard services.",
    },
    {
      title: "Service Package Builder",
      description: "Offers mowing, edging, fertilization, and seasonal cleanups as packages, increasing average ticket size.",
    },
    {
      title: "Route Optimization Info",
      description: "Tells customers their likely service day based on neighborhood, making routes more efficient.",
    },
    {
      title: "Seasonal Service Reminders",
      description: "Automatically offers spring cleanups, fall leaf removal, and winterization at the right times.",
    },
    {
      title: "Weather-Based Intelligence",
      description: "Knows forecast and proactively manages schedule changes for rain delays or extreme heat.",
    },
    {
      title: "Chemical Application Scheduling",
      description: "Tracks fertilization and treatment schedules, ensuring proper timing and compliance.",
    },
    {
      title: "Equipment Downtime Management",
      description: "When equipment breaks, system reschedules affected customers automatically while you handle repairs.",
    },
    {
      title: "Neighbor Referral System",
      description: "When booking, asks about neighbor referrals and offers group discounts for same-street service.",
    },
    {
      title: "Photo Request Management",
      description: "Requests property photos for accurate quotes on larger landscaping projects.",
    },
  ],
  testimonial: {
    text: "Last spring I had 200 calls in one week. Without this system, I would have lost most of them. Instead, I landed 80 new recurring customers and my crew stays busy year-round. Plus, my wife doesn't hate me anymore for working through dinner every night.",
    author: "Marcus Johnson",
    business: "Green Thumb Landscaping",
    location: "Atlanta, GA",
    metric: "+150 recurring customers in first season",
  },
  faqs: [
    {
      question: "How does it handle seasonal demand spikes?",
      answer: "The system can handle unlimited calls simultaneously. Whether it's 10 or 100 calls during spring rush, every potential customer gets immediate service.",
    },
    {
      question: "Can it provide accurate landscaping quotes?",
      answer: "For standard services like mowing, it provides instant estimates based on property size. Complex landscaping projects get scheduled for in-person quotes.",
    },
    {
      question: "Does it manage recurring service schedules?",
      answer: "Yes. It sets up weekly, bi-weekly, or monthly schedules, sends reminders, and automatically adjusts for weather or holidays.",
    },
    {
      question: "How does weather rescheduling work?",
      answer: "You set rules (like 'no service if rain probability >60%'). System monitors weather and automatically notifies and reschedules affected customers.",
    },
    {
      question: "Can it upsell additional services?",
      answer: "Absolutely. When someone calls for mowing, it offers edging, fertilization, and seasonal services, increasing average customer value.",
    },
  ],
  icon: <Trees className="h-10 w-10 text-white" />,
  color: "from-green-500 to-emerald-500",
};

export default function LandscapingPage() {
  return <TradeLandingTemplate {...landscapingData} />;
}