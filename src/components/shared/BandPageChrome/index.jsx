import React from "react";
import Header from "../../Landing/Header";
import BookingFlow from "../../Landing/Contact-Us/Booking-Flow";
import Footer from "../../Landing/Footer";

/**
 * Page chrome shared by the band-family designs (service pages and tool
 * pages): a header that sits transparent over the hero until scrolled, the
 * page's own bands, then the booking flow (the design's "contact" band) and
 * the footer.
 *
 * @param {{ children: React.ReactNode, darkHero?: boolean }} props
 *   darkHero: the page opens on a dark hero, so the header starts with light text.
 */
const BandPageChrome = ({ children, darkHero = false }) => (
  <>
    <Header lightHero={!darkHero} />
    <main>
      {children}
      <BookingFlow />
    </main>
    <Footer />
  </>
);

export default BandPageChrome;
