import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as RiveAnimation from '../custom-files/RiveAnimation';
import * as Utils from '../utils';
import { Button, SVG, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, View } from 'react-native';

const WalktroughScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      {/* Navbar */}
      <View style={styles(theme).Viewa5c9f3bb}>
        {/* Logo */}
        <SVG
          style={[
            GlobalStyles.SVGStyles(theme)['SVG'],
            styles(theme).SVG9691912c,
          ]}
          source={
            'https://gist.githubusercontent.com/pawelnowo/b45622d3917174818d9ba0e7e52c1b75/raw/dbf8fd8bd4c58640af725f7e249c1d1ab862ff2d/nao_logo.svg'
          }
        />
        {/* Button Secondary */}
        <Button
          style={[
            GlobalStyles.ButtonStyles(theme)['Button'],
            styles(theme).Button95d7f075,
          ]}
          title={'Log in'}
        />
      </View>
      {/* Pager */}
      <View style={styles(theme).Viewc6f5641c}>
        {/* Step */}
        <View
          style={[
            GlobalStyles.ViewStyles(theme)['Step'],
            styles(theme).View9f538e05,
          ]}
        />
        {/* Step */}
        <View
          style={[
            GlobalStyles.ViewStyles(theme)['Step'],
            styles(theme).View0cee9e8e,
          ]}
        />
        {/* Step */}
        <View
          style={[
            GlobalStyles.ViewStyles(theme)['Step'],
            styles(theme).Vieweb656cfc,
          ]}
        />
      </View>
      {/* Rive animation */}
      <Utils.CustomCodeErrorBoundary>
        <RiveAnimation.RiveAnimation />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button95d7f075: {
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
    },
    SVG9691912c: { height: 20, marginBottom: 22, marginTop: 22, width: 58 },
    View0cee9e8e: {
      alignSelf: 'stretch',
      backgroundColor: theme.colors['Light'],
      flexGrow: 1,
      height: 3,
      marginRight: 3,
      width: 20,
    },
    View9f538e05: {
      backgroundColor: theme.colors['Light'],
      flexGrow: 1,
      flexShrink: 1,
      height: 3,
      marginRight: 3,
      width: 20,
    },
    Viewa5c9f3bb: {
      alignItems: 'center',
      alignSelf: 'stretch',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 48,
      paddingLeft: 24,
      paddingRight: 24,
      width: '100%',
    },
    Viewc6f5641c: {
      flexDirection: 'row',
      paddingBottom: 18,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 18,
    },
    Vieweb656cfc: {
      alignContent: 'flex-start',
      alignSelf: 'stretch',
      backgroundColor: theme.colors['Light'],
      flexGrow: 1,
      height: 3,
      marginRight: 0,
      width: 20,
    },
  });

export default withTheme(WalktroughScreen);
