import { Parallax } from 'react-parallax';
import City from '../img/City.jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={City} strength={800}>
        <div className='content'>
            <span className="img-txt">Are you <strong>ready</strong> to conquer the streets?</span>
        </div>
    </Parallax>
);

export default ImageTwo;