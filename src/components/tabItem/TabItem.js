import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Reorder } from 'framer-motion';
import { setActiveTab, togglePinnedStatus } from '../tabContainer/TabsSlice';

import './tabItem.scss';

const TabItem = ({ tab }) => {
  const [timer, setTimer] = useState(null);
  const [isDraggable, setIsDraggable] = useState(window.innerWidth >= 767);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    } else {
      const newTimer = setTimeout(() => {
        dispatch(setActiveTab(tab.id));
        setTimer(null);
      }, 200);
      setTimer(newTimer);
    }
  };

  const handleDoubleClick = () => {
    clearTimeout(timer);
    setTimer(null);
    dispatch(togglePinnedStatus(tab.id));
  };

  const handlePointerDown = () => {
    if (window.innerWidth < 767) {
      const newTimer = setTimeout(() => {
        setIsDraggable(true);
      }, 2000);
      setTimer(newTimer);
    } else {
      setIsDraggable(true);
    }
  };

  const handlePointerUp = () => {
    clearTimeout(timer);
    setIsDraggable(window.innerWidth >= 767);
  };

  return (
    <Reorder.Item
      value={tab}
      className={`tab-item ${tab.isPinned ? "pinned" : ""} ${tab.isActive ? "active" : ""}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      drag={isDraggable}
      whileDrag={{
        background: "#7f858d",
        color: "#fff",
      }}>
      {tab.title}
    </Reorder.Item>
  );
}

export default TabItem;