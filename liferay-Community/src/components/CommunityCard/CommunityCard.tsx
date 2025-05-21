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
}

interface CommunityCardProps {
  cards?: CardsProps[];
  onJoin: (communityId: string) => void;
}

export function CommunityCard({ cards = [], onJoin = () => {} }) {
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
              <Category>{card.category}</Category>
            </Text>
          </CommunityInfo>
          <CardFooter>
            <button
              className="join-button"
              onClick={() => handleJoinCommunity(card.id)}
            >
              Entrar
            </button>
            <p>
              <FaCircle color="#FFBB0A" />
              {card.members} Membros
            </p>
          </CardFooter>
        </Card>
      ))}
    </CardsGrid>
  );
}
