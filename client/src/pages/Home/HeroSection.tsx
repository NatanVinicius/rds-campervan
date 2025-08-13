import SplitText from "../../components/motion/SplitText";

export const HeroSection = () => {
	return (
		<section className="w-full mt-[76px] bg-[url('/src/assets/heroBG.jpg')] bg-cover bg-center text-white lg:h-[450px] lg:mt-0 2xl:h-[650px]">
			{/* Overlay escura sobre a imagem */}
			<div className="w-full h-full bg-black/70 z-10">
				<div className="flex flex-col justify-center max-w-[1200px] h-full mx-auto py-20 px-6">
					<h1>
						<SplitText
							text="Welcome"
							className="text-xl w-60 font-bold tracking-wider lg:text-4xl lg:w-120"
							delay={100}
							duration={0.6}
							ease="power3.out"
							splitType="chars"
							from={{ opacity: 0, y: 40 }}
							to={{ opacity: 1, y: 0 }}
							threshold={0.1}
							rootMargin="-100px"
						/>
					</h1>
					<h2>
						<SplitText
							text="Your trip start here!"
							className="text-xl w-60 font-bold tracking-tight lg:text-4xl lg:w-120"
							delay={100}
							duration={0.6}
							ease="power3.out"
							splitType="chars"
							from={{ opacity: 0, y: 40 }}
							to={{ opacity: 1, y: 0 }}
							threshold={0.1}
							rootMargin="-100px"
						/>
					</h2>
				</div>
			</div>
		</section>
	);
};
