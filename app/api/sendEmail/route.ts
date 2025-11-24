import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company, name, email, message, projectType } = body;


    const htmlLead = `
      <p><strong>Firma:</strong> ${company}</p>
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
    html: `

    ${ company ? `<p><strong>Firma:</strong> ${company}</p>` : "" }

    <p>Hallo ${name},</p>
    <p>vielen Dank für Ihre Anfrage bei Modio Studio!</p>
    <p>Wir haben Ihre Angaben zu Ihrem Projekt erhalten und prüfen diese zeitnah. Einer unserer Berater wird sich innerhalb der nächsten 24 Stunden bei Ihnen melden.</p>

    <p><strong>Projekttyp:</strong> ${projectType}</p>

    <p>Vielen Dank für Ihr Vertrauen – wir freuen uns auf die Zusammenarbeit!</p>
    <p>Beste Grüße,<br/>Ihr Modio Studio Team</p>

    <address>
    <p>Email: <a href="mailto:hello@modio.studio">hello@modio.studio</a></p>
    <p>Telefon: +49 175 6903615</p>
    <p>Web: <a href="https://www.modio.studio">www.modio.studio</a></p>
    </address>
    `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Fehler beim Senden" }, { status: 500 });
  }
}
