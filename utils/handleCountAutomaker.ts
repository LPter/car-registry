import { Car } from "../models";

export function countAutomaker(cars: Car[]) {
    const carCounts: { [key: string]: number } = {};

// Lặp qua mảng dữ liệu và thống kê số lượng từng nhãn hiệu
    cars.forEach((car) => {
    const automaker = car.automaker;
        if (carCounts[automaker]) {
            carCounts[automaker] += 1;
        } else {
            carCounts[automaker] = 1;
        }
    });
    return carCounts;
}