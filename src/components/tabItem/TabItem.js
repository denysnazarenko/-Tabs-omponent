import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Reorder } from 'framer-motion';
import { setActiveTab } from '../tabContainer/TabsSlice';

import './tabItem.scss';

const TabItem = ({ tab }) => {
  const [timer, setTimer] = useState(null);
  const [isDraggable, setIsDraggable] = useState(window.innerWidth >= 767);
  const dispatch = useDispatch();

  const setActive = () => {
    dispatch(setActiveTab(tab.id))
  }

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
      onClick={setActive}
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