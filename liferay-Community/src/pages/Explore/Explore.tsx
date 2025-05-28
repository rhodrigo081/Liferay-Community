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
import { SetStateAction, useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";

interface Community {
  id: string;
  cover: string;
  title: string;
  description: string;
  members: number;
  category: string;
}

interface OutletContext {
  communities: Community[];
  handleAddCommunity: (newCommunity: Community) => void;
  handleJoinCommunityUpdate: (communityId: string) => void;
}

export function Explore() {
  const { communities, handleJoinCommunityUpdate } = useOutletContext<OutletContext>();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchCommunity, setSearchCommunity] = useState<string>("");

  const filteredCommunities = communities.filter((community: Community) => {
    const matchesCategory = !selectedCategory || community.category === selectedCategory;

    const matchesSearch = community.title.toLowerCase().includes(searchCommunity.toLowerCase());

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
            <SearchBar 
              value={searchCommunity} 
              onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSearchCommunity(e.target.value)} 
            />
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