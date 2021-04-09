import React from 'react';

import { Text, StyleSheet } from 'react-native';

export default function TextAplication(params) {
  return (
    <Text style={{
      fontSize: params.size || 12,
      fontWeight: params.weight || "400",
      color: params.color || '#F4F4F4',
    }}>
      {params.children}
    </Text>
  );
}
 