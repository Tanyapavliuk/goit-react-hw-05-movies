import styled from '@emotion/styled';

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  margin-top: 30px;
`;

export const Input = styled.input`
  padding: 15px 30px;
  border-radius: 13px;
  width: 300px;

  outline: none;
  border: 1px solid transparent;
  font-weight: 700;
  &:focus {
    border: 1px solid #e13c52;
  }
`;

export const IconWrap = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 40px;

  background-color: #e13c52;
  border-radius: 13px;

  cursor: pointer;
`;

export const Item = styled.li`
  position: relative;
  width: 231px;
  height: 348px;
  border-radius: 4px;

  overflow: hidden;
  &:hover {
    transform: scale(1.025);
  }
  &:hover div {
    transform: translateY(-100%);
    opacity: 1;
  }
`;

export const InfoWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.72);
  transform: translateY(0);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
