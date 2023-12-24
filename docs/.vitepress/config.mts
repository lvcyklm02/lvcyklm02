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
      { text: "Blogs", link: "/blogs" },
      { text: "Assignments", link: "/assignments" },
      { text: "About Me", link: "/about" }
    ],

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: "Assignments",
        link: "/assignments",
      },
      {
        text: "About Me",
        link: "/about",
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/lvcyklm02" }],
  },
});
