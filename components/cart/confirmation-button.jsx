import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function ConfirmationButton({
    triggerItem,
    dialogTitle,
    dialogDescription,
    onSubmit,
}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{triggerItem}</AlertDialogTrigger>
            <AlertDialogContent className="w-64 sm:w-auto rounded-md">
                <AlertDialogHeader>
                    <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {dialogDescription}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>No</AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-realorange hover:bg-realorange hover:opacity-65"
                        onClick={onSubmit}
                    >
                        Yes
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
