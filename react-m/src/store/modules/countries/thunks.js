import { createAsyncThunk } from '@reduxjs/toolkit';
import { countries } from '../../../api';
import { moduleName } from './constant';

const fetchCountry = createAsyncThunk(`${moduleName}/fetchCountry`, async (name) => {
  const { data } = await countries.fetch(name);
  return data;
});

export default {
  fetchCountry,
};
