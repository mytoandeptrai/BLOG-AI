"use client";
import { EditorAction } from "@/components/shared/content-editor/components";
import { ForwardRefEditor } from "@/components/shared/content-editor/forward-ref-editor";
import { useContentEditor } from "@/components/shared/content-editor/hooks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/h-stack";
import { VStack } from "@/components/ui/v-stack";
import type { IPost } from "@/types/post.type";
import { Download } from "lucide-react";

type Props = {
   posts: IPost[];
};

const ContentEditor = (props: Props) => {
   const { content, handleContentChange, handleExport, formAction } =
      useContentEditor(props.posts);

   return (
      <form
         className="flex flex-col gap-2"
         action={formAction}
      >
         <VStack
            className="max-w-lg w-full mx-auto"
            spacing={"none"}
            align={"center"}
            justify={"center"}
         >
            <h1 className="!leading-tight mt-6 text-center font-heading font-semibold text-2xl md:text-4xl lg:text-5xl">
               Edit your post
            </h1>
            <p className="mt-6 text-center text-base text-muted-foreground md:text-lg">
               Start editing your blog post below...
            </p>
         </VStack>
         <HStack
            className="border-gray-200/50 border-b-2 pb-4"
            spacing={"none"}
            align={"center"}
            pos={"apart"}
         >
            <div className="flex flex-1 place-content-end gap-4">
               <EditorAction />

               <Button
                  onClick={handleExport}
                  className="w-40 transform rounded-full px-4 py-2 font-semibold transition duration-200 ease-in-out hover:scale-105"
               >
                  <Download className="mr-2 h-5 w-5" />
                  Export
               </Button>
            </div>
         </HStack>
         <Card>
            <ForwardRefEditor
               markdown={props.posts[0].content}
               onChange={handleContentChange}
            />
         </Card>
      </form>
   );
};

export default ContentEditor;
