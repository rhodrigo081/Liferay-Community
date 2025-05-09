import { Card, CardFooter, CommunityInfo, Text, CardsGrid } from "./styles";
import { FaCircle } from "react-icons/fa";

interface CardsProps {
  id: string;
  cover: string;
  title: string;
  description: string;
  members: number;
}

interface CommunityCardProps {
  cards?: CardsProps[];
  onJoin: (communityId: string) => void;
}

export function CommunityCard({ cards = [], onJoin = () => {} }) {
  function handleJoinCommunity(communityId: string) {
    if (onJoin) {
      onJoin(communityId);
    } else {
      alert("Não foi possível entrar na comunidade!")
    }
  }

  return (
    <CardsGrid>
      {cards.map((card) => (
        <Card key={card.id || card.title}>
          <img src={card.cover} alt={`Capa da comunidade ${card.title}`} />

          <CommunityInfo>
            <Text>
              <strong>{card.title}</strong>
            </Text>
            <Text>
              <p title={card.description}>
                {card.description.length > 100
                  ? card.description.slice(0, 100) + "..."
                  : card.description}
              </p>
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