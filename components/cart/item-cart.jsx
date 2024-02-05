import Image from "next/image";
import { ShoppingCart, Trash2Icon } from "lucide-react";
import {
    itemNameStore,
    itemPriceStore,
    itemPiecesStore,
    itemImageStore,
} from "@/store/itemStore";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ConfirmationButton } from "./confirmation-button";

export function ItemCart() {
    const item_name = itemNameStore((state) => state.item_name);
    const item_pieces = itemPiecesStore((state) => state.item_pieces);
    const item_price = itemPriceStore((state) => state.item_price);
    const item_image = itemImageStore((state) => state.item_image);

    const totalAmount = item_price * item_pieces;

    // This function only resets the state of the item store
    const onConfrim = () => {
        itemNameStore.setState({ item_name: null });
        itemPiecesStore.setState({ item_pieces: null });
        itemPriceStore.setState({ item_price: null });
        itemImageStore.setState({ item_image: null });
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" className="relative">
                    {item_pieces > 0 && (
                        <span className="bg-realorange text-white rounded-full px-2 py-1 text-xs absolute -top-1 -right-1">
                            {item_pieces}
                        </span>
                    )}
                    <ShoppingCart className="h-5 w-5 text-grayishblue cursor-pointer relative" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 mr-2">
                <h1 className="text-lg font-extrabold border-b pb-3">Cart</h1>
                {item_name && item_pieces && item_price && item_image ? (
                    <>
                        <div className="flex items-center justify-between gap-3 py-3">
                            <Image
                                src={item_image}
                                alt={item_name}
                                width={50}
                                height={50}
                                className="rounded-lg"
                            />
                            <div>
                                <p className="text-grayishblue text-sm">
                                    {item_name}
                                </p>
                                <p className="text-grayishblue text-sm">
                                    &#x24;{item_price} x {item_pieces} = {""}
                                    <span className="text-black font-bold">
                                        &#x24;
                                        {totalAmount}
                                    </span>
                                </p>
                            </div>
                            <ConfirmationButton
                                triggerItem={
                                    <Trash2Icon className="h-4 w-4 text-grayishblue cursor-pointer hover:text-red-500" />
                                }
                                dialogTitle={
                                    "Are you sure you want to remove this item?"
                                }
                                dialogDescription={
                                    "This action cannot be undone, you will need to add the item again to your cart."
                                }
                                onSubmit={onConfrim}
                            ></ConfirmationButton>
                        </div>
                        <ConfirmationButton
                            triggerItem={
                                <Button
                                    variant="opacity"
                                    className="w-full bg-realorange text-white"
                                >
                                    Checkout
                                </Button>
                            }
                            dialogTitle={"Checkout Confirmation"}
                            dialogDescription={
                                "By clicking Yes, you will proceed to checkout."
                            }
                            onSubmit={onConfrim}
                        ></ConfirmationButton>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-[100px]">
                        <p className="font-bold text-lg text-grayishblue">
                            Cart is Empty
                        </p>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    );
}
