import "./src/styles/global.module.css";
import { gsap } from "gsap";

const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const animatePageEntrance = () => {
  if (typeof window === "undefined" || prefersReducedMotion()) return;

  const mainContent = document.querySelector("main") || document.body;
  
  gsap.fromTo(
    mainContent,
    { opacity: 0, y: 20 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.4, 
      ease: "power2.out",
      clearProps: "all"
    }
  );
};

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation && location.pathname !== prevLocation.pathname) {
    window.scrollTo({
      top: 0,
      behavior: 'instant', 
    });
    
    setTimeout(animatePageEntrance, 50);
  }
};

export const onInitialClientRender = () => {
  setTimeout(animatePageEntrance, 100);
};

export const onServiceWorkerUpdateReady = () => {
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
};