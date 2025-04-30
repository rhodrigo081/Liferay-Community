import { FaRegCompass } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import { IoAddCircleOutline } from "react-icons/io5";
import { SidebarContainer, IconWrapper, Indicator, TopSection, BottomSection, IconGroup } from "./styles";
import { useState, useEffect, useRef } from "react";

export function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorTop, setIndicatorTop] = useState(0);
  
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  
    useEffect(() => {
      const currentIcon = iconRefs.current[activeIndex];
      if (currentIcon) {
        const offsetTop = currentIcon.offsetTop;
        setIndicatorTop(offsetTop);
      }
    }, [activeIndex]);
  
    const topIcons = [
      { icon: <FaRegCompass />, index: 0 },
      { icon: <PiUsersFill />, index: 1 }
    ];
  
    const bottomIcons = [
      { icon: <IoAddCircleOutline />, index: 2 }
    ];
  
    return (
      <SidebarContainer>
        <Indicator style={{ top: `${indicatorTop}px` }} />
  
        <TopSection>
          {topIcons.map(({ icon, index }) => (
            <IconGroup
              key={index}
              ref={(el) => (iconRefs.current[index] = el)}
              onClick={() => setActiveIndex(index)}
            >
              <IconWrapper isActive={activeIndex === index}>{icon}</IconWrapper>
            </IconGroup>
          ))}
        </TopSection>
  
        <hr />
  
        <BottomSection>
          {bottomIcons.map(({ icon, index }) => (
            <IconGroup
              key={index}
              ref={(el) => (iconRefs.current[index] = el)}
              onClick={() => setActiveIndex(index)}
            >
              <IconWrapper isActive={activeIndex === index}>{icon}</IconWrapper>
            </IconGroup>
          ))}
        </BottomSection>
      </SidebarContainer>
    );
  }