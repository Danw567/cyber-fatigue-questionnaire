import Image from "next/image";

export default function Logo({ width }: { width?: string }) {
  const parsedWidth = width?.endsWith("px") ? width : `${width}px`;

  return (
    <div style={{ maxWidth: parsedWidth, width: "100%" }}>
      <Image
        width={400}
        height={135}
        alt="CyFa-4 Logo"
        src="/logo.svg"
        priority
      />
    </div>
  );
}
