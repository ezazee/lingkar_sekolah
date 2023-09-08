import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {StyleComponent, StyleScreen, StyleStack} from '../../utils/style';
import {BgSekolah} from '../../assets/images/img';
import {format} from 'date-fns';
import {HorizontalFlatList, SliderBlog} from '../../components';
import Swiper from 'react-native-swiper';

const data = [
  {id: '1', text: 'Item 1', isActive: true},
  {id: '2', text: 'Item 2'},
  {id: '3', text: 'Item 3'},
  {id: '4', text: 'Item 4'},
  {id: '5', text: 'Item 5'},
];

const DetailBlog = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'dd MMMM yyyy');
  return (
    <ScrollView style={StyleStack.bgColorDetail}>
      <View style={StyleStack.containerDetailBlog}>
        <Text style={StyleStack.judulTextStyle}>
          Anak-Anak Sekolah Mengeluh Soal Sekolah Online
        </Text>
        <View style={StyleStack.containerCategoryDate}>
          <View style={StyleStack.wrapperCategory}>
            <Text style={StyleStack.categoryText}>Persekolahan</Text>
          </View>
          <Text style={StyleStack.dateText}>{formattedDate}</Text>
        </View>
        <Image source={BgSekolah} style={StyleStack.imageDetail} />
        <Text style={StyleStack.textDesc}>
          Praesentium eaque nesciunt amet doloremque dolores nisi a? Minima
          atque assumenda, officiis itaque vel debitis. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Reiciendis delectus ipsa
          repellendus atque dolorem illo quidem quas officia voluptatibus ea,
          est quasi eaque, asperiores tenetur exercitationem esse quo
          consectetur veniam hic? Repudiandae ipsa doloremque quod alias
          sapiente esse at. Harum delectus nobis eligendi quae magnam sunt
          quisquam ducimus, nisi quo, dicta doloribus minus repellendus
          reprehenderit, beatae veritatis? Labore suscipit officiis ipsam sint
          iure eveniet odit nostrum libero aut ut doloribus est consequatur iste
          hic quod, explicabo perferendis doloremque delectus dolor quidem
          possimus architecto inventore commodi. Praesentium eaque nesciunt amet
          doloremque dolores nisi a? Minima atque assumenda, officiis itaque vel
          debitis.
        </Text>
      </View>
      <Text style={StyleStack.textBeritaTerkait}>Berita Terkait</Text>
      <HorizontalFlatList data={data} />
      <View style={StyleScreen.containerBlogHome}>
        <Swiper
          loadMinimal={true}
          showsPagination={false}
          style={StyleComponent.wrapper}
          loop={false}>
          <SliderBlog />
          <SliderBlog />
        </Swiper>
      </View>
    </ScrollView>
  );
};

export default DetailBlog;
