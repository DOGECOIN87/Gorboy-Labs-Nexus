export const COOKIE_NAME = "gorboy-auth";
export const ONE_YEAR_MS = 31536000000;

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "GORBOY LABS";

export const APP_LOGO = "/gorboy-logo.png";
export const APP_TAGLINE = "MEME.BUILD.REPEAT.";
export const APP_DESCRIPTION = "A ZERO-BUDGET TOOLKIT FOR MEME FOUNDERS ON GORBAGANA.";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  if (!oauthPortalUrl || !appId) {
    console.warn("Auth callback URL missing env vars");
    return "#";
  }

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
