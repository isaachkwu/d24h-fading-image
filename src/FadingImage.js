import React, {useState, useEffect} from 'react'
import './FadingImage.css'

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const FadingImage = ({ images, style, slideTimeMs = 3000, transitionTimeMs = 1000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {changeImage()}, slideTimeMs)
        return () => {
            clearInterval(interval)
        }
    })

    const changeImage = () => {
        setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)
    }
    
    return (
        <div style={{...style, position: 'relative'}}>
            {
                images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${image})`,
                            transition: `opacity ${transitionTimeMs}ms ease-in-out`
                        }}
                        className={`fading-image ${index === currentImageIndex ? 'top' : 'bottom'}`}
                    />
                ))
            }
        </div>
    )
}

export default FadingImage