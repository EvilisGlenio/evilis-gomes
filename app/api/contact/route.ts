import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validação dos dados
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Você precisará verificar um domínio no Resend para usar um email customizado
      to: ["glenio.developer@gmail.com"],
      subject: `Nova mensagem do portfólio - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #5B86E5; border-bottom: 2px solid #5B86E5; padding-bottom: 10px;">
            Nova Mensagem do Portfólio
          </h2>
          
          <div style="margin-top: 30px;">
            <p style="margin: 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
            <h3 style="color: #212529; margin-top: 0;">Mensagem:</h3>
            <p style="color: #495057; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 12px;">
            <p>Esta mensagem foi enviada através do formulário de contato do portfólio.</p>
          </div>
        </div>
      `,
      replyTo: email, // Permite responder diretamente ao remetente
    });

    if (error) {
      console.error("Erro ao enviar email:", error);
      return NextResponse.json(
        { error: "Erro ao enviar mensagem. Tente novamente mais tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}

