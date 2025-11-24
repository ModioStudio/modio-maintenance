
import { Html, Heading, Text, Container, Section, Button, Img } from "@react-email/components";

type Props = {
  name: string;
  projectType: string;
};

export default function NoReplayEmail({ name, projectType }: Props) {
  return (
    <Html>
      <Container
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#fbfbfb",
          padding: "24px",
          fontFamily: "Arial, sans-serif",
        }}
      >

        <Section
          style={{
            backgroundColor: "#0a0a0a",
            borderRadius: "12px",
            textAlign: "center",
            padding: "32px 0",
            marginBottom: "32px",
          }}
        >
            <Img
            src="https://www.modio.studio/images/logo.png"
            alt="Modio Studio"
            width="120"
            height="120"
            style={{ display: "inline-block" }}
          />
          <Heading style={{ color: "#fbfbfb", fontSize: "28px", margin: 0 }}>
            Vielen Dank für Ihre Anfrage!
          </Heading>
        </Section>

        <Section style={{ textAlign: "center", marginBottom: "32px" }}>
          <Heading style={{ fontSize: "20px", margin: "0 0 12px 0" }}>
            Zusammenfassung Ihrer Anfrage
          </Heading>
        </Section>

        <Text className="text-gray-900 text-base mb-4">
        Hallo {name},
        </Text>

        <Text className="text-gray-900 text-base mb-6">
        vielen Dank für Ihre Anfrage bei Modio Studio! 
        Wir haben Ihre Angaben zu Ihrem Projekt erhalten und kümmern uns direkt darum.
        <br /><br />
        Innerhalb der nächsten 24 Stunden meldet sich ein Berater persönlich bei Ihnen.
        </Text>

        <Section style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              border: "1px solid #ccc",
              display: "inline-block",
              padding: "12px 20px",
              borderRadius: "8px",
              backgroundColor: "#fbfbfb",
              fontSize: "15px",
            }}
          >
            <strong>📦 Paket:</strong> {projectType}
          </div>



        </Section>

        <Section style={{ textAlign: "center", marginBottom: "20px" }}>
          <Container
            style={{
              backgroundColor: "#f3f3f3",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <Heading style={{ fontSize: "18px", margin: "0 0 8px 0" }}>
              Noch offene Fragen?
            </Heading>

            <Text style={{ fontSize: "15px", margin: "0" }}>
              Schreiben Sie uns jederzeit — wir helfen gerne weiter.
            </Text>
          </Container>

          <Button
            href="mailto:hello@modio.studio"
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "16px",
              display: "inline-block",
            }}
          >
            Kontakt aufnehmen
          </Button>

          <Text style={{ marginTop: "12px", fontSize: "12px", color: "#666" }}>
           <a href="www.modio.studio"> www.modio.studio </a>
          </Text>
        </Section>

      </Container>
    </Html>
  );
}
