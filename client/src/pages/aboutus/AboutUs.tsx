import TextType from "./TextType";
import { FcApproval } from "react-icons/fc";
import { RiMedalLine } from "react-icons/ri";
import { PiHandshake } from "react-icons/pi";
import { GrLocationPin } from "react-icons/gr";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export const AboutUs = () => {
	return (
		<>
			<section className="w-full bg-[url('/src/assets/bg-aboutus.jpg')] bg-cover bg-center h-[230px] text-white lg:h-[450px] lg:bg-[center_top_-120px] xl:bg-[center_top_-280px]  2xl:h-[650px]">
				{/* Overlay escura sobre a imagem */}
				<div className="relative w-full h-full bg-black/80 z-10">
					<div className="w-full h-full flex items-center justify-start max-w-[1200px] mx-auto py-30 px-6 ">
						<TextType
							className="text-start text-xl font-bold w-60 tracking-wider lg:text-4xl lg:w-120 "
							text={[
								"Turning dreams into journeys since 2018.",
								"Freedom on wheels, made with passion.",
							]}
							typingSpeed={100}
							pauseDuration={1500}
							showCursor={true}
							cursorCharacter="|"
						/>
					</div>
				</div>
			</section>
			<div className="max-w-[1100px] mx-auto">
				<div className="flex flex-col items-center justify-center py-10 gap-10 px-6">
					<h1 className="text-2xl font-bold text-[#006FFF]">Our history</h1>
					<p className="text-sm lg:w-250">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</div>
			<div className="w-full bg-[#006FFF]">
				<div className="max-w-[1100px] mx-auto flex flex-col items-center justify-center py-10 px-6 gap-10">
					<h1 className="text-2xl font-bold text-white ">Why choice us</h1>
					<p className="text-sm text-white lg:w-250">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s
					</p>
					<div className="w-full">
						<div className="w-full flex flex-col gap-10 lg:flex-row items-center justify-center">
							<div className="flex flex-col items-center justify-center w-[230px] h-[315px] px-4 bg-white rounded-2xl">
								<RiMedalLine className="text-7xl text-[#FFB300]" />
								<div className="mt-10 flex flex-col items-center justify-center gap-4">
									<h2 className="text-[#006FFF] font-bold text-xl text-center">
										Quality Campervans
									</h2>
									<p className="text-center text-black/40">
										Top-notch vehicles for unforgettable road trips.
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center w-[230px] h-[315px] px-4 bg-white rounded-2xl">
								<PiHandshake className="text-7xl text-[#EFB791]" />
								<div className="mt-10 flex flex-col items-center justify-center gap-4">
									<h2 className="text-[#006FFF] font-bold text-xl text-center">
										Personalised Support
									</h2>
									<p className="text-center text-black/40">
										Friendly and responsive customer service.
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center w-[230px] h-[315px] px-4 bg-white rounded-2xl">
								<FcApproval className="text-7xl text-[#FcApproval]" />
								<div className="mt-10 flex flex-col items-center justify-center gap-4">
									<h2 className="text-[#006FFF] font-bold text-xl text-center">
										Fully Equipped
									</h2>
									<p className="text-center text-black/40">
										Everything you need — just pack your bags.
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center w-[230px] h-[315px] px-4 bg-white rounded-2xl">
								<GrLocationPin className="text-7xl text-[#FF5722]" />
								<div className="mt-10 flex flex-col items-center justify-center gap-4">
									<h2 className="text-[#006FFF] font-bold text-xl text-center">
										Local Expertise
									</h2>
									<p className="text-center text-black/40">
										Discover NZ with insider tips from locals.
									</p>
								</div>
							</div>
						</div>
						<div className="flex justify-center mt-10 lg:justify-end">
							<Link
								to={"/contact"}
								className="bg-[#EF4444] p-4 rounded-xl text-white cursor-pointer lg:m"
							>
								Contact us
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
