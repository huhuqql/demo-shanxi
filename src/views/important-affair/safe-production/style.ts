import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    padding: 20px;
`;

export const HeaderTab = styled.div`
    padding: 15px 10px 0 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TabButton = styled.div<{ active: boolean }>`
    flex: 1;
    margin: 0 5px;
    background-color: ${props => props.active ? '#4876FF' : '#efefef'};
    line-height: 40px;
    height: 40px;
    text-align: center;
    color: ${props => props.active ? '#ffffff' : '#000000'};
    transition: 0.3s ease-out;
`;

export const BlockContainer = styled.div`
    position: relative;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 4px;
    margin: 10px 0;
`;

export const BlockTitle = styled.div`
    width: 100%;
    font-size: 16px;
    line-height: 20px;
`;

export const BlockReadStatusContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;


export const BlockReadStatusIcon = styled.div`
    height: 3px;
    width: 2px;
    margin-right: 3px;
    background-color: #fff;
`;

export const BlockReadStatus = styled.div`
    height: 20px;
    width: 35px;
    background-color: #aaa;
    border-radius: 4px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
`;

export const BlockDescriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

export const BlockDescription = styled.div`
    font-size: 12px;
    color: #aaaaaa;
`;

export const FooterText = styled.div`
    width: 100%;
    padding: 10px 0;
    text-align: center;
    color: #aaaaaa;
    font-size: 12px;
`;

export const EmptyContainer = styled.div`
    position: relative;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

