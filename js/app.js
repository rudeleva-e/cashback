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


function handleSubmit(evt) {
    evt.preventDefault(); // отменяем поведение по умолчанию

    // вытаскиваем значения, введенные пользователем и проверяем
    const specialAmountInputEl = document.getElementById('special-amount-input');
    const specialAmount = Number(specialAmountInputEl.value);
    if (Number.isNaN(specialAmount)) {
        // TODO: показать ошибку
        return;
    }
    if (!Number.isFinite(specialAmount)) {
        // TODO: показать ошибку
        return;
    }

    const otherAmountInputEl = document.getElementById('other-amount-input');
    const otherAmount = Number(otherAmountInputEl.value);
    if (Number.isNaN(otherAmount)) {
        // TODO: показать ошибку
        return;
    }
    if (!Number.isFinite(otherAmount)) {
        // TODO: показать ошибку
        return;
    }

    // вызываем функцию и считаем кешбэк
    const result = calculateCashback(specialAmount, otherAmount);
    // находим элементы и добавляем к ним получившиеся значения
    const specialCashbackEl = document.getElementById('special-cashback');
    specialCashbackEl.textContent = `${result.specialCategoryCashback} руб.`;
    const otherCashbackEl = document.getElementById('other-cashback');
    otherCashbackEl.textContent = `${result.otherCategoryCashback} руб.`;
    const totalCashbackEl = document.getElementById('total-cashback');
    totalCashbackEl.textContent = `${result.totalCashback} руб.`;
}
const formEl = document.getElementById('cashback-form');
formEl.onsubmit = handleSubmit;