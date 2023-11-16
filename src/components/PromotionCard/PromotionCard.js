import moment from "moment";
import "./PromotionCard.css";

const PromotionCard = ({ promotion, index }) => {
  return (
    <div className="card">
      <div className="flex-row">
        <span className="heading">{promotion.type}</span>
        <span className={`badge ${promotion.type}`}></span>
      </div>
      <div className="date">{moment(promotion.timestamp).format("ll")}</div>
      <div>{promotion.url}</div>
      <h2>{promotion.company}</h2>
      <p>{promotion.paragraph}</p>
      <div className="links">
        <a href="#" className="view">
          View
        </a>
        <a href="#" className="more">
          More
        </a>
      </div>
    </div>
  );
};

export default PromotionCard;
