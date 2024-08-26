import { format, isToday, isYesterday } from 'date-fns';

export const formatDateLabel = (dateString) => {
    const date = new Date(dateString);
    
    if (isToday(date)) {
        return 'Today';
    } else if (isYesterday(date)) {
        return 'Yesterday';
    } else {
        return format(date, 'dd MMMM');
    }
};
