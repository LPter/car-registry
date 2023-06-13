enum centreType {
    admin = 'ADMIN',
    region = 'REGION',
    center = 'CENTER',
}

enum region {
    NOR = "NOR",
    MID = "MID",
    SOU = "SOU",
    ALL = "ALL",
}

export interface User {
    id: number,
    username: string,
    password: string,
    centreName: string, 
    address: string,
    isDeleted: boolean,
    centreType: centreType,
    createdAt: Date, 
    updatedAt: Date, 
    region: region
}