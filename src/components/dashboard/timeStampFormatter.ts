import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export const formatTimeStamp = (date: string): string => {
   try {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const zonedDate = toZonedTime(new Date(date), userTimeZone);
      return format(zonedDate, 'd MMMM yyyy, h:mmaaa');
   } catch (error) {
      console.log(error);
   }
   return 'invalid date';
};
