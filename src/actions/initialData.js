export const initialData = {
  boards: [
    {
      id: 'board-1',
      columOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'To do Column 1',
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'],
          cards: [
            { id: 'card-1', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 1', cover: 'https://img.thuthuatphanmem.vn/uploads/2018/09/27/wallpaper-4k_105912678.jpg' },
            { id: 'card-2', boardId: 'board-1', columnId: 'column-2', title: 'Title of card 2', cover: null },
            { id: 'card-3', boardId: 'board-1', columnId: 'column-3', title: 'Title of card 3', cover: null },
            { id: 'card-4', boardId: 'board-1', columnId: 'column-4', title: 'Title of card 4', cover: null },
            { id: 'card-5', boardId: 'board-1', columnId: 'column-5', title: 'Title of card 5', cover: null }
          ]
        },
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'To do Column 2',
          cardOrder: ['card-6', 'card-7', 'card-8', 'card-9', 'card-10'],
          cards: [
            { id: 'card-6', boardId: 'board-1', columnId: 'column-6', title: 'Title of card 6', cover: 'https://img.thuthuatphanmem.vn/uploads/2018/09/27/wallpaper-4k_105912678.jpg' },
            { id: 'card-7', boardId: 'board-1', columnId: 'column-7', title: 'Title of card 7', cover: null },
            { id: 'card-8', boardId: 'board-1', columnId: 'column-8', title: 'Title of card 8', cover: null },
            { id: 'card-9', boardId: 'board-1', columnId: 'column-9', title: 'Title of card 9', cover: null },
            { id: 'card-10', boardId: 'board-1', columnId: 'column-10', title: 'Title of card 10', cover: null }
          ]
        },
        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'To do Column 3',
          cardOrder: ['card-11', 'card-12', 'card-13', 'card-14', 'card-15'],
          cards: [
            { id: 'card-11', boardId: 'board-1', columnId: 'column-11', title: 'Title of card 11', cover: 'https://img.thuthuatphanmem.vn/uploads/2018/09/27/wallpaper-4k_105912678.jpg' },
            { id: 'card-12', boardId: 'board-1', columnId: 'column-12', title: 'Title of card 12', cover: null },
            { id: 'card-13', boardId: 'board-1', columnId: 'column-13', title: 'Title of card 13', cover: null },
            { id: 'card-14', boardId: 'board-1', columnId: 'column-14', title: 'Title of card 14', cover: null },
            { id: 'card-15', boardId: 'board-1', columnId: 'column-15', title: 'Title of card 15', cover: null }
          ]
        }
      ]
    }
  ]
}