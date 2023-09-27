//Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRoute = [
    {path: '/',component: Home,},
    {path: '/following',component: Following,},
    {path: '/upload',component: Upload,layout: HeaderOnly,},
    {path: '/search',component: Search,},
    {path: '/profile',component: Profile,},
];

const privateRoute = [];

export { publicRoute, privateRoute };
