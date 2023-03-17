import { StyleSheet } from 'react-native';

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
    ButtonPrimary: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
    ButtonSecondary: {
      backgroundColor: theme.colors['Secondary'],
      borderRadius: 9999,
      color: theme.colors['Primary'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      letterSpacing: 0.24,
      lineHeight: 24,
      paddingBottom: 10,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 10,
      textAlign: 'center',
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({ Image: { height: 100, width: 100 } });

export const LinkStyles = theme =>
  StyleSheet.create({ Link: { color: theme.colors.primary } });

export const SVGStyles = theme =>
  StyleSheet.create({ SVG: { height: 100, width: 100 } });

export const ViewStyles = theme =>
  StyleSheet.create({
    Step: {
      alignSelf: 'stretch',
      backgroundColor: theme.colors['Light'],
      height: 3,
      width: '100%',
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    Subtitle: { color: theme.colors.strong, lineHeight: 20 },
    Text: { color: theme.colors.strong },
    Title: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 20,
      letterSpacing: -0.5,
      lineHeight: 28,
    },
  });

export const TabViewItemStyles = theme =>
  StyleSheet.create({ 'Tab View Item': { flex: 1 } });
