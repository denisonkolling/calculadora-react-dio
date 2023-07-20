import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: grey;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Tahoma;
`;

export const Content = styled.div`
	background-color: #ccc;
	width: 14rem;
	min-height: 290px;
`;

export const Row = styled.div`
	display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
