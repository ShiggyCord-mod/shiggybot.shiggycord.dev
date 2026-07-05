import type { MDXComponents as MDXComponentsType } from "mdx/types";
import { useTheme, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import type {
  ComponentType,
  HTMLAttributes,
  ReactNode,
  AnchorHTMLAttributes,
  MouseEvent,
} from "react";

type CodeProps = HTMLAttributes<HTMLElement> & {
  className?: string;
  children?: ReactNode;
};
type PreProps = HTMLAttributes<HTMLPreElement> & { children?: ReactNode };

function MDXLink({ href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const navigate = useNavigate();
  const theme = useTheme();
  if (href?.startsWith("http")) {
    return (
      <Box
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: theme.palette.primary.main,
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { opacity: 0.82 },
        }}
        {...rest}
      >
        {children}
      </Box>
    );
  }
  return (
    <Box
      component="a"
      href={href}
      onClick={(e: MouseEvent) => {
        e.preventDefault();
        if (href) navigate(href);
      }}
      sx={{
        color: theme.palette.primary.main,
        textDecoration: "underline",
        textDecorationColor: theme.palette.primary.main,
        cursor: "pointer",
        "&:hover": { textDecoration: "underline", opacity: 0.82 },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export function createMDXComponents(isDark: boolean): MDXComponentsType {
  return {
    a: MDXLink as ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>,

    pre: (({ children, ...props }: PreProps) => (
      <Box
        component="pre"
        {...props}
        sx={{
          overflowX: "auto",
          whiteSpace: "pre",
          bgcolor: isDark ? "rgba(215,185,174,0.06)" : "rgba(141,107,94,0.05)",
          border: 1,
          borderColor: "divider",
          borderRadius: 3,
          px: { xs: 2, sm: 3 },
          py: 2.5,
          my: 2.5,
          fontSize: { xs: "0.8125rem", sm: "0.875rem" },
          lineHeight: 1.6,
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
          "& code": {
            bgcolor: "transparent !important",
            padding: "0 !important",
            fontSize: "inherit",
          },
        }}
      >
        {children}
      </Box>
    )) as ComponentType<PreProps>,

    code: (({ className, children, ...props }: CodeProps) => {
      const inline = !className;
      if (inline) {
        return (
          <code
            {...props}
            style={{
              backgroundColor: isDark
                ? "rgba(215,185,174,0.12)"
                : "rgba(141,107,94,0.1)",
              padding: "0.15em 0.4em",
              borderRadius: 6,
              fontSize: "0.85em",
              fontFamily:
                "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
              wordBreak: "break-word",
            }}
          >
            {children}
          </code>
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }) as ComponentType<CodeProps>,

    table: (({ children }: { children?: ReactNode }) => {
      const theme = useTheme();
      return (
        <div
          style={{
            overflowX: "auto",
            margin: "16px 0",
            borderRadius: 12,
            border: `1px solid ${theme.palette.divider}`,
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <table
            style={{
              minWidth: 600,
              borderCollapse: "collapse",
              fontSize: "0.875rem",
              width: "100%",
            }}
          >
            {children}
          </table>
        </div>
      );
    }) as ComponentType<{ children?: ReactNode }>,

    thead: (({ children }: { children?: ReactNode }) => (
      <thead>{children}</thead>
    )) as ComponentType<{ children?: ReactNode }>,

    tbody: (({ children }: { children?: ReactNode }) => (
      <tbody>{children}</tbody>
    )) as ComponentType<{ children?: ReactNode }>,

    tr: (({ children }: { children?: ReactNode }) => (
      <tr>{children}</tr>
    )) as ComponentType<{ children?: ReactNode }>,

    th: (({
      children,
      style,
      ...props
    }: HTMLAttributes<HTMLTableCellElement>) => (
      <th
        {...props}
        style={{
          ...style,
          textAlign: "left",
          fontWeight: 600,
          padding: "8px 12px",
          borderBottom: `1px solid ${useTheme().palette.divider}`,
          fontSize: "0.875rem",
        }}
      >
        {children}
      </th>
    )) as ComponentType<HTMLAttributes<HTMLTableCellElement>>,

    td: (({
      children,
      style,
      ...props
    }: HTMLAttributes<HTMLTableCellElement>) => {
      const divider = useTheme().palette.divider;
      return (
        <td
          {...props}
          style={{
            ...style,
            textAlign: "left",
            padding: "8px 12px",
            borderBottom: `1px solid ${divider}`,
            fontSize: "0.875rem",
          }}
        >
          {children}
        </td>
      );
    }) as ComponentType<HTMLAttributes<HTMLTableCellElement>>,

    blockquote: (({ children }) => {
      const t = useTheme();
      return (
        <blockquote
          style={{
            backgroundColor: isDark
              ? "rgba(215,185,174,0.08)"
              : "rgba(141,107,94,0.06)",
            borderLeft: `4px solid ${t.palette.primary.main}`,
            color: t.palette.text.secondary,
          }}
        >
          {children}
        </blockquote>
      );
    }) as ComponentType<HTMLAttributes<HTMLElement>>,

    hr: (() => {
      const t = useTheme();
      return <hr style={{ backgroundColor: t.palette.divider }} />;
    }) as ComponentType<HTMLAttributes<HTMLHRElement>>,
  };
}
