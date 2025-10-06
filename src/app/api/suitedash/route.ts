import { NextResponse } from "next/server";
import { SUITEDASH_PUBLIC_ID, SUITEDASH_SECRET_KEY, FORM_SPOOREE_URL } from "../../../lib/server-config";


export async function POST(req: Request) {
  try {
    const formData = await req.json();
    console.log("Received formData:", formData);

    // SuiteDash body: all clients -> Lead role, subject included in message
    const suiteBody = {
      first_name: formData.firstName,
      last_name: formData.surName,
      email: formData.email,
      phone: formData.phone,
      role: "Lead", // all go here
      message: `Subject: ${formData.subject}\n\n${formData.message}`,
    };
    console.log("SuiteDash body:", suiteBody);

    // Send to SuiteDash
    const suiteRes = await fetch("https://app.suitedash.com/secure-api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Public-ID": SUITEDASH_PUBLIC_ID,
        Authorization: `Bearer ${SUITEDASH_SECRET_KEY}`,
      },
      body: JSON.stringify(suiteBody),
    });

    const suiteText = await suiteRes.text();
    console.log("Raw SuiteDash response:", suiteText);

    let suiteData;
    try {
      suiteData = JSON.parse(suiteText);
    } catch {
      suiteData = { success: false, message: "SuiteDash returned invalid JSON" };
    }

    // Send to Formspree
    const formspreeRes = await fetch(FORM_SPOOREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    let formspreeData;
    try {
      formspreeData = await formspreeRes.json();
    } catch {
      formspreeData = { success: false, message: "Formspree returned invalid JSON" };
    }

    // Return combined structured response
    return NextResponse.json({
      success: suiteData.success && formspreeData.success,
      suiteDash: suiteData,
      formspree: formspreeData,
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({
      success: false,
      message: (error as Error).message,
    });
  }
}
