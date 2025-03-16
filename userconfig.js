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
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.peach,
            },
            {
              name: "drive",
              url: "https://drive.proton.me",
              icon: "cloud",
              icon_color: palette.red,
            },
            {
              name: "syncthing",
              url: "http://127.0.0.1:8384/",
              icon: "refresh",
              icon: palette.blue
            }
          ],
        },
        {
          name: "bookmarks",
          links: [
            {
              name: "ap",
              url: "https://apnews.com",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "bom",
              url: "https://beta.bom.gov.au/",
              icon: "sun",
              icon_color: palette.peach
            },
            {
              name: "storygraph",
              url: "htts://app.thestorygraph.com",
              icon: "book",
              icon_color: palette.red
            }
          ],
        },
        {
          name: "entertainment",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com/feed/subscriptions",
              icon: "brand-youtube",
              icon_color: palette.green
            }
          ],
        }
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
      name: "stuff",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "services",
          links: [
            {
              name: "mygov",
              url: "https://login.my.gov.au/las/mygov-login",
              icon: "question-mark",
              icon_color: palette.green,
            }
          ],
        },
        {
          name: "finance",
          links: [
            {
              name: "westpac",
              url: "https://banking.westpac.com.au/",
              icon: "building-bank",
              icon_color: palette.green
            },
            {
              name: "suncorp",
              url: "https://internetbanking.suncorpbank.com.au/",
              icon: "pig",
              icon_color: palette.peach
            },
            {
              name: "unisuper",
              url: "https://memberonline.unisuper.com.au/",
              icon: "old",
              icon_color: palette.red
            },
            {
              name: "vanguard",
              url: "https://logon.vanguard.com/",
              icon: "shield",
              icon_color: palette.blue
            },
            {
              name: "stake",
              url: "htt[s://trading.hellostake.com/auth/login",
              icon: "businessplan",
              icon_color: palette.mauve
            }
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
