
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

import { TabButton } from "../common/TabButton/TabButton";

import { CreateEventModal } from "../CreateEvents/CreateEvents";

import { formatDisplayDate } from "./FormatDisplayDat";

import {
  AgendaContainer,
  AgendaHeader,
  AgendaExportButton,
  AgendaFilterBar,
  AgendaSearchInput,
  AgendaEventList,
  AgendaDateSeparator,
  AgendaEventItem,
  AgendaEventTime,
  AgendaEventDetails,
  AgendaEventTitle,
  AgendaEventLocation,
  DeleteButton,
} from "./styles";

interface AgendaItem {
  id: string;
  date: string;
  time: string;
  title: string;
  location: string;
  canDelete?: boolean; 
}

export function Agenda() {
  const [mockAgenda, setMockAgenda] = useState<AgendaItem[]>([
    {
      id: "1",
      date: "2025-05-30",
      time: "19:00 - 20:30",
      title: "Workshop: Spring Boot 3.0 - Novidades e Migração",
      location: "Sala Virtual - Zoom",
      canDelete: false, 
    },

    {
      id: "2",
      date: "2025-05-30",
      time: "20:45 - 21:30",
      title: "Mesa Redonda: Carreira em Java - Do Júnior ao Sênior",
      location: "Discord - Canal Voz",
      canDelete: false, 
    },

    {
      id: "3",
      date: "2025-05-31",
      time: "13:45 - 16:30",
      title: "Networking: Conectando Devs Java da Comunidade",
      location: "Empresarial liferay - Recife",
      canDelete: false, 
    },

    {
      id: "4",
      date: "2025-06-03",
      time: "19:00 - 20:00",
      title: "Webinar: Reactive Programming com Project Reactor",
      location: "Zoom Webinar",
      canDelete: false, 
    },

    {
      id: "5",
      date: "2025-06-05",
      time: "18:00 - 21:00",
      title: "Bootcamp: Do Zero ao Deploy - Aplicação Java Completa",
      location: "DevSpace - Coworking Tech",
      canDelete: false, 
    },
  ]);

  const [filter, setFilter] = useState("Hoje");

  const [searchTerm, setSearchTerm] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const matchesDateFilter = (
    eventDate: string,
    filterType: string
  ): boolean => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const eventDateTime = new Date(eventDate + "T00:00:00");

    eventDateTime.setHours(0, 0, 0, 0);

    switch (filterType) {
      case "Hoje":
        return eventDateTime.getTime() === today.getTime();

      case "Amanhã":
        const tomorrow = new Date(today);

        tomorrow.setDate(today.getDate() + 1);

        return eventDateTime.getTime() === tomorrow.getTime();

      case "Esta Semana":
        const startOfWeek = new Date(today);

        startOfWeek.setDate(today.getDate() - today.getDay());

        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(startOfWeek);

        endOfWeek.setDate(startOfWeek.getDate() + 6);

        endOfWeek.setHours(23, 59, 59, 999);

        return eventDateTime >= startOfWeek && eventDateTime <= endOfWeek;

      case "Próximos":
        return eventDateTime.getTime() > today.getTime();

      case "Todos os eventos":
        return true;

      default:
        return true;
    }
  };

  const filteredAndSortedAgenda = mockAgenda

    .filter((event) => {
      const matchesFilter = matchesDateFilter(event.date, filter);

      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearch;
    })

    .sort((a, b) => {
      const dateComparison =
        new Date(a.date).getTime() - new Date(b.date).getTime();

      if (dateComparison !== 0) {
        return dateComparison;
      }

      const timeA = a.time.split(" ")[0];

      const timeB = b.time.split(" ")[0];

      const formattedTimeA = parseInt(timeA.replace(":", ""), 10);

      const formattedTimeB = parseInt(timeB.replace(":", ""), 10);

      return formattedTimeA - formattedTimeB;
    });

  const handleCreateEvent = (newEvent: {
    eventName: string;
    eventDate: string;
    eventTime: string;
    eventLocation: string;
  }) => {
    const newId = (mockAgenda.length + 1).toString();

    setMockAgenda((prevAgenda) => [
      ...prevAgenda,

      {
        id: newId,
        date: newEvent.eventDate,
        time: newEvent.eventTime,
        title: newEvent.eventName,
        location: newEvent.eventLocation || "Online",
        canDelete: true, // Eventos criados pelo usuário podem ser deletados
      },
    ]);

    setIsModalOpen(false);
  };

  const handleDeleteEvent = (eventId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este evento?")) {
      setMockAgenda((prevAgenda) => 
        prevAgenda.filter((event) => event.id !== eventId)
      );
    }
  };

  return (
    <AgendaContainer>
           {" "}
      <AgendaHeader>
                <h2>AGENDA</h2>       {" "}
        <AgendaExportButton onClick={() => setIsModalOpen(true)}>
          Criar evento
        </AgendaExportButton>
             {" "}
      </AgendaHeader>
           {" "}
      <AgendaFilterBar>
               {" "}
        <TabButton
          isActive={filter === "Hoje"}
          onClick={() => setFilter("Hoje")}
        >
                    Hoje        {" "}
        </TabButton>
               {" "}
        <TabButton
          isActive={filter === "Amanhã"}
          onClick={() => setFilter("Amanhã")}
        >
                    Amanhã        {" "}
        </TabButton>
               {" "}
        <TabButton
          isActive={filter === "Esta Semana"}
          onClick={() => setFilter("Esta Semana")}
        >
                    Esta Semana        {""}
        </TabButton>
               {" "}
        <TabButton
          isActive={filter === "Próximos"}
          onClick={() => setFilter("Próximos")}
        >
                    Próximos        {" "}
        </TabButton>
               {" "}
        <TabButton
          isActive={filter === "Todos os eventos"}
          onClick={() => setFilter("Todos os eventos")}
        >
                    Todos os eventos        {" "}
        </TabButton>
               {" "}
        <AgendaSearchInput
          type="search"
          placeholder="Pesquise..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
             {" "}
      </AgendaFilterBar>
           {" "}
      <AgendaEventList>
               {" "}
        {filteredAndSortedAgenda.length === 0 ? (
          <div style={{ textAlign: "center", padding: "2rem", color: "#666" }}>
                        Nenhum evento encontrado para "{filter}"            {" "}
            {searchTerm && ` com o termo "${searchTerm}"`}         {" "}
          </div>
        ) : (
          filteredAndSortedAgenda.map((event, index, array) => (
            <React.Fragment key={event.id}>
                           {" "}
              {(index === 0 || event.date !== array[index - 1].date) && (
                <AgendaDateSeparator>
                  {formatDisplayDate(event.date)}
                </AgendaDateSeparator>
              )}
                           {" "}
              <AgendaEventItem>
                                <AgendaEventTime>{event.time}</AgendaEventTime> 
                             {" "}
                <AgendaEventDetails>
                                   {" "}
                  <AgendaEventTitle>{event.title}</AgendaEventTitle>           
                       {" "}
                  <AgendaEventLocation>{event.location}</AgendaEventLocation>   
                             {" "}
                </AgendaEventDetails>
                             {" "}

                {event.canDelete && (
                  <DeleteButton 
                    onClick={() => handleDeleteEvent(event.id)}
                    title="Excluir evento"
                  >
                    <FaTrash />
                  </DeleteButton>
                )}
              </AgendaEventItem>
                         {" "}
            </React.Fragment>
          ))
        )}
             {" "}
      </AgendaEventList>
           {" "}
      <CreateEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateEvent={handleCreateEvent}
      />
         {" "}
    </AgendaContainer>
  );
}