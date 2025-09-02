import React from "react";

const TestimonialCard = () => {
	return (
		<div className="w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg">
			<div className="flex items-center gap-4 self-stretch">
				<div className="w-12 h-12">
					<img
						src="/img/profile-thumbnail.png"
						alt="Sarah Dole profile"
						className="w-12 h-12 object-cover rounded-full"
					/>
				</div>
				<div className="flex flex-col gap-px grow">
					<span className="font-semibold text-lg text-justify text-neutral-900">
						Sarah Dole
					</span>
					<span className="font-normal text-sm text-neutral-600">
						@sarahdole
					</span>
				</div>
			</div>
			<span className="font-normal text-base text-neutral-600">
				I've been searching for high-quality abstract images for my
				design projects, and I'm thrilled to have found this platform.
				The variety and depth of creativity are astounding!
			</span>
		</div>
	);
};

export default TestimonialCard;
