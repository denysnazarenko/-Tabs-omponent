import { useDispatch } from 'react-redux';
import { Reorder } from 'framer-motion';
import { setActiveTab } from '../tabContainer/TabsSlice';

import './tabItem.scss';

const TabItem = ({ tab }) => {
  const dispatch = useDispatch();

  const setActive = () => {
    dispatch(setActiveTab(tab.id))
  }

  return (
    <Reorder.Item
      value={tab}
      className={`tab-item ${tab.isPinned ? "pinned" : ""} ${tab.isActive ? "active" : ""}`}
      onClick={setActive}>
      {tab.title}
    </Reorder.Item>
  );
}

export default TabItem;