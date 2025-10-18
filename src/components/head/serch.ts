export interface IBlockSerch {
    name: string,
    id: number,
    url?: string
}

export const blockSerch: IBlockSerch[] = [
    {
        name: 'Geography',
        id: 0
    },
    {
        name: 'History',
        id: 1
    },
    {
        name: 'Culture',
        id: 2
    },
    {
        name: 'City',
        id: 3
    },

    {
        name: 'Trove Guibe',
        id: 4
    },
    {
        name: 'Best places to visit',
        id: 5
    },
    {
        name: 'Blog',
        id: 6,
        url: '/Blog'
    },


]