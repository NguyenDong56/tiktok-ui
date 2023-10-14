import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import image from '~/assets/image';

import HeadLessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faArrowUpFromBracket,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(style);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];


function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

    const handleMenuItem = (menuItem) => {
        console.log(menuItem);
    };

    const CurrentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'View profile',
            to: '/@dalienn',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/setting',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="TikTok" />
                </div>
                <HeadLessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-label')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search account & videos"
                            className={cx('search-input')}
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadLessTippy>
                <div className={cx('actions')}>
                    {CurrentUser ? (
                        <>
                            <Tippy content="Upload" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={CurrentUser ? userMenu : MENU_ITEMS} onChange={handleMenuItem}>
                        {CurrentUser ? (
                            <img className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a9db26229eba3cf96a5fab8d464e7310~c5_100x100.jpeg?x-expires=1696906800&x-signature=rp0jgQtZC%2FukhY9oiCn%2BZ9nN3sI%3D"
                                alt=""
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
