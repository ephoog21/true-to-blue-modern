import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Plumbers - Never Miss Emergency Calls",
  description: "Smart voice assistant for plumbing businesses. Handle emergency calls 24/7, schedule appointments, and provide instant quotes while you're on the job. Start free trial.",
  keywords: ["plumber software", "plumbing answering service", "plumber voice assistant", "plumbing call management", "emergency plumbing calls", "plumber scheduling software"],
};

const plumberData = {
  trade: "Plumbers",
  headline: "Your Pipes Are Calling. We're Answering.",
  subheadline: "Smart voice assistants that handle emergency calls, schedule appointments, and keep your plumbing business flowing smoothly 24/7.",
  painPoints: [
    {
      title: "Missing Emergency Calls at 2 AM",
      description: "Those middle-of-the-night burst pipe calls are your highest-paying jobs, but you can't always answer when you're exhausted or on another emergency.",
    },
    {
      title: "Covered in... Work",
      description: "When you're elbow-deep in a septic issue or under a house, the last thing you can do is answer your phone. But that ringing could be your next $5,000 job.",
    },
    {
      title: "Weekend Family Time Interrupted",
      description: "Every weekend BBQ, every kid's soccer game - interrupted by calls that might not even be emergencies. Your family deserves better.",
    },
    {
      title: "Losing to Big Companies",
      description: "Large plumbing companies have call centers. You're trying to compete while juggling a wrench and a phone. It's not a fair fight.",
    },
    {
      title: "Quote Delays Cost Jobs",
      description: "By the time you finish your current job and send a quote for the next one, the customer has already called three other plumbers and picked one.",
    },
    {
      title: "Can't Screen Call Urgency",
      description: "Is it a real emergency or can it wait until Monday? You won't know unless you stop what you're doing and answer.",
    },
  ],
  benefits: [
    {
      title: "Capture Every Emergency Call",
      description: "Our voice assistant answers 24/7, determines if it's a true emergency, and either forwards urgent calls immediately or schedules routine work for normal hours.",
    },
    {
      title: "Professional First Impression",
      description: "Every customer hears a professional greeting with your business name, not a rushed 'hello' while you're fixing a toilet.",
    },
    {
      title: "Instant Quote Delivery",
      description: "Common jobs get automatic ballpark quotes. Drain cleaning? Water heater replacement? Customers get prices immediately, you get the job.",
    },
    {
      title: "Focus on the Job at Hand",
      description: "Complete installations and repairs without constant phone interruptions. Quality work leads to better reviews and more referrals.",
    },
    {
      title: "Real Nights and Weekends",
      description: "Sleep through the night. Enjoy Sunday dinner. Non-emergency calls are captured and scheduled for Monday. Real emergencies still reach you.",
    },
    {
      title: "Compete with the Big Guys",
      description: "Offer the same 24/7 availability as large plumbing companies, without the overhead of a call center or answering service.",
    },
  ],
  features: [
    {
      title: "Emergency Call Triage",
      description: "Intelligently determines burst pipes from dripping faucets. Only true emergencies interrupt your evening.",
    },
    {
      title: "Service Area Filtering",
      description: "Automatically checks if callers are in your service area before booking, saving you time on dead-end calls.",
    },
    {
      title: "Instant Price Estimates",
      description: "Pre-programmed with your pricing for common services like drain cleaning, fixture installation, and water heater replacement.",
    },
    {
      title: "Smart Appointment Booking",
      description: "Books directly into your calendar with travel time buffers between jobs. No more double bookings or impossible schedules.",
    },
    {
      title: "Customer History Recall",
      description: "Recognizes repeat customers and can reference their previous service history for personalized service.",
    },
    {
      title: "Parts & Warranty Info",
      description: "Answers common questions about warranties, maintenance schedules, and whether customers should turn off their water.",
    },
    {
      title: "Text Follow-Ups",
      description: "Sends automatic SMS confirmations and reminders, reducing no-shows and keeping customers informed.",
    },
    {
      title: "Lead Source Tracking",
      description: "Know exactly where your calls come from - Google, referrals, or repeat customers - to optimize your marketing.",
    },
    {
      title: "After-Hours Dispatch",
      description: "For true emergencies, can dispatch your on-call tech or partner plumber based on availability and location.",
    },
  ],
  testimonial: {
    text: "I was losing my mind trying to juggle emergency calls while fixing pipes. Now I complete jobs faster, my customers get instant responses, and I actually sleep through the night. My revenue is up 45% and my stress is down 90%.",
    author: "Mike Rodriguez",
    business: "Rodriguez Plumbing",
    location: "Austin, TX",
    metric: "+45% Revenue, 50+ Hours Saved Monthly",
  },
  faqs: [
    {
      question: "How does it know what's a real plumbing emergency?",
      answer: "You customize the criteria during setup. Typically, burst pipes, major leaks, no water, or sewage backups are emergencies. Dripping faucets, running toilets, or slow drains can wait. The system asks the right questions to determine urgency.",
    },
    {
      question: "Can it provide accurate quotes for plumbing work?",
      answer: "Yes, for standard services. You provide your pricing for common jobs like drain cleaning, faucet replacement, or water heater installation. For complex jobs, it collects details and schedules an estimate visit.",
    },
    {
      question: "What about after-hours emergency fees?",
      answer: "The system knows your regular and emergency rates. It informs customers about after-hours fees before forwarding emergency calls to you, ensuring they understand the cost.",
    },
    {
      question: "Can it integrate with my existing plumbing software?",
      answer: "Yes, we integrate with popular plumbing software like ServiceTitan, Housecall Pro, and Jobber. Your appointments sync automatically.",
    },
    {
      question: "How long does setup take for a plumbing business?",
      answer: "Most plumbers are up and running in about 30 minutes. We help you set up your services, pricing, service area, and emergency criteria. Then we're live.",
    },
  ],
  icon: <Wrench className="h-10 w-10 text-white" />,
  color: "from-blue-500 to-cyan-500",
};

export default function PlumbersPage() {
  return <TradeLandingTemplate {...plumberData} />;
}