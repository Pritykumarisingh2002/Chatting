import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from './Icon';
import {sizes, spacing} from '../constant/theme';

const MainHeader = ({title}) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {marginTop: insets.top}]}>
          <Icon icon="Hamburger" onPress={() => {}} />
          <Text style={styles.title}>{title}</Text>
          <Icon icon="Notification" onPress={() => {}} />
        </View>
      );
    };
    const styles = StyleSheet.create({
        container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: spacing.l,
         
        },
        title: {
          fontSize: sizes.h2,
          fontWeight: 'bold',
          color:'#08b6ff'
          
        },
      });
      
      export default MainHeader;