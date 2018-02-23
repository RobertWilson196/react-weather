import rain from './rain.gif';
import snow from './snow.gif';

const selection = (name) => {
    switch(name) {
        case 'rain' : return rain;
        case 'snow' : return snow;
        default : return rain;
    }
}

export default selection;