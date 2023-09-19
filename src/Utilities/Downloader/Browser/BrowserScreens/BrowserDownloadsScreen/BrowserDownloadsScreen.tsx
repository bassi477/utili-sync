import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {BrowserContext} from '../../../../../Core/providers/BrowserContextProvider';
import {
  IAppBrowserDownload,
  TAppFileRanges,
} from '../../../../../common/interfaces/AppBrowserDownload';

function BrowserDownloadsScreen(): JSX.Element {
  const browserContext = useContext(BrowserContext);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      {Object.keys(browserContext.fileDownloads).map(fileKey => {
        const fileDownload = browserContext.fileDownloads[fileKey];
        const renderedContent = Object.keys(fileDownload).map(filePropKey => {
          const fileProp =
            fileDownload[filePropKey as keyof IAppBrowserDownload];
          if (fileProp as TAppFileRanges) {
            const ranges = fileProp as TAppFileRanges;
            return Object.keys(ranges).map(rangeKey => {
              const range = ranges[rangeKey];
              return (
                <>
                  <Text style={{fontWeight: 'bold'}}>Key = {rangeKey}</Text>
                  <Text style={{fontWeight: 'bold'}}>
                    Start = {range.start}
                  </Text>
                  <Text style={{fontWeight: 'bold'}}>End = {range.end}</Text>
                  <Text style={{fontWeight: 'bold'}}>
                    Position = {range.position}
                  </Text>
                  <Text style={{fontWeight: 'bold'}}>
                    Progress = {range.progress}
                  </Text>
                  <Text style={{fontWeight: 'bold'}}>
                    Status = {range.status}
                  </Text>
                  <Text style={{fontWeight: 'bold'}}>
                    Data = {range.data ? 'Ready' : 'Pending'}
                  </Text>
                </>
              );
            });
          }
          if (fileProp as string) {
            return (
              <Text style={{ fontWeight: 'bold' }}>
                {filePropKey} = {fileProp as string}
              </Text>
            );
          }
        });

        return (
          <View
            style={{
              flex: 0,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              margin: 20,
            }}>
            {renderedContent}
          </View>
        );
      })}
    </View>
  );
}

export default BrowserDownloadsScreen;
