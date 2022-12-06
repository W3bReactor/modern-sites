import React, { FC } from 'react';
import { About, Header, Intro, Portfolio, Project } from '../../components';
interface MainProps {
	theme: string;
}

const Main: FC<MainProps> = ({ theme }) => {
	return (
		<div>
			<Header theme={theme} />
			<Intro theme={theme} />
			<Portfolio theme={theme} />
			<About theme={theme} />
			<Project theme={theme} />
		</div>
	);
};

export default Main;
