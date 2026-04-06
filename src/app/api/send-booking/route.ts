import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, phone, pujaType, date } = await req.json();

        // Nodemailer configuration
        // In production, use real environment variables. 
        // Here we use placeholders since no actual credentials were provided.
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.example.com",
            port: 587,
            auth: {
                user: process.env.SMTP_USER || "test@example.com",
                pass: process.env.SMTP_PASS || "password",
            },
        });

        const mailOptions = {
            from: '"Spiritual Platform" <noreply@spiritualplatform.com>',
            to: 'contact@manojupadhyay.com', // Pandit Ji's Email
            subject: `New Puja Inquiry: ${pujaType}`,
            html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>WhatsApp/Phone:</strong> ${phone}</p>
        <p><strong>Selected Puja:</strong> ${pujaType}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <br/>
        <p>Please contact the devotee to confirm the exact Muhurat.</p>
      `,
        };

        // Uncomment this when valid credentials are given in .env
        // await transporter.sendMail(mailOptions);

        // Simulating API success delay
        await new Promise(resolve => setTimeout(resolve, 800));

        return NextResponse.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, error: 'Failed to send inquiry.' }, { status: 500 });
    }
}
