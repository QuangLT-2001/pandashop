export const formatMoney = (money) => {
  return new Intl.NumberFormat().format(money);
}