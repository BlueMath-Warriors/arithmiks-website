import "./src/styles/global.module.css";

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation && location.pathname !== prevLocation.pathname) {
    window.scrollTo({
      top: 0,
      behavior: 'instant', 
    });
  }
};

export const onServiceWorkerUpdateReady = () => {
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
};