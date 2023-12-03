import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const username = formData.get("username")?.toString();

  if (!username) {
    return new Response("Username is required", { status: 400 });
  }
 
const { error } = await supabase.auth.updateUser({
    data: { username: username }
  })

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/dashboard");
};