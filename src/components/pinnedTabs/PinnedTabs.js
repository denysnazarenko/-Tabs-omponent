import { useDispatch } from "react-redux";
import { Reorder } from "framer-motion";
import { reorderTabs } from "../tabContainer/TabsSlice";
import TabItem from "../tabItem/TabItem";

import './pinnedTabs.scss';

const PinnedTabs = ({ tabs }) => {
  const dispatch = useDispatch();

  const handleReorder = (newOrder) => {
    dispatch(reorderTabs({ newOrder, isPinned: true }));
  };

  return (
    <Reorder.Group
      as="ul"
      axis="x"
      values={tabs}
      onReorder={handleReorder}
      className="pinned-tabs">
      {tabs.map(tab => (
        <TabItem key={tab.id} tab={tab} />
      ))}
    </Reorder.Group>
  );
}

export default PinnedTabs;