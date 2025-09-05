import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Auto Repair Shops - Never Miss Another Customer",
  description: "Smart voice assistant for auto repair businesses. Handle appointment scheduling, provide repair estimates, and manage emergency breakdowns while you're under the hood. Keep your bays full and customers happy.",
  keywords: ["auto repair software", "mechanic answering service", "auto shop voice assistant", "car repair scheduling", "mechanic shop automation", "automotive business software"],
};

const autoRepairData = {
  trade: "Auto Repair",
  headline: "Keep Your Bays Full and Customers Rolling",
  subheadline: "Smart voice assistants that schedule appointments, provide repair estimates, and handle emergency breakdowns while you're under the hood keeping cars on the road.",
  painPoints: [
    {
      title: "Grease and Phones Don't Mix",
      description: "Your hands are covered in oil and grease. That ringing phone is a customer needing service, but you can't stop mid-repair.",
    },
    {
      title: "Diagnostic Time vs Phone Time",
      description: "Modern cars need computer diagnostics and careful inspection. Constant phone interruptions mean mistakes and comebacks.",
    },
    {
      title: "Emergency vs Maintenance Chaos",
      description: "Breakdowns need immediate attention. Oil changes can wait. But every caller thinks their issue is urgent.",
    },
    {
      title: "Parts Availability Questions",
      description: "Customers call asking if you have their part in stock while you're wrestling with a transmission. By the time you check, they're gone.",
    },
    {
      title: "Estimate Accuracy Pressure",
      description: "Quoting repairs without seeing the car leads to angry customers. But they want prices NOW or they'll call someone else.",
    },
    {
      title: "Fleet Account Management",
      description: "Local businesses need priority service for their vehicles. Missing their calls means losing lucrative fleet contracts.",
    },
  ],
  benefits: [
    {
      title: "Fill Your Schedule Automatically",
      description: "System books appointments based on repair type and bay availability. Your schedule stays full without you touching the phone.",
    },
    {
      title: "Focus on Diagnostics",
      description: "Complete complex repairs without interruption. Better diagnosis means accurate repairs and happy customers.",
    },
    {
      title: "Smart Triage System",
      description: "No-start conditions get priority. Squeaky brakes schedule for next available slot. System knows the difference.",
    },
    {
      title: "Instant Common Estimates",
      description: "'Brake job for a 2018 Honda Accord? That's typically $300-400 per axle. Let me schedule your free inspection.'",
    },
    {
      title: "Parts Check Integration",
      description: "System knows common parts you stock and typical availability timelines, setting proper expectations.",
    },
    {
      title: "Fleet Priority Handling",
      description: "Recognizes commercial accounts and ensures their vehicles get VIP treatment, protecting your best revenue.",
    },
  ],
  features: [
    {
      title: "Vehicle Information Collection",
      description: "Gathers year, make, model, mileage, and symptoms for accurate scheduling and parts preparation.",
    },
    {
      title: "Symptom-Based Scheduling",
      description: "Different symptoms get different time slots. Check engine lights get diagnostic time, oil changes get quick-service slots.",
    },
    {
      title: "Warranty Status Check",
      description: "Asks about extended warranties and can explain what your shop warranties cover for return customers.",
    },
    {
      title: "Loaner Car Management",
      description: "If you offer loaners, system manages availability and schedules accordingly for longer repairs.",
    },
    {
      title: "Maintenance Schedule Reminders",
      description: "Tracks customer service history and proactively offers oil changes and scheduled maintenance.",
    },
    {
      title: "Towing Coordination",
      description: "For breakdowns, can arrange towing or provide directions to your shop location.",
    },
    {
      title: "Multi-Bay Scheduling",
      description: "Knows your bay capabilities and schedules appropriately - alignments in the alignment bay, oil changes in quick-lube.",
    },
    {
      title: "Parts Ordering Timeline",
      description: "Explains typical parts availability and can schedule repairs once parts arrive.",
    },
    {
      title: "Recall Information Service",
      description: "Can inform customers about open recalls on their vehicles, creating service opportunities.",
    },
  ],
  testimonial: {
    text: "Running a shop with 6 techs meant I was answering phones all day instead of fixing cars. Now the system keeps all bays full, customers get instant service, and I landed three fleet accounts worth $15,000/month. My techs are more productive and customers love the professional service.",
    author: "Roberto Sanchez",
    business: "Sanchez Auto Care",
    location: "Phoenix, AZ",
    metric: "+40% bay utilization, 3 new fleet accounts",
  },
  faqs: [
    {
      question: "How does it provide repair estimates?",
      answer: "For common repairs on common vehicles, it provides typical price ranges based on your pricing. Complex issues get scheduled for diagnostic inspection.",
    },
    {
      question: "Can it handle multiple service types?",
      answer: "Yes. Quick lube, major repairs, diagnostics, and specialty services like alignments all get appropriate scheduling and pricing.",
    },
    {
      question: "Does it manage appointment reminders?",
      answer: "Absolutely. It sends reminders for upcoming appointments and follow-ups for recommended services, keeping your schedule full.",
    },
    {
      question: "How does it prioritize emergency repairs?",
      answer: "No-start conditions, safety issues, and fleet vehicles get priority. Maintenance and non-urgent repairs fill regular slots.",
    },
    {
      question: "Can it track customer vehicle history?",
      answer: "Yes. It remembers previous services and can reference past work when scheduling new appointments or discussing warranties.",
    },
  ],
  icon: <Car className="h-10 w-10 text-white" />,
  color: "from-red-500 to-pink-500",
};

export default function AutoRepairPage() {
  return <TradeLandingTemplate {...autoRepairData} />;
}