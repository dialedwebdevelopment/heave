import * as React from "react";
import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Text,
    Section,
    Heading,
} from "@react-email/components";

export interface ContactEmailProps {
    name: string;
    phone: string;
    company: string;
    position: string;
    message: string;
}

export const EmailTemplate = ({
    name,
    phone,
    company,
    position,
    message
}: ContactEmailProps) => {
    const containerStyle = {
        margin: "0 auto",
        padding: "0 1.25rem",
        marginTop: "1.25rem",
        marginBottom: "3rem",
    };

    const hrStyle = {
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
        border: "1px solid #e5e5e5",
    };

    const sectionStyle = {
        marginBottom: "2rem",
    };

    const headingStyle = {
        fontSize: "1.25rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#4caeff",
    };

    const textStyle = {
        base: {
            fontSize: "1rem",
            marginTop: "0",
            marginBottom: "0.625rem",
            color: "#333",
        },
    };

    return (
        <Html>
            <Head />
            <Preview>New Contact Form Submission from {name}</Preview>
            <Body style={{ fontFamily: "sans-serif", background: "#f9fafb" }}>
                <Container style={containerStyle}>
                    <Heading as="h1" style={{ fontSize: "1.5rem", color: "#4caeff", textAlign: "center" }}>
                        New Contact Form Submission
                    </Heading>

                    <Hr style={hrStyle} />

                    <Section style={sectionStyle}>
                        <Heading as="h2" style={headingStyle}>
                            Contact Information
                        </Heading>
                        <Text style={textStyle.base}>
                            <strong>Name:</strong> {name}
                        </Text>
                        <Text style={textStyle.base}>
                            <strong>Phone:</strong> {phone || "Not provided"}
                        </Text>
                        <Text style={textStyle.base}>
                            <strong>Company:</strong> {company || "Not provided"}
                        </Text>
                        <Text style={textStyle.base}>
                            <strong>Position:</strong> {position || "Not provided"}
                        </Text>
                    </Section>

                    <Hr style={hrStyle} />

                    <Section style={sectionStyle}>
                        <Heading as="h2" style={headingStyle}>
                            Message
                        </Heading>
                        <Text style={textStyle.base}>
                            {message || "No message provided"}
                        </Text>
                    </Section>

                    <Hr style={hrStyle} />

                    <Text style={{ ...textStyle.base, color: "#666", fontSize: "0.875rem", marginTop: "2rem" }}>
                        Submitted via Heave Contact Form
                    </Text>
                    <Text style={{ ...textStyle.base, color: "#666", fontSize: "0.875rem" }}>
                        {new Date().toLocaleString()}
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export default EmailTemplate;