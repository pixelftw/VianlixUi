// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [{ title: "Introduction", href: "/introduction" }],
  },
  {
    title: "Components",
    href: "components",
    items: [
      { title: "TextReveal", href: "/text-reveal" },
      { title: "ScrollStaggerText", href: "/scroll-stagger-text" },
      { title: "Magnet", href: "/magnet" },
    ],
  },

  // {
  //   title: "React Hooks",
  //   href: "react-hooks",
  //   items: [
  //     { title: "useSession", href: "/use-session" },

  //     { title: "useFetch", href: "/use-fetch" },
  //     { title: "useAuth", href: "/use-auth" },
  //     { title: "useProduct", href: "/use-product" },
  //     { title: "useOrder", href: "/use-order" },
  //     { title: "useCart", href: "/use-cart" },
  //     { title: "usePayment", href: "/use-payment" },
  //     { title: "useShipping", href: "/use-shipping" },
  //     { title: "useNotification", href: "/use-notification" },
  //     { title: "useReview", href: "/use-review" },
  //     { title: "useInventory", href: "/use-inventory" },
  //     { title: "useUser", href: "/use-user" },
  //     { title: "useSettings", href: "/use-settings" },
  //     { title: "useAnalytics", href: "/use-analytics" },
  //     { title: "useTheme", href: "/use-theme" },
  //     { title: "useRouter", href: "/use-router" },
  //     { title: "useData", href: "/use-data" },
  //   ],
  // },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
