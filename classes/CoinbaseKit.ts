import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit';

export class CoinbaseKit {
    public static validateMessage = async (body: FrameRequest) => {
        const { isValid, message } = await getFrameMessage(
            body,
            {
                // Not required, but recommended
                neynarApiKey: process.env.NAK,
            }
        );

        return { isValid, message };
    };
}
