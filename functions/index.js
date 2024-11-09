export async function onRequest({ request, next }) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";
  if (userAgent.includes("bot")) return next();

  const acceptLanguage = request.headers.get("Accept-Language") || "";
  if (acceptLanguage.includes("cs") || acceptLanguage.includes("sk"))
    return next();

  const newUrl = new URL(request.url);
  newUrl.pathname = "/en";
  return Response.redirect(newUrl.toString(), 302);
}
