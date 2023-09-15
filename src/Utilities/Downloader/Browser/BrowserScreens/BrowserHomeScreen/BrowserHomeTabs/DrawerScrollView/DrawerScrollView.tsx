import {PropsWithChildren} from 'react';
import {ScrollView} from 'react-native';

type TDrawerScrollViewProps = PropsWithChildren<{}>;

function DrawerScrollView(props: TDrawerScrollViewProps): React.JSX.Element {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      }}
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      {props.children}
    </ScrollView>
  );
}

export default DrawerScrollView;
