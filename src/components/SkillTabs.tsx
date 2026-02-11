import { useCallback, useEffect, useMemo } from "react";
import { skillGroups } from "../data/skills";
import { setActiveGroup, setGroups } from "../store/skillsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const SkillTabs = () => {
  const dispatch = useAppDispatch();
  const { groups, activeGroupId } = useAppSelector((state) => state.skills);

  useEffect(() => {
    dispatch(setGroups(skillGroups));
  }, [dispatch]);

  const activeGroup = useMemo(() => {
    return groups.find((group) => group.id === activeGroupId) ?? groups[0];
  }, [groups, activeGroupId]);

  const handleSelect = useCallback(
    (id: string) => {
      dispatch(setActiveGroup(id));
    },
    [dispatch]
  );

  if (!activeGroup) {
    return <p>Завантаження навичок...</p>;
  }

  return (
    <div className="tabs">
      <div className="tab-buttons" role="tablist">
        {groups.map((group) => (
          <button
            key={group.id}
            type="button"
            role="tab"
            aria-selected={group.id === activeGroupId}
            className={`tab-button ${group.id === activeGroupId ? "active" : ""}`}
            onClick={() => handleSelect(group.id)}
          >
            {group.label}
          </button>
        ))}
      </div>
      <div className="tab-panels">
        <div className="tab-panel active" role="tabpanel">
          <div className="cards">
            {activeGroup.items.map((item) => (
              <article key={item.title} className="card">
                <div className="card-top">
                  <h3>{item.title}</h3>
                  <span className="chip">{item.tags.join(" / ")}</span>
                </div>
                <p>{item.description}</p>
                <div className="skill-meter">
                  <span>Рівень впевненості</span>
                  <div className="meter">
                    <div className="meter-fill" style={{ width: `${item.level}%` }} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTabs;
