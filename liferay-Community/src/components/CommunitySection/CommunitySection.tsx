import { CommunityCard } from "../CommunityCard/CommunityCard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Notice, Section } from "./styles";

interface CommunityCardData {
  id: string;
  cover: string;
  title: string;
  description: string;
  members: number;
  category: string;
}

interface CommunitySectionProps {
  cards: CommunityCardData[];
  onJoinCommunity: (communityId: string) => void;
  onCategoryClick?: (category: string) => void;
}

export function CommunitySection({
  cards,
  onJoinCommunity,
  onCategoryClick
}: CommunitySectionProps) {
  return (
    <Section>
      {cards.length > 0 ? (
        <CommunityCard cards={cards} onJoin={onJoinCommunity} onCategoryClick={onCategoryClick} />
      ) : (
        <Notice>
          <AiOutlineInfoCircle size={124} />
          <h1>Nenhuma comunidade encontrada.</h1>
        </Notice>
      )}
    </Section>
  );
}
