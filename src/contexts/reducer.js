export const initialState = {
    user: {
      מame: "שוקי",
      lastName: "כהן",
      profesion: "רואה חשבון",
  
      avatarImg:
        "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/07/07cd7653b80c8c72fe816bafa9e25d32d5a882da_full.jpg",
      expertDetails: {
        helpKind: "יכול לעזור בכל מיני דברים",
        otherproperties: "vewvfc",
      },
    },
  };

  export function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.user };
      case 'SET_inquries':
        return { ...state, inquries: action.inquries };
      default:
        throw new Error();
    }
  }
  