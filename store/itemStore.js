import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const itemNameStore = create()(
    persist(
        (set) => ({
            item_name: null,
            setItemName: (name) => set({ item_name: name }),
        }),
        {
            name: "itemNameStore",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
export const itemPiecesStore = create()(
    persist(
        (set) => ({
            item_pieces: null,
            setItemPieces: (pieces) => set({ item_pieces: pieces }),
        }),
        {
            name: "itemPiecesStore",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
export const itemPriceStore = create()(
    persist(
        (set) => ({
            item_price: null,
            setItemPrice: (price) => set({ item_price: price }),
        }),
        {
            name: "itemPriceStore",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
