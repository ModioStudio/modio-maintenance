// =========================
// FILE: src/app/api/contact/route.ts
// =========================

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import NoReplayEmail from "@/emails/noReplay";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company, name, email, message, projectType } = body;


    const htmlLead = `
      ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ""}
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Projekttyp:</strong> ${projectType}</p>
      <p><strong>Nachricht:</strong><br/>${message}</p>
    `;

    await resend.emails.send({
      from: "lead@modio.studio",
      to: "hello@modio.studio",
      subject: `Neue Projektanfrage: ${projectType}`,
      html: htmlLead,
    });

    await resend.emails.send({
      from: "no-replay@modio.studio",
      to: email,
      subject: "Ihre Projektanfrage ist eingegangen",

      react: NoReplayEmail({
        name,
        projectType,
      }),

        text: `
        Hallo ${name},

        vielen Dank für Ihre Anfrage bei Modio Studio! 
        Wir haben Ihre Angaben erhalten und kümmern uns direkt darum. 
        Innerhalb der nächsten 24 Stunden wird sich einer unserer Berater persönlich bei Ihnen melden.

        --- Ihre Anfrage im Überblick ---
        - Gewähltes Paket: ${projectType}

        --- Kontakt ---
        Sollten Sie vorab Fragen haben, erreichen Sie uns jederzeit unter:
        Modio Studio
        E-Mail: hello@modio.studio
        Telefon: +49 175 6903615

        Vielen Dank für Ihr Vertrauen – wir freuen uns auf die Zusammenarbeit!

        Mit freundlichen Grüßen,
        Ihr Modio Studio Team
        `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Fehler beim Senden" },
      { status: 500 }
    );
  }
}
