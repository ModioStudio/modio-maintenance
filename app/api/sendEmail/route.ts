import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, projectType, modules } = body;

    const modulesList = modules?.length
      ? `<ul>${modules.map((m: string) => `<li>${m}</li>`).join("")}</ul>`
      : "<p>Keine Module ausgewählt</p>";

    const htmlLead = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Projekttyp:</strong> ${projectType}</p>
      <p><strong>Module:</strong> ${modulesList}</p>
      <p><strong>Nachricht:</strong><br/>${message}</p>
    `;

    await resend.emails.send({
      from: "lead@modio.studio",
      to: "hello@modio.studio",
      subject: `Neue Projektanfrage: ${projectType}`,
      html: htmlLead,
    });

    await resend.emails.send({
    from: "hello@modio.studio",
    to: email,
    subject: "Ihre Projektanfrage ist eingegangen",
    html: `
        <p>Hallo ${name},</p>
        <p>vielen Dank für Ihre Anfrage bei Modio Studio!</p>
        <p>Wir haben Ihre Angaben zu Ihrem Projekt erhalten und prüfen diese zeitnah. Einer unserer Berater wird sich innerhalb der nächsten 24 Stunden bei Ihnen melden.</p>
        <p>Ihr ausgewählter Projekttyp: <strong>${projectType}</strong></p>
        <p>Ihre ausgewählten Module: ${
        modules?.length
            ? `<ul>${modules.map((m: string) => `<li>${m}</li>`).join("")}</ul>`
            : "<em>Keine Module ausgewählt</em>"
        }</p>
        <p>Vielen Dank für Ihr Vertrauen – wir freuen uns auf die Zusammenarbeit!</p>
        <p>Beste Grüße,<br/>Ihr Modio Studio Team</p>
    `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Fehler beim Senden" }, { status: 500 });
  }
}
