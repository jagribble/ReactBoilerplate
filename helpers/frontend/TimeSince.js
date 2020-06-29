import DateDiff from 'date-diff';

function print(time, postfix){
    const rounded = Math.round(time);
    return `${rounded} ${rounded === 1 ? postfix : `${postfix}s`}`;
}

export default function timeSince(date1, date2){
    const diff = new DateDiff(date1, date2);

    if (diff.seconds() < 60){
        return print(diff.seconds(), 'second');
    } else if (diff.minutes() < 60){
        return print(diff.minutes(), 'min');
    } else if (diff.hours() < 24){
        return print(diff.hours(), 'hour');
    } else if (diff.days() < 7){
        return print(diff.days(), 'day');
    } else if (diff.weeks() < 52){
        return print(diff.weeks(), 'week');
    } 
    return print(diff.years(), 'year');
}