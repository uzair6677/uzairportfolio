// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'uzair <uzairtariqm1@gmail.com>',
      to: ['bscs.f17.m192017@gmail.com'],
      subject: 'Hello world',
      react: <>
      <p>email body</p>
      </>,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}