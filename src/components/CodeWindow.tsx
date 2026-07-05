import { useState, useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import hljs from "highlight.js/lib/core";
import csharp from "highlight.js/lib/languages/csharp";

hljs.registerLanguage("csharp", csharp);

import { csFiles } from "../data/csFiles";

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function CodeWindow() {
  const [file, setFile] = useState(() =>
    csFiles.length > 0 ? pick(csFiles) : null,
  );

  useEffect(() => {
    if (csFiles.length > 0) setFile(pick(csFiles));
  }, []);

  const highlighted = useMemo(
    () => (file ? hljs.highlight(file.code, { language: "csharp" }).value : ""),
    [file],
  );

  if (!file) return null;

  const lines = file.code.split("\n");

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        height: { xs: 440, md: 420 },
        borderRadius: 2,
        border: 1,
        borderColor: "divider",
        bgcolor: "#1a1816",
        textAlign: "left",
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
        fontSize: "0.75rem",
        lineHeight: 1.55,
        transform: {
          md: "perspective(1000px) rotateY(-1.5deg) translateZ(6px)",
        },
        boxShadow: { md: "0 20px 60px rgba(0,0,0,0.45)" },
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: { md: "none" },
          boxShadow: { md: "0 8px 24px rgba(0,0,0,0.3)" },
        },
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          py: 1.25,
          bgcolor: "#12110f",
          borderBottom: 1,
          borderColor: "divider",
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: "#e5554d",
            }}
          />
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: "#e6bf4b",
            }}
          />
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: "#4bb04b",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            textAlign: "center",
            color: "text.secondary",
            fontSize: "0.7rem",
            fontWeight: 500,
            userSelect: "none",
          }}
        >
          {file.path}
        </Box>
        <Box sx={{ width: 44 }} />
      </Box>

      {/* code area */}
      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "#3a3532 #12110f",
          "&::-webkit-scrollbar": {
            width: 8,
            height: 8,
          },
          "&::-webkit-scrollbar-track": {
            bgcolor: "#12110f",
          },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "#3a3532",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            bgcolor: "#4a4542",
          },
          "&::-webkit-scrollbar-corner": {
            bgcolor: "#12110f",
          },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            component="pre"
            sx={{
              m: 0,
              px: 1.25,
              py: 1.5,
              textAlign: "right",
              color: "rgba(255,255,255,0.15)",
              userSelect: "none",
              borderRight: 1,
              borderColor: "rgba(255,255,255,0.05)",
              flexShrink: 0,
            }}
          >
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </Box>
          <Box component="pre" sx={{ m: 0, px: 2, py: 1.5 }}>
            <code
              className="language-csharp"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
