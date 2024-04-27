import type { APIRoute } from "astro";
import { registerInterest } from "../../lib/database/registerInterest";

export const prerender = false;

export const POST: APIRoute = async ({request}) => {
  const body = await request.formData();
  const email = body.get("email");
  if (typeof email !== "string") {
    console.log(body)
    console.log(body.get("email"))
    throw new Error("Invalid email");
  }

  await registerInterest(email);

  return new Response(
    null, {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}