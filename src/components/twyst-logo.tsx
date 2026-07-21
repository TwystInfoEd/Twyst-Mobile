import TwystLogoSvg from "../../assets/images/logo_v3.svg";

export function TwystLogo({ width = 200 }: { width?: number }) {
  const height = width * 0.307;

  return <TwystLogoSvg width={width} height={height} />;
}
