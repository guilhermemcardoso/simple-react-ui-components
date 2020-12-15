import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, Badge } from './styles/native';

const Button = ({
	icon,
	size,
	color,
    type,
    children,
	backgroundColor,
	borderColor,
	margin,
	disabled,
	elevated,
	hasBadge,
	badgeColor,
	...rest
}) => {

	return (
		<TouchableOpacity
			type={type}
			margin={margin}
			size={size}
			backgroundColor={backgroundColor}
			borderColor={borderColor}
			disabled={disabled}
			elevated={elevated}
			{...rest}>
			{children}
			{hasBadge && <Badge badgeColor={badgeColor} />}
		</TouchableOpacity>
	);
};

Button.propTypes = {
	size: PropTypes.number,
	type: PropTypes.oneOf(['primary', 'secondary']),
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	borderColor: PropTypes.string,
	disabled: PropTypes.bool,
	elevated: PropTypes.bool,
	hasBadge: PropTypes.bool,
	badgeColor: PropTypes.string,
};

Button.defaultProps = {
	icon: 'add-outline',
	size: 20,
	type: 'primary',
	disabled: false,
	elevated: true,
	hasBadge: false,
    badgeColor: '#fff',
    borderColor: '#000',
    backgroundColor: '#000',
    color: '#fff'
};

export default Button;