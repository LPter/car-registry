interface Result {
    month: string;
    inspectedCars: number;
    expiredCars: number;
}
  
export function handleSplitData(results: Result[]): { months: Result[], quarters: Result[], years: Result[] } {
    const months: Result[] = [];
    const quarters: Result[] = [];
    const years: Result[] = [];
  
    for (const result of results) {
      if (result.month.includes('Q')) {
        quarters.push(result);
      } else if (result.month.length === 4 && !isNaN(parseInt(result.month))) {
        years.push(result);
      } else {
        months.push(result);
      }
    }
  
    return { months, quarters, years };
}
  