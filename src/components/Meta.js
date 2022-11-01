import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata"

const MetaTags = ({ title, description, pathname, children }) => {

  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta
        name="description"
        content={seo.description}
      />
       <meta name="image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/profile.png" />
      <meta
        name="og:title"
        property="og:title"
        content={seo.title}
      />
      <meta
        name="og:description"
        property="og:description"
        content={seo.description}
      />
      <meta
        property="og:site_name"
        content={seo.title}
      />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:description"
        content={seo.description}
      />
      <meta name="twitter:site" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href={seo.image} />
      
    </>
  );
};

export default MetaTags;
