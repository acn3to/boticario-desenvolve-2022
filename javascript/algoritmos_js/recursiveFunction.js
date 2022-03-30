function dorme(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
  
}

async function incrementaNumero(number) {
  console.log(number);
  await dorme(2000);

  if (number === 10) {
    return console.log("Done!");
  }
  return incrementaNumero(number + 1);
}

incrementaNumero(1);
