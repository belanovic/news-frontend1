import './style/layout/advertising.css'
import './style/typography/advertising.css'

export default function Advertising({type, num}) {

    const images = [
        <div className='ad'><img src="https://www.cfchamber.com/wp-content/uploads/2022/02/ad-placeholder.png"></img></div>,
        <div className='ad'><img src="https://cdn.dribbble.com/users/86267/screenshots/801835/media/3fe040e0f2e979adb78b8949ae7b6379.png?resize=400x300&vertical=center"></img></div>,
        <div className='ad'><img src="https://paradigms.life/wp-content/uploads/2015/07/300x250-Ad-Placeholder.png"></img></div>,
        <div className='ad'><img src="https://miro.medium.com/v2/resize:fit:1400/1*I9igqTmPvqdE3G2GFmV4Pw.jpeg"></img></div>
    ]

    return (
         <div className={`advertising ${type}`}>
            <div className = 'ads'>
            {images && images.map((elem, i) => {
                if(i < num) return elem
                })}
            </div>
        </div>

    )
}