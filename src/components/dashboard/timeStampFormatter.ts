import { format } from 'date-fns';
import { formatInTimeZone, toZonedTime } from 'date-fns-tz';

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

export const formatInUTC = (date: string | number | Date): string =>
   formatInTimeZone(date, 'UTC', 'yyyy-MM-dd HH:mm:ss');
