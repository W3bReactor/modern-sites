import React, { FC } from 'react';
import { Base, ModernIntro } from '../../components';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import classNames from 'classnames';
import { themes } from '../../redux/slices/settingsSlice/types';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ModernHeader } from '../../components/ModernHeader';

interface ModernProps {
	theme: string;
}

const Modern: FC<ModernProps> = ({ theme }) => {
	const cx = classNames({
		mainDark: theme === themes.DARK,
		mainLight: theme === themes.LIGHT,
	});
	const { content } = useParams();
	const location = useLocation();
	if (location.pathname.includes('modern-sites/frontend')) {
		return (
			<>
				<ModernHeader theme={theme} />
				<Outlet />
			</>
		);
	}
	return (
		<>
			<div>
				{content ? (
					<>
						<ModernHeader theme={theme} />
						<Outlet />
					</>
				) : (
					<Parallax className={cx} pages={2} style={{ top: '0', left: '0' }}>
						<ParallaxLayer
							offset={0}
							speed={2.5}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<ModernIntro theme={theme} />
						</ParallaxLayer>
						<ParallaxLayer
							offset={1}
							speed={2.5}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Base theme={theme} />
						</ParallaxLayer>
					</Parallax>
				)}
			</div>
		</>
	);
};
export default Modern;
