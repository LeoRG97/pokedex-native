import { StyleProp, Text, TextStyle } from 'react-native';
import React from 'react';
import { appTheme } from '../theme/appTheme';

interface HeaderTitleProps {
  title: string;
  style?: StyleProp<TextStyle>;
}

const HeaderTitle = ({ title, style }: HeaderTitleProps) => {
  return (
    <Text
      style={{
        ...appTheme.title,
        ...appTheme.globalMargin,
        ...style as any,
      }}>
      {title}
    </Text>
  );
};

export default HeaderTitle;
