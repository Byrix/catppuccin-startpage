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
      name: "home",
      background_url: "src/img/banners/cbg-06.gif",
      categories: [
        {
          name: "hosting",
          links: [
            {
              name: "pangolin",
              url: "https://pangolin.byrix.dev/",
              icon: "brand-edge",
              icon_color: palette.green,
            },
            {
              name: "traefik",
              url: "https://traefik.byrix.dev/",
              icon: "traffic-lights",
              icon_color: palette.peach,
            },
            {
              name: "portainer",
              url: "https://docker.byrix.dev/",
              icon: "brand-docker",
              icon_color: palette.red,
            }
          ],
        },
        {
          name: "services",
          links: [
            {
              name: "gitlab",
              url: "https://git.byrix.dev/"
              icon: "brand-gitlab",
              icon_color: palette.green,
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
