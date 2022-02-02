export const initialData = {
    boards: [
        {
            id: 'board-1',
            columOrder: ['column-3', 'column-2', 'column-1'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'To do Column 1',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'],
                    cards: [
                        { id: 'card-1', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 1', cover: 'https://img.thuthuatphanmem.vn/uploads/2018/09/27/wallpaper-4k_105912678.jpg' },
                        { id: 'card-2', boardId: 'board-2', columnId: 'column-2', title: 'Title of card 2', cover: null },
                        { id: 'card-3', boardId: 'board-3', columnId: 'column-3', title: 'Title of card 3', cover: null },
                        { id: 'card-4', boardId: 'board-4', columnId: 'column-4', title: 'Title of card 4', cover: null },
                        { id: 'card-5', boardId: 'board-5', columnId: 'column-5', title: 'Title of card 5', cover: null }
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'To do Column 2',
                    cardOrder: ['card-5', 'card-2', 'card-3', 'card-4', 'card-1'],
                    cards: [
                        { id: 'card-1', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 1', cover: 'https://img.thuthuatphanmem.vn/uploads/2018/09/27/wallpaper-4k_105912678.jpg' },
                        { id: 'card-2', boardId: 'board-2', columnId: 'column-2', title: 'Title of card 2', cover: null },
                        { id: 'card-3', boardId: 'board-3', columnId: 'column-3', title: 'Title of card 3', cover: null },
                        { id: 'card-4', boardId: 'board-4', columnId: 'column-4', title: 'Title of card 4', cover: null },
                        { id: 'card-5', boardId: 'board-5', columnId: 'column-5', title: 'Title of card 5', cover: null }
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'To do Column 3',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'],
                    cards: [
                        { id: 'card-1', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 1', cover: 'https://img.thuthuatphanmem.vn/uploads/2018/09/27/wallpaper-4k_105912678.jpg' },
                        { id: 'card-2', boardId: 'board-2', columnId: 'column-2', title: 'Title of card 2', cover: null },
                        { id: 'card-3', boardId: 'board-3', columnId: 'column-3', title: 'Title of card 3', cover: null },
                        { id: 'card-4', boardId: 'board-4', columnId: 'column-4', title: 'Title of card 4', cover: null },
                        { id: 'card-5', boardId: 'board-5', columnId: 'column-5', title: 'Title of card 5', cover: null }
                    ]
                }
            ]
        }
    ]
}