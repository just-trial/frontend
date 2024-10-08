import './CoverSection.css';

const CoverSection: React.FC = () => {
  return (
    <div className="cover-section-container">
      <img src="/images/tickets/cover.png" alt="Cover" className="cover-image" />

      <button className="gallery-button">
        Visualizar mais fotos
      </button>
    </div>
  );
};

export default CoverSection;