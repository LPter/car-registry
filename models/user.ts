enum isDeleted {
    false = 0,
    true = 1,
}

enum centreType {
    admin = 'ADMIN',
    region = 'REGION',
    center = 'CENTER',
}

export interface User {
    id: Int16Array,
    username: string,
    password: string,
    centreName: string, 
    address: string,
    isDeleted: isDeleted,
    centreType: centreType,
    createdAt: Date, 
    updatedAt: Date, 
}