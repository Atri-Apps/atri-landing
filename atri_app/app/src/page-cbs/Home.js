import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function usesection_oneCb() {
	const onClick = useCallback(callbackFactory("section_one", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useheaderCb() {
	const onClick = useCallback(callbackFactory("header", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function uselogoCb() {
	const onClick = useCallback(callbackFactory("logo", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage25Cb() {
	const onClick = useCallback(callbackFactory("Image25", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage26Cb() {
	const onClick = useCallback(callbackFactory("Image26", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usenavigationCb() {
	const onClick = useCallback(callbackFactory("navigation", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox26Cb() {
	const onClick = useCallback(callbackFactory("TextBox26", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/showcase"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox27Cb() {
	const onClick = useCallback(callbackFactory("TextBox27", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox28Cb() {
	const onClick = useCallback(callbackFactory("TextBox28", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/blog",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox29Cb() {
	const onClick = useCallback(callbackFactory("TextBox29", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usehero_sectionCb() {
	const onClick = useCallback(callbackFactory("hero_section", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useopen_sourceCb() {
	const onClick = useCallback(callbackFactory("open_source", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox31Cb() {
	const onClick = useCallback(callbackFactory("TextBox31", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage27Cb() {
	const onClick = useCallback(callbackFactory("Image27", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox32Cb() {
	const onClick = useCallback(callbackFactory("TextBox32", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex43Cb() {
	const onClick = useCallback(callbackFactory("Flex43", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/atrilabs-engine",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usesloganCb() {
	const onClick = useCallback(callbackFactory("slogan", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebenefitsCb() {
	const onClick = useCallback(callbackFactory("benefits", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex45Cb() {
	const onClick = useCallback(callbackFactory("Flex45", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage31Cb() {
	const onClick = useCallback(callbackFactory("Image31", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecode_two_snippetCb() {
	const onClick = useCallback(callbackFactory("code_two_snippet", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecode_one_snippetCb() {
	const onClick = useCallback(callbackFactory("code_one_snippet", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useBodyCb() {
	const onClick = useCallback(callbackFactory("Body", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton1Cb() {
	const onClick = useCallback(callbackFactory("Button1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/category/getting-started",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useMenu1Cb() {
	const onClick = useCallback(callbackFactory("Menu1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "open"
      ]
    }
  ]
}), [])
	return { onClick }
}
export function useFlex47Cb() {
	const onClick = useCallback(callbackFactory("Flex47", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetop_menuCb() {
	const onClick = useCallback(callbackFactory("top_menu", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox53Cb() {
	const onClick = useCallback(callbackFactory("TextBox53", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/showcase"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox54Cb() {
	const onClick = useCallback(callbackFactory("TextBox54", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox55Cb() {
	const onClick = useCallback(callbackFactory("TextBox55", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/blog",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox56Cb() {
	const onClick = useCallback(callbackFactory("TextBox56", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex74Cb() {
	const onClick = useCallback(callbackFactory("Flex74", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox59Cb() {
	const onClick = useCallback(callbackFactory("TextBox59", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://atri-apps.github.io/personal_blog/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox60Cb() {
	const onClick = useCallback(callbackFactory("TextBox60", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://atri-apps.github.io/full_stack_ecommerce_website/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox61Cb() {
	const onClick = useCallback(callbackFactory("TextBox61", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox62Cb() {
	const onClick = useCallback(callbackFactory("TextBox62", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/blog/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox63Cb() {
	const onClick = useCallback(callbackFactory("TextBox63", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox64Cb() {
	const onClick = useCallback(callbackFactory("TextBox64", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/atrilabs-engine/discussions",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox65Cb() {
	const onClick = useCallback(callbackFactory("TextBox65", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/atrilabs-engine#how-to-contribute",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox66Cb() {
	const onClick = useCallback(callbackFactory("TextBox66", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/conferences",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage44Cb() {
	const onClick = useCallback(callbackFactory("Image44", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage45Cb() {
	const onClick = useCallback(callbackFactory("Image45", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage46Cb() {
	const onClick = useCallback(callbackFactory("Image46", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage47Cb() {
	const onClick = useCallback(callbackFactory("Image47", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage48Cb() {
	const onClick = useCallback(callbackFactory("Image48", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage50Cb() {
	const onClick = useCallback(callbackFactory("Image50", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage51Cb() {
	const onClick = useCallback(callbackFactory("Image51", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox68Cb() {
	const onClick = useCallback(callbackFactory("TextBox68", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/showcase"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex77Cb() {
	const onClick = useCallback(callbackFactory("Flex77", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex78Cb() {
	const onClick = useCallback(callbackFactory("Flex78", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox69Cb() {
	const onClick = useCallback(callbackFactory("TextBox69", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex79Cb() {
	const onClick = useCallback(callbackFactory("Flex79", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox70Cb() {
	const onClick = useCallback(callbackFactory("TextBox70", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox71Cb() {
	const onClick = useCallback(callbackFactory("TextBox71", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex80Cb() {
	const onClick = useCallback(callbackFactory("Flex80", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usesign_up_buttonCb() {
	const onClick = useCallback(callbackFactory("sign_up_button", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInput3Cb() {
	const onChange = useCallback(callbackFactory("Input3", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	const onPressEnter = useCallback(callbackFactory("Input3", "Home", "/", "onPressEnter", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onPressEnter }
}
export function useFlex81Cb() {
	const onClick = useCallback(callbackFactory("Flex81", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/atrilabs-engine",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex82Cb() {
	const onClick = useCallback(callbackFactory("Flex82", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://www.linkedin.com/company/atri-labs/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex83Cb() {
	const onClick = useCallback(callbackFactory("Flex83", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://twitter.com/atrilabs",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex84Cb() {
	const onClick = useCallback(callbackFactory("Flex84", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://www.youtube.com/@atrilabs",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex85Cb() {
	const onClick = useCallback(callbackFactory("Flex85", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://join.slack.com/t/atricommunity/shared_invite/zt-1otyguhy8-P4OQQRWFWcMUsKk7yp0FHQ",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex87Cb() {
	const onClick = useCallback(callbackFactory("Flex87", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox72Cb() {
	const onClick = useCallback(callbackFactory("TextBox72", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox73Cb() {
	const onClick = useCallback(callbackFactory("TextBox73", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex88Cb() {
	const onClick = useCallback(callbackFactory("Flex88", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex89Cb() {
	const onClick = useCallback(callbackFactory("Flex89", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex90Cb() {
	const onClick = useCallback(callbackFactory("Flex90", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex91Cb() {
	const onClick = useCallback(callbackFactory("Flex91", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex92Cb() {
	const onClick = useCallback(callbackFactory("Flex92", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox74Cb() {
	const onClick = useCallback(callbackFactory("TextBox74", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex93Cb() {
	const onClick = useCallback(callbackFactory("Flex93", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex94Cb() {
	const onClick = useCallback(callbackFactory("Flex94", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox75Cb() {
	const onClick = useCallback(callbackFactory("TextBox75", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex95Cb() {
	const onClick = useCallback(callbackFactory("Flex95", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex96Cb() {
	const onClick = useCallback(callbackFactory("Flex96", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex97Cb() {
	const onClick = useCallback(callbackFactory("Flex97", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex98Cb() {
	const onClick = useCallback(callbackFactory("Flex98", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex99Cb() {
	const onClick = useCallback(callbackFactory("Flex99", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex100Cb() {
	const onClick = useCallback(callbackFactory("Flex100", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex101Cb() {
	const onClick = useCallback(callbackFactory("Flex101", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterCb() {
	const onClick = useCallback(callbackFactory("footer", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usesign_up_status_textCb() {
	const onClick = useCallback(callbackFactory("sign_up_status_text", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usesign_up_statusCb() {
	const onClick = useCallback(callbackFactory("sign_up_status", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox169Cb() {
	const onClick = useCallback(callbackFactory("TextBox169", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useslogan_containerCb() {
	const onClick = useCallback(callbackFactory("slogan_container", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv3Cb() {
	const onClick = useCallback(callbackFactory("Div3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecode_oneCb() {
	const onClick = useCallback(callbackFactory("code_one", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecode_twoCb() {
	const onClick = useCallback(callbackFactory("code_two", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox170Cb() {
	const onClick = useCallback(callbackFactory("TextBox170", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usesubtitle_containerCb() {
	const onClick = useCallback(callbackFactory("subtitle_container", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox171Cb() {
	const onClick = useCallback(callbackFactory("TextBox171", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage106Cb() {
	const onClick = useCallback(callbackFactory("Image106", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex224Cb() {
	const onClick = useCallback(callbackFactory("Flex224", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://youtu.be/YokMeI23_iw",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usemade_with_atriCb() {
	const onClick = useCallback(callbackFactory("made_with_atri", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage107Cb() {
	const onClick = useCallback(callbackFactory("Image107", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox172Cb() {
	const onClick = useCallback(callbackFactory("TextBox172", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usesubtitle_container_mobCb() {
	const onClick = useCallback(callbackFactory("subtitle_container_mob", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex228Cb() {
	const onClick = useCallback(callbackFactory("Flex228", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox173Cb() {
	const onClick = useCallback(callbackFactory("TextBox173", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage109Cb() {
	const onClick = useCallback(callbackFactory("Image109", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://www.ycombinator.com/companies/atri-labs",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox175Cb() {
	const onClick = useCallback(callbackFactory("TextBox175", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage110Cb() {
	const onClick = useCallback(callbackFactory("Image110", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex229Cb() {
	const onClick = useCallback(callbackFactory("Flex229", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/atrilabs-engine",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}