import { styled } from "styled-components";

/**
 * Brand-derived gradient treatments used as post cover art in place of stock
 * photography — keeps every post visually on-tone without sourcing images.
 */
export const COVER_GRADIENTS = {
  blue: "linear-gradient(135deg, #1355FF 0%, #061C3D 100%)",
  violet: "linear-gradient(135deg, #bc4e9b 0%, #1355FF 100%)",
  sunset: "linear-gradient(135deg, #bc4e9b 0%, #061C3D 100%)",
  navy: "linear-gradient(135deg, #061C3D 0%, #0957de 100%)",
};

export const CoverArt = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${(props) => props.$radius || "16px"};
  overflow: hidden;
  background: ${(props) =>
    COVER_GRADIENTS[props.$gradient] || COVER_GRADIENTS.blue};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 82% 18%,
        rgba(255, 255, 255, 0.22),
        transparent 55%
      ),
      radial-gradient(
        circle at 10% 90%,
        rgba(255, 255, 255, 0.12),
        transparent 50%
      );
  }
`;

export const CoverLabel = styled.span`
  position: absolute;
  left: 20px;
  bottom: 18px;
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(6px);
  color: #fff;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;
