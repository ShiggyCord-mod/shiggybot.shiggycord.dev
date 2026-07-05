import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getPageMeta, siteUrl, ogImage } from "../data/meta";

export default function MetaTags() {
  const { pathname } = useLocation();
  const meta = getPageMeta(pathname);
  const url = `${siteUrl}${pathname}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
