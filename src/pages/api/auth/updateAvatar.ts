import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";


function isValidUrl(url: string) {
    const domainWhitelist = ['i.imgur.com'];
    const urlObj = new URL(url);
    return domainWhitelist.includes(urlObj.hostname);
   }
   

export const POST: APIRoute = async ({ request, redirect }) => {
 const formData = await request.formData();
 const avatar = formData.get("avatar")?.toString();

 if (!avatar) {
   return new Response("Avatar is required", { status: 400 });
 }

 const isValidUri = await isValidUrl(avatar);

 if (!isValidUri) {
    return new Response("Not accepted avatar URL (not i.imgur.com)", { status: 400 });
  }

 const { error } = await supabase.auth.updateUser({
   data: { avatar_url: avatar }
 })

 if (error) {
   return new Response(error.message, { status: 500 });
 }

 return redirect("/dashboard");
};
