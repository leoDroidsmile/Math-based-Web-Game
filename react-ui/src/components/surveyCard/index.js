import './surveyCard.css';

const SurveyCard = ({ img, id }) => {
    return (
        <div className="survey-card" bg='white' p={4} color='black'>
            <input type="radio" name={`survey-radio`} id={`survey-radio${id}`} className="survey-radio" />
            <img src={img} className="survey-img" alt="survey-card" />
            <label for={`survey-radio${id}`}>
            </label>
        </div>
    )
}

export default SurveyCard;