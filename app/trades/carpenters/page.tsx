import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Carpenters - Turn Inquiries into Custom Projects",
  description: "Smart voice assistant for carpentry businesses. Capture custom project leads, schedule consultations, and provide estimates while you're measuring, cutting, and building. Never miss another high-value custom job.",
  keywords: ["carpenter software", "carpentry answering service", "carpenter voice assistant", "custom woodworking leads", "carpentry scheduling software", "cabinet maker automation"],
};

const carpenterData = {
  trade: "Carpenters",
  headline: "Build Your Business While Building Their Dreams",
  subheadline: "Smart voice assistants that capture custom project leads, schedule consultations, and qualify customers while your hands are full with wood and tools.",
  painPoints: [
    {
      title: "Sawdust and Smartphones Don't Mix",
      description: "Your hands are covered in sawdust, glue, or stain. That ringing phone could be a $20,000 kitchen remodel, but you can't answer.",
    },
    {
      title: "Custom Quote Complexity",
      description: "Every project is different. Explaining options and pricing while trying to work is impossible, so opportunities slip away.",
    },
    {
      title: "Tool Noise Blocking Calls",
      description: "Table saws, routers, and sanders mean you don't even hear the phone. Customers think you're ignoring them.",
    },
    {
      title: "High-Value Leads Lost",
      description: "Custom built-ins and whole-home renovations are career-making jobs. Missing those calls to competitors hurts deeply.",
    },
    {
      title: "Material Cost Fluctuations",
      description: "Lumber prices change weekly. Quoting jobs with outdated pricing means losing money or customers.",
    },
    {
      title: "Consultation Time Waste",
      description: "Driving to quote a simple shelf when they want IKEA prices wastes half your day. You need better lead qualification.",
    },
  ],
  benefits: [
    {
      title: "Capture Every Custom Project",
      description: "From built-in bookcases to kitchen remodels, every inquiry is captured professionally while you focus on craftsmanship.",
    },
    {
      title: "Intelligent Lead Qualification",
      description: "System determines budget range and project scope, so you only visit serious customers ready to invest in quality.",
    },
    {
      title: "Dust-Free Communication",
      description: "Keep working with dirty hands. Customers get professional responses while you maintain focus on precision work.",
    },
    {
      title: "Portfolio Presentation",
      description: "System can describe your past projects and specialties, building customer confidence before you even meet.",
    },
    {
      title: "Material Cost Updates",
      description: "Keep pricing current with market rates. System provides accurate ranges based on this week's lumber costs.",
    },
    {
      title: "Design Consultation Booking",
      description: "Complex projects get proper consultation time blocked in your calendar, with buffer time for travel and preparation.",
    },
  ],
  features: [
    {
      title: "Project Scope Assessment",
      description: "Asks detailed questions about project type, size, timeline, and budget to qualify leads effectively.",
    },
    {
      title: "Custom vs Production Filter",
      description: "Identifies customers wanting custom craftsmanship versus those needing basic repairs or IKEA assembly.",
    },
    {
      title: "Material Preference Gathering",
      description: "Collects wood type preferences, finish options, and hardware choices for accurate initial estimates.",
    },
    {
      title: "Portfolio Matching",
      description: "Describes relevant past projects based on what customer wants, building confidence in your expertise.",
    },
    {
      title: "Timeline Expectation Setting",
      description: "Explains realistic timelines for custom work, filtering out customers needing immediate completion.",
    },
    {
      title: "Deposit and Payment Terms",
      description: "Explains your payment structure and deposit requirements, ensuring financial alignment upfront.",
    },
    {
      title: "Measurement Scheduling",
      description: "Books time for detailed measurements with reminders for customers to clear access to work areas.",
    },
    {
      title: "Subcontractor Coordination",
      description: "For larger projects, indicates if electrical or plumbing work might be needed, setting proper expectations.",
    },
    {
      title: "Warranty Information",
      description: "Explains your craftsmanship warranty and maintenance requirements for different wood types and finishes.",
    },
  ],
  testimonial: {
    text: "I landed three whole-home custom cabinet projects in my first month using this system. While I was installing crown molding, it was qualifying leads and booking consultations. My average project value went from $3,000 to $8,500 because I'm only meeting with serious buyers now.",
    author: "David Martinez",
    business: "Martinez Custom Woodworks",
    location: "Denver, CO",
    metric: "+$180,000 in custom projects booked",
  },
  faqs: [
    {
      question: "How does it qualify custom carpentry leads?",
      answer: "It asks about project scope, timeline, budget range, and quality expectations. You only visit customers who understand custom work's value and investment.",
    },
    {
      question: "Can it provide estimates for custom work?",
      answer: "It provides ranges based on similar past projects. 'Custom kitchen cabinets typically run $15,000-30,000 depending on size and materials.'",
    },
    {
      question: "Does it handle both residential and commercial?",
      answer: "Yes. It can differentiate between homeowner remodels and commercial buildouts, applying appropriate pricing and timeline discussions.",
    },
    {
      question: "How does it explain the custom process?",
      answer: "It walks customers through your design, approval, build, and installation phases, setting proper expectations for custom work.",
    },
    {
      question: "Can it book multiple appointment types?",
      answer: "Yes. Quick measurements, design consultations, and installation appointments all get appropriate time blocks in your calendar.",
    },
  ],
  icon: <Hammer className="h-10 w-10 text-white" />,
  color: "from-amber-500 to-orange-500",
};

export default function CarpentersPage() {
  return <TradeLandingTemplate {...carpenterData} />;
}