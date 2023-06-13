import { atom } from 'recoil';

export const dataMenuDropdown = atom<string>({
  key: 'dataMenuDropdownIndex',
  default: '',
});

export const dataChange = atom<boolean>({
  key: 'dataChange',
  default: false,
});