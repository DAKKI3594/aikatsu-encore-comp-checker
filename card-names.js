const CARD_NAME_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSr-aydRteWyugal9L7YQmU-DQ3c9yn9qgEIoQH3Wwiy7jPvm_wZvLGFbD7apPNWW64nIomKXPwg3hS/pub?output=csv";

async function loadPromoCardNames() {
  try {
    const response = await fetch(CARD_NAME_CSV_URL);
    if (!response.ok) throw new Error("CSV読み込み失敗");

    const csv = await response.text();
    console.log("カード名シート読み込み成功", csv);
  } catch (error) {
    console.error("カード名シート読み込みエラー", error);
  }
}

loadPromoCardNames();
