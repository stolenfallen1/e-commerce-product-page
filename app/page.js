"use client";

import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CounterButton } from "@/components/counter-button";
import { MobileArrowSlider } from "@/components/mobile-arrow-slider";
import {
    itemNameStore,
    itemPiecesStore,
    itemPriceStore,
    itemImageStore,
} from "@/store/itemStore";
import { images } from "@/utils/images";
import { thumbnails } from "@/utils/thumbnails";

export default function Home() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [itemCounter, setItemCounter] = useState(0);
    const setItemPieces = itemPiecesStore((state) => state.setItemPieces);
    const setItemPrice = itemPriceStore((state) => state.setItemPrice);
    const setItemName = itemNameStore((state) => state.setItemName);
    const setItemImage = itemImageStore((state) => state.setItemImage);

    const handleThumbnailClick = (index) => {
        setSelectedImage(index);
    };

    const handleArrowClick = (direction) => {
        const newIndex =
            direction === "prev"
                ? (selectedImage - 1 + images.length) % images.length
                : (selectedImage + 1) % images.length;
        setSelectedImage(newIndex);
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
        <main
            className="max-w-screen-lg min-h-screen flex flex-col md:flex-row items-center gap-8 mx-auto md:gap-4 md:mx-4 lg:gap-16"
            style={{ minHeight: "calc(100vh - 128px)" }}
        >
            <section className="flex flex-col gap-4">
                <div className="relative flex items-center justify-center">
                    <div className="h-[375px] w-[325px] sm:h-[400px] sm:w-[400px] object-cover">
                        <Image
                            src={images[selectedImage]}
                            fill
                            className="rounded-lg cursor-pointer"
                            alt="Sneaker Image"
                        />
                    </div>
                    <MobileArrowSlider
                        handleLeftIcon={() => handleArrowClick("prev")}
                        handleRightIcon={() => handleArrowClick("next")}
                    />
                </div>
                <div className="flex justify-between items-center">
                    {thumbnails.map((thumbnail, index) => (
                        <div
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                            className="cursor-pointer rounded-lg relative group hidden md:block"
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

            <section className="flex flex-col md:items-start max-w-[500px] mx-4 md:mx-auto gap-4">
                <h3 className="text-realorange">SNEAKER COMPANY</h3>
                <h3 className="text-3xl lg:text-5xl font-bold">
                    Fall Limited Edition Sneakers
                </h3>
                <p className="text-grayishblue whitespace-break-spaces text-justify">
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they'll
                    withstand everything the weather can offer.
                </p>
                <div className="flex flex-row items-center md:flex-col md:items-start justify-between">
                    <section className="flex items-center gap-2">
                        <p className="text-2xl font-bold">&#x24;125.00</p>
                        <span className="bg-paleorange text-realorange font-semibold px-2 rounded">
                            50%
                        </span>
                    </section>
                    <p className=" text-grayishblue opacity-50 line-through">
                        &#x24;250.00
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <CounterButton
                        handleIncrement={() => handleCounter("increment")}
                        itemCounter={itemCounter}
                        handleDecrement={() => handleCounter("decrement")}
                    />
                    <Button
                        variant="opacity"
                        className="text-white bg-realorange px-12 py-6 w-full mb-4"
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
