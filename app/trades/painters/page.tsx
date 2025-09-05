import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Paintbrush } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Painters - Book More Jobs While You Paint",
  description: "Smart voice assistant for painting contractors. Handle quote requests, schedule estimates, and manage projects while your hands are full with brushes and rollers. Turn more estimates into booked jobs.",
  keywords: ["painter software", "painting contractor answering service", "painter voice assistant", "painting estimate scheduling", "house painter automation", "commercial painting software"],
};

const painterData = {
  trade: "Painters",
  headline: "Paint a Brighter Future for Your Business",
  subheadline: "Smart voice assistants that capture quote requests, schedule estimates, and manage project timelines while your hands are covered in paint.",
  painPoints: [
    {
      title: "Paint-Covered Phone Disasters",
      description: "Your hands are dripping with paint. That call could be a $10,000 exterior job, but touching your phone means ruining it.",
    },
    {
      title: "Spray Booth Isolation",
      description: "When spraying, you're masked up and can't hear anything. Missing calls while achieving perfect finishes costs you jobs.",
    },
    {
      title: "Color Consultation Complexity",
      description: "Customers want to discuss colors and finishes while you're on a ladder. These conversations need proper attention, not rushed answers.",
    },
    {
      title: "Weather Window Pressure",
      description: "Exterior jobs need perfect weather. While you're racing to finish before rain, you're missing next week's opportunities.",
    },
    {
      title: "Commercial Bid Deadlines",
      description: "Office buildings and retail spaces need quotes yesterday. By the time you finish today's job and write proposals, deadlines pass.",
    },
    {
      title: "Interior vs Exterior Scheduling",
      description: "Juggling weather-dependent exterior work with year-round interior jobs is complex. Missing calls makes it chaos.",
    },
  ],
  benefits: [
    {
      title: "Capture Every Quote Request",
      description: "From single rooms to whole house exteriors, every opportunity gets captured while you focus on perfect finishes.",
    },
    {
      title: "Clean Hands, Full Schedule",
      description: "Keep painting without paint-phone disasters. System handles all calls professionally while you maintain quality.",
    },
    {
      title: "Intelligent Project Qualification",
      description: "System determines project scope, timeline, and budget expectations, so you only estimate for serious customers.",
    },
    {
      title: "Weather-Smart Scheduling",
      description: "Automatically schedules exterior work during good weather windows, interior work as fill-in during rain.",
    },
    {
      title: "Fast Commercial Response",
      description: "Property managers get immediate attention and quick quotes, helping you land lucrative commercial contracts.",
    },
    {
      title: "Color Consultation Booking",
      description: "Dedicated time slots for color selection keep these important decisions separate from active painting time.",
    },
  ],
  features: [
    {
      title: "Square Footage Calculator",
      description: "Asks room dimensions or house size to provide accurate initial estimates for paint jobs.",
    },
    {
      title: "Surface Prep Assessment",
      description: "Questions about peeling, cracks, or repairs needed to provide realistic quotes including prep work.",
    },
    {
      title: "Paint Grade Options",
      description: "Explains different paint quality levels and pricing, helping customers choose the right option for their budget.",
    },
    {
      title: "Project Timeline Setting",
      description: "Provides realistic timelines based on project size and current schedule, setting proper expectations.",
    },
    {
      title: "Cabinet Refinishing Add-ons",
      description: "Identifies opportunities for cabinet painting and trim work, increasing average project value.",
    },
    {
      title: "HOA Compliance Info",
      description: "For exterior work, asks about HOA requirements and can schedule color approval time if needed.",
    },
    {
      title: "Furniture Moving Coordination",
      description: "Clarifies if customers need furniture moving assistance, adjusting quotes and scheduling accordingly.",
    },
    {
      title: "Multi-Unit Management",
      description: "Handles apartment complexes and multi-unit properties, scheduling phases to minimize tenant disruption.",
    },
    {
      title: "Touch-Up Warranty Service",
      description: "Schedules warranty touch-ups for past customers, maintaining relationships and generating referrals.",
    },
  ],
  testimonial: {
    text: "I was losing big exterior jobs because I couldn't answer the phone while spraying. Now I'm booked 8 weeks out with a mix of residential and commercial work. The system even fills my rainy days with interior jobs automatically. Revenue is up 65% and I'm working smarter, not harder.",
    author: "Lisa Anderson",
    business: "Anderson Pro Painting",
    location: "Portland, OR",
    metric: "+65% revenue, 8-week booking pipeline",
  },
  faqs: [
    {
      question: "How does it provide painting estimates?",
      answer: "Based on square footage and surface type, it provides ranges like 'Interior 2,000 sq ft home: $3,000-4,500 depending on prep work needed.'",
    },
    {
      question: "Can it handle both residential and commercial?",
      answer: "Yes. Different pricing structures, timeline discussions, and priority levels for residential versus commercial projects.",
    },
    {
      question: "Does it manage weather-dependent scheduling?",
      answer: "Absolutely. It knows weather requirements for exterior work and automatically suggests appropriate timing or interior alternatives.",
    },
    {
      question: "How does it qualify painting leads?",
      answer: "It asks about project scope, timeline, budget range, and quality expectations to ensure you're estimating for serious buyers.",
    },
    {
      question: "Can it upsell additional services?",
      answer: "Yes. When someone calls for one room, it offers whole-house discounts, cabinet painting, and other services you provide.",
    },
  ],
  icon: <Paintbrush className="h-10 w-10 text-white" />,
  color: "from-purple-500 to-pink-500",
};

export default function PaintersPage() {
  return <TradeLandingTemplate {...painterData} />;
}