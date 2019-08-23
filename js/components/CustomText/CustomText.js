import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const CustomText = ({children}) => (
  <Text style={styles.customText}>{children}</Text>
);

export default CustomText;
