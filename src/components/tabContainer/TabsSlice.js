import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem('tabsState');
    return savedState ? JSON.parse(savedState) : undefined;
  } catch (error) {
    console.error('Failed to load state from localStorage', error);
    return undefined;
  }
};

const initialState = loadStateFromLocalStorage() || {
  tabs: [
    { id: 1, title: "Dashboard", isPinned: true, isActive: true, url: "/dashboard" },
    { id: 2, title: "Banking", isPinned: true, isActive: false, url: "/banking" },
    { id: 3, title: "Telefonie", isPinned: false, isActive: false, url: "/telefonie" },
    { id: 4, title: "Accounting", isPinned: false, isActive: false, url: "/accounting" },
    { id: 5, title: "Verkauf", isPinned: false, isActive: false, url: "/verkauf" },
    { id: 6, title: "Statistik", isPinned: false, isActive: false, url: "/statistik" },
    { id: 7, title: "Post Office", isPinned: false, isActive: false, url: "/postoffice" },
    { id: 8, title: "Administration", isPinned: false, isActive: false, url: "/administration" },
    { id: 9, title: "Help", isPinned: false, isActive: false, url: "/help" },
    { id: 10, title: "Warenbestand", isPinned: false, isActive: false, url: "/warenbestand" },
    { id: 11, title: "Auswahllisten", isPinned: false, isActive: false, url: "/auswahllisten" },
    { id: 12, title: "Einkauf", isPinned: false, isActive: false, url: "/einkauf" },
    { id: 13, title: "Rechn", isPinned: false, isActive: false, url: "/rechn" },
    { id: 14, title: "Lagerverwaltung", isPinned: false, isActive: false, url: "/lagerverwaltung" }
  ],
  overflowTabs: [],
  activeTabId: 1,
}

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      const activeTabId = action.payload;
      state.tabs.forEach((tab) => {
        tab.isActive = tab.id === activeTabId;
      });
      state.activeTabId = activeTabId;
    },
    reorderTabs(state, action) {
      const { newOrder, isPinned } = action.payload;
      const reorderedTabs = state.tabs.filter(tab => tab.isPinned === isPinned);
      const otherTabs = state.tabs.filter(tab => tab.isPinned !== isPinned);
      state.tabs = [
        ...otherTabs,
        ...newOrder.map(tab => ({
          ...reorderedTabs.find(originalTab => originalTab.id === tab.id),
        })),
      ];
    },
  }
})

const { actions, reducer } = tabsSlice;
export default reducer;
export const {
  setActiveTab,
  reorderTabs
} = actions;