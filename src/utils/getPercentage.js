export function getPercentage(score, drugSelected) {
  if (drugSelected === 'Ketamina' || drugSelected === 'GHB') {
    return score < 20 ? 0 : 100

  } else {
    if (score < 11) {
      return 0

    } else if (score >= 11 && score <= 30) {
      return 25

    } else if (score >= 31 && score <= 50) {
      return 50

    } else if (score >= 51 && score <= 70) {
      return 75

    } else {
      return 100
    }
  }
}