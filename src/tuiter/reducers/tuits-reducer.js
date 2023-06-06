import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": true,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice(
    {
        name: 'tuits',
        initialState: tuits,
        reducers: {
            createTuit(state, action) {
                // add createTuit reducer function which appends the new tuit in the payload at the beginning of the
                // array of tuits contained in the state.
                state.unshift({
                    ...action.payload,
                    ...templateTuit,
                    _id: (new Date()).getTime(),
                })
            },
            // reducer function to delete tuit looks up index of tuit from state comparing each tuit's ID
            // with action's payload, then splices tuit from state
            deleteTuit(state, action) {
                const index = state.findIndex(tuit => tuit._id === action.payload);
                state.splice(index, 1);
            }
        }
    }
);

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;