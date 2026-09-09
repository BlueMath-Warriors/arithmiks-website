import React, { lazy, Suspense } from "react";
import Header from "./Header";
import Hero from "./Hero";
import StatsBand from "./Stats-Band";
import Services from "./Services-Section";

const Testimonials = lazy(() => import("./Testimonials"));
const HowItWorks = lazy(() => import("./How-it-Works"));
const CaseStudy = lazy(() => import("./Case-Study"));
const BookingFlow = lazy(() => import("./Contact-Us/Booking-Flow"));
const Footer = lazy(() => import("./Footer"));

const SectionLoader = () => (
  <div
    style={{
      minHeight: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f7",
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "3px solid #e0e0e0",
        borderTopColor: "#1355FF",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const LandingPage = () => (
  <>
    <Header white={false} />
    <main>
      <Hero />
      <StatsBand />
      <Services landing />
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CaseStudy />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BookingFlow />
      </Suspense>
    </main>
    <Suspense fallback={<SectionLoader />}>
      <Footer />
    </Suspense>
  </>
);

export default LandingPage;
