import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { continents } from '../../../api';

const fetchContinents = createAsyncThunk(`${moduleName}/fetchContinents`, async () => {
  const { data } = await continents.fetch();
  return data;
});

export default {
  fetchContinents,
};
