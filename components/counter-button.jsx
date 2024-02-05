import { Button } from "./ui/button";

export function CounterButton({
    handleIncrement,
    itemCounter = 0,
    handleDecrement,
}) {
    return (
        <>
            <div className="flex justify-center space-x-6 items-center gap-4 bg-slate-100 w-full rounded-lg h-12">
                <Button
                    variant="opacity"
                    className="text-realorange"
                    onClick={handleDecrement}
                >
                    -
                </Button>
                <span>{itemCounter}</span>
                <Button
                    variant="opacity"
                    className="text-realorange"
                    onClick={handleIncrement}
                >
                    +
                </Button>
            </div>
        </>
    );
}
