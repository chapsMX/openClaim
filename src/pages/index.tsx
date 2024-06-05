import Head from "next/head";

const title ="Base Frens Mint Frame";
const HOST_URL = process.env.PUBLIC_URL
const imagenFrame = `${HOST_URL}/placeHolder.png`;

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content={title}/>
        <meta property="fc:frame" content="vNext"/>
        <meta name="fc:frame:image" content={imagenFrame}/>
        <meta name="fc:frame:image:aspect_ratio" content="1:1"/>
        {/* mint 1 basefren */}
        <meta property="fc:frame:button:1" content="Mint 1 BaseFren"/>
        <meta property="fc:frame:button:1:action" content="tx"/>
        <meta 
           property="fc:frame:button:1:target"
           content={`${HOST_URL}/api/frame/base/tx-1`}
           />
        {/* mint 3 basefren */}
        <meta property="fc:frame:button:2" content="Mint 3 BaseFRens"/>
        <meta property="fc:frame:button:2:action" content="tx"/>
        <meta 
           property="fc:frame:button:2:target"
           content={`${HOST_URL}/api/frame/base/tx-3`}
           />   
      </Head>
       <h1>Base Frens Mint Frame</h1>
    </>
  );
}

