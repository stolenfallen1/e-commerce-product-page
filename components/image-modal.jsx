import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ImageModal({ isOpen, imageSource, thumbnails, thumbnailToggle,closeImageModal }) {
    return (
        isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
                <div className="relative w-[400px] h-[400px] max-w-screen-lg mx-2 sm:mx-0">
                    <section className="flex flex-col gap-4">
                        <div className="relative flex items-center justify-center">
                            <div className="h-[350px] w-[300px] sm:h-[400px] sm:w-[400px] object-cover">
                                <Image
                                    src={imageSource}
                                    fill
                                    className="rounded-lg cursor-pointer"
                                    alt="Sneaker Image"
                                />
                            </div>
                        </div>
                        <Button variant="opacity" className="absolute top-2 right-0" onClick={closeImageModal}>
                            <X className="h-8 w-8 text-white" />
                        </Button>
                        <div className="flex justify-between items-center">
                            {thumbnails.map((thumbnail, index) => (
                                <div
                                    key={index}
                                    onClick={() => thumbnailToggle(index)}
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
                </div>
            </div>
        )
    )
}