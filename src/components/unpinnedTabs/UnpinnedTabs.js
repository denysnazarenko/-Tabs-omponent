import { useDispatch } from "react-redux";
import { Reorder } from "framer-motion";
import { reorderTabs } from "../tabContainer/TabsSlice";
import TabItem from "../tabItem/TabItem";

import './unpinnedTabs.scss';

const UnpinnedTabs = ({ tabs }) => {
  const dispatch = useDispatch();

  const handleReorder = (newOrder) => {
    dispatch(reorderTabs({ newOrder, isPinned: false }));
  };

  return (
    <Reorder.Group
      as="ul"
      axis="x"
      values={tabs}
      onReorder={handleReorder}
      className="unpinned-tabs">
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          tab={tab}
        />
      ))}
    </Reorder.Group>
  );
}

export default UnpinnedTabs;