import { ImageResponse } from "next/og";
import { hero, person, stats } from "@/content/site-data";

// 1200×630 preview card used when the link is shared on LinkedIn, X, Slack, WhatsApp…
export const dynamic = "force-static";
export const alt = `${person.name}, ${person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0a0a10",
          color: "#f1f1f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#7c3aed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            VC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32, fontWeight: 700 }}>{person.name}</div>
            <div style={{ fontSize: 24, color: "#aaaabe" }}>{person.role}</div>
          </div>
        </div>
        <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.15, maxWidth: 1000 }}>{hero.headline}</div>
        <div style={{ display: "flex", gap: 48, fontSize: 24, color: "#c4b5fd" }}>
          {stats.slice(1, 3).map((s) => (
            <div key={s.label} style={{ display: "flex" }}>
              {`${s.value} ${s.short || s.label}`}
            </div>
          ))}
          <div style={{ display: "flex" }}>Next.js · Node.js · Python · AI</div>
        </div>
      </div>
    ),
    size
  );
}
