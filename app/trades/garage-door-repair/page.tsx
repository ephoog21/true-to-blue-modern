import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Garage Door Repair - Handle Emergency Calls 24/7",
  description: "Smart voice assistant for garage door repair businesses. Manage stuck door emergencies, schedule spring replacements, and provide instant quotes. Never miss another urgent call while you're under a door.",
  keywords: ["garage door repair software", "garage door answering service", "garage door voice assistant", "emergency garage door calls", "garage door scheduling", "overhead door automation"],
};

const garageDoorData = {
  trade: "Garage Door Repair",
  headline: "Open More Doors to Revenue",
  subheadline: "Smart voice assistants that handle emergency stuck-door calls, schedule repairs, and quote replacements while you're elbow-deep in springs and cables.",
  painPoints: [
    {
      title: "Stuck Door Emergencies",
      description: "Cars trapped inside or homes unsecured - these are panic calls worth big money, but you're under another door and can't answer.",
    },
    {
      title: "Dangerous Work Interruptions",
      description: "Taking calls while handling high-tension springs isn't just inconvenient - it's potentially fatal. Focus saves lives.",
    },
    {
      title: "Opener vs Spring Confusion",
      description: "Customers don't know if they need a $100 sensor adjustment or $800 spring replacement. Explaining while working is impossible.",
    },
    {
      title: "After-Hours Security Issues",
      description: "Broken doors at night are security emergencies. You need rest, but missing these calls means losing premium-rate jobs.",
    },
    {
      title: "New Door Quote Delays",
      description: "Full door replacements are your biggest tickets. By the time you measure and quote, customers bought from faster competitors.",
    },
    {
      title: "Builder Bulk Orders Lost",
      description: "Contractors need 50 doors installed yesterday. While you're fixing one door, you're missing these game-changing contracts.",
    },
  ],
  benefits: [
    {
      title: "Capture Every Emergency",
      description: "Stuck doors and security issues get immediate attention. Routine maintenance schedules for normal hours. You handle what matters.",
    },
    {
      title: "Safe, Focused Repairs",
      description: "Work with dangerous springs and heavy doors without distraction. Complete jobs safer and faster without phone interruptions.",
    },
    {
      title: "Instant Diagnostic Triage",
      description: "System asks right questions: 'Is it making noise? Does remote work?' Determines likely issue and provides accurate estimate ranges.",
    },
    {
      title: "24/7 Security Response",
      description: "Broken doors at 2 AM get handled professionally. Real emergencies reach you; others schedule for premium morning rates.",
    },
    {
      title: "Quick Replacement Quotes",
      description: "Standard door sizes get instant ballpark quotes. 'Double car insulated? That's typically $1,800-2,500 installed.'",
    },
    {
      title: "Commercial Account Growth",
      description: "Capture property managers and builders needing bulk installations. System recognizes and prioritizes these golden opportunities.",
    },
  ],
  features: [
    {
      title: "Emergency Assessment",
      description: "Determines if door is stuck open (security issue) or closed (car trapped) to properly prioritize response.",
    },
    {
      title: "Brand & Model Database",
      description: "Knows common opener brands and can provide compatibility information for replacements and repairs.",
    },
    {
      title: "Spring Type Identification",
      description: "Asks about door weight and spring location to identify torsion vs extension, providing accurate repair estimates.",
    },
    {
      title: "Safety Sensor Troubleshooting",
      description: "Provides basic sensor cleaning instructions while booking service, potentially solving issue before you arrive.",
    },
    {
      title: "Noise Diagnostic Questions",
      description: "Grinding, squeaking, or popping sounds indicate different issues. System asks right questions for accurate diagnosis.",
    },
    {
      title: "Warranty Verification",
      description: "Tracks warranties on your installations and informs customers if repairs might be covered.",
    },
    {
      title: "Commercial Service Levels",
      description: "Different response times and pricing for residential vs commercial clients, maximizing revenue opportunities.",
    },
    {
      title: "Preventive Maintenance Sales",
      description: "Offers annual service agreements after repairs, turning one-time fixes into recurring revenue.",
    },
    {
      title: "Code Compliance Updates",
      description: "Informs customers about safety requirements like photo eyes and auto-reverse, creating upgrade opportunities.",
    },
  ],
  testimonial: {
    text: "My phone used to ring non-stop while I was wrestling with springs. Now I complete repairs faster and safer, while the system books my next five jobs. Last month I landed a 100-home builder contract I would have missed. Revenue is up 70% and my stress is gone.",
    author: "Kevin Thompson",
    business: "Thompson Overhead Doors",
    location: "Houston, TX",
    metric: "+$35,000/month, 100-home builder contract secured",
  },
  faqs: [
    {
      question: "How does it identify garage door emergencies?",
      answer: "It asks if cars are trapped, if the door is stuck open (security risk), or if it's a business preventing operation. True emergencies get immediate response.",
    },
    {
      question: "Can it diagnose specific problems?",
      answer: "It asks diagnostic questions about symptoms, sounds, and remote function to identify likely issues and provide accurate estimate ranges.",
    },
    {
      question: "Does it handle both repair and replacement?",
      answer: "Yes. It can quote simple repairs, spring replacements, opener installations, and complete door replacements based on your pricing.",
    },
    {
      question: "How does it manage after-hours calls?",
      answer: "You set the rules. Security emergencies might warrant immediate response. Non-urgent issues schedule for next-day premium rates.",
    },
    {
      question: "Can it handle commercial accounts?",
      answer: "Absolutely. It recognizes property managers and contractors, prioritizes their calls, and can handle bulk installation quotes.",
    },
  ],
  icon: <Home className="h-10 w-10 text-white" />,
  color: "from-gray-500 to-slate-500",
};

export default function GarageDoorRepairPage() {
  return <TradeLandingTemplate {...garageDoorData} />;
}