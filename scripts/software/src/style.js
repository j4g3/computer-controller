import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const IpBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const IpText = styled.span`
  flex-direction: column;
  font-size: 18px;
`;
export const IpStatusOnline = styled.span`
  color: #00f9e0;
`;
export const IpStatusOffline = styled.span`
  color: #ff0013;
`;
