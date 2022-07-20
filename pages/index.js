import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Naveen Gali",
					description:
						"A passionate Web and Android Application Developer.",
					image: "https://avatars.githubusercontent.com/u/68782156?s=400&u=9cbcae643ec4e61914207b71ac2b8c26b4d31fbf",
					url: "https://naveengali11.github.io/",
					keywords: [
						"Naveen",
						"Naveen Gali",
						"@naveengali11",
						"NaveenGali11",
						"Portfolio",
						"React js Portfolio ",
						"Next Js Portfolio",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Feedbacks />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/NaveenGali11`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
