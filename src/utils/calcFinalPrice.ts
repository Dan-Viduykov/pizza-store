interface calcFinalPriceProps {
    startPrice: number;
    activeThickness: number;
    sizeValues: number[];
    activeSize: number;
}

export const calcFinalPrice =  (attr: calcFinalPriceProps) => {
    const { startPrice, activeThickness, sizeValues, activeSize } = attr;
    return Math.floor(startPrice + 
    (activeThickness === 0 ? 0 : startPrice * 0.1) +
    (sizeValues[activeSize] === 26 ? 0 : sizeValues[activeSize] === 30 ?startPrice*0.1 : startPrice*0.3));
}
    