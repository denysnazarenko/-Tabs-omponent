import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    { id: 1, title: "Dashboard", isPinned: true, url: "/dashboard" },
    { id: 2, title: "Banking", isPinned: false, url: "/banking" },
    { id: 3, title: "Telefonie", isPinned: false, url: "/telefonie" },
    { id: 4, title: "Accounting", isPinned: false, url: "/accounting" },
    { id: 5, title: "Verkauf", isPinned: false, url: "/verkauf" },
    { id: 6, title: "Statistik", isPinned: false, url: "/statistik" },
    { id: 7, title: "Post Office", isPinned: false, url: "/postoffice" },
    { id: 8, title: "Administration", isPinned: false, url: "/administration" },
    { id: 9, title: "Help", isPinned: false, url: "/help" },
    { id: 10, title: "Warenbestand", isPinned: false, url: "/warenbestand" },
    { id: 11, title: "Auswahllisten", isPinned: false, url: "/auswahllisten" },
    { id: 12, title: "Einkauf", isPinned: false, url: "/einkauf" },
    { id: 13, title: "Rechn", isPinned: false, url: "/rechn" },
    { id: 14, title: "Lagerverwaltung", isPinned: false, url: "/lagerverwaltung" }
  ],
  overflowTabs: [],
  activeTabId: 1,
}

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {

  }
})

const { actions, reducer } = tabsSlice;
export default reducer;