import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt =
  "Nourelhak Maache — Full-stack developer. Selected work: MEDTresor, Madrasatuk, MATENSANICH.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [font, screenshot] = await Promise.all([
    readFile(
      path.join(
        process.cwd(),
        "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff",
      ),
    ),
    readFile(path.join(process.cwd(), "public/projects/medtresor.jpg")),
  ]);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "48px 56px",
        background: "#f4f4f0",
        color: "#243c32",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 21,
          borderBottom: "1px solid #c6cdc5",
          paddingBottom: 24,
        }}
      >
        <span>nm.</span>
        <span>Full-stack developer & AI explorer</span>
      </div>
      <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 36 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 470 }}>
          <div
            style={{ fontFamily: "Instrument", fontSize: 104, lineHeight: 1 }}
          >
            Nourelhak
          </div>
          <div
            style={{ fontFamily: "Instrument", fontSize: 104, lineHeight: 1 }}
          >
            Maache.
          </div>
          <div style={{ fontSize: 20, marginTop: 30 }}>
            Useful software. Built with care, in Algiers.
          </div>
        </div>
        {/* Open Graph rendering requires a native image element. */}
        <img
          src={`data:image/jpeg;base64,${screenshot.toString("base64")}`}
          width={565}
          height={375}
          alt="MEDTresor project"
          style={{
            objectFit: "cover",
            objectPosition: "top",
            border: "16px solid #d9e5df",
          }}
        />
      </div>
      <div style={{ display: "flex", fontSize: 18 }}>
        MEDTresor · Madrasatuk · MATENSANICH
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Instrument",
          data: font.buffer.slice(
            font.byteOffset,
            font.byteOffset + font.byteLength,
          ) as ArrayBuffer,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
