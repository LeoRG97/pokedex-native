import { Text } from 'react-native';
import React from 'react';
import { appTheme } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle = ({ title }: HeaderTitleProps) => {
  const { top } = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...appTheme.title,
        ...appTheme.globalMargin,
        top: top + 20,
        marginBottom: top + 20,
      }}>
      {title}
    </Text>
  );
};

export default HeaderTitle;
