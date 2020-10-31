export function timeConvert(n) {
  if (!n) {
    return ''
  }
  const num = n;
  const hours = (num / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + 'h ' + rminutes + 'm';
}

export function convertRatingToPercentage(n) {
  if (!n) {
    return ''
  }
  return (n * 10) + '%';
}

export function getLanguageFromCode(code) {
  if (code === 'en') {
    return "English"
  }
  return ""
}

export function formatCurrency(x) {
  if (!x) {
    return '$0.00';
  } 
  return '$' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.00';
}