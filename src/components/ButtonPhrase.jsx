import getRandomFromArr from "../services/getRandomFromArr.js"
import phrases from "../utils/phrases.json"
import bgArr from "../utils/bgArr.json"

const ButtonPhrase = ({setPhraseRandom, setBgApp}) => {

  const handleChangePhrase = () => {
    const quote = getRandomFromArr(phrases)
    setPhraseRandom(quote)
    setBgApp(getRandomFromArr(bgArr))
  }

  return (
    <button
    className="app__btn"
    onClick={handleChangePhrase}
    >
      Ver Otro
      </button>
  )
}

export default ButtonPhrase