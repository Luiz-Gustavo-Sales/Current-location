import React from 'react';
import {View, Button} from 'react-native';

const FetchLocation = (props) => {
  return (
    <View>
      <Button title="Get Location" onPress={props.onGetLocation} />
    </View>
  );
};

export default FetchLocation;
