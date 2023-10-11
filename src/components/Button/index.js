import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Button({ 
    to, 
    href, 
    children, 
    primary, 
    outline, 
    small, 
    text, 
    className, 
    rounded, 
    disabled, 
    leftIcon,
    rightIcon,
    onClick, 
    ...passProps }) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        text,
        rounded,
        disabled,
    });
    const props = { onClick, ...passProps };

    if(disabled) {
        Object.keys(props).forEach(key =>{
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props.onClick;
            }
        })
        
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
