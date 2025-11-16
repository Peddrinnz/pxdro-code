import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Pxdro-Code" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `Novo contato de ${name}`,
            html: `
                <h2>Novo contato através do Pxdro Code</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong><br>${message}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return NextResponse.json(
            { error: "Erro ao enviar email" },
            { status: 500 }
        );
    }
}
