import { DateCustom } from "./../../../shared/services/custom-date.service";
import { filterDate } from "src/app/ordenes/shared/enums/filter-date.enum";

export class OrderFilterDateFactory {
  private filters = new Map<filterDate, { start: Date; end: Date }>();

  constructor() {
    this.filters.set(filterDate.TODAY, {
      start: DateCustom.resetTime(new Date()),
      end: DateCustom.resetTime(DateCustom.addDay(new Date())),
    });

    this.filters.set(filterDate.WEEKLY, {
      start: DateCustom.resetTime(DateCustom.subtractDay(new Date(), 7)),
      end: DateCustom.resetTime(DateCustom.addDay(new Date())),
    });

    this.filters.set(filterDate.MONTHLY, {
      start: DateCustom.resetTime(DateCustom.subtractDay(new Date(), 30)),
      end: DateCustom.resetTime(DateCustom.addDay(new Date())),
    });
  }

  get(filter: filterDate) {
    return this.filters.get(filter);
  }
}
