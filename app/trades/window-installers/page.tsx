import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Square } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Window & Door Installers - Capture More Leads",
  description: "Smart voice assistant for window and door installation companies. Handle quote requests, schedule consultations, and manage installations while on job sites. Never miss high-value replacement jobs.",
  keywords: ["window installer software", "door installation scheduling", "window replacement automation", "window contractor software", "door installer voice assistant", "window and door business"],
};

const windowData = {
  trade: "Window & Door Installers",
  headline: "Open the Door to More Revenue",
  subheadline: "Smart voice assistants that capture replacement inquiries, schedule estimates, and manage installations while you're creating perfect fits.",
  painPoints: [
    {
      title: "High-Ticket Calls Missed",
      description: "Window replacement jobs average $5,000-15,000. Missing one call while installing means losing massive revenue.",
    },
    {
      title: "Energy Efficiency Questions",
      description: "Customers want detailed info about U-values, Low-E glass, and energy savings. Can't explain while handling glass.",
    },
    {
      title: "Insurance Claim Opportunities",
      description: "Storm damage and break-ins need immediate response. These high-margin insurance jobs go to whoever answers first.",
    },
    {
      title: "Measurement Appointment Chaos",
      description: "Every quote needs precise measurements. Scheduling these while installing windows is nearly impossible.",
    },
    {
      title: "Builder Package Deals",
      description: "New construction needs 30 windows next week. You're missing these bulk orders while carefully installing singles.",
    },
    {
      title: "Financing Discussion Time",
      description: "Big tickets need financing options explained. These conversations take time you don't have during installations.",
    },
  ],
  benefits: [
    {
      title: "Capture Every High-Value Lead",
      description: "With average jobs worth thousands, missing even one call hurts. System ensures every opportunity is captured.",
    },
    {
      title: "Expert Information Delivery",
      description: "System explains energy ratings, tax credits, and product benefits while you focus on perfect installation.",
    },
    {
      title: "Emergency Response Excellence",
      description: "Storm damage and security issues get immediate attention, helping you land profitable insurance work.",
    },
    {
      title: "Efficient Estimate Scheduling",
      description: "Books measurement appointments with proper gaps between jobs and travel time included.",
    },
    {
      title: "Builder Relationship Growth",
      description: "Instant response to contractor inquiries with volume pricing helps you become their go-to installer.",
    },
    {
      title: "Financing Made Simple",
      description: "Explains payment options, promotional rates, and approval process, making big tickets more achievable.",
    },
  ],
  features: [
    {
      title: "Window Count & Type Collection",
      description: "Gathers number of windows, types (double-hung, casement, etc.), and current condition.",
    },
    {
      title: "Energy Efficiency Education",
      description: "Explains Energy Star ratings, potential utility savings, and available tax credits.",
    },
    {
      title: "Material Options Overview",
      description: "Presents vinyl, fiberglass, wood, and aluminum options with respective price ranges.",
    },
    {
      title: "Emergency Board-Up Service",
      description: "For broken windows, offers immediate temporary solutions while scheduling permanent fixes.",
    },
    {
      title: "Historic Home Specialization",
      description: "Identifies properties needing special compliance or custom manufacturing.",
    },
    {
      title: "Noise Reduction Solutions",
      description: "Discusses soundproof options for customers near airports or highways.",
    },
    {
      title: "Installation Timeline Management",
      description: "Explains manufacturing lead times and installation duration for proper expectations.",
    },
    {
      title: "Warranty Comparison Tool",
      description: "Details manufacturer versus installation warranties for different product lines.",
    },
    {
      title: "Property Value Impact Info",
      description: "Shares ROI data about how new windows affect home values and sale prices.",
    },
  ],
  testimonial: {
    text: "One call came in while I was 30 feet up installing a bay window - it was a whole house replacement worth $28,000. The system handled it perfectly, scheduled the estimate, and we got the job. That single call paid for the service for 10 years.",
    author: "Robert Zhang",
    business: "ClearView Window & Door",
    location: "Boston, MA",
    metric: "$28,000 job captured, 40% close rate increase",
  },
  faqs: [
    {
      question: "Can it provide accurate window replacement quotes?",
      answer: "It provides ranges based on window count, type, and quality level. 'Ten double-hung windows typically run $5,000-8,000 installed.'",
    },
    {
      question: "How does it handle emergency glass replacement?",
      answer: "Identifies security risks and storm damage for immediate response. Can arrange temporary boarding while scheduling permanent repairs.",
    },
    {
      question: "Does it explain energy efficiency benefits?",
      answer: "Yes. It discusses Energy Star ratings, typical utility savings, and available tax credits or rebates in your area.",
    },
    {
      question: "Can it manage both residential and commercial?",
      answer: "Absolutely. Different product lines, code requirements, and pricing for homes versus commercial buildings.",
    },
    {
      question: "How does it handle financing questions?",
      answer: "Explains your financing options, typical approval requirements, and can start the application process.",
    },
  ],
  icon: <Square className="h-10 w-10 text-white" />,
  color: "from-sky-600 to-blue-700",
};

export default function WindowInstallersPage() {
  return <TradeLandingTemplate {...windowData} />;
}