

import './tabItem.scss';

const TabItem = ({tab, draggable}) => {
  return (
    <div
      className={`tab-item ${tab.isPinned ? "pinned" : ""}`}
      draggable={draggable}>
      {tab.title}
    </div>
  );
}

export default TabItem;