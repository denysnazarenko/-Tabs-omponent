import { useSelector } from "react-redux";

import PinnedTabs from "../pinnedTabs/PinnedTabs";
import UnpinnedTabs from "../unpinnedTabs/UnpinnedTabs";
import OverflowMenu from "../overflowMenu/OverflowMenu";

import './tabContainer.scss';

const TabContainer = () => {
  const { tabs, overflowTabs } = useSelector(state => state.tabs);

  const pinnedTabs = tabs.filter(tab => tab.isPinned);
  const unpinnedTabs = tabs.filter(tab => !tab.isPinned);

  return (
    <section className="tab-container">
      <PinnedTabs tabs={pinnedTabs} />
      <UnpinnedTabs tabs={unpinnedTabs} />
      {overflowTabs.length > 0 && <OverflowMenu tabs={overflowTabs} />}
    </section>
  )
}

export default TabContainer;