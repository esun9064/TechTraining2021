const waitTable = (tableNumber) => {
  console.log(`taking order for table ${tableNumber}`);
  console.log(`taking order for table ${tableNumber} successfully completed`);
};

const prepareFoodAsync = (tableNumber) => {
  console.log(`order for table ${tableNumber} sent to kitchen`);
  setTimeout(() => {
    console.log(`delivering food to table ${tableNumber}`);
  }, 0);
};


waitTable(1);
prepareFoodAsync(1);
waitTable(2);
prepareFoodAsync(2);
waitTable(3);
prepareFoodAsync(3);
waitTable(4);
prepareFoodAsync(4);
waitTable(5);
prepareFoodAsync(5);
