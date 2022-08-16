export default class Weekend {
    private static instance: Weekend;

    private constructor() {}

    public static getInstance(): Weekend {
        if (!Weekend.instance) {
            Weekend.instance = new Weekend();
        }

        return Weekend.instance;
    }

    public isWeekend(date: Date): string {
        return this.isSunday(date) || this.isSaturday(date) || this.isFridayAfter17PM(date)
            ? "Yes!"
            : "No.";
    }

    private isSunday(date: Date): boolean {
        return date.getDay() === 0;
    }

    private isSaturday(date: Date): boolean {
        return date.getDay() === 6;
    }

    private isFridayAfter17PM(date: Date): boolean {
        return date.getDay() === 5 && date.getHours() >= 17;
    }
}
