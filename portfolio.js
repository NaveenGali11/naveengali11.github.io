import emoji from "react-easy-emoji";

export const greetings = {
	name: "Naveen Gali",
	title: "Hi all, I'm Naveen",
	description:
		"I'm passionate Web and Mobile Application developer having an experience of web applications with React.js, Next.js and Building Hybrid Mobile Applications using React Native Framework.",
	resumeLink:
		"https://drive.google.com/file/d/1ooV-s5J6x0XHZWfLwuF_auZZG69zuVQL/view?usp=sharing"
};

export const openSource = {
	githubUserName: "NaveenGali11",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/naveen.gali.1346918",
	instagram: "https://www.instagram.com/naveen_gali___/",
	twitter: "https://twitter.com/Naveengali5",
	github: "https://github.com/NaveenGali11",
	linkedin: "https://www.linkedin.com/in/naveen-gali/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"Web and Mobile Application Developer who wants to develop good looking apps",
	data: [
		{
			title: "Application Developer",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building Hybrid Mobile Applications using React Native"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "React Native",
					fontAwesomeClassname: "tabler:brand-react-native",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "PHP",
					fontAwesomeClassname: "vscode-icons:file-type-php2",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on Buckets or Cloud Storages and bringing them live"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions and Gitlab CI/CD"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "AWS RDS",
					fontAwesomeClassname: "logos:aws-rds",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "GitLab",
					fontAwesomeClassname: "logos:gitlab",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Gitlab CICD",
					fontAwesomeClassname: "jam:gitlab-circle",
				},
				{
					skillName: "AWS S3",
					fontAwesomeClassname: "logos:aws-s3",
				},
				{
					skillName: "AWS Code Pipeline",
					fontAwesomeClassname: "logos:aws-codepipeline",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "FrontEnd Web/ Andoird", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Cloud Infrastructure",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Bharath University",
		subHeader: "Bachelor of Technology (B.Tech)",
		duration: "July 2019 - ongoing",
		desc: "Studying B.Tech and participating in various activities.",
		descBullets: [
			"Completed Mini Project on College Exam Preparation App",
			"Submitted an IEEE paper to college on How we can use apps to change way of learning in colleges",
		],
	},
];

export const experience = [
	{
		role: "Application Developer Intern",
		company: "IG Drones",
		companylogo: "/img/icons/common/igdronesLogo.png",
		date: "July 2021 - ongoing",
		desc: "I work on various In-house and Delegate projects with Technologies like React js, React Native, Next js, Strapi",
		descBullets: [
			"I joined as an junior Application Developer intern and after completion of my one year i got promoted to Senior Application Developer Intern",
		],
	},
	{
		role: "Backend Developer Intern",
		company: "H.C. Roots",
		companylogo: "/img/icons/common/hcrootslogo.jpg",
		date: "May 2021 - September 2021",
		desc: "Lead my team Challengers towards building a Maid Services project that is given as a project to our team and we have completed most of the project and has submitted the project",
	},
];

export const projects = [
	{
		name: "Asset Management System",
		desc: "An in-house project made for IG Drones to manage their inventory assets and the employees can request for the assets,submit them back or can transfer them to other employees.",
		link: "https://1drv.ms/u/s!AmckUkPTs8FLhbY0xDDSnObRgnFmqQ?e=Pk24Pp",
	},
	{
		name: "Homvery Customer App",
		desc: "A Delegate project for Homvery Client",
		// link: "https://technota.netlify.app/",
	},
	{
		name: "Homvery Expert App",
		desc: "A Delegate project for Homvery Client",
		// link: "https://shopaza.herokuapp.com/",
	},
	{
		name: "F.C. Health Care",
		desc: "Project made for a Hack Srm Hackathon.",
		link: "https://devfolio.co/projects/fc-health-care",
	},
	{
		name: "Online Exam Portal",
		desc: "Project made for Def Hacks | Global 2.0",
		link: "https://devfolio.co/projects/online-examination-portal-1/",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];
