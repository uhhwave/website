import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const password = formData.get("password")?.toString();

  if (!password) {
    return new Response("Password is required", { status: 400 });
  }
 
  const { data, error } = await supabase.auth.updateUser({password: password})

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  return redirect("/signin");
};