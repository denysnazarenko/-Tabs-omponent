import TabItem from "../tabItem/TabItem";

import './unpinnedTabs.scss';

const UnpinnedTabs = ({ tabs }) => {

  return (
    <div className="unpinned-tabs">
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          tab={tab}
          draggable
        />
      ))}
    </div>
  );
}

export default UnpinnedTabs;