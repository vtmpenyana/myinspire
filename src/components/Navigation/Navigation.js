import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return(
		<div className='navigation'>
			<img src={`https://res.cloudinary.com/dbu3hvhtr/image/upload/v1571064414/InspireAcademy/IA_Color_Icon_fvnvwl.png`} width='auto' height='70' alt={`logo`} />
			<div className='black f3 menu'>
				<ul className='menu-items'>
					<p className='pointer '>Sign Out</p>
				</ul>
			</div>
		</div>
	)
}


export default Navigation;