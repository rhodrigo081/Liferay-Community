import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import {
  MainContainer,
  Banner,
  Content,
  CommunityHeader,
  CommunityTitle,
  JoinButton,
  ForumContainer,
  ChatPanel,
  LayoutWrapper,
  Sidebar,
  SidebarHeader,
  NavSection,
  NavItem,
  HR,
  Main,
  Notice,
} from "./styles";
import { PostArea } from "../../components/PostArea/PostArea";
import { IoChatbubbleOutline } from "react-icons/io5";
import { Agenda } from "../../components/Agenda/Agenda";
import { useEffect, useState } from "react";
import { Post } from "../../components/Post/Post";

interface CardsProps {
  id: string;
  cover: string;
  title: string;
  description: string;
  members: number;
  category: string;
  joined: boolean;
}

interface OutletContextType {
  communities: CardsProps[];
  handleAddCommunity: (newCommunity: Omit<CardsProps, "joined">) => void;
  handleJoinCommunityUpdate: (communityId: string) => void;
  handleLeaveCommunityUpdate: (communityId: string) => void;
}

export function CommunityPage() {
  const { id: communityId } = useParams<{ id: string }>();
  const [isHovered, setIsHovered] = useState(false);
  const { communities, handleJoinCommunityUpdate, handleLeaveCommunityUpdate } =
    useOutletContext<OutletContextType>();

  const community = communities.find((c) => c.id === communityId);
  const navigate = useNavigate();

  function handleJoinOrLeave() {
    if (community.joined && isHovered) {
      handleLeaveCommunityUpdate(community.id);
      navigate("/");
    } else {
      handleJoinCommunityUpdate(community.id);
    }
  }

  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem(`posts-${communityId}`);
    if (storedPosts) {
      try {
        const parsed = JSON.parse(storedPosts);
        const converted = parsed.map((post: PostProps) => ({
          ...post,
          publishedAt: new Date(post.publishedAt),
        }));
        setPosts(converted);
      } catch (err) {
        console.error("Erro ao carregar posts:", err);
        setPosts([]);
      }
    }
  }, [communityId]);

  function handleNewPost(post: PostProps) {
    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem(`posts-${communityId}`, JSON.stringify(updatedPosts));
    console.log();
  }

  const [activeView, setActiveView] = useState<"forum" | "agenda">("forum");

  const renderContent = () => {
    if (activeView === "agenda") {
      return (
        <Main>
          <Banner>
            <img src={community.cover} />
          </Banner>

          <Content>
            <ForumContainer>
              <CommunityHeader>
                <CommunityTitle>{community.title}</CommunityTitle>
                <JoinButton
                  onClick={handleJoinOrLeave}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`
                  ${community?.joined ? "joined" : ""}
                  ${community?.joined && isHovered ? "leave" : ""}
                `}
                >
                  <span className="btn-text default">
                    {community?.joined ? "Participando" : "Participar"}
                  </span>
                  {community?.joined && (
                    <span className="btn-text hover">Sair</span>
                  )}
                </JoinButton>
              </CommunityHeader>
              <HR />
            </ForumContainer>
            <Agenda isParticipant={community.joined} />
          </Content>
        </Main>
      );
    }

    return (
      <Main>
        <Banner>
          <img src={community.cover} />
        </Banner>

        <Content>
          <ForumContainer>
            <CommunityHeader>
              <CommunityTitle>{community.title}</CommunityTitle>
              <JoinButton
                onClick={handleJoinOrLeave}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`
                  ${community?.joined ? "joined" : ""}
                  ${community?.joined && isHovered ? "leave" : ""}
                `}
              >
                <span className="btn-text default">
                  {community?.joined ? "Participando" : "Participar"}
                </span>
                {community?.joined && (
                  <span className="btn-text hover">Sair</span>
                )}
              </JoinButton>
            </CommunityHeader>
            <HR />
          </ForumContainer>

          <ChatPanel>
            {community.joined && <Post onPostCreate={handleNewPost} />}

            {posts.length > 0 ? (
              posts.map((post) => (
                <PostArea
                  key={post.id}
                  id={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              ))
            ) : (
              <Notice>
                <IoChatbubbleOutline size={124} />
                <h1>Seja o primeiro a postar!</h1>
              </Notice>
            )}
          </ChatPanel>
        </Content>
      </Main>
    );
  };

  return (
    <MainContainer>
      <LayoutWrapper>
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            <h2>{community.title}</h2>
          </SidebarHeader>
          <hr />

          <NavSection>
            <NavItem
              onClick={() => setActiveView("forum")}
              className={activeView === "forum" ? "active" : ""}
            >
              Fórum
            </NavItem>
            <NavItem
              onClick={() => setActiveView("agenda")}
              className={activeView === "agenda" ? "active" : ""}
            >
              Agenda
            </NavItem>
          </NavSection>
        </Sidebar>
        <div className="mainCommunity">{renderContent()}</div>
      </LayoutWrapper>
    </MainContainer>
  );
}
