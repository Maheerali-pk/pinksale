import { Modal } from "antd";
import styled from "styled-components";

interface NetworkModelProps {
   visible: boolean;
   setVisible: (value: boolean) => void;
}

interface ICoin {
   name: string;
   logo: string;
}

export const StyledModal = styled(Modal)`
   .ant-modal-content {
      background-color: ${(p) => p.theme["main-background-color"]} !important;
   }
   .anticon {
      color: ${(p) => p.theme["main-text-color"]} !important;
   }
   .ant-modal-header {
      background-color: ${(p) => p.theme["main-background-color"]} !important;
      border-bottom: ${(p) => p.theme["divider-border"]} !important;
      & * {
         color: ${(p) => p.theme["main-text-color"]} !important;
      }
   }
`;
const NetworkCardWrapper = styled.div`
   background-color: ${(p) => p.theme["red-button-bg-color"]};
   color: ${(p) => p.theme["primary"]};
   display: flex;
   flex-direction: column;
   align-items: center;
   img {
      height: 56px;
      margin-bottom: 8px;
   }
   border-radius: 4px;
   padding: 8px;
`;
const GridWrapper = styled.div`
   display: grid;
   grid-template-columns: auto auto;
   grid-gap: 0.5rem;
`;
const Line = styled.div`
   height: 1px;
   margin-top: 24px;
   margin-bottom: 24px;
   background-color: ${(p) => p.theme["background-color"]};
   position: relative;
   &::before {
      content: "TESTNET";
      position: absolute;
      font-size: 12px;
      line-height: 12px;
      background-color: ${(p) => p.theme["background-color"]};
      padding: 0 4px;
      top: -6px;
      left: 16px;
      color: #888;
   }
`;

const headerCoins: ICoin[] = [
   { name: "Ethereum Mainnet", logo: "https://www.pinksale.finance/static/media/ic-eth.9270fc02.svg" },
   { name: "Ethereum Mainnet", logo: "https://www.pinksale.finance/static/media/ic-bsc.419dfaf2.png" },
   { name: "Ethereum Mainnet", logo: "https://www.pinksale.finance/static/media/ic-matic.910e1faf.png" },
   {
      name: "Ethereum Mainnet",
      logo: "data:image/png;base64,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",
   },
   { name: "Ethereum Mainnet", logo: "https://www.pinksale.finance/static/media/ic-avax.234db155.svg" },
   { name: "Ethereum Mainnet", logo: "https://www.pinksale.finance/static/media/ic-fantom.306f76f9.svg" },
];

const footerCoins: ICoin[] = [
   { name: "Ethereum Mainnet", logo: "https://www.pinksale.finance/static/media/ic-avax.234db155.svg" },
   { name: "Ethereum Mainnet", logo: "https://www.pinksale.finance/static/media/ic-matic.910e1faf.png" },
];
const NetworkModel: React.FC<NetworkModelProps> = ({ visible, setVisible }) => {
   return (
      <StyledModal footer={null} visible={visible} onCancel={() => setVisible(false)} title="Choose A Network">
         <GridWrapper>
            {headerCoins.map((coin) => (
               <NetworkCardWrapper>
                  <img src={coin.logo}></img>
                  <div>{coin.name}</div>
               </NetworkCardWrapper>
            ))}
         </GridWrapper>
         <Line></Line>

         <GridWrapper>
            {footerCoins.map((coin) => (
               <NetworkCardWrapper>
                  <img src={coin.logo}></img>
                  <div>{coin.name}</div>
               </NetworkCardWrapper>
            ))}
         </GridWrapper>
      </StyledModal>
   );
};

export default NetworkModel;
