enum typeOwner {
    Individual = 'individual',
    Organization = 'organization',
}
export interface Owner {
    id: number,
    type: typeOwner,
    name: string, 
    address: string, 
    isDeleted: boolean,
    createdAt: Date, 
    updatedAt: Date,
}