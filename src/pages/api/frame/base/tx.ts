import { NextApiRequest, NextApiResponse } from 'next';
import { FrameRequest } from "@coinbase/onchainkit";
import { CoinbaseKit } from '../../../../../classes/CoinbaseKit';
import { getERC721PreparedEncodedData, getFarcasterAccountAddress } from '../../../../../utils/tx-1';
import { erc721ContractAddress } from '../../../../../utils/constants';
import { abiContrato } from '../../../../../utils/erc721ContractABI';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(400).json({ message: "Invalid Method"});
    }

    const { isValid, message } = await CoinbaseKit.validateMessage(
        req.body as FrameRequest
    );
    
    if(!isValid || !message) {
        return res.status(400).json({ message: "Invalid Message" });
    };

    // Get the account address
    const accountAddress = getFarcasterAccountAddress(message.interactor);
    
    // Get the encoded data
    const data = await getERC721PreparedEncodedData(accountAddress);

    // Return the transaction frame
    return res.status(200).json({
        chainId: "eip155:8453",
        method: "eth_sendTransaction",
        params: {
            abi: abiContrato,
            to: erc721ContractAddress,
            data: data,
            value: "0"
        }
    });
};
