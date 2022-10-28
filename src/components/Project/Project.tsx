import React from "react"
import styles from "./Project.module.scss"

export interface ProjectProps {
	children: React.ReactNode;
	projectTitle?: string;
}

export default function Project(props: ProjectProps) {
	return (
		<div className={styles.Project}>
			{ props.projectTitle && <div className={styles.projectTitle}>
				{props.projectTitle}
            </div>}
			<div className={styles.projectContent}>
				{props.children}
			</div>
		</div>
	)
}