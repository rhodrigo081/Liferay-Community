import { NavLink } from "react-router-dom";
import {
  Card,
  CardFooter,
  CommunityInfo,
  Text,
  CardsGrid,
  Category,
} from "./styles";
import { FaCircle } from "react-icons/fa";
import React from "react"; 

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
}: CommunityCardProps) { 
  function handleJoinCommunity(communityId: string, event: React.MouseEvent) {
    // Previne a navegação quando clica no botão
    event.preventDefault();
    event.stopPropagation();
    onJoin(communityId);
  }

  function handleCategoryClick(category: string, event: React.MouseEvent) {
    // Previne a navegação quando clica na categoria
    event.preventDefault();
    event.stopPropagation();
    onCategoryClick?.(category);
  }

  return (
    <CardsGrid>
      {cards.map((card) => (
        <NavLink key={card.id} to={`/community/${card.id}`} title={card.title}>
          <Card>
            <img src={card.cover} alt={`Capa da comunidade: ${card.title}`} />

            <CommunityInfo>
              <Text>
                <strong>{card.title}</strong>
              </Text>
              <Text>
                <p title={card.description}>
                  {card.description.length > 135
                    ? `${card.description.slice(0, 135)}...`
                    : card.description}
                </p>
              </Text>
              <Text>
                <Category
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => 
                    handleCategoryClick(card.category, e)
                  }
                >
                  {card.category}
                </Category>
              </Text>
            </CommunityInfo>
            <CardFooter>
              <div>
                {!card.joined && (
                  <button
                    className="join-button"
                    onClick={(e: React.MouseEvent) => 
                      handleJoinCommunity(card.id, e)
                    }
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
        </NavLink>
      ))}
    </CardsGrid>
  );
}
