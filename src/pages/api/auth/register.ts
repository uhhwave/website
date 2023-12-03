import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import { createHash } from 'crypto';


export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const username = formData.get("username")?.toString();
  const captchaResponse = formData.get("cf-turnstile-response")?.toString();

  function getGravatarURL(username: string | undefined) {
    const address = String(username).trim().toLowerCase();
    const hash = createHash('sha256').update(address).digest('hex');
    return `https://www.gravatar.com/avatar/${hash}?default=identicon`;
   }

   const avatar = getGravatarURL(username);

  if (!email || !password || !username) {
    return new Response("Email, username and password are required", { status: 400 });
  }
 
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: username,
        avatar_url: avatar,
      },
      captchaToken: captchaResponse,
    }
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/signin");
};