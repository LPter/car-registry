import { atom } from 'recoil';

export const dataMenuDropdown = atom<string>({
  key: 'dataMenuDropdownIndex',
  default: '',
});
