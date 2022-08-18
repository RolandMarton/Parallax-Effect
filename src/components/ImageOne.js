import { Parallax } from 'react-parallax';
import AudiFront from '../img/Audi Front.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={AudiFront} strength={800}>
        <div className='content'>
            <span className="img-txt">The world of <strong>Aurora</strong> is now</span>
        </div>
    </Parallax>
);

export default ImageOne;