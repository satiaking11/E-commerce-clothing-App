//conflicts on best practice on one use data that is not updated
//but may be useful during testing - more info to come
const INITIAL_STATE = {
    sections: [
    {
        title: 'hats',
        imageUrl: 'hats.png',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        imageUrl: 'womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: 'mens.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;        
    }
};

export default directoryReducer;