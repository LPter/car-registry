enum typeOwner {
    Individual = 'individual',
    Organization = 'organization',
}

enum isDeleted {
    false = 0,
    true = 1,
}

export interface Owner {
    id: Int16Array,
    type: typeOwner,
    name: string, 
    address: string, 
    isDeleted: isDeleted,
    createdAt: Date, 
    updatedAt: Date,
}