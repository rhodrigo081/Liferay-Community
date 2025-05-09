import { CommunityCard } from "../CommunityCard/CommunityCard";

interface CommunitySectionProps {
  cards: any[];
  onJoinCommunity: (communityId: string) => void;
}

export function CommunitySection({ cards, onJoinCommunity }) {

  return (
    <div>
      <CommunityCard cards={cards} onJoin={onJoinCommunity} />
    </div>
  );
}