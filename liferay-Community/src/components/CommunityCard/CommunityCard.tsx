import {
  Card,
  CardFooter,
  CommunityInfo,
  Text,
  CardsGrid,
  Category,
} from "./styles";
import { FaCircle } from "react-icons/fa";

interface CardsProps {
  id: string;
  cover: string;
  title: string;
  description: string;
  members: number;
  category: string;
  joined: boolean;
}

interface CommunityCardProps {
  cards?: CardsProps[];
  onJoin: (communityId: string) => void;
  onCategoryClick?: (category: string) => void;
}

export function CommunityCard({
  cards = [],
  onJoin = () => {},
  onCategoryClick = () => {},
}) {
  function handleJoinCommunity(communityId: string) {
    onJoin(communityId);
  }

  return (
    <CardsGrid>
      {cards.map((card) => (
        <Card key={card.id}>
          <img src={card.cover} alt={`Capa da comunidade: ${card.title}`} />

          <CommunityInfo>
            <Text>
              <strong>{card.title}</strong>
            </Text>
            <Text>
              <p title={card.description}>
                {card.description.length > 100
                  ? `${card.description.slice(0, 100)}...`
                  : card.description}
              </p>
            </Text>
            <Text>
              <Category onClick={() => onCategoryClick?.(card.category)}>
                {card.category}
              </Category>
            </Text>
          </CommunityInfo>
          <CardFooter>
            <div>
              {!card.joined && (
                <button
                  className="join-button"
                  onClick={() => handleJoinCommunity(card.id)}
                >
                  Entrar
                </button>
              )}
            </div>
            <div>
              <p>
                <FaCircle color="#FFBB0A" />
                {card.members} Membros
              </p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </CardsGrid>
  );
}
