import React, { useState, useEffect } from "react";
import {
  CookieBannerContainer,
  CookieContent,
  CookieTitle,
  CookieDescription,
  CookieButtons,
  AcceptButton,
  RejectButton,
  AcceptText,
  PrivacyPolicyText,
} from "./index.styled";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <CookieBannerContainer>
      <CookieContent>
        <div>
          <CookieTitle>Your Privacy</CookieTitle>
          <CookieDescription>
            Arithmiks uses essential cookies for site functionality and tailored experience, and optional cookies for analytics, ads, and third-party services. By clicking <AcceptText>'Accept,'</AcceptText> you allow all cookies. Some features may be limited if you reject.<br /><br />
            For more information, please review our <PrivacyPolicyText>Privacy Policy</PrivacyPolicyText>.
          </CookieDescription>
        </div>
        <CookieButtons>
          <AcceptButton onClick={handleAccept}>Accept</AcceptButton>
          <RejectButton onClick={handleReject}>Reject</RejectButton>
        </CookieButtons>
      </CookieContent>
    </CookieBannerContainer>
  );
};

export default CookieBanner;

