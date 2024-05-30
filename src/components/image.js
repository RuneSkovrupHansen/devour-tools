import 'css/image.css';

export function Image(src, alt) {
    return (
        <img src={src} alt={alt} className='image' />
    )
}