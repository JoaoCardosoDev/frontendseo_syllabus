import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const resposta = await fetch('http://jsonplaceholder.typicode.com/users')
    return resposta.json()
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {users: [], status: 'idle'},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export default usersSlice.reducer