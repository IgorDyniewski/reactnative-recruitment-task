/*
  Here we define typography more deeply
*/
import styled from 'styled-components/native';
import { WorkSansSemiBold } from './work-sans';
import { RobotoMedium } from './roboto';

export const H1 = styled(WorkSansSemiBold)`
  color: ${props => props.theme.headingDefaultColor};
  font-size: ${props => props.theme.headingsSizes.h1}px;
  line-height: ${props =>
    props.theme.headingsSizes.h3 *
    props.theme.headingLineHeightDefaultMultiplier}px;
`;
export const H2 = styled(WorkSansSemiBold)`
  color: ${props => props.theme.headingDefaultColor};
  font-size: ${props => props.theme.headingsSizes.h2}px;
  line-height: ${props =>
    props.theme.headingsSizes.h2 *
    props.theme.headingLineHeightDefaultMultiplier}px;
`;
export const H3 = styled(WorkSansSemiBold)`
  color: ${props => props.theme.headingDefaultColor};
  font-size: ${props => props.theme.headingsSizes.h3}px;
  line-height: ${props =>
    props.theme.headingsSizes.h3 *
    props.theme.headingLineHeightDefaultMultiplier}px;
`;
export const H3Weight500 = styled(H3)`
  font-family: 'WorkSans_500Medium';
`;
export const H4 = styled(RobotoMedium)`
  color: ${props => props.theme.headingDefaultColor};
  font-size: ${props => props.theme.headingsSizes.h4}px;
  line-height: ${props =>
    props.theme.headingsSizes.h4 *
    props.theme.headingLineHeightDefaultMultiplier}px;
`;
export const H5 = styled(RobotoMedium)`
  color: ${props => props.theme.headingDefaultColor};
  font-size: ${props => props.theme.headingsSizes.h5}px;
  line-height: ${props =>
    props.theme.headingsSizes.h5 *
    props.theme.headingLineHeightDefaultMultiplier}px;
`;
export const H6 = styled(RobotoMedium)`
  color: ${props => props.theme.headingDefaultColor};
  font-size: ${props => props.theme.headingsSizes.h6}px;
  line-height: ${props =>
    props.theme.headingsSizes.h6 *
    props.theme.headingLineHeightDefaultMultiplier}px;
`;

export default H1;
