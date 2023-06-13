export function handleForcast(monthlyRegisteredVehicles: number[], monthlyExpiredRegistration: number[] ) {
    function calculateAverge(arr: number[]) {
        const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum/arr.length;
    }

    const arrMonth = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth(); // Lấy chỉ số của tháng hiện tại (từ 0 - 11)
    const nextSixMonths = [];
    
    for (let i = 1; i <= 6; i++) {
        const nextMonthIndex = (currentMonthIndex + i) % 12;
        nextSixMonths.push(arrMonth[nextMonthIndex]);
    }
    const forecastRegisteredVehicles: number[] = [];
    const forecastExpiredRegistration: number[] = [];
    let temp1 = 0;
    let temp2 = 0;
    for (let i = 1; i <= 6; i++) {
        let value1 = temp1/6 + calculateAverge(monthlyRegisteredVehicles);
        forecastRegisteredVehicles.push(value1);
        monthlyRegisteredVehicles.shift();
        temp1 += value1;

        let value2 = temp1/6 + calculateAverge(monthlyExpiredRegistration);
        forecastExpiredRegistration.push(value2);
        monthlyExpiredRegistration.shift();
        temp2 += value2;
    }

    return {
        nextSixMonths ,forecastRegisteredVehicles, forecastExpiredRegistration
    }
}