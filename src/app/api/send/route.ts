import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, phone, company, position, message } = body;

    if (!name || !name.trim()) {
        return NextResponse.json(
            { error: "Name is required" },
            { status: 400 }
        );
    }

    const resend = new Resend('re_Phwr1T7T_Q5ryjgqxdCgyin7Q8Ewu91FV');

    try {
        const { data, error } = await resend.emails.send({
            from: `Heave <onboarding@resend.dev>`,
            to: ["rainer@dialedweb.com"],
            subject: `New Contact from ${name}`,
            react: EmailTemplate({
                name,
                phone,
                company,
                position,
                message
            }),
        });

        if (error) {
            return NextResponse.json(
                { error: error.message },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { data, message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}