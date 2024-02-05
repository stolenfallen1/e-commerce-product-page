import { ChevronRightCircle, ChevronLeftCircle } from "lucide-react";
import { Button } from "./ui/button";

export function MobileArrowSlider({ handleLeftIcon, handleRightIcon }) {
    return (
        <>
            <div className="absolute md:hidden left-0">
                <Button variant="opacity" onClick={handleLeftIcon}>
                    <ChevronLeftCircle className="text-white h-8 w-8" />
                </Button>
            </div>
            <div className="absolute md:hidden right-0">
                <Button variant="opacity" onClick={handleRightIcon}>
                    <ChevronRightCircle className="text-white h-8 w-8" />
                </Button>
            </div>
        </>
    );
}
