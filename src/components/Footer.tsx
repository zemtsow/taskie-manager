import packageJson from '../../package.json';

const Footer = () => {
    return (
        <footer className='fixed bottom-0 left-0 right-0 w-full p-6 text-center'>
            <p className='text-secondary'>{packageJson.version}</p>
        </footer>
    )
}

export default Footer