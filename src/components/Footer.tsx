import { Link } from 'react-router-dom';
import packageJson from '../../package.json';

const Footer = () => {
    return (
        <footer className=' w-full p-6 text-center flex mobileS:flex-col lg:flex-row justify-center items-center gap-2'>
            <p className='text-secondary opacity-50'>© Taskie - all rights reserved</p>
            <div className='text-secondary opacity-50 select-none pointer-events-none mobileS:hidden lg:block'>|</div>
            <Link to={"https://github.com/zemtsow/taskie-manager/releases/latest"} target='_blank' className='text-secondary select-none'>{packageJson.version}</Link>
        </footer>
    )
}

export default Footer