"use client";

import {
    itemNameStore,
    itemPiecesStore,
    itemPriceStore,
} from "@/store/itemStore";

export default function Test() {
    const item_name = itemNameStore((state) => state.item_name);
    const item_pieces = itemPiecesStore((state) => state.item_pieces);
    const item_price = itemPriceStore((state) => state.item_price);

    return (
        <main>
            <div>
                <p>{item_pieces}</p>
                <p>{item_price}</p>
                <p>{item_name}</p>
            </div>
        </main>
    );
}
