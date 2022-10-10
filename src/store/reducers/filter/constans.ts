import { TSort } from '@/store/reducers/filter/types';
import { TFilter } from '@/store/reducers/filter/types';

export const filters: Record<TFilter, string> = {
  all :'Всe',
  meat :'Мясные',
  vegan :'Вегитарианские',
  gril :'Гриль',
  spicy :'Острые',
};
  
export const sorts: Record<TSort, string> = {
  rating: 'популярности',
  price: 'цене',
  title: 'алфавиту'
};