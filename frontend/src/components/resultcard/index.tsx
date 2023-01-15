import "./styles.css";

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <div className="main-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default ResultCard;
