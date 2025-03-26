
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const adminEmail = "sotsnetwork001@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConsultationRequest {
  name: string;
  email: string;
  company?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message }: ConsultationRequest = await req.json();

    // Save to the database (this is handled by the front-end)
    // Now send email notification to admin
    const emailResponse = await resend.emails.send({
      from: "SOTS Network Consultation <onboarding@resend.dev>",
      to: [adminEmail],
      subject: `New Consultation Request from ${name}`,
      html: `
        <h1>New Consultation Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not specified"}</p>
        <p><strong>Message:</strong> ${message || "Not provided"}</p>
        <p>Please respond to this request at your earliest convenience.</p>
      `,
    });

    // Also send a confirmation email to the user
    await resend.emails.send({
      from: "SOTS Network <onboarding@resend.dev>",
      to: [email],
      subject: "Your Consultation Request Has Been Received",
      html: `
        <h1>Thank you for reaching out, ${name}!</h1>
        <p>We've received your consultation request and will get back to you as soon as possible.</p>
        <p>You can also schedule a meeting directly via our <a href="https://calendly.com/sotsnetwork/30min">Calendly</a>.</p>
        <p>Best regards,<br>The SOTS Network Team</p>
      `,
    });

    console.log("Email notification sent successfully to admin:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-consultation-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
