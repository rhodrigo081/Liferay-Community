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
    eventTime: string;
    eventLocation: string;
  }) => void;
}

export function CreateEventModal({ isOpen, onClose, onCreateEvent }: CreateEventModalProps) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const handleCreate = () => {
    
    if (eventName && eventDate && eventTime) {
      onCreateEvent({ eventName, eventDate, eventTime, eventLocation });
     
      setEventName('');
      setEventDate('');
      setEventTime('');
      setEventLocation('');
      onClose(); 
    } else {
      alert('Por favor, preencha o nome do evento, Data e Hora.');
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
            <Label htmlFor="eventDate">Data e Hora do evento</Label>
            <DateTimeInputGroup>
              <DateTimeInput
                id="eventDate"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
              <DateTimeInput
                id="eventTime"
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
              />
            </DateTimeInputGroup>
          </FormGroup>

          <FormGroup className="row-group">
            <div className="half-width">
              <Label htmlFor="eventLocation">Local do evento</Label>
              <Input
                id="eventLocation"
                type="text"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
              />
            </div>
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
