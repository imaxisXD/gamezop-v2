export default async function CardLoading() {
    return (
        <div
            className={`flex flex-col gap-3 items-center w-full rounded-md isolate
                h-full
                    p-2
                    overflow-hidden
                    relative 
                    border
                    border-zinc-500/40
                    before:absolute before:inset-0
                    before:-translate-x-full
                    before:animate-[shimmer_2s_infinite]
                    before:bg-gradient-to-r
                    before:from-transparent before:via-rose-100/10 before:to-transparent`}
        >
            <div className="h-32 w-full border border-zinc-500/10 bg-zinc-500/5 rounded-md">
            </div>
            <div className="h-3 rounded-sm w-full bg-fontcolor/20">
            </div>
        </div>
    )
}