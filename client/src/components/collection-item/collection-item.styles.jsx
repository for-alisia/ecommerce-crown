import styled from 'styled-components';

/** Components */
import { CustomButton } from '../custom-button';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin: 1.5rem 0;
  transition: all 0.5s ease;

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 45vw;

    &:hover {
      .image {
        opacity: unset;
      }

      .custom-button {
        opacity: unset;
      }
    }
  }
`;

export const CollectionFooterComponent = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: all 0.5s ease;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
`;

export const CustomButtonContainer = styled(CustomButton)`
  width: 80%;
  opacity: 1;
  position: absolute;
  top: 255px;
  transition: all 0.5s ease;
`;
