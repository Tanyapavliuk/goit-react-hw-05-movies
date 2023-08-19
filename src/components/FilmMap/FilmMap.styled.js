import styled from '@emotion/styled';

export const ListFilm = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  justify-content: center;

  padding: 20px;
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
  &:hover p {
    bottom: 0;
    opacity: 1;
  }
`;

export const TitleFilm = styled.p`
  position: absolute;
  bottom: -100%;
  color: #000000;
  z-index: 10;

  padding: 20px 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.66);
  text-align: center;

  opacity: 0;
  transition: opacity 250ms linear;
`;
