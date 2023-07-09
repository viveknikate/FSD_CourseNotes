import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'WithDraw' : (arg_0: number) => Promise<undefined>,
  'checkBalance' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'topUP' : (arg_0: number) => Promise<undefined>,
}
