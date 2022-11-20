import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const result = await ImageColors.getColors(uri, { fallback: 'gray' });

  let primary;

  switch (result.platform) {
    case 'android':
      // android result properties
      primary = result.dominant;
      break;
    case 'ios':
      // iOS result properties
      primary = result.background;
      break;
    default:
      throw new Error('Unexpected platform key');
  }

  return [primary];
};
