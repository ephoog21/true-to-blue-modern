import { Metadata } from "next";
import TradeLandingTemplate from "@/components/TradeLandingTemplate";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Solutions for Cleaning Services - Book More Jobs Automatically",
  description: "Smart voice assistant for cleaning businesses. Handle booking requests, manage recurring clients, and provide instant quotes while you're cleaning. Never miss another booking opportunity.",
  keywords: ["cleaning service software", "maid service answering", "cleaning business automation", "house cleaning scheduling", "commercial cleaning software", "janitorial service automation"],
};

const cleaningData = {
  trade: "Cleaning Services",
  headline: "Clean Houses, Clear Schedule, Full Calendar",
  subheadline: "Smart voice assistants that book appointments, manage recurring clients, and handle quote requests while your hands are full with mops and vacuums.",
  painPoints: [
    {
      title: "Gloves On, Phone Ringing",
      description: "Your hands are covered in cleaning products. That call could be a new weekly client worth $500/month, but you can't answer.",
    },
    {
      title: "Last-Minute Cancellation Chaos",
      description: "When clients cancel, you need to fill that slot immediately. But you're cleaning and can't work the phones to fill gaps.",
    },
    {
      title: "Move-Out Cleaning Gold Rush",
      description: "End-of-month move-outs are your highest-paying jobs. While cleaning one, you're missing five more calling for quotes.",
    },
    {
      title: "Recurring Client Management",
      description: "Managing weekly, bi-weekly, and monthly schedules is a full-time job. One mix-up and clients lose trust.",
    },
    {
      title: "Price Shopping Time Waste",
      description: "Everyone wants detailed quotes for different room counts and services. Explaining while scrubbing is impossible.",
    },
    {
      title: "Commercial Contract Losses",
      description: "Office buildings need immediate quotes and fast response. You're missing these lucrative contracts while cleaning homes.",
    },
  ],
  benefits: [
    {
      title: "Book While You Clean",
      description: "Keep those gloves on and focus on quality. System handles all booking requests and fills your calendar automatically.",
    },
    {
      title: "Instant Cancellation Recovery",
      description: "When someone cancels, system immediately offers that slot to waiting list clients, minimizing lost revenue.",
    },
    {
      title: "Capture High-Value Jobs",
      description: "Move-out cleanings, post-construction, and deep cleans get booked instantly with appropriate pricing.",
    },
    {
      title: "Perfect Schedule Management",
      description: "Never double-book or miss recurring appointments. System manages complex schedules flawlessly.",
    },
    {
      title: "Instant Accurate Quotes",
      description: "'3-bedroom house? Regular cleaning is $120-150, deep clean is $250-300. Let me book your first cleaning.'",
    },
    {
      title: "Win Commercial Contracts",
      description: "Immediate response to commercial inquiries with professional quotes, helping you land office and retail contracts.",
    },
  ],
  features: [
    {
      title: "Home Size Calculator",
      description: "Asks bedrooms, bathrooms, and square footage to provide accurate instant quotes.",
    },
    {
      title: "Service Package Builder",
      description: "Offers standard, deep clean, move-out, and add-ons like inside ovens or windows.",
    },
    {
      title: "Recurring Schedule Manager",
      description: "Sets up weekly, bi-weekly, or monthly schedules with automatic confirmations.",
    },
    {
      title: "Supply Preference Tracking",
      description: "Notes if clients want eco-friendly products or have specific supply preferences.",
    },
    {
      title: "Access Instructions Collection",
      description: "Gathers door codes, key locations, and parking info for smooth service delivery.",
    },
    {
      title: "Pet Information Gathering",
      description: "Collects details about pets for safety and to offer pet hair removal services.",
    },
    {
      title: "Priority Waitlist System",
      description: "When booked, adds clients to waitlist and automatically offers cancellation slots.",
    },
    {
      title: "Team Assignment Logic",
      description: "If you have crews, routes calls to appropriate team based on location and availability.",
    },
    {
      title: "Quality Follow-Up Scheduling",
      description: "Books check-in calls after first cleaning to ensure satisfaction and lock in recurring service.",
    },
  ],
  testimonial: {
    text: "I went from 15 clients to 80 clients in four months. The system books everything while I clean, manages my whole schedule, and even fills last-minute cancellations. I'm working the same hours but making 3x the money. My family actually sees me now.",
    author: "Maria Santos",
    business: "Sparkle Clean Solutions",
    location: "Chicago, IL",
    metric: "+65 recurring clients, $8,000/month increase",
  },
  faqs: [
    {
      question: "How does it handle pricing for different services?",
      answer: "Based on home size and service type, it provides instant quotes. Standard cleaning, deep cleaning, and move-out cleaning all have different rates you set.",
    },
    {
      question: "Can it manage recurring schedules?",
      answer: "Yes! It handles weekly, bi-weekly, and monthly clients, sends reminders, and automatically adjusts for holidays or requests.",
    },
    {
      question: "Does it handle last-minute bookings?",
      answer: "Absolutely. It knows your availability and can book same-day or next-day service with appropriate rush pricing.",
    },
    {
      question: "How does it deal with cancellations?",
      answer: "When someone cancels, it immediately offers that slot to waitlist clients, often filling the spot within minutes.",
    },
    {
      question: "Can it quote commercial cleaning?",
      answer: "Yes. It gathers square footage, frequency needs, and service requirements for accurate commercial quotes.",
    },
  ],
  icon: <Sparkles className="h-10 w-10 text-white" />,
  color: "from-pink-500 to-rose-500",
};

export default function CleaningServicesPage() {
  return <TradeLandingTemplate {...cleaningData} />;
}