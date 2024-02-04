"use client";

import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    itemNameStore,
    itemPiecesStore,
    itemPriceStore,
    itemImageStore,
} from "@/store/itemStore";

export default function Home() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [itemCounter, setItemCounter] = useState(0);
    const setItemPieces = itemPiecesStore((state) => state.setItemPieces);
    const setItemPrice = itemPriceStore((state) => state.setItemPrice);
    const setItemName = itemNameStore((state) => state.setItemName);
    const setItemImage = itemImageStore((state) => state.setItemImage);

    const images = [
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg",
    ];

    const thumbnails = [
        "/images/image-product-1-thumbnail.jpg",
        "/images/image-product-2-thumbnail.jpg",
        "/images/image-product-3-thumbnail.jpg",
        "/images/image-product-4-thumbnail.jpg",
    ];

    const handleThumbnailClick = (index) => {
        setSelectedImage(index);
    };

    const handleCounter = (action) => {
        if (action === "increment") {
            setItemCounter(itemCounter + 1);
        } else if (action === "decrement" && itemCounter > 0) {
            setItemCounter(itemCounter - 1);
        }
    };

    const handleAddToCart = () => {
        if (itemCounter === 0) return;
        setItemPieces(itemCounter);
        setItemPrice(125.0);
        setItemName("Fall Limited Edition Sneakers");
        setItemImage(images[selectedImage]);
        setItemCounter(0);
    };

    return (
        <main className="h-[85vh] flex justify-center items-center gap-8">
            <section className="flex flex-col gap-4">
                <div>
                    <Image
                        src={images[selectedImage]}
                        width={375}
                        height={375}
                        className="rounded-lg"
                    />
                </div>
                <div className="flex justify-between items-center">
                    {thumbnails.map((thumbnail, index) => (
                        <div
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                            className="cursor-pointer rounded-lg relative group"
                        >
                            <Image
                                src={thumbnail}
                                width={65}
                                height={60}
                                className="rounded-lg group-hover:opacity-65 transition-opacity"
                            />
                            <div className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-300 group-hover:border-realorange"></div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="flex flex-col items-start max-w-[500px]">
                <h3 className="text-realorange mb-4">SNEAKER COMPANY</h3>
                <h3 className="text-3xl font-bold">
                    Fall Limited Edition Sneakers
                </h3>
                <p className="text-grayishblue whitespace-break-spaces">
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they'll
                    withstand everything the weather can offer.
                </p>
                <div>
                    <p className="text-2xl font-bold">&#x24;125.00</p>
                    <span className="bg-paleorange text-realorange font-semibold px-2 rounded">
                        50%
                    </span>
                    <p className="text-grayishblue opacity-50 line-through">
                        &#x24;250.00
                    </p>
                </div>
                <div>
                    <div className="flex items-center gap-4 bg-slate-100">
                        <Button
                            variant="opacity"
                            className="text-realorange"
                            onClick={() => handleCounter("decrement")}
                        >
                            -
                        </Button>
                        <span>{itemCounter}</span>
                        <Button
                            variant="opacity"
                            className="text-realorange"
                            onClick={() => handleCounter("increment")}
                        >
                            +
                        </Button>
                    </div>

                    <Button
                        variant="opacity"
                        className="text-white bg-realorange px-12 py-6"
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart className="h4 w-4 mr-4" />
                        Add to Cart
                    </Button>
                </div>
            </section>
        </main>
    );
}
