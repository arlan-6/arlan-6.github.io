import { ImageResponse } from "next/og";

import { cvData } from "@/lib/cv-data";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          borderLeft: "24px solid #7c3aed",
          background: "#f7f4ff",
          color: "#111827",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", background: "#7c3aed", color: "white", padding: 20, fontSize: 36, fontWeight: 700 }}>
            {cvData.profile.initials}
          </div>
          <div style={{ fontSize: 48, fontWeight: 700 }}>{cvData.profile.latinName}</div>
        </div>
        <div style={{ marginTop: 42, fontSize: 44, color: "#6d28d9", lineHeight: 1.2 }}>
          {cvData.profile.role}
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#4b5563", lineHeight: 1.4 }}>
          Software projects, authentication, and persistent data.
        </div>
        <div style={{ marginTop: 12, fontSize: 28, color: "#4b5563" }}>
          Developing foundations in Python and data analysis.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", fontSize: 24 }}>
          <span>Astana IT University</span>
          <span>arlan-6.github.io</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
