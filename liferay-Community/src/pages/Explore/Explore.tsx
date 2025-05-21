import { useOutletContext } from "react-router-dom";
import { CommunitySection } from "../../components/CommunitySection/CommunitySection";
import {
  ExploreContainer,
  Main,
  Container,
  Header,
  FilterSide,
} from "./styles";
import { Banner } from "../../components/Banner/Banner";
import { Filter } from "../../components/Filter/Filter";
import { useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function Explore() {
  const { communities, handleJoinCommunityUpdate } = useOutletContext() as any;
  const [ selectedCategory, setSelectedCategory ] = useState<string>("");
  const [searchCommunity, setSearchCommunity] = useState<string>("");

  const filteredCommunities = communities.filter((community: any) => {
    const matchesCategory = !selectedCategory || community.category === selectedCategory;

    const matchesSearch = community.title.toLowerCase().includes(searchCommunity.toLocaleLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? "" : category
    );
  };

  return (
    <ExploreContainer>
      <Banner />
      <Main>
        <FilterSide>
          <Filter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </FilterSide>
        <Container>
          <Header>
            <h3>Comunidades em Destaque</h3>
            <SearchBar value={searchCommunity} onChange={(e) => setSearchCommunity(e.target.value)} />
          </Header>
          <CommunitySection
            cards={filteredCommunities}
            onJoinCommunity={handleJoinCommunityUpdate}
          />
        </Container>
      </Main>
    </ExploreContainer>
  );
}
