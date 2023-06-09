import { Car, Inspection } from "../models";

interface Statistic {
    month: string;
    inspectedCars: number;
    expiredCars: number;
}
  
export function handleVehicleStatistics(cars: Car[], inspections: Inspection[]): Statistic[] {
    const today = new Date();
    const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 5, 1);
    const sixQuartersAgo = new Date(today.getFullYear(), today.getMonth() - 17, 1);
    const sixYearsAgo = new Date(today.getFullYear() - 5, 0, 1);
  
    const months: { [key: string]: Statistic } = {};
    const quarters: { [key: string]: Statistic } = {};
    const years: { [key: string]: Statistic } = {};
  
    // Initialize statistics
    let currentDate = new Date(sixMonthsAgo);
    while (currentDate <= today) {
      const monthName = currentDate.toLocaleString('en-us', { month: 'long' });
      months[monthName] = { month: monthName, inspectedCars: 0, expiredCars: 0 };
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
  
    currentDate = new Date(sixQuartersAgo);
    while (currentDate <= today) {
      const quarterName = `Q${Math.ceil((currentDate.getMonth() + 1) / 3)} ${currentDate.getFullYear()}`;
      quarters[quarterName] = { month: quarterName, inspectedCars: 0, expiredCars: 0 };
      currentDate.setMonth(currentDate.getMonth() + 3);
    }
  
    currentDate = new Date(sixYearsAgo);
    while (currentDate <= today) {
      const yearName = currentDate.getFullYear().toString();
      years[yearName] = { month: yearName, inspectedCars: 0, expiredCars: 0 };
      currentDate.setFullYear(currentDate.getFullYear() + 1);
    }
  
    // Count inspected and expired cars
    for (const car of cars) {
        const inspectionInfo = inspections.find(info => info.CarId === car.id);
        if (inspectionInfo) {
            if (car.createdAt >= sixMonthsAgo) {
            const monthName = car.createdAt.toLocaleString('en-us', { month: 'long' });
            months[monthName].inspectedCars++;
            }
            if (inspectionInfo.expirationDate >= sixMonthsAgo) {
            const monthName = inspectionInfo.expirationDate.toLocaleString('en-us', { month: 'long' });
            months[monthName].expiredCars++;
            }
    
            if (car.createdAt >= sixQuartersAgo) {
            const quarterName = `Q${Math.ceil((car.createdAt.getMonth() + 1) / 3)} ${car.createdAt.getFullYear()}`;
            quarters[quarterName].inspectedCars++;
            }
            if (inspectionInfo.expirationDate >= sixQuartersAgo) {
            const quarterName = `Q${Math.ceil((inspectionInfo.expirationDate.getMonth() + 1) / 3)} ${inspectionInfo.expirationDate.getFullYear()}`;
            quarters[quarterName].expiredCars++;
            }
    
            if (car.createdAt >= sixYearsAgo) {
            const yearName = car.createdAt.getFullYear().toString();
            years[yearName].inspectedCars++;
            }
            if (inspectionInfo.expirationDate >= sixYearsAgo) {
            const yearName = inspectionInfo.expirationDate.getFullYear().toString();
            years[yearName].expiredCars++;
            }
        }
    }
  
    // Convert statistics to array
    const monthStatistics = Object.values(months);
    const quarterStatistics = Object.values(quarters);
    const yearStatistics = Object.values(years);
  
    return monthStatistics.concat(quarterStatistics).concat(yearStatistics);
}