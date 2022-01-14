export class DateCustom {
  static shortDate(date: Date) {
    return new Date(date).toISOString().split("T")[0];
  }

  static addDay(date: Date, amount: number = 1) {
    date.setDate(date.getDate() + amount);
    return this.resetTime(date);
  }

  static subtractDay(date: Date, amount: number = 1) {
    return this.addDay(date, amount * -1);
  }

  static resetTime(date: Date) {
    date.setHours(0, 0, 0, 0);
    return date;
  }
}
