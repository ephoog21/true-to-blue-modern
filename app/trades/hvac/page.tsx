import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for HVAC Contractors - Handle Peak Season Calls",
  description: "Smart voice assistant for HVAC businesses. Manage emergency heating/cooling calls, schedule maintenance, and provide instant quotes 24/7. Never lose another customer to competitors.",
  keywords: ["HVAC software", "HVAC answering service", "HVAC voice assistant", "heating and cooling calls", "AC emergency service", "HVAC scheduling software"],
};

const hvacData = {
  trade: "HVAC Technicians",
  headline: "Keep Your Cool While We Handle The Calls",
  subheadline: "Smart voice assistants that manage your seasonal surge, handle emergency no-heat/no-cool calls, and book maintenance appointments while you're in attics and crawl spaces.",
  painPoints: [
    {
      title: "Summer/Winter Call Avalanche",
      description: "When the first heatwave or cold snap hits, your phone explodes. You're fixing one AC while 20 more customers can't reach you.",
    },
    {
      title: "Attic & Crawlspace Blackout",
      description: "You're in a 140-degree attic or tight crawl space for hours. Your phone is ringing non-stop, but you can't possibly answer.",
    },
    {
      title: "Emergency vs Maintenance Chaos",
      description: "No-cool calls in 95-degree weather are emergencies. Annual tune-ups aren't. But every caller thinks their issue is urgent.",
    },
    {
      title: "Losing Maintenance Contracts",
      description: "Customers call to schedule their annual service but can't reach you. They call a competitor instead, and you lose that recurring revenue forever.",
    },
    {
      title: "Quote Competition Speed",
      description: "For new system installations, the first company to provide a quote usually wins. You're still on a roof while competitors are sending estimates.",
    },
    {
      title: "After-Hours Energy Drain",
      description: "Summer nights and winter weekends should be for recovery, but emergency calls keep coming. You're exhausted before the busy season even peaks.",
    },
  ],
  benefits: [
    {
      title: "Handle Peak Season Volume",
      description: "When everyone's AC breaks on the same day, our voice assistant handles unlimited simultaneous calls. Every customer gets through, every opportunity captured.",
    },
    {
      title: "Smart Emergency Prioritization",
      description: "No-heat calls when it's 20 degrees get flagged differently than a noisy blower motor. You handle true emergencies while routine work gets scheduled appropriately.",
    },
    {
      title: "Maintenance Plan Management",
      description: "Automatically schedules annual tune-ups, reminds customers about filter changes, and books seasonal maintenance to keep your schedule full year-round.",
    },
    {
      title: "Instant System Quotes",
      description: "For standard replacements, provides immediate ballpark pricing. '3-ton AC replacement? That typically runs $4,500-5,500. Let me schedule your free detailed estimate.'",
    },
    {
      title: "Weather-Based Intelligence",
      description: "Knows when heatwaves and cold snaps are coming. Can proactively reach out to maintenance plan customers before their systems fail.",
    },
    {
      title: "Preserve Your Evenings",
      description: "After a 12-hour day in attics, you need rest. Non-emergency calls are captured and scheduled. Only true emergencies reach you after hours.",
    },
  ],
  features: [
    {
      title: "Temperature-Based Triage",
      description: "Considers outdoor temperature when determining urgency. 95 degrees + no AC = emergency. 75 degrees + no AC = schedule for tomorrow.",
    },
    {
      title: "System Details Collection",
      description: "Gathers make, model, age, and symptoms before you arrive. You show up with the right parts, saving trips and completing jobs faster.",
    },
    {
      title: "Maintenance Plan Sales",
      description: "Offers and explains your maintenance plans to new customers, turning one-time fixes into recurring revenue.",
    },
    {
      title: "Parts Availability Check",
      description: "Knows your common parts inventory and can tell customers if you likely have what they need in stock for same-day service.",
    },
    {
      title: "Utility Rebate Information",
      description: "Provides information about local utility rebates and financing options for new system installations.",
    },
    {
      title: "Seasonal Campaign Management",
      description: "Automatically offers spring AC tune-ups and fall heating check-ups to past customers, filling your schedule during slower periods.",
    },
    {
      title: "Multi-Tech Scheduling",
      description: "If you have multiple technicians, routes calls based on location, expertise, and availability for maximum efficiency.",
    },
    {
      title: "Energy Efficiency Education",
      description: "Answers common questions about thermostats, filter changes, and energy-saving tips, positioning you as the expert.",
    },
    {
      title: "Service Agreement Renewals",
      description: "Automatically contacts customers when maintenance agreements are expiring, protecting your recurring revenue.",
    },
  ],
  testimonial: {
    text: "Last summer we had 400 calls in one week when temperatures hit 110. Without this system, we would have lost most of them. Instead, we captured every lead, scheduled efficiently, and had our best month ever. Plus, I didn't have to answer a single call while working in a hot attic.",
    author: "Tom Williams",
    business: "Cool Breeze HVAC",
    location: "Phoenix, AZ",
    metric: "+$180K in peak season revenue",
  },
  faqs: [
    {
      question: "How does it handle seasonal surge periods?",
      answer: "The system can handle unlimited simultaneous calls. Whether it's 10 calls or 100 calls at once during a heatwave, every customer gets professional service immediately.",
    },
    {
      question: "Can it determine if an HVAC issue is an emergency?",
      answer: "Yes, it considers factors like outdoor temperature, customer age/health conditions, and system symptoms. No-heat when it's freezing or no-cool when it's dangerously hot get prioritized.",
    },
    {
      question: "Does it know about different system types and brands?",
      answer: "You can program it with common brands and models you service. It can gather specific system information and even provide basic troubleshooting tips while customers wait.",
    },
    {
      question: "Can it sell maintenance agreements?",
      answer: "Absolutely. It explains the benefits, pricing, and what's included. Customers can sign up immediately, and you'll see the details in your dashboard.",
    },
    {
      question: "How does it handle after-hours calls in extreme weather?",
      answer: "You set the rules. During extreme weather events, you might accept more after-hours calls. During mild weather, routine issues wait until morning.",
    },
  ],
  icon: <Wind className="h-10 w-10 text-white" />,
  color: "from-sky-500 to-blue-500",
};

export default function HVACPage() {
  return <TradeLandingTemplate {...hvacData} />;
}