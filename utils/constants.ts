import { createThirdwebClient, defineChain } from "thirdweb";
// cambiar red por base
import { baseSepolia } from "thirdweb/chains";

const secretKey = process.env.TWS;
export const CLIENT = createThirdwebClient({
    secretKey: secretKey as string,
});
// cambiar red por base
export const CHAIN = defineChain( baseSepolia );

export const erc721ContractAddress = process.env.CONTRATO as string;
