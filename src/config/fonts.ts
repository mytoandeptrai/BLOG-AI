import localFont from 'next/font/local';

export const poppinsFont = localFont({
	src: [
		{
			path: "../assets/fonts/Poppins-Light.ttf",
			weight: "300",
		},
		{
			path: "../assets/fonts/Poppins-Regular.ttf",
			weight: "400",
		},
		{
			path: "../assets/fonts/Poppins-Medium.ttf",
			weight: "500",
		},
		{
			path: "../assets/fonts/Poppins-Bold.ttf",
			weight: "700",
		},
		{
			path: "../assets/fonts/Poppins-Black.ttf",
			weight: "900",
		},
	],
	variable: "--font-poppins",
});