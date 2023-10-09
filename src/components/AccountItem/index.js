import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a9db26229eba3cf96a5fab8d464e7310~c5_100x100.jpeg?x-expires=1696906800&x-signature=rp0jgQtZC%2FukhY9oiCn%2BZ9nN3sI%3D"
                alt="Nhi"
            />
            <div class={cx('info')}>
                <p className={cx('username')}>
                    <span>Name account</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>Name</p>
            </div>
        </div>
    );
}

export default AccountItem;
