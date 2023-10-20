export default async function GameOfWeekLoading() {
    // await new Promise(resolve => setTimeout(resolve, 20000));

    return (
        <div
            className={`flex flex-col gap-3 items-center rounded-md isolate               
                    h-96 w-11/12
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
            <div className="h-1/4 w-full border-zinc-500/40 border bg-black/25 rounded-lg absolute bottom-0">

            </div>
        </div>
    )
}