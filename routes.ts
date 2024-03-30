/**
 * Array of routes accessible to public.
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/"
]

/**
 * Array of routes used for the user authentication.
 * These routes redirects logged in user to /dashboard
 * @type {string[]}
 */
export const authRoutes = [
    "/login",
    "/register"
]

/**
 * The prefix for API authentication routes
 * The routes starting with this prefix are used for API authentication
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"