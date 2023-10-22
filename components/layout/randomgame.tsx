'use client';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import spinAnimation from '../../styles/animations/spinthatwheel.json';
import { useRef } from "react";
import { toast } from "sonner";
import { Game } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";
import { XCircleIcon } from "lucide-react";


const RandomGame = (
	{
		games
	}: {
		games: Game[]
	}
) => {

	const lottieRef = useRef<LottieRefCurrentProps>(null);
	function getRandomObjectFromArray(array: Game[]) {
		const randomIndex = Math.floor(Math.random() * array.length);
		return array[randomIndex];
	}
	const randomGame = getRandomObjectFromArray(games);




	return (
		<div className="bg-pink-600 p-4 text-white rounded-xl border-white/75 border-4 border-dashed flex items-center justify-around w-full ">
			<div className="flex justify-start gap-3 flex-col">
				<span className="text-lg">Confused on what to play ?</span>
				<h1 className="text-3xl font-extrabold">Spin To Play <span className="text-yellow-400">Random Game</span></h1>
				<button onClick={() => lottieRef.current?.play()} className="px-3 mt-4 w-fit border-2 transition duration-300 border-transparent hover:bg-opacity-90 hover:border-blue-500 font-medium py-3 bg-gradient-to-br from-amber-300 to bg-yellow-500 rounded-md text-black">Spin the wheel</button>
			</div>
			<Lottie lottieRef={lottieRef} animationData={spinAnimation} autoplay={false}
				onLoopComplete={() => {
					lottieRef.current?.stop();
					toast.custom((t) => (
						<div className="relative border border-dashed border-white flex justify-between items-center w-96 p-1 rounded-md bg-blue-500">
							<div className="flex flex-col items-start justify-center p-1">
								<h1 className="text-lg text-white">Try ! 🎉</h1>
								<Link
									href={`https://www.gamezop.com/game/${randomGame?.code}`}
									target="_blank"
									className="flex flex-col justify-center text-white
									hover:underline
									"
								>
									<h2 className="text-xl text-white font-extrabold">{randomGame.name}</h2>
									<span>Click here</span>
								</Link>
							</div>
							<button onClick={() => toast.dismiss(t)} className="absolute right-0 top-0 text-red-500 bg-red-200 rounded-full bg-opacity-25 hover:scale-110 transition duration-300">
								<XCircleIcon />
							</button>
							<Image src={`https://static.gamezop.com/${randomGame?.code}/square.png`}
								height={70}
								width={70}
								alt={`${randomGame?.name}`}
								className="object-cover rounded-lg"
							/>
						</div>
					));
				}}
				className="h-72 "
			/>
		</div>
	)
};

export default RandomGame;