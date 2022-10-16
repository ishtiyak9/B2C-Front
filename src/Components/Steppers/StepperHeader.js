import styled from 'styled-components';

export const StyledStepperHeaderItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    .step-counter {
        position: relative;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        padding: 10px;
        border-radius: 50%;
        background:  white;
        margin-bottom: 6px;
        border: 6px solid  #777E91;
      font-family: Poppins sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      /* identical to box height */

      text-align: center;

      /* ash */

      color: #777E91;


    }

    &::after {
        position: absolute;
        content: '';
        border-bottom: 6px solid #E6E8EC;
        width: 100%;
        top: 22px;
        left: 50%;
        z-index: 2;
      
    }

    &.completed {
        .step-counter {
          background-color: #2B3990;
          width: 60px;
          height: 60px;
          border: 6px solid  #2B3990;
          font-family: Poppins sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 36px;
          /* identical to box height */

          text-align: center;

          /* white */

          color: #FFFFFF;
          
        }
        &::before {
            position: absolute;
            content: '';
            border-bottom: 6px solid #2B3990;
            border-radius: 6px;
            width: 100%;
            top: 22px;
            left: -50%;
            z-index: 3;
        }
    }

    &:first-child {
        &::before {
            content: none;
        }
    }

    &:last-child {
        &::after {
            content: none;
        }
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const StyledStepperHeader = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;
