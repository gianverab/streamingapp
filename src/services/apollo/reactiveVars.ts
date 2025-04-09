import { makeVar, ReactiveVar } from '@apollo/client';

// Reactive variables for local state
export const searchQueryVar: ReactiveVar<string> = makeVar<string>('');
export const selectedContinentVar: ReactiveVar<string> = makeVar<string>('');
export const selectedCurrencyVar: ReactiveVar<string> = makeVar<string>('');
