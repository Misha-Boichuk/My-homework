import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constant';

const filterCountries = createAction(`${moduleName}/filterCountries`, (payload) => ({ payload }));

export default {
  filterCountries,
};
