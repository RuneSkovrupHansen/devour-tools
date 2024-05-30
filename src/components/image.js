import 'css/image.css';

export function Image(src, alt) {
    return (
        <div className='image_wrapper'>
            <img src={src} alt={alt} className='image' />
        </div>
    )
}