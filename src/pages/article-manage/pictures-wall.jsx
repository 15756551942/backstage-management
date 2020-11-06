import React, { useState,forwardRef } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import 'antd/es/modal/style';
import 'antd/es/slider/style';

const PicturesWall = forwardRef(
  (props, ref) => {
    const [fileList, setFileList] = useState([
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ]);
  
    const onChange = ({ fileList: newFileList }) => {
      setFileList(newFileList);
    };
  
    const onPreview = async file => {
      let src = file.url;
      if (!src) {
        src = await new Promise(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow.document.write(image.outerHTML);
    };
  
    return (
      <ImgCrop rotate>
        <Upload
          action="/api/a/u/article"
          accept='image/*'
          name='img'
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && '+ Upload'}
        </Upload>
      </ImgCrop>
    );
  }
)

export default PicturesWall