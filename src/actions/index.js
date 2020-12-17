export const setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const setPlaylists = (playlists) => {
    return {
        type: 'SET_PLAYLISTS',
        payload: playlists
    }
}

export const setDiscoverWeekly = (data) => {
    return {
        type: 'SET_DISCOVER_WEEKLY',
        payload: data
    }
}