// An array of routes that are accesible to the public
// These routes do not require authentication


export const publicRoutes = [
  "/"
];

export const authRoutes = [
  "/auth/login",
  "/auth/register",
];

export const apiAuthPrefix = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = '/settings'