import { useDispatch } from 'react-redux';
import { setActiveTab } from '../tabContainer/TabsSlice';

import './tabItem.scss';

const TabItem = ({ tab, draggable }) => {
  const dispatch = useDispatch();

  const setActive = () => {
    dispatch(setActiveTab(tab.id))
  }

  return (
    <div
      className={`tab-item ${tab.isPinned ? "pinned" : ""} ${tab.isActive ? "active" : ""}`}
      draggable={draggable}
      onClick={setActive}>
      {tab.title}
    </div>
  );
}

export default TabItem;