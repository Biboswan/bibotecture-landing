import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email, name, type } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Valid email is required" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing email credentials in environment variables");
      return NextResponse.json(
        { message: "Email service configuration error" },
        { status: 500 }
      );
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json(
        { message: "Email service configuration error" },
        { status: 500 }
      );
    }

    // Email content
    const signupType = type === "early-access" ? "Early Access" : "Waitlist";
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.WAITLIST_EMAIL || process.env.CONTACT_EMAIL,
      subject: `New ${signupType} Signup - Chat Coach`,
      text: `
New ${signupType} Signup for Chat Coach

Email: ${email}
Name: ${name || "Not provided"}
Type: ${signupType}
      `,
      html: `
<h2>New ${signupType} Signup for Chat Coach</h2>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Name:</strong> ${name || "Not provided"}</p>
<p><strong>Type:</strong> ${signupType}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Waitlist signup email sent successfully");

    return NextResponse.json(
      { message: "Successfully added to waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return NextResponse.json(
      { message: "Failed to add to waitlist" },
      { status: 500 }
    );
  }
}

