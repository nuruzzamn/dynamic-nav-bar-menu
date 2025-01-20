export const menu = {
  menu: [
    {
      id: 1,
      title: "Account",
      route: "/account",

      children: [
        {
          id: 1,
          title: "Sells",
          route: "/account/sells",

          children: [
            { id: 1, title: "Milk", route: "/account/sells/milk" },
            { id: 2, title: "Gee", route: "/account/sells/gee" },
            { id: 3, title: "Modhu", route: "/account/sells/modhu" },
            { id: 4, title: "Makhon", route: "/account/sells/makhon" },
          ],
        },

        {
          id: 2,
          title: "Stock",
          route: "/account/stock",

          children: [
            { id: 1, title: "Stock 1", route: "/account/stock/stock-1" },
            { id: 2, title: "stock 2", route: "/account/stock/stock-2" },
            { id: 3, title: "stock 3", route: "/account/stock/stock-3" }, //add a new menu

          ],
        },
      ],
    },
    {
      id: 2,
      title: "Report",
      route: "/report",
      children: [
        { id: 1, title: "Today", route: "/report/today" },
        { id: 2, title: "Last week", route: "/report/last-week" },
      ],
    },
    {
      id: 3,
      title: "Settings",
      route: "/settings",

      children: [],
    },
  ],
};
