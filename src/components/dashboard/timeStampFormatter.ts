export const formatTimeStamp = (date: string): string => {
   const dateString = new Date(date).toUTCString();
   const formatDate = dateString.slice(5, 16);
   const time = dateString.slice(17, -7);
   const offset = -new Date().getTimezoneOffset() / 60;
   const hours = +time.slice(0, 2) + offset;
   const minutes = +time.slice(3);
   const marker = hours >= 12 ? 'PM' : 'AM';
   const formatTime = `${hours > 12 ? hours - 12 : hours}:${minutes}${marker}`;
   return formatDate.concat(`, ${formatTime}`);
};
