import {Pressable, Text, View} from 'react-native';
import {create} from 'apisauce';
import AppFileDownloadHelper from '../../../../../common/helper/AppFileDownloadHelper';
import RNFetchBlob from 'rn-fetch-blob';

const apiSauceInstance = create({
  baseURL: undefined,
});

function BrowserBookmarksScreen(): JSX.Element {
  const testTrigger = async () => {
    try {
      const url = `https://www.google.com`;
      const url1GB = `https://speed.hetzner.de/1GB.bin`;
      const url20MB = `http://212.183.159.230/20MB.zip`;
      // const response = await fetch(url1GB, { method: 'HEAD' });
      const response = await AppFileDownloadHelper.requestFileHeaders(url20MB);
      const chunks = AppFileDownloadHelper.createFileRanges(
        response?.size ?? 0,
        5,
      );
      let foo = 'foo jkbk';
      let encodedFoo = RNFetchBlob.base64.encode(foo);
      let decodedFoo = RNFetchBlob.base64.decode(encodedFoo);
      console.log('value:', foo);
      console.log('encoded', encodedFoo);
      console.log('decoded' ,decodedFoo);
      console.log(atob(foo));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Pressable>
        <Text onPress={testTrigger}>Test Trigger</Text>
      </Pressable>
      <Text>This is the BrowserBookmarksScreen.</Text>
    </View>
  );
}

export default BrowserBookmarksScreen;
