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
    "Elon Musk", // Boss name
    "https://i.imgur.com/AksR0tt.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage // Attack damage values
  );

  await gameContract.deployed();

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Contract deployed to:", gameContract.address);

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
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
