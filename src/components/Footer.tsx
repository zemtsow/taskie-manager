import { Link } from 'react-router-dom';
import packageJson from '../../package.json';

const Footer = () => {
    return (
        <footer className='fixed bottom-0 left-0 right-0 w-full p-6 text-center flex flex-row justify-center items-center gap-2'>
            <p className='text-secondary opacity-50'>© Taskie - all rights reserved</p>
            <div className='text-secondary opacity-50 select-none pointer-events-none'>|</div>
            <Link to={"https://github.com/zemtsow/taskie-manager/releases/latest"} target='_blank' className='text-secondary select-none underline'>{packageJson.version}</Link>
        </footer>
    )
}

export default Footer