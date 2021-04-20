import Link from 'next/link';
import { FullImage } from '../src/styles';

const Index: React.FC = () => {
    return (
        <Link href="/gvstavo">
            <FullImage
                src="/cellbit.jpg"
                alt="Cellbitos"
                title="Enigma hmmmmmmmmmmm"
            />
        </Link>
    );
};

export default Index;
