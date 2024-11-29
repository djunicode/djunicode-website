import React from "react";

import Divider from "@material-ui/core/Divider";

import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationIcon from "@material-ui/icons/LocationOn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import * as styles from "../styles/components/contactcard.module.scss";

function ContactCard() {
	return (
		<div className={styles.card}>
			<h2 className={styles.cardTitle}>Get In Touch</h2>
			<Divider light className={styles.cardDivider} />
			<div className={styles.cardContentContainer}>
				<a className={styles.cardContent} href="mailto:djsceunicode@gmail.com">
					<div className={styles.cardContentIcon}>
						<MailIcon />
					</div>
					<div className={styles.cardContentDetail}>
						djsceunicode@gmail.com
					</div>
				</a>
				<a className={styles.cardContent} href="tel:+917021302112">
					<div className={styles.cardContentIcon + " " + styles.alternate}>
						<PhoneIcon />
					</div>
					<div className={styles.cardContentDetail}>
						+91 70213 02112
					</div>
				</a>
				<a className={styles.cardContent} href="https://goo.gl/maps/JNL4dRJRTPn8zYUc7">
					<div className={styles.cardContentIcon}>
						<LocationIcon />
					</div>
					<div className={styles.cardContentDetail}>
						D. J. Sanghavi College of Engineering,
						<br />
						Vile Parle, Mumbai - 400 055
					</div>
				</a>
				<div className={styles.cardSocials} >
					<a className={styles.cardSocialsIcon} href="https://instagram.com/djunicode">
						<InstagramIcon />
					</a>
					<a className={styles.cardSocialsIcon} href="https://github.com/djunicode">
						<GitHubIcon />
					</a>
					<a className={styles.cardSocialsIcon} href="https://www.linkedin.com/company/djunicode">
						<LinkedInIcon />
					</a>
					<a className={styles.cardSocialsIcon} href="https://twitter.com/djunicode">
						<TwitterIcon />
					</a>
				</div>
				<div className={styles.cardContent}>
        <div className={styles.cardContentDetail}>
          <div style={{ maxWidth: '100%', listStyle: 'none', transition: 'none', overflow: 'hidden', width: '450px', height: '150px' }}>
            <div id="embed-map-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
              <iframe
                style={{ height: '100%', width: '100%', border: '0' }}
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Dwarkadas+J+Sanghvi&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
			</div>
		</div>
	);
}


export default ContactCard;
