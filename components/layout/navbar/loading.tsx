export default function Loading() {
    return (
        <ul className="flex flex-col items-start gap-4 ">
            {[...Array(6).keys()].map((i) => (
                <div key={i}
                    className={`flex gap-3 items-center w-full rounded-md isolate
                    overflow-hidden
                    relative 
                    before:absolute before:inset-0
                    before:-translate-x-full
                    before:animate-[shimmer_2s_infinite]
                    before:bg-gradient-to-r
                    before:from-transparent before:via-rose-100/10 before:to-transparent`}
                >
                    <li
                        className="bg-rose-100/5 py-2 px-6 h-8 w-full"
                        style={
                            {
                                animationDelay: `${i * 20 * 0.05}s`,
                                animationDuration: "1s"
                            }
                        }
                    >
                    </li>
                </div>
            ))}
        </ul>
    )
}