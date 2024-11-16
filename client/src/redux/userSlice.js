import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        isLoggedIn: false,
        data: null, // User data
    },
    reducers: {
        getUserData: (state, action) => {
            const { payload } = action;
            return {
                ...state
            }
        },

        login: (state, action) => {
            const { payload } = action;
            return {
                ...state
            }
        },

        logout: (state, action) => {
            const { payload } = action;
            return {
                ...state,
                isLoggedIn: false,
                data: null
            }
        }
    }
});

export default userSlice;