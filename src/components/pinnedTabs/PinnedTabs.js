import TabItem from "../tabItem/TabItem";

import './pinnedTabs.scss';

const PinnedTabs = ({ tabs }) => {
  return (
    <section className="pinned-tabs">
      {tabs.map(tab => (
        <TabItem key={tab.id} tab={tab} draggable={false} />
      ))}
    </section>
  );
}

export default PinnedTabs;