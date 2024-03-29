import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Body": {
      "callbacks": {}
    },
    "section_one": {
      "callbacks": {}
    },
    "header": {
      "callbacks": {}
    },
    "logo": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "navigation": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Menu1": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "strokeColor": "#fff",
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "top_menu": {
      "callbacks": {}
    },
    "hero_section": {
      "callbacks": {}
    },
    "open_source": {
      "callbacks": {}
    },
    "Flex43": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex45": {
      "callbacks": {}
    },
    "slogan_container": {
      "callbacks": {}
    },
    "Div3": {
      "callbacks": {}
    },
    "subtitle_container": {
      "callbacks": {}
    },
    "Flex224": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://youtu.be/YokMeI23_iw",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "subtitle_container_mob": {
      "callbacks": {}
    },
    "Flex228": {
      "callbacks": {}
    },
    "Flex102": {
      "callbacks": {}
    },
    "Flex101": {
      "callbacks": {}
    },
    "Flex98": {
      "callbacks": {}
    },
    "Flex93": {
      "callbacks": {}
    },
    "Flex81": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex82": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.linkedin.com/company/atri-labs/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex83": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/atrilabs",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex84": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.youtube.com/@atrilabs",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex85": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://join.slack.com/t/atricommunity/shared_invite/zt-1otyguhy8-P4OQQRWFWcMUsKk7yp0FHQ",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex94": {
      "callbacks": {}
    },
    "Flex87": {
      "callbacks": {}
    },
    "Flex229": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex99": {
      "callbacks": {}
    },
    "Flex95": {
      "callbacks": {}
    },
    "Flex100": {
      "callbacks": {}
    },
    "Flex96": {
      "callbacks": {}
    },
    "Flex88": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Flex89": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "Flex79": {
      "callbacks": {}
    },
    "Flex91": {
      "callbacks": {}
    },
    "Flex80": {
      "callbacks": {}
    },
    "Flex97": {
      "callbacks": {}
    },
    "Flex92": {
      "callbacks": {}
    },
    "sign_up_status": {
      "callbacks": {}
    },
    "section_two": {
      "callbacks": {}
    },
    "Div6": {
      "callbacks": {}
    },
    "Flex256": {
      "callbacks": {}
    },
    "Flex255": {
      "callbacks": {}
    },
    "Flex254": {
      "callbacks": {}
    },
    "Flex259": {
      "callbacks": {}
    },
    "Flex258": {
      "callbacks": {}
    },
    "Flex257": {
      "callbacks": {}
    },
    "Flex262": {
      "callbacks": {}
    },
    "Flex261": {
      "callbacks": {}
    },
    "Flex260": {
      "callbacks": {}
    },
    "made_with_atri": {
      "callbacks": {}
    },
    "Image25": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%202.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%203.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/showcase"
            }
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "Get started"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/category/getting-started",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/showcase"
            }
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "custom": {
        "text": "Leave a star"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Browser-2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "code_two_snippet": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/code-2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      },
      "styles": {
        "right": "-5%",
        "top": "15%"
      }
    },
    "code_one_snippet": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/code.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      },
      "styles": {
        "left": "-7%",
        "top": "31%"
      }
    },
    "slogan": {
      "custom": {
        "text": "The Python web framework"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox169": {
      "custom": {
        "text": "to build stunning apps"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "code_one": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/code.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "code_two": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/code-2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "benefits": {
      "custom": {
        "text": "Build frontend easily using Atri visual builder or  React code. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox170": {
      "custom": {
        "text": "Build backend using FastAPI."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "custom": {
        "text": "Watch 1 min teaser"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image106": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/play_icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
      "custom": {
        "text": "Build frontend easily using Atri visual builder or  React code. Build backend using FastAPI."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox173": {
      "custom": {
        "text": "Backed by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image109": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/yc_expanded_logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.ycombinator.com/companies/atri-labs",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image48": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-5.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image50": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%203.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image51": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%202.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox175": {
      "custom": {
        "text": "Leave a star"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image110": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "custom": {
        "text": "Copyright © 2022 Pulastya, Inc."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox72": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "custom": {
        "text": "Terms of Use"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "SHOWCASE"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/showcase"
            }
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "Personal blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atri-apps.github.io/personal_blog/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "Ecommerce"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atri-apps.github.io/full_stack_ecommerce_website/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox69": {
      "custom": {
        "text": "RESOURCES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox70": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Discussions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine/discussions",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "Contribute"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine#how-to-contribute",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox71": {
      "custom": {
        "text": "ABOUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": "Conference talks"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/conferences",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox74": {
      "custom": {
        "text": "Sign up for cloud waitlist"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "sign_up_button": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input3": {
      "custom": {
        "value": "",
        "placeholder": "Enter your email..."
      },
      "callbacks": {}
    },
    "sign_up_status_text": {
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox176": {
      "custom": {
        "text": "Developer approved stack for the entire product team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox177": {
      "custom": {
        "text": "A new approach to full-stack development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image119": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Frame%20384-3.webp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox221": {
      "custom": {
        "text": "REDUCED DEVELOPMENT TIME"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox222": {
      "custom": {
        "text": "Access to productivity tools 1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox218": {
      "custom": {
        "text": "Get the best of both no-code and code worlds by:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox219": {
      "custom": {
        "text": "- using productivity tools such as visual editor and "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox220": {
      "custom": {
        "text": "- simultaneously writing custom React code"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image120": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Frame%20384.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox226": {
      "custom": {
        "text": "Access to productivity tools 2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox227": {
      "custom": {
        "text": "REDUCED DEVELOPMENT TIME"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox223": {
      "custom": {
        "text": "- simultaneously writing custom React code"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox224": {
      "custom": {
        "text": "- using productivity tools such as visual editor and "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox225": {
      "custom": {
        "text": "Get the best of both no-code and code worlds by:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image121": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Frame%20384.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox231": {
      "custom": {
        "text": "REDUCED DEVELOPMENT TIME"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox232": {
      "custom": {
        "text": "Access to productivity tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox228": {
      "custom": {
        "text": "Get the best of both no-code and code worlds by:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox229": {
      "custom": {
        "text": "- using productivity tools such as visual editor and "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox230": {
      "custom": {
        "text": "- simultaneously writing custom React code"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image107": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/made_with_atri.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "temp": {
    "Flex72": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "Flex68": {
      "callbacks": {}
    },
    "Flex60": {
      "callbacks": {}
    },
    "Flex48": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Flex61": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Flex63": {
      "callbacks": {}
    },
    "Flex51": {
      "callbacks": {}
    },
    "Flex64": {
      "callbacks": {}
    },
    "Flex52": {
      "callbacks": {}
    },
    "Flex69": {
      "callbacks": {}
    },
    "Flex65": {
      "callbacks": {}
    },
    "Flex70": {
      "callbacks": {}
    },
    "Flex66": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Flex67": {
      "callbacks": {}
    },
    "Flex55": {
      "callbacks": {}
    },
    "Flex56": {
      "callbacks": {}
    },
    "Flex57": {
      "callbacks": {}
    },
    "Flex58": {
      "callbacks": {}
    },
    "Flex59": {
      "callbacks": {}
    },
    "TextBox45": {
      "custom": {
        "text": "Subscribe to our free monthly newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input2": {
      "custom": {
        "value": "",
        "placeholder": "Enter your email..."
      },
      "callbacks": {}
    },
    "Image34": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "custom": {
        "text": "Conference talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "custom": {
        "text": "Contribute"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "Discussions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "RESOURCES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "custom": {
        "text": "SHOWCASE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "Ecommerce website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "Personal blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "Repo traffic history"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "Copyright © 2022 Pulastya, Inc."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "Terms of Use"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%202.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%203.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "Leave a star"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-5.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image39": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image40": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image41": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image42": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "showcase": {
    "Flex151": {
      "callbacks": {}
    },
    "Flex150": {
      "callbacks": {}
    },
    "Flex147": {
      "callbacks": {}
    },
    "Flex141": {
      "callbacks": {}
    },
    "Div5": {
      "callbacks": {}
    },
    "gallery_container": {
      "callbacks": {}
    },
    "gallery_row_1": {
      "callbacks": {}
    },
    "gallery_row_2": {
      "callbacks": {}
    },
    "Flex155": {
      "callbacks": {}
    },
    "header": {
      "callbacks": {}
    },
    "Flex218": {
      "callbacks": {}
    },
    "Menu5": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "strokeColor": "#fff",
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "Flex217": {
      "callbacks": {}
    },
    "Flex216": {
      "callbacks": {}
    },
    "Flex219": {
      "callbacks": {}
    },
    "Flex220": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Flex181": {
      "callbacks": {}
    },
    "Flex180": {
      "callbacks": {}
    },
    "Flex177": {
      "callbacks": {}
    },
    "Flex172": {
      "callbacks": {}
    },
    "Flex160": {
      "callbacks": {}
    },
    "sign_up_status": {
      "callbacks": {}
    },
    "Flex173": {
      "callbacks": {}
    },
    "Flex161": {
      "callbacks": {}
    },
    "Flex156": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {}
    },
    "Flex157": {
      "callbacks": {}
    },
    "Flex163": {
      "callbacks": {}
    },
    "Flex158": {
      "callbacks": {}
    },
    "Flex164": {
      "callbacks": {}
    },
    "Flex159": {
      "callbacks": {}
    },
    "Flex178": {
      "callbacks": {}
    },
    "Flex174": {
      "callbacks": {}
    },
    "Flex179": {
      "callbacks": {}
    },
    "Flex175": {
      "callbacks": {}
    },
    "Flex165": {
      "callbacks": {}
    },
    "Flex166": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex176": {
      "callbacks": {}
    },
    "Flex167": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://join.slack.com/t/atricommunity/shared_invite/zt-1otyguhy8-P4OQQRWFWcMUsKk7yp0FHQ",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex168": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.youtube.com/@atrilabs",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex169": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/atrilabs",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex170": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.linkedin.com/company/atri-labs/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex171": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "made_with_atri": {
      "callbacks": {}
    },
    "sub_slogan": {
      "custom": {
        "text": "Explore the web apps built using Atri framework"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "slogan": {
      "custom": {
        "text": "Atri App Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image71": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/code.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image72": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/code-2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image74": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/code-2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/code.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image78": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/sports.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atri-apps.github.io/sports_website/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image82": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/restraunt.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atri-apps.github.io/restaurant_website/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image79": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/e-commerce.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atri-apps.github.io/full_stack_ecommerce_website/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image81": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blogs.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atri-apps.github.io/personal_blog/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image80": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/personal-blog.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atri-apps.github.io/portfolio-templates/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image83": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/tabular.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atri-apps.github.io/review_tabular_data/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Button5": {
      "custom": {
        "text": "Get started"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/category/getting-started",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox161": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox162": {
      "custom": {
        "text": "Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox163": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox164": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/showcase"
            }
          }
        ]
      }
    },
    "TextBox165": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox166": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox167": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox168": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/showcase"
            }
          }
        ]
      }
    },
    "Image104": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%203.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image105": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%202.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "custom": {
        "text": "Sign up for cloud waitlist"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input5": {
      "custom": {
        "value": "",
        "placeholder": "Enter your email..."
      },
      "callbacks": {}
    },
    "sign_up_button": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "sign_up_status_text": {
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "custom": {
        "text": "ABOUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": "Conference talks"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/conferences",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox126": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "custom": {
        "text": "Contribute"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine#how-to-contribute",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox119": {
      "custom": {
        "text": "Discussions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine/discussions",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox127": {
      "custom": {
        "text": "RESOURCES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox121": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox122": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox128": {
      "custom": {
        "text": "SHOWCASE"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/showcase"
            }
          }
        ]
      }
    },
    "TextBox123": {
      "custom": {
        "text": "Ecommerce"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atri-apps.github.io/full_stack_ecommerce_website/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox124": {
      "custom": {
        "text": "Personal blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atri-apps.github.io/personal_blog/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox133": {
      "custom": {
        "text": "Copyright © 2022 Pulastya, Inc."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "custom": {
        "text": "Terms of Use"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image85": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%202.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image86": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%203.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "custom": {
        "text": "Leave a star"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image87": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image88": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-5.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image89": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image90": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image91": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector-2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image92": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image108": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/made_with_atri.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
