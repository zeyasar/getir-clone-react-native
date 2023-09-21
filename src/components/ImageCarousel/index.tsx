import React, { useState } from "react";
import { FlatList, Image, Dimensions, View, StyleSheet, } from "react-native";

const { width, height } = Dimensions.get("window");

function ImageCarousel({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewRef = React.useRef((viewableItems: { viewableItems: string | any[]; }) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: height * 0.27,
        paddingTop: 25,
      }}
    >
      <FlatList
        data={images}
        style={{
          width: width * 0.5,
          height: height * 0.21,
        }}
        renderItem={(item) => (
          <Image
            source={{ uri: item.item }}
            style={{
              width: width * 0.5,
              height: height * 0.21,
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      ></FlatList>
      <View style={styles.dots}>
          {images.map((image,index) => (
            <View key={index} style={[styles.dot,{backgroundColor: index === activeIndex ?  '#5D3EBD' : '#F2F0FD' }]}/>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    dots:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      borderRadius:15,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 20,
      marginVertical:2,
      marginHorizontal:5
    },
  })

export default ImageCarousel;
