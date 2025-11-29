import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().min(10)
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const data = schema.parse(body)

    // TODO: Integrate with an email service like Resend, SendGrid, or Nodemailer
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'robin.hooyar@gmail.com',
    //   subject: `New Contact from ${data.email}`,
    //   html: `<p>Service: ${data.service}</p><p>Message: ${data.message}</p>`
    // })

    // For now, simulate a delay and success
    await new Promise(resolve => setTimeout(resolve, 1000))

    return { success: true, message: 'Email sent successfully' }
  } catch (e) {
    if (e instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation Error',
        data: e.issues
      })
    }
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: 'An unexpected error occurred'
    })
  }
})
