
export default async function NewlyAddedLoading() {
    return (
        <section className="w-full overflow-hidden
        relative backdrop-blur-lg border-2 border-slate-400/10 flex flex-col justify-center items-center text-left rounded-md bg-opacity-40 h-fit bg-slate-200/5 drop-shadow-md py-5
        before:absolute before:inset-0
                    before:-translate-x-full
                    before:animate-[shimmer_3s_infinite]
                    before:bg-gradient-to-r
                    before:from-transparent before:via-rose-100/10 before:to-transparent       
        ">
            <div className="grid auto-rows-[192px] grid-cols-3 gap-4 w-11/12">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 3 || i === 6 ? "col-span-2" : ""
                            }`}
                    ></div>
                ))}
            </div>
        </section >
    )
}

