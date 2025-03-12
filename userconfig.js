// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Melbourne",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-13.gif",
      categories: [
        {
          name: "workspace",
          links: [
            {
              name: "mail",
              url: "https://mail.proton.me",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.proton.me",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "drive",
              url: "https://drive.proton.me",
              icon: "brand-google-drive",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "news",
          links: [
            {
              name: "ap",
              url: "https://apnews.com",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "abc news",
              url: "https://www.abc.net.au/news",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "bom",
              url: "https://beta.bom.gov.au/",
              icon: "sun",
              icon_color: palette.red
            }
          ],
        },
      ],
    },
    {
      name: "uni",
      background_url: "src/img/banners/cbg-06.gif",
      categories: [
        {
          name: "services",
          links: [
            {
              name: "canvas",
              url: "https://rmit.instructure.com/",
              icon: "chalkboard",
              icon_color: palette.green,
            },
            {
              name: "outlook",
              url: "https://outlook.office365.com/mail/",
              icon: "mail",
              icon_color: palette.peach,
            },
            {
              name: "teams",
              url: "https://teams.microsoft.com/v2",
              icon: "brand-teams",
              icon_color: palette.red,
            },
            {
              name: "easycite",
              url: "https://www.lib.rmit.edu.au/easy-cite/",
              icon: "blockquote",
              icon_color: palette.blue
            }
          ],
        },
        {
          name: "research",
          links: [
            {
              name: "scholar",
              url: "https://scholar.google.com/schhp?hl=en&as_sdt=0,5",
              icon: "school",
              icon_color: palette.green,
            },
            {
              name: "library",
              url: "https://rmit.primo.exlibrisgroup.com/discovery/search?vid=61RMIT_INST:RMITU",
              icon: "book",
              icon_color: palette.peach,
            },
            {
              name: "litmaps",
              url: "https://www.litmaps.com/",
              icon: "schema",
              icon_color: palette.red,
            },
            {
              name: "elict",
              url: "https://elicit.com/",
              icon: "search",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "chatpgt",
              url: "https://chatgpt.com/",
              icon: "message",
              icon_color: palette.green,
            },
            {
              name: "val",
              url: "https://val.rmit.edu.au/",
              icon: "robot",
              icon_color: palette.peach,
            },
            {
              name: 'github',
              url: 'https://github.com',
              icon: 'brand-github',
              icon_color: palette.red
            }
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
