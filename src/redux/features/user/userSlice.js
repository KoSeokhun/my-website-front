import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    id: "",
    email: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signUp: (state, action) => {
            const { email, password } = action.payload;
            
            const signUp = async (email, password) => {
                try {
                    const res = await axios.post('http://localhost:3000/users/register', {
                        email,
                        password
                    });

                    console.log("슬라이스 완료 : ", res);
                    action.payload.isSucceeded = true;
                } catch (e) {
                    console.log("슬라이스 에러 : ", e);
                    action.payload.isSucceeded = false;
                }
            }

            signUp(email, password);
        },
        logIn: (state) => {
            state.id = '무언가 로직...'
            state.email = '무언가 로직...'
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { signUp, logIn, incrementByAmount } = userSlice.actions

export default userSlice.reducer