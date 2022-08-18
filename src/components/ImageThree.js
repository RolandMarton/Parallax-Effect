import { Parallax } from 'react-parallax';
import AudiBack from '../img/Audi Back.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={AudiBack} strength={800}>
        <div className='content'>
            <span className="img-txt">Join <strong>our community</strong> now!</span>
        </div>
    </Parallax>
);

export default ImageThree;