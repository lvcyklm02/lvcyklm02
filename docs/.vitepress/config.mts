import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lucy Kim Portfolio",
  description: "Software for art",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects" },
      { text: "Blogs", link: "/blogs" },
      { text: "About Me", link: "/about" }
    ],

    sidebar: [
      {
        text: "Projects",
        link: "/projects",
      },
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: "About Me",
        link: "/about",
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/lvcyklm02" }],
  },
});
