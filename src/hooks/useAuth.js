import { useCallback, useEffect, useState } from "react";

/**
 * Thin React wrapper around the Netlify Identity widget (loaded globally via
 * a <script> tag in gatsby-ssr.js). Only ever touches `window` inside
 * effects/callbacks, so it's safe during Gatsby's server-side build.
 */
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.netlifyIdentity) return undefined;
    const identity = window.netlifyIdentity;

    const handleInit = (initialUser) => {
      setUser(initialUser || null);
      setReady(true);
    };
    const handleLogin = (loggedInUser) => {
      setUser(loggedInUser);
      identity.close();
    };
    const handleLogout = () => setUser(null);

    identity.on("init", handleInit);
    identity.on("login", handleLogin);
    identity.on("logout", handleLogout);

    identity.init();

    return () => {
      identity.off("init", handleInit);
      identity.off("login", handleLogin);
      identity.off("logout", handleLogout);
    };
  }, []);

  const login = useCallback(() => {
    window.netlifyIdentity?.open("login");
  }, []);

  const signup = useCallback(() => {
    window.netlifyIdentity?.open("signup");
  }, []);

  const logout = useCallback(() => {
    window.netlifyIdentity?.logout();
  }, []);

  /** Returns a fresh JWT for the current user, or null if not logged in. */
  const getToken = useCallback(async () => {
    const current = window.netlifyIdentity?.currentUser();
    if (!current) return null;
    try {
      return await current.jwt();
    } catch {
      return null;
    }
  }, []);

  return { user, ready, login, signup, logout, getToken };
};
