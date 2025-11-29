// ICONS FROM: https://tabler.io/icons
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
              icon_color: palette.blue
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
              name: "abc",
              url: "https://www.abc.net.au/news",
              icon: "news",
              icon_color: palette.peach,
            },
            {
              name: "bom",
              url: "https://beta.bom.gov.au/",
              icon: "sun",
              icon_color: palette.red
            },
            {
              name: "storygraph",
              url: "https://app.thestorygraph.com",
              icon: "book",
              icon_color: palette.blue
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
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: palette.peach
            },
            {
              name: "nyt games",
              url: "https://www.nytimes.com/crosswords",
              icon: "puzzle",
              icon_color: palette.red
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
              url: "https://app.litmaps.com/?auth=sign-in",
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
              url: "https://my.gov.au/en/myaccount/dashboard/",
              icon: "question-mark",
              icon_color: palette.green,
            },
            {
              name: "pihole",
              url: "https://192.168.1.2/dashb"
            }
          ],
        },
        {
          name: "things",
          links: [
            {
              name: "pihole",
              url: "https://192.168.1.2/admin/",
              icon: "world_share",
              icon_color: palette.green
            },
            {
              name: "router",
              url: "https://192.168.1.1",
              icon: "router",
              icon_color: palette.peach
            },
            {
              name: "portainer",
              url: "https://192.168.1.52:9443",
              icon: "brand-docker",
              icon_color: palette.red
            }
          ]
        },
        {
          name: "dev",
          links: [
            {
              name: "aur",
              url: "https://aur.archlinux.org",
              icon: "package",
              icon_color: palette.green
            },
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.peach
            },
            {
              name: "mynixos",
              url: "https://mynixos.com",
              icon: "settings-check",
              icon_color: palette.red
            }
          ]
        }
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
