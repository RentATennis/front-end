import styled from 'styled-components';

interface IStyledContainerProps {
    containerWidth?: number;
}

export const StyledContainer = styled.div<IStyledContainerProps>`
    width: 100%;
    max-width: ${({ containerWidth }) => containerWidth ? containerWidth : 1000}px;
    margin: 0 auto;
    padding: 10px;
`;