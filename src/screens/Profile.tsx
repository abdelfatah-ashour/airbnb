import {Button, Text} from 'react-native';
import React from 'react';
import SafeArea from 'components/SafeArea';

export default function Profile(props: any) {
  const {navigation} = props;
  return (
    <SafeArea>
      <Text style={{fontSize: 30}}>This is the home screen!</Text>
      <Button onPress={() => navigation.push('login')} title="Open Modal" />
    </SafeArea>
  );
}
