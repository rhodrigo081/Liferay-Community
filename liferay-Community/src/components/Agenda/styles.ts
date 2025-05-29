import styled from "styled-components";
import { StyledTabButton as CommonTabButton } from "../common/TabButton/styles"; 

export const AgendaContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 1.5rem;
  background: ${(props) => props.theme.communityCard.background}; 
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 2px 4px 4px 0 rgba(0, 0, 0, 0.1);
`;

export const AgendaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    color: ${(props) => props.theme.title};
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

export const AgendaExportButton = styled.button`
  background: ${(props) => props.theme.communityCard.button};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const AgendaFilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding-bottom: 0.8rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  ${CommonTabButton} { 
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border-bottom: none; 
    border-radius: 4px;

    &:hover {
      background: ${(props) => props.theme.navLine};
      color: #fff;
    }
  }
`;

export const AgendaSearchInput = styled.input`
  flex: 1; 
  min-width: 10rem; 
  background: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.text};
  font-size: 0.9rem;
  margin-left: auto; 

  &::placeholder {
    color: ${(props) => props.theme.lightText};
  }
`;

export const AgendaEventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AgendaDateSeparator = styled.div`
  color: ${(props) => props.theme.title};
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

export const AgendaEventItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px dashed ${(props) => props.theme.border}; 

  &:last-child {
    border-bottom: none; 
  }
`;

export const AgendaEventTime = styled.span`
  color: ${(props) => props.theme.lightText};
  font-size: 0.9rem;
  flex-shrink: 0; 
  width: 7rem; 
`;

export const AgendaEventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const AgendaEventTitle = styled.h4`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-weight: 500;
`;

export const AgendaEventLocation = styled.span`
  color: ${(props) => props.theme.lightText};
  font-size: 0.8rem;
  font-style: italic;
`;