import React, { useEffect, useRef, useState } from "react";
import { LogoFrame, LogoSkeleton, ClientLogo } from "./index.styled";

// A logo that was cached before hydration has already fired `load`, so the
// onLoad handler would never run — check `complete` once on mount.
const ClientLogoImage = ({ name, src, height, raw }) => {
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (imageRef.current?.complete) setIsLoaded(true);
  }, []);

  return (
    <LogoFrame>
      {!isLoaded && <LogoSkeleton $height={height} aria-hidden="true" />}
      <ClientLogo
        ref={imageRef}
        src={src}
        alt={name}
        height={height}
        $raw={raw}
        $hidden={!isLoaded}
        onLoad={() => setIsLoaded(true)}
      />
    </LogoFrame>
  );
};

export default ClientLogoImage;
