import Image from "next/image"
import getBase64 from "@/utils/get-blur-data-url"
import Heart from "./heart"
export async function GameCard(
    {
        gameCode
    }: {
        gameCode?: string
    }
) {

    const myBlurDataUrl = await getBase64('https://static.gamezop.com/SJX7TGkDq1X/square.png')

    return (
        <div className="relative cursor-pointer h-60 w-48 rounded-md group ">
            <div className="relative rounded-md h-full w-full">
                <Image src="https://static.gamezop.com/SJX7TGkDq1X/square.png"
                    fill
                    alt="ss"
                    className="object-cover rounded-md"
                    style={{ transform: 'translate3d(0, 0, 0)' }}
                    placeholder="blur"
                    blurDataURL={myBlurDataUrl}
                />

            </div>
            <div className="absolute flex flex-col top-0 h-full w-full rounded-md text-center justify-center text-black font-medium items-center transition duration-150 bg-slate-300 bg-opacity-50
            group-hover:opacity-100 opacity-0
            ">
                Name
            </div>
            <Heart />
        </div>
    )
}

export default GameCard