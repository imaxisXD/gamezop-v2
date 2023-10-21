export default async function TrendingGamesLoading() {
    return (
        <div className="relative w-full grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6 border
        border-zinc-500/40 rounded-md overflow-hidden
        before:absolute before:inset-0
                    before:-translate-x-full
                    before:animate-[shimmer_2s_infinite]
                    before:bg-gradient-to-r
                    before:from-transparent before:via-rose-100/10 before:to-transparent
        ">
            <h1 className=" font-semibold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:grid-cols-3">
                <span className="md:col-span-2 bg-pink-500 bg-opacity-10 border border-zinc-500/40 h-16 rounded-md" />
            </h1>
            <p className="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 hidden md:block">
            </p>
            <div className="h-20 bg-blue-500 bg-opacity-20 rounded-md xs:h-auto xs:square border border-zinc-500/40 " />
            <div className="h-16 bg-pink-500 bg-opacity-10 rounded-md xs:h-auto xs:square border border-zinc-500/40" />
            <div className="h-16 bg-blue-500 bg-opacity-20 rounded-md xs:h-auto xs:square border border-zinc-500/40" />
            <div className="h-16 bg-pink-500 bg-opacity-10 rounded-md xs:h-auto xs:square md:col-start-2 border border-zinc-500/40" />
            <div className="h-16 bg-blue-500 bg-opacity-20 rounded-md xs:h-auto xs:square border border-zinc-500/40" />
            <div className="h-16 bg-pink-500 bg-opacity-10 rounded-md xs:h-auto xs:square border border-zinc-500/40" />
        </div>
    )
}

