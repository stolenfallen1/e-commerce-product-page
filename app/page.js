"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    itemNameStore,
    itemPiecesStore,
    itemPriceStore,
} from "@/store/itemStore";

export default function Home() {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState(0);
    const [itemCounter, setItemCounter] = useState(0);
    const setItemPieces = itemPiecesStore((state) => state.setItemPieces);
    const setItemPrice = itemPriceStore((state) => state.setItemPrice);
    const setItemName = itemNameStore((state) => state.setItemName);

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
        setItemPieces(itemCounter);
        setItemPrice(125.0);
        setItemName("Fall Limited Edition Sneakers");
        router.push("/test");
    };

    return (
        <main>
            <section>
                <div>
                    <Image
                        src={images[selectedImage]}
                        width={375}
                        height={375}
                        className="rounded-lg"
                    />
                </div>
                <div>
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
                                className="rounded-lg group-hover:opacity-40 transition-opacity"
                            />
                            <div className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-300 group-hover:border-realorange"></div>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h3 className="text-realorange mb-4">SNEAKER COMPANY</h3>
                <h3 className="text-3xl font-bold">
                    Fall Limited Edition Sneakers
                </h3>
                <p className="text-grayishblue">
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
