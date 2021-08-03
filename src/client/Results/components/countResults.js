import cat1 from '../../../images/cats/simon_cat_3.png';
import cat2 from '../../../images/cats/simon_cat_6.png';
import cat3 from '../../../images/cats/simon_cat_5.png';
import cat4 from '../../../images/cats/simon_cat_9.png';
import cat5 from '../../../images/cats/simon_cat_8.png';
import cat6 from '../../../images/cats/simon_cat_7.png';
import cat7 from '../../../images/cats/simon_cat_2.png';

function countResults(rightAnswer) {
  const defaultCorrectAnswer = 12;

  let mainMessage;

  let secondaryMessage;

  let image;

  const result = (rightAnswer * 100) / defaultCorrectAnswer;

  if (result <= 10) {
    mainMessage = 'Oh no!';
    secondaryMessage = 'You lack basic QA knowledge';
    image = cat1;
    return {
      mainMessage,
      secondaryMessage,
      image,
    };
  }
  if (result > 10 && result <= 30) {
    mainMessage = 'Maybe next time';
    secondaryMessage = "Your QA knowledge is pretty weak, but don't give up!";
    image = cat2;
    return {
      mainMessage,
      secondaryMessage,
      image,
    };
  }
  if (result > 30 && result <= 50) {
    mainMessage = 'Keep improving';
    secondaryMessage = "Keep learning and you'll get there!";
    image = cat3;
    return {
      mainMessage,
      secondaryMessage,
      image,
    };
  }
  if (result > 50 && result <= 70) {
    mainMessage = 'Getting there!';
    secondaryMessage =
      'Good result, but you still lack some basics of QA knowledge';
    image = cat4;
    return {
      mainMessage,
      secondaryMessage,
      image,
    };
  }
  if (result > 70 && result <= 90) {
    mainMessage = 'Not bad!';
    secondaryMessage = 'But you still need to learn some materials';
    image = cat5;
    return {
      mainMessage,
      secondaryMessage,
      image,
    };
  }

  if (result > 90 && result <= 99) {
    mainMessage = 'Great!';
    secondaryMessage = 'You have very strong QA knowledge';
    image = cat6;
    return {
      mainMessage,
      secondaryMessage,
      image,
    };
  }
  if (result === 100) {
    mainMessage = 'Perfect!';
    secondaryMessage =
      "You've answered all questions correctly, congratulations!";
    image = cat7;
    return {
      mainMessage,
      secondaryMessage,
      image,
    };
  }
}

export default countResults;
