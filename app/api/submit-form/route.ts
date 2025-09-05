import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ["businessName", "ownerName", "email", "phone", "tradeType", "businessSize", "location"];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Format the submission data
    const submission = {
      ...data,
      submittedAt: new Date().toISOString(),
      source: "website",
      status: "new",
    };

    // In production, you would store this in a database
    // For now, we'll log it and send to a webhook if configured
    console.log("New form submission:", submission);

    // If webhook URL is configured, send the data there
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submission),
        });
      } catch (webhookError) {
        console.error("Webhook error:", webhookError);
        // Don't fail the request if webhook fails
      }
    }

    // Send email notification if configured
    if (process.env.NOTIFICATION_EMAIL) {
      // In production, integrate with an email service
      console.log(`Email notification would be sent to: ${process.env.NOTIFICATION_EMAIL}`);
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        submissionId: Math.random().toString(36).substring(7),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}