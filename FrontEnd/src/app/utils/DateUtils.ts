import { add, Duration } from 'date-fns';

export class DateUtils {
  static getDateForInput(date: Date) {
    return `${date.getFullYear()}-${date.getMonth() < 10 ? `0` : ''}${
      date.getMonth() + 1
    }-${date.getDate()}`;
  }

  static addDays(date: Date, days: Duration) {
    return add(date, days);
  }
}
