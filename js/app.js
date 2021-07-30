'use strict'
function calculateCashback(specialCategoryPurchases,otherCategoryPurchases) {
    const specialCategoryPercent = 0.03;
    const otherCategoryPercent = 0.01;

    const specialCategoryCashback = specialCategoryPurchases * specialCategoryPercent;
    const otherCategoryCashback = otherCategoryPurchases * otherCategoryPercent;
    const totalCashback = specialCategoryCashback + otherCategoryCashback;
    const limit = 10000;

    return {
        specialCategoryCashback,
        otherCategoryCashback,
        totalCashback: totalCashback > limit ? limit : totalCashback
    };
}

const cashback=calculateCashback(5000,10000);
console.log(cashback);