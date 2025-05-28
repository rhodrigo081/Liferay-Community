

export const formatDisplayDate = (isoDateString: string): string => {
 
  const date = new Date(isoDateString + 'T00:00:00');


  if (isNaN(date.getTime())) {
    console.error("Data inválida para formatação:", isoDateString);
    return isoDateString; 
  }

  
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short', 
    day: '2-digit',   
    month: 'short',   
  };

  let formatted = date.toLocaleDateString('pt-BR', options);

  formatted = formatted.replace(/\./g, '');

  formatted = formatted.replace(/(\w+), (\d{2}) (\w+)/, (match, weekday, day, month) => {
   
    const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    return `${capitalizedWeekday}., ${day} de ${capitalizedMonth}`;
  });

  return formatted;
};