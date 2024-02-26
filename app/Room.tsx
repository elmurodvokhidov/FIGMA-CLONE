"use client";

import { ReactNode } from "react";
import { RoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";

export function Room({ children }: { children: ReactNode }) {
    return (
        <RoomProvider id="my-room" initialPresence={{}}>
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    );
}