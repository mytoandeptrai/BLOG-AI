"use client";
import { Button } from "@/components/ui/button";
import { Edit2, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const EditorAction = () => {
   const { pending } = useFormStatus();

   return (
      <Button
         type="submit"
         variant="outline"
         className="w-fit transform rounded-full px-4 py-2 font-semibold shadow-lg transition duration-200 ease-in-out hover:scale-105"
         disabled={pending}
      >
         {pending ? (
            <span className="flex items-center justify-center">
               <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Updating...
            </span>
         ) : (
            <span className="flex items-center justify-center">
               <Edit2 className="mr-2 h-5 w-5" />
               Update Your Content
            </span>
         )}
      </Button>
   );
};

export default EditorAction;
