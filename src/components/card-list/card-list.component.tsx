import { Monster } from '../../App';
import Card from '../card/card.component';
import './card-list.styles.css';

interface MonsterCard {
monsters : Monster[]
}

const CardList = ({ monsters }: MonsterCard) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
