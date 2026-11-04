import React from "react";
import BandPageChrome from "../shared/BandPageChrome";
import ServiceDetail from ".";

/**
 * A full service page: the shared band-page chrome around the service bands.
 *
 * @param {{ content: object }} props a ServiceDetail content module
 */
const ServiceDetailPage = ({ content }) => (
  <BandPageChrome>
    <ServiceDetail content={content} />
  </BandPageChrome>
);

export default ServiceDetailPage;
