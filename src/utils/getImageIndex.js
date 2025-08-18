export function getImageIndex(score, drugSelected) {

    if (drugSelected === 'Ketamina' || drugSelected === 'GHB') {
      
      return score <= 20 ? 0 : 1

    } else {
      if (score < 11) return 0
      if (score >= 11 && score <= 30) return 1
      if (score >= 31 && score <= 50) return 2
      if (score >= 51 && score <= 70) return 3
      return 4
    }
  }