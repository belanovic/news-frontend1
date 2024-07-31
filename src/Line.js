import react, {useState, useEffect} from 'react';

export default function Line({key, type}) {

    const [margin, setMargin] = useState('');
    const [height, setHeight] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');
 

    useEffect(() => {
        if(type == 'article') {
            setMargin('1em 0em 1em 0em');
            setHeight('1px');
            setBackgroundColor('rgb(136, 136, 136)');
        }
        if(type == 'category') {
            setMargin('2em 0em 2em 0em');
            setHeight('1px');
            setBackgroundColor('rgb(136, 136, 136)');
        }
        if(type == 'latest') {
            setMargin('1em 0em 1em 0em');
            setHeight('1px');
            setBackgroundColor('rgb(136, 136, 136)');
        }   
        if(type == 'sportLatest') {
            setMargin('1em 0em 1em 0em');
            setHeight('1px');
            setBackgroundColor('rgb(136, 136, 136)');
        }   
        if(type == 'main') {
            setMargin('4em 0em 3em 0em');
            setHeight('3px');
            setBackgroundColor('black');
        }
        if(type == 'magazin') {
            setMargin('4em 0em 5em 0em');
            setHeight('3px');
            setBackgroundColor('white');
        }
        if(type == 'magazinOnTop') {
            setMargin('4em 0em 5em 0em');
            setHeight('3px');
            setBackgroundColor('black');
        }
        if(type == 'sport') {
            setMargin('4em 0em 5em 0em');
            setHeight('3px');
            setBackgroundColor('black');
        }
    }, [])

    return (
        <div 
            className = 'line'
            style={{
                margin: margin,
                height: height,
                backgroundColor: backgroundColor
            }}      
        >
        </div>
    )
}