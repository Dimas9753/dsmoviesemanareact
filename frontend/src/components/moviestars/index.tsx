import { ReactComponent as StarFull } from 'assets/img/estrelacheia.svg';
import { ReactComponent as StarHalf } from 'assets/img/meiaestrela.svg';
import { ReactComponent as StarEmpty } from 'assets/img/zeroestrela.svg';
import './styles.css'

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;