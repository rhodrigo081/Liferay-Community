import { useOutletContext } from "react-router-dom";
import { CommunitySection } from "../../components/CommunitySection/CommunitySection";
import { ExploreContainer, Main, Container } from "./styles";
import { Banner } from "../../components/Banner/Banner";
import { Filter } from "../../components/Filter/Filter";
import { CommunityView } from "../../components/CommunityView/CommunityView";
import { CommunityDetailView } from "../../components/CommunityDatailView/CommunityDatailView";

export function Explore() {
  const { communities, handleJoinCommunityUpdate } = useOutletContext();

  return (
    <ExploreContainer>
      {/* <Banner />

      <Main>
        <Container>
          <Filter />
        </Container>
        <Container> */}
          {/* <h3>Comunidades em Destaque</h3>
          <CommunitySection
            cards={communities}
            onJoinCommunity={handleJoinCommunityUpdate}
          />
          <CommunityView /> */}
          <CommunityDetailView/>
        {/* </Container> */}
        
      {/* </Main> */}
    </ExploreContainer>
  );
}
