import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { MdMenu } from "react-icons/md"


const SheetMenu = () => {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button variant="outline" className="p-0 m-0 h-0"><MdMenu className="text-textPrimary text-xl lg:hidden" /></Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Menu Products</SheetTitle>
                    <SheetDescription className="flex flex-col items-start justify-center gap-2">
                        <Button className="text-textPrimary bg-transparent border-2 border-gray-600 w-full px-2 m-0 justify-start hover:text-white text-base ">Sprayers</Button>
                        <Button className="text-textPrimary bg-transparent border-2 border-gray-600 w-full px-2 m-0 justify-start hover:text-white text-base ">Lawn & Garden solutions</Button>
                        <Button className="text-textPrimary bg-transparent border-2 border-gray-600 w-full px-2 m-0 justify-start hover:text-white text-base ">Growing Solutions</Button>
                        <Button className="text-textPrimary bg-transparent border-2 border-gray-600 w-full px-2 m-0 justify-start hover:text-white text-base ">Cleaning Solutions</Button>
                        <Button className="text-textPrimary bg-transparent border-2 border-gray-600 w-full px-2 m-0 justify-start hover:text-white text-base ">Concrete Solutions</Button>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default SheetMenu