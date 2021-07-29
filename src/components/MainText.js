import React from "react";
import Typewriter from "typewriter-effect";
import * as styles from "../styles/components/text.module.scss";

export default function MainText() {
	// var app = document.getElementById("app");

	// var typewriter = new Typewriter(app, {
	// 	loop: true,
	// 	delay: 75,
	// });

	// typewriter
	// 	.pauseFor(2500)
	// 	.typeString("A simple yet powerful native javascript")
	// 	.pauseFor(300)
	// 	.deleteChars(10)
	// 	.typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
	// 	.typeString(
	// 		'<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
	// 	)
	// 	.pauseFor(1000)
	// 	.start();
	return (
		<div className={styles?.textContainer}>
			<p className={styles?.textMain}>
				Build blazing fast <br />
				landing pages for
				<span className={styles?.textAnimated}>
					<Typewriter
						options={{
							strings: [
								'<span style="color: #09c1d7">APP</span>',
								'<span style="color: #09c1d7">SEO</span>',
								'<span style="color: #09c1d7">BLA</span>',
							],
							autoStart: true,
							loop: true,
							pauseFor: 1000,
							deleteSpeed: "natural",
						}}
					/>{" "}
					service
				</span>
			</p>
		</div>
	);
}
