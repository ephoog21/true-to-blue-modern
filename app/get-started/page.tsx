"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Building2, User, Briefcase, ChevronRight, Check } from "lucide-react";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  ownerName: z.string().min(2, "Your name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  tradeType: z.string().min(1, "Please select your trade"),
  businessSize: z.string().min(1, "Please select your business size"),
  location: z.string().min(2, "Location is required"),
  currentChallenges: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const trades = [
  "Plumbing",
  "Electrical",
  "HVAC",
  "Landscaping",
  "Carpentry",
  "Garage Door Repair",
  "Auto Repair",
  "Roofing",
  "Painting",
  "General Contracting",
  "Other",
];

const businessSizes = [
  "Just me",
  "2-5 employees",
  "6-10 employees",
  "11-25 employees",
  "26+ employees",
];

export default function GetStarted() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const watchedFields = watch();
  const progress = Object.values(watchedFields).filter(Boolean).length / 7 * 100;

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Welcome to True To Blue!</h1>
          <p className="text-xl text-slate-300 mb-8">
            We&apos;ve received your information and are setting up your account. 
            You&apos;ll receive an email within 5 minutes with your next steps.
          </p>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">What happens next:</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mt-0.5 mr-3" />
                <span className="text-slate-300">You&apos;ll receive a welcome email with your account details</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mt-0.5 mr-3" />
                <span className="text-slate-300">Our team will call you within 24 hours to customize your setup</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mt-0.5 mr-3" />
                <span className="text-slate-300">Your voice assistant will be live within 48 hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Get Your Business 
            <span className="text-blue-400"> Growing</span>
          </h1>
          <p className="text-xl text-slate-300">
            Takes less than 2 minutes. No credit card required.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8"
        >
          <div className="space-y-6">
            {/* Business Information */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Building2 className="h-5 w-5 mr-2 text-blue-400" />
                Business Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Business Name *
                  </label>
                  <input
                    {...register("businessName")}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="ABC Plumbing"
                  />
                  {errors.businessName && (
                    <p className="text-red-400 text-sm mt-1">{errors.businessName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Trade Type *
                  </label>
                  <select
                    {...register("tradeType")}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select your trade</option>
                    {trades.map((trade) => (
                      <option key={trade} value={trade}>
                        {trade}
                      </option>
                    ))}
                  </select>
                  {errors.tradeType && (
                    <p className="text-red-400 text-sm mt-1">{errors.tradeType.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-blue-400" />
                Contact Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    {...register("ownerName")}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="John Smith"
                  />
                  {errors.ownerName && (
                    <p className="text-red-400 text-sm mt-1">{errors.ownerName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Business Phone *
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="john@abcplumbing.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Business Details */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-blue-400" />
                Business Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Business Size *
                  </label>
                  <select
                    {...register("businessSize")}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select size</option>
                    {businessSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  {errors.businessSize && (
                    <p className="text-red-400 text-sm mt-1">{errors.businessSize.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Service Area *
                  </label>
                  <input
                    {...register("location")}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="Dallas, TX"
                  />
                  {errors.location && (
                    <p className="text-red-400 text-sm mt-1">{errors.location.message}</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Current Challenges (Optional)
                </label>
                <textarea
                  {...register("currentChallenges")}
                  rows={3}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="Tell us about your biggest phone/scheduling challenges..."
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg px-8 py-4 rounded-xl transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                "Setting up your account..."
              ) : (
                <>
                  Start Your Free Trial
                  <ChevronRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-slate-400">
            By submitting, you agree to our{" "}
            <a href="/terms" className="text-blue-400 hover:text-blue-300 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
              Privacy Policy
            </a>
          </div>
        </motion.form>
      </div>
    </div>
  );
}