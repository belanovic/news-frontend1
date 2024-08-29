import './style/layout/advertising.css'
import './style/typography/advertising.css'

export default function Advertising({type, num}) {

    let images = [
        <div className='ad'><img src="https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fad1.jpg?alt=media&token=b3f74d65-a6a7-4050-95a9-1ff992e9eef7"></img></div>,
        <div className='ad'><img src="https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fad2.jpg?alt=media&token=0c77a808-5b73-4270-8a25-9672e49da276"></img></div>,
        <div className='ad'><img src="https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fad3.jpg?alt=media&token=fcc41a5c-624f-4510-9a8c-5c81080e61c5"></img></div>,
        <div className='ad'><img src="https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fad4.jpg?alt=media&token=52c8314a-da72-446e-9264-37aa184ace68"></img></div>,
        <div className='ad'><img src="https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fad5.jpg?alt=media&token=c1970712-ca05-4a01-ac7b-9142ba704b91"></img></div>,
        <div className='ad'><img src="https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fad6.jpg?alt=media&token=aea35e61-d056-45cc-b907-262348180116"></img></div>,
        <div className='ad'><img src="https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fad7.jpg?alt=media&token=9e252271-e1ff-4adf-83a0-ea61e0edba07"></img></div>,
        <div className='ad'><img src="https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fad8.jpg?alt=media&token=8ce1d396-4edb-4422-9de6-bf23c1d5f748"></img></div>,
        <div className='ad'><img src="https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fad9.jpg?alt=media&token=46256a1e-a38e-427b-9302-2f43522d04c3"></img></div>,
        <div className='ad'><img src="https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fad10.jpg?alt=media&token=ec064c1b-b071-41f3-bb1e-09dc6ca6958a"></img></div>
    ]  

    function shuffleImages(images) {
        for (var i = images.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = images[i];
            images[i] = images[j];
            images[j] = temp;
        }
    }
    shuffleImages(images);

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