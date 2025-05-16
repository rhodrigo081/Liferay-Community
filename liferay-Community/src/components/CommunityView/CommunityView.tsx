import {
  CardsTitle,
  CardsContainer,
  Card,
  CardButton,
  CardTitle,
  CardDescription,
  WorkBadge,
  CardBanner,
  CardContent
} from "./styles";
import { useNavigate } from "react-router-dom";

export function CommunityView() {
    const navigate = useNavigate();

      const handleAccessCommunity = (communityId) => {
    navigate(`/community/${communityId}`);
  };

    const handleAccessCommunity1 = (communityId1) => {
    navigate(`/community/${communityId1}`);
  };

  return (
    <CardsContainer>
      <Card>
        <CardBanner>
          <img src="/src/assets/BannerJava.jpg"  />
        </CardBanner>
        <CardContent>
          <CardTitle>Java Developers</CardTitle>
          <CardDescription>Este grupo é dedicado a estudantes e profissionais que querem aprender e evoluir no desenvolvimento com Java. </CardDescription>
         <WorkBadge>Estudo</WorkBadge>
          <CardButton onClick={() => handleAccessCommunity("java-developers")}>Acessar</CardButton>
        </CardContent>
      </Card>
      
      <Card>
        <CardBanner>
          <img src="/src/assets/BannerING.jpg" />
        </CardBanner>
        <CardContent>
          <CardTitle>English Studants</CardTitle>
          <CardDescription>Se você quer melhorar seu inglês, este é o lugar certo. Aqui praticamos conversação, trocamos dicas de gramática, vocabulário e expressões cotidianas.</CardDescription>
          <WorkBadge>Estudo</WorkBadge>
          <CardButton>Acessar</CardButton>
        </CardContent>
      </Card>
      
      <Card>
        <CardBanner>
          <img src="/src/assets/BannerVolei.jpg" />
        </CardBanner>
        <CardContent>
          <CardTitle>Jogadores de Vôlei </CardTitle>
          <CardDescription>Para quem ama vôlei e quer trocar experiências sobre o esporte. Aqui você pode discutir técnicas, estratégias de jogo, acompanhar campeonatos.</CardDescription>
          <WorkBadge>Esporte</WorkBadge>
          <CardButton  onClick={() => handleAccessCommunity1("volei-players")}>Acessar</CardButton>
        </CardContent>
      </Card>
      
      <Card>
        <CardBanner>
          <img src="/src/assets/BannerCS.jpg" />
        </CardBanner>
        <CardContent>
          <CardTitle>CS:GO.BR</CardTitle>
          <CardDescription>Se Counter-Strike é o seu jogo favorito, este grupo foi feito para você. Monte times, jogue partidas competitivas, troque dicas sobre...</CardDescription>
          <WorkBadge>Jogo</WorkBadge>
          <CardButton>Acessar</CardButton>
        </CardContent>
      </Card>
      
      <Card>
        <CardBanner>
          <img src="/src/assets/BannerBoleiro.jpg" />
        </CardBanner>
        <CardContent>
          <CardTitle>Boleiros</CardTitle>
          <CardDescription>Se futebol é a sua paixão, este grupo é para você. Aqui falamos sobre partidas, lances memoráveis, organizamos jogos entre os...</CardDescription>
          <WorkBadge>Esporte</WorkBadge>
          <CardButton>Acessar</CardButton>
        </CardContent>
      </Card>
      
      <Card>
        <CardBanner>
          <img src="/src/assets/BannerLeitores.jpg" />
        </CardBanner>
        <CardContent>
          <CardTitle>Leitores de Plantão</CardTitle>
          <CardDescription>Um espaço para quem ama livros e quer trocar experiências sobre literatura. Compartilhe indicações de livros, participe de discussões.</CardDescription>
          <WorkBadge>Conversa</WorkBadge>
          <CardButton>Acessar</CardButton>
        </CardContent>
      </Card>
      
      <Card>
       <CardBanner>
          <img src="/src/assets/BannerFIFA.jpg" />
        </CardBanner>
        <CardContent>
          <CardTitle>FIFA Club</CardTitle>
          <CardDescription>Para quem é fã de FIFA e quer se conectar com outros jogadores. Organize partidas, participe de ligas e campeonatos, compartilhe estratégias e.</CardDescription>
          <WorkBadge>Jogo</WorkBadge>
          <CardButton>Acessar</CardButton>
        </CardContent>
      </Card>
      
      <Card>
        <CardBanner>
          <img src="/src/assets/BannerPet.jpg" />
        </CardBanner>
        <CardContent>
          <CardTitle>Pais de Pet</CardTitle>
          <CardDescription>Se você considera seu pet parte da família, este grupo é para você. Aqui você pode compartilhar fotos, trocar experiências, tirar dúvidas sobre...</CardDescription>
          <WorkBadge>Conversa</WorkBadge>
          <CardButton>Acessar</CardButton>
        </CardContent>
      </Card>
    </CardsContainer>
  );
}