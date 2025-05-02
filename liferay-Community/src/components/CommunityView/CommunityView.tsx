
import {
  MainContainer,
  Content,
  Banner,
  BannerText,
  CardsTitle,
  CardsContainer,
  Card,
  CardButton,
  CardTitle,
  CardDescription
} from "./styles";

export function CommunityView() {
  return (
    <MainContainer>
    
      <Content>
        <Banner>
          <BannerText>
            <h1>Encontre sua comunidade na</h1>
            <h2>LIFERAY COMMUNITIES ®</h2>
            <p>Explore grupos com interesses como os seus!</p>
          </BannerText>
        </Banner>
        
        <CardsTitle>Comunidades em destaque</CardsTitle>
        
        <CardsContainer>
          <Card>
            <img src="" alt="" />
            <CardTitle>Front-end Brasil</CardTitle>
            <CardDescription>React, Vue, Angular e mais.</CardDescription>
            <CardButton>Entrar</CardButton>
          </Card>
          
          <Card>
            <CardTitle>Back-end Devs</CardTitle>
            <CardDescription>Node, Java, Python, bancos de dados.</CardDescription>
            <CardButton>Entrar</CardButton>
          </Card>
          
          <Card>
            <CardTitle>Mobile Lovers</CardTitle>
            <CardDescription>React Native, Flutter, iOS e Android.</CardDescription>
            <CardButton>Entrar</CardButton>
          </Card>
          
          <Card>
            <CardTitle>Mobile Lovers</CardTitle>
            <CardDescription>React Native, Flutter, iOS e Android.</CardDescription>
            <CardButton>Entrar</CardButton>
          </Card>
          
          <Card>
            <CardTitle>Mobile Lovers</CardTitle>
            <CardDescription>React Native, Flutter, iOS e Android.</CardDescription>
            <CardButton>Entrar</CardButton>
          </Card>
          
          <Card>
            <CardTitle>Mobile Lovers</CardTitle>
            <CardDescription>React Native, Flutter, iOS e Android.</CardDescription>
            <CardButton>Entrar</CardButton>
          </Card>
          
          <Card>
            <CardTitle>Mobile Lovers</CardTitle>
            <CardDescription>React Native, Flutter, iOS e Android.</CardDescription>
            <CardButton>Entrar</CardButton>
          </Card>
          
          <Card>
            <CardTitle>Mobile Lovers</CardTitle>
            <CardDescription>React Native, Flutter, iOS e Android.</CardDescription>
            <CardButton>Entrar</CardButton>
          </Card>
        </CardsContainer>
      </Content>
    </MainContainer>
  );
}