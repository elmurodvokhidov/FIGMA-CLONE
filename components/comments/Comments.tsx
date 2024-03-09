import { ClientSideSuspense } from "@liveblocks/react";
import { CommentsOverlay } from "./CommentsOverlay";

export function Comments() {
    return (
        <ClientSideSuspense fallback={null}>
            {() => <CommentsOverlay />}
        </ClientSideSuspense>
    )
}