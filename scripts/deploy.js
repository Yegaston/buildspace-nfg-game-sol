const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");

  const gameContract = await gameContractFactory.deploy(
    ["Leon", "Geral", "Kerrigan"], // Names
    [
      "https://i.imgur.com/Ptjlggc.jpeg", // Images
      "https://i.imgur.com/N2nizjZ.jpeg",
      "https://i.imgur.com/msNDTqw.jpeg",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25],
    "Elon Musk",
    "https://i.imgur.com/AksR0tt.png",
    10000,
    50
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
