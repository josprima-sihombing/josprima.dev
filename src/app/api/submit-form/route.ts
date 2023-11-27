import { contactFormSchema } from "@/data/schemas/contact-form-schema";

export async function POST(request: Request) {
  const formData = await request.json();

  const validatonResult = contactFormSchema.safeParse(formData);

  if (!validatonResult.success) {
    const error = validatonResult.error.format();

    return Response.json(
      {
        success: false,
        reason: error,
      },
      {
        status: 422,
      },
    );
  }

  return Response.json({ success: true });
}
