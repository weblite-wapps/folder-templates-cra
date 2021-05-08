import { createSlice } from '@reduxjs/toolkit'

const [FTName | camelcase]Slice = createSlice({
  name: '[FTName | paramCase]',
  initialState: { data: null },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
})

const { actions, reducer } = [FTName | camelcase]Slice
export const { setData } = actions
export default reducer

/* Views */
export const dataView = state => state.[FTName | paramCase].data