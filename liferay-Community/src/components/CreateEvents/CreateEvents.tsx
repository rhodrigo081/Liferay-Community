import { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  FormGroup,
  Label,
  Input,
  DateTimeInputGroup,
  DateTimeInput,
  ModalFooter,
  Button,
} from './styles';

interface CreateEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateEvent: (event: {
    eventName: string;
    eventDate: string; 
    startTime: string;
    endTime: string;
    eventLocation: string;
  }) => void;
}

export function CreateEventModal({ isOpen, onClose, onCreateEvent }: CreateEventModalProps) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  
  const handleCreate = () => {
    if (eventName && eventDate && startTime && endTime) {
      onCreateEvent({ eventName, eventDate, startTime, endTime, eventLocation });
     
      setEventName('');
      setEventDate('');
      setStartTime('');
      setEndTime('');
      setEventLocation('');
      onClose(); 
    } else {
      alert('Por favor, preencha o nome do evento, Data e Horários.');
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Criar novo evento</ModalTitle>
          <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label htmlFor="eventName">Nome do evento</Label>
            <Input
              id="eventName"
              type="text"
              placeholder="Meu novo evento"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="eventDate">Data do evento</Label>
            <DateTimeInput
              id="eventDate"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <DateTimeInputGroup>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Label htmlFor="startTime" style={{ fontSize: '14px', marginBottom: '0.5rem' }}>
                  Início
                </Label>
                <DateTimeInput
                  id="startTime"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Label htmlFor="endTime" style={{ fontSize: '14px', marginBottom: '0.5rem' }}>
                  Fim
                </Label>
                <DateTimeInput
                  id="endTime"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </DateTimeInputGroup>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="eventLocation">Local do evento</Label>
            <Input
              id="eventLocation"
              type="text"
              placeholder="Digite o local do evento"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button variant="cancel" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="create" onClick={handleCreate}>
            Criar evento
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}