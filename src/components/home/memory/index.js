import React from "react";
import { Ring } from "../../../assets/images";
import { Images } from "../../../assets/images/wedding";
import { SectionWrapper } from "../../../_principles/styles";
import {
  ButtonShowMore,
  Description,
  Heading,
  ImageItem,
  ImageWrapper,
  RingBg,
  Wrapper,
} from "./styles";
import ImageViewer from "react-simple-image-viewer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function Memory() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <SectionWrapper>
      <Wrapper className="container">
        <Heading>Kỷ niệm của chúng tớ</Heading>
        <Description>
          Kỷ niệm không bao giờ có lần hai. Đây là những hình ảnh lưu lại trước
          khi chúng tớ về chung một nhà. Những khoảnh khắc mà chúng tớ sẽ mãi
          trân quý, rất đáng giá và trọn vẹn!
        </Description>
        <ImageWrapper>
          {Images.slice(0, 4).map((img, i) => (
            <ImageItem key={i} onClick={() => openImageViewer(i)}>
              <LazyLoadImage alt={img.alt} effect="blur" src={img.src} />
            </ImageItem>
          ))}
          {isViewerOpen && (
            <ImageViewer
              src={Images.slice(0, 4).map((img) => img.src)}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </ImageWrapper>
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <button style={{ background:"#910a0a", color:'white', fontSize: 18 }} class="btn btn-default">
                <Link className="nav-link px-4 py-2" to="/bank_code">
                  Nhắn gửi yêu thương
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </SectionWrapper>
  );
}
