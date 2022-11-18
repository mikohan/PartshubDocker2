// application
import { ICartItemOption } from '~/store/cart/cartTypes';
import { IProduct } from '~/interfaces/product';

export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_UPDATE_QUANTITIES = 'CART_UPDATE_QUANTITIES';
export const CART_CLEAR_CART = 'CART_CLEAR_CART';

export interface ICartClearCartAction {
  type: typeof CART_CLEAR_CART;
}

export interface CartItemQuantity {
  itemId: number;
  value: number;
}

export interface CartAddItemAction {
  type: typeof CART_ADD_ITEM;
  product: IProduct;
  options: ICartItemOption[];
  quantity: number;
}

export interface CartRemoveItemAction {
  type: typeof CART_REMOVE_ITEM;
  itemId: number;
}

export interface CartUpdateQuantitiesAction {
  type: typeof CART_UPDATE_QUANTITIES;
  quantities: CartItemQuantity[];
}

export type CartAction =
  | CartAddItemAction
  | CartRemoveItemAction
  | CartUpdateQuantitiesAction
  | ICartClearCartAction;
