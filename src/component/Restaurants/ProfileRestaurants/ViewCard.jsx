import PropTypes from 'prop-types';
import StatsCard from "./StatsCard";

const ViewCard = ({ cardData }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {cardData.map((card, index) => (
        <StatsCard 
          key={index}
          icon={card.icon}
          value={card.value}
          label={card.label}
        />
      ))}
    </div>
  );
};

ViewCard.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ViewCard;