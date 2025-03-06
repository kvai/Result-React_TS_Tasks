interface ITotalPrice {
    price: number, 
    discount?: number | undefined, 
    isInstallment?: boolean | undefined, 
    months?: number | undefined
}


const totalPrice = ({ price, discount, isInstallment, months }: ITotalPrice): number => {
   if (!!isInstallment) {
        return (price - price / 100 * (discount ?? 1)) / (months ?? 1)
   } else {
        return (price - price / 100 * (discount ?? 1))
   }
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250