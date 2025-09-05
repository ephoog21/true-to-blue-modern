import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Bug } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Pest Control - Manage Service Calls Efficiently",
  description: "Smart voice assistant for pest control companies. Handle emergency infestations, schedule routine treatments, and manage service routes while you're treating properties. Grow your recurring revenue.",
  keywords: ["pest control software", "exterminator answering service", "pest control voice assistant", "pest management automation", "exterminator scheduling", "pest control business"],
};

const pestControlData = {
  trade: "Pest Control",
  headline: "Eliminate Missed Calls, Exterminate Lost Revenue",
  subheadline: "Smart voice assistants that handle pest emergencies, schedule treatments, and manage service contracts while you're keeping properties pest-free.",
  painPoints: [
    {
      title: "Panic Call Overload",
      description: "Customers with wasps, rats, or bedbugs are panicking. They call everyone until someone answers. You're losing to faster responders.",
    },
    {
      title: "Chemical Safety Focus Required",
      description: "Mixing chemicals and handling calls is dangerous. But missing calls means losing customers to competitors.",
    },
    {
      title: "Seasonal Surge Chaos",
      description: "Spring brings ants, summer brings wasps, fall brings rodents. Your phone explodes while you're already booked solid.",
    },
    {
      title: "Contract Renewal Losses",
      description: "Quarterly treatment customers forget to renew. By the time you follow up, they've switched to a competitor who called first.",
    },
    {
      title: "Emergency vs Routine Triage",
      description: "Wasp nest by the playground is urgent. Ants in the garage can wait. But you can't determine priority if you can't answer.",
    },
    {
      title: "Commercial Account Demands",
      description: "Restaurants and hotels need immediate response for compliance. Missing their calls means losing huge contracts.",
    },
  ],
  benefits: [
    {
      title: "Capture Panic Calls Instantly",
      description: "When customers see pests, they want help NOW. System answers immediately, calms them down, and books service.",
    },
    {
      title: "Safe Chemical Handling",
      description: "Focus completely on proper chemical mixing and application without phone distractions. Complete jobs safer.",
    },
    {
      title: "Master Seasonal Demands",
      description: "Handle unlimited calls during pest season surges. Every opportunity captured and scheduled efficiently.",
    },
    {
      title: "Protect Recurring Revenue",
      description: "Automatically contacts customers for quarterly treatments, annual renewals, and preventive services.",
    },
    {
      title: "Smart Emergency Response",
      description: "Stinging insects near kids get priority. Silverfish in the basement schedule for next opening. System knows the difference.",
    },
    {
      title: "Commercial Compliance Priority",
      description: "Restaurant and healthcare facility calls get VIP treatment, protecting your most valuable contracts.",
    },
  ],
  features: [
    {
      title: "Pest Identification Help",
      description: "Asks right questions about size, color, location to identify pest type and urgency level.",
    },
    {
      title: "Infestation Severity Assessment",
      description: "Determines if it's a few ants or a full infestation, scheduling appropriate response time.",
    },
    {
      title: "Treatment History Tracking",
      description: "Knows when properties were last treated, what for, and when they're due for service.",
    },
    {
      title: "Pet Safety Information",
      description: "Collects info about pets and children for safe treatment planning and scheduling.",
    },
    {
      title: "Preparation Instructions",
      description: "Provides customers with prep requirements for different treatments while booking appointments.",
    },
    {
      title: "Warranty Service Management",
      description: "Handles callbacks within warranty period differently than new infestations.",
    },
    {
      title: "Seasonal Service Campaigns",
      description: "Proactively offers mosquito, termite, or holiday light treatments at the right times.",
    },
    {
      title: "Property Size Estimator",
      description: "Asks about square footage and yard size for accurate treatment quotes.",
    },
    {
      title: "Compliance Documentation",
      description: "For commercial clients, confirms service meets health department requirements.",
    },
  ],
  testimonial: {
    text: "Last spring we had 300 ant calls in one week. The system handled every single one, scheduled them efficiently by neighborhood, and we serviced them all. Plus, our contract renewal rate went from 60% to 85% with automatic follow-ups. This system literally saved my business.",
    author: "Jennifer Rodriguez",
    business: "Shield Pest Solutions",
    location: "Tampa, FL",
    metric: "+85% contract renewal rate",
  },
  faqs: [
    {
      question: "How does it identify pest emergencies?",
      answer: "It asks about pest type, location (near food/children), and severity. Stinging insects and rodents in living spaces get priority.",
    },
    {
      question: "Can it quote pest control treatments?",
      answer: "Yes, for standard treatments based on pest type and property size. Complex infestations get free inspection scheduling.",
    },
    {
      question: "Does it manage recurring service contracts?",
      answer: "Absolutely. It tracks quarterly treatments, sends renewal reminders, and automatically schedules recurring services.",
    },
    {
      question: "How does it handle seasonal demand?",
      answer: "Unlimited call capacity means you never miss opportunities during ant season or wasp season. All calls get professional service.",
    },
    {
      question: "Can it differentiate residential from commercial?",
      answer: "Yes. Commercial accounts, especially food service and healthcare, get priority scheduling and compliance documentation.",
    },
  ],
  icon: <Bug className="h-10 w-10 text-white" />,
  color: "from-green-600 to-lime-600",
};

export default function PestControlPage() {
  return <TradeLandingTemplate {...pestControlData} />;
}