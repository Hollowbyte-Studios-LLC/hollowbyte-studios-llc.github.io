// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-privacy-policy",
          title: "Privacy Policy",
          description: "Privacy Policy for WordFlurry by HollowByte Studio LLC",
          section: "Navigation",
          handler: () => {
            window.location.href = "/privacy-policy/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Produced by HollowByte Studios LLC",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "HollowByte Studios LLC GitHub repositories and users",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the team",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "news-first-announcement-wordflurry-a-fast-paced-word-find-game-is-currently-being-developed-and-is-scheduled-for-release-in-2026-sparkles-smile",
          title: 'First Announcement! WordFlurry - a fast-paced word find game is currently being developed...',
          description: "",
          section: "News",},{id: "projects-wordflurry",
          title: 'WordFlurry',
          description: "A Fast Paced Word Finding Game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%6F%6C%6C%6F%77%62%79%74%65%73%74%75%64%69%6F%73%6C%6C%63.%68%65%6C%70@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
