import { IBM_Plex_Sans, Noto_Sans, IBM_Plex_Serif } from "@next/font/google";
const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["sans"],
});
const NotoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const IBMPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["serif"],
});
const root = `
  :root {
    --heading-font: ${IBMPlexSans.style.fontFamily};
    --sans-font: ${NotoSans.style.fontFamily};
    --serif-font:${IBMPlexSerif.style.fontFamily};
  }
  `;
export { root };
