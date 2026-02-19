// src/content/site.ts
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  seo: {
    ogImage?: string;
    robots: string;
  };
  header: {
    disabled: boolean;
    fixed: boolean;
    brandText: string;
    disableBrand: boolean;
  };
  footer: {
    disabled: boolean;
    fixed: boolean;
    modules: Array<{
      content: string;
      alignment: "left" | "center" | "right";
    }>;
  };
};

const parseTemplateBoolean = (value: string) => value === "true";

export const site: SiteConfig = {
  name: "roses",
  description: "are red",
  url: "https://jazbogross.github.io/roses",
  seo: {
    ogImage: "/solidary-media/images/site-image-roses.jpg",
    robots: "index,follow"
  },
  header: {
    disabled: parseTemplateBoolean("false"),
    fixed: parseTemplateBoolean("false"),
    brandText: "roses",
    disableBrand: parseTemplateBoolean("false")
  },
  footer: {
    disabled: parseTemplateBoolean("false"),
    fixed: parseTemplateBoolean("false"),
    modules: JSON.parse("[{\"content\":\"%copyright%\",\"alignment\":\"left\"},{\"content\":\"\",\"alignment\":\"center\"},{\"content\":\"\",\"alignment\":\"right\"}]")
  }
};
