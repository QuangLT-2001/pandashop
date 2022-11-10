import React, { useEffect, useState } from 'react';
import {
    HomeWrapper,
    BannerWrapper,
    TabItems,
    MainWrapper,
    PolicyWrapper,
    CareWrapper,
    PostWrapper,
    BannerIntroMobileWrapper,
    AdvertisementWrapper,
    DonorWrapper
} from './style';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    SliderItem,
    ShippingUnits,
    Polices,
    News
} from './data';
import ProductItem from './Component/ProductItem';
import _uniq from 'lodash/uniq';
import _filter from 'lodash/filter';
import _intersection from 'lodash/intersection'
import _map from "lodash/map"
import _uniqBy from "lodash/uniqBy"
import _slice from "lodash/slice";
import _intersectionBy from "lodash/intersectionBy";
import _forEach from "lodash/forEach"
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { getListProduct, getListPostRequest } from './actions';
import Button from '../../Component/Button'
import PolicyItem from './Component/PolicyItem';
import PostItem from './Component/Post';
import {
    selectListProduct,
    selectIsLoading,
    selectPosts,
    selectColor
} from './selectors';
import Loading from '../Components/Loading';
import {
    careTab,
    settings,
    CenterMode,
    SliderFade
} from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import Meta from '../../Component/Meta';
import MyImage from '../../Component/Image';
import HeaderTab from './Component/HeaderTab';
import DonorItem from './Component/DonorItem';
const TabItem = props => {
    const {
        item,
        onClick,
        classActive,
        status,
        color
    } = props;

    return (<TabItems className={`tab-item ${classActive}`}
        status={status}
        onClick={onClick}
        color={color} >
        {item.label} </TabItems>
    );


}

const Home = props => {
    const {
        history
    } = props
    // Xu ly mapStateToProps
    const products = useSelector(selectListProduct);
    const isLoading = useSelector(selectIsLoading);
    const posts = useSelector(selectPosts);
    const color = useSelector(selectColor);
    // xu ly mapDispatchToProps
    const dispatch = useDispatch()
    // lấy data trong productReducer (trong store)
    const [state, setState] = useState({
        slider: [],
        shippingUnits: [],
        status: true,
        listPolicy: [],
        news: [],
    })
    // xử lý loading
    // get data
    const [listenStatus, setListenStatus] = useState(false);
    const body = document.querySelector("body");
    useEffect(() => {
        dispatch(getListProduct())
        dispatch(getListPostRequest())
        setTimeout(() => {
            setListenStatus(true);
            body.classList.add("hidden");
        }, 1000)
        setState({
            ...state,
            slider: SliderItem,
            shippingUnits: ShippingUnits,
            listPolicy: Polices,
            news: News,
        })
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })



    }, []);


    // xử lý tabs carousel


    // xử lý tabs products
    // nút chọn các mặt hàng ở phần tabs
    const [filterTabs, setFilterTabs] = useState([]);

    // lay 30 san pham dau tien cua mang productTabs
    const newData = _slice(products, 0, 30);
    //
    // lua chon theo type: giao cua 2 tap hop
    const filterProduct = () => {
        const newList = newData.filter(item => {
            const { type } = item;
            const news = _intersectionBy(filterTabs, type, 'name');
            const mobile = _intersectionBy(filterTabs, type, 'id')
            const check = news.length || mobile.length ? true : false;
            return check
        })
        return newList;
    }
    // trạng thái active của menu tabs
    const data = filterTabs.length ? filterProduct() : newData;

    // đường đến prodcut
    const handleClickToProd = () => {
        history.push("/san-pham")
    }
    // lấy sản phẩm giảm giá trong product-tabs
    const discount = _filter(products, item => item.discount !== '');
    const clothesProduct = _filter(products, item => item.tabs === "clothes");
    const shoesProduct = _filter(products, item => item.tabs === "sneaker");
    const accessoryProduct = _filter(products, item => item.tabs === "accessory");
    let productNew = [];
    productNew = [
        ...productNew,
        { id: 1, titleTabs: 'quần áo', product: clothesProduct },
        { id: 2, titleTabs: 'giày dép', product: shoesProduct },
        { id: 3, titleTabs: 'các phụ kiện khác', product: accessoryProduct }
    ];
    const slices = state.slider.slice(0, 2);

    // xử lý selling unit
    let sellingUnit = [];
    _forEach(products, item => {
        sellingUnit = [...sellingUnit, products[Math.floor(Math.random() * products.length)]]
    })


    // link tới trang giới thiệu
    const handleClickToIntro = () => {
        history.push("/gioi-thieu")
    }
    // link toi post detail
    const handleClickToPostDetail = postId => {
        history.push(`/tin-tuc/${postId}`);
    }
    const handleClickClose = () => {
        setListenStatus(false);
        body.classList.remove('hidden')
    }
    const handleClickToListPost = () => {
        history.push("/tin-tuc")
    }
    const handleLocationToSeeAll = () => {
        props.history.push("/san-pham")
    }
    // xử lý load
    if (isLoading) return <>
        <Meta
            image="http://www.shoppanda.net/assets/images/banner/intro.png"
            description="Shop thời trang Panda chúng tôi không đơn thuần là cái đẹp thời trang, chúng tôi khao khát kiến tạo những giá trị xã hội nhân văn, trở thành một lối sống để đồng hành cùng phụ nữ trên hành trình thấu cảm vẻ đẹp của chính mình. Shop Thời Trang Panda là kênh mua sắm online uy tín hàng đầu, cùng với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết đem những sản phẩm tốt nhất, với giá cả phải chăng, uy tín và chất lượng với dịch vụ tốt nhất đến với mọi người."
            url="http://www.shoppanda.net"
            title="Shop thời trang Panda"
            titlePage="Trang Chủ" />
        <Loading />
    </>
    return (

        <HomeWrapper className="home" >

            <Meta image="http://www.shoppanda.net/assets/images/banner/intro.png"
                description="Shop thời trang Panda chúng tôi không đơn thuần là cái đẹp thời trang, chúng tôi khao khát kiến tạo những giá trị xã hội nhân văn, trở thành một lối sống để đồng hành cùng phụ nữ trên hành trình thấu cảm vẻ đẹp của chính mình. Shop Thời Trang Panda là kênh mua sắm online uy tín hàng đầu, cùng với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết đem những sản phẩm tốt nhất, với giá cả phải chăng, uy tín và chất lượng với dịch vụ tốt nhất đến với mọi người."
                url="http://www.shoppanda.net/"
                title="Shop thời trang Panda"
                titlePage="Trang Chủ" />

            {
                listenStatus && < AdvertisementWrapper className="banner-advertisement" >
                    <div className='banner-content' >

                        <MyImage
                            image="/assets/images/banner/intro.png"
                            name="banner advertisement"
                            width="461px"
                            height="709px"
                            />
                        <span
                            className='icon-close'
                            onClick={handleClickClose} >
                            <FontAwesomeIcon icon={faTimes}
                            /> </span> </div> </AdvertisementWrapper>
            } <BannerWrapper className='banner' >
                <div className="container">
                    <Slider {...SliderFade}>
                        {SliderItem.map(item => {
                            return <MyImage
                                image={item}
                                name={item}
                                width="1296px"
                                height="428px"
                                />
                        })}
                    </Slider>
                </div>

            </BannerWrapper>

            <section className=" body-wrapper" >
                <div className='container'>
                    <MainWrapper className="main"
                        color={color} >
                        <HeaderTab handleLocationToSeeAll={handleLocationToSeeAll}
                            nameTitleBody="Sản phẩm bán chạy"
                            nameSeeMore="See All" />
                        <div className='list-product' >
                            <Slider {...settings} > {
                                _map(_filter(products, item => item.type[0] == "sản phẩm bán chạy"), item => {
                                    return <ProductItem
                                        type="border"
                                        nameButton="xem thông tin"
                                        productItem={item}
                                        key={item.id}
                                        history={history}
                                        color={color}
                                        className="product-item" />
                                })
                            } </Slider> </div>

                        <HeaderTab handleLocationToSeeAll={handleLocationToSeeAll}
                            nameTitleBody="Sản phẩm phổ biến"
                            nameSeeMore="See All" />
                        <div className='list-product' >
                            <Slider {...settings} > {
                                _map(_filter(products, item => item.type[0] == "sản phẩm phổ biến"), item => {
                                    return <ProductItem
                                        type="border"
                                        nameButton="xem thông tin"
                                        productItem={item}
                                        key={item.id}
                                        history={history}
                                        color={color}
                                        className="product-item" />
                                })
                            } </Slider> </div> <HeaderTab handleLocationToSeeAll={handleLocationToSeeAll}
                                nameTitleBody="Sản phẩm mới"
                                nameSeeMore="See All" />
                        <div className='list-product' >
                            <Slider {...settings} > {
                                _map(_filter(products, item => item.type[0] == "sản phẩm mới"), item => {
                                    return <ProductItem
                                        type="border"
                                        nameButton="xem thông tin"
                                        productItem={item}
                                        key={item.id}
                                        history={history}
                                        color={color}
                                        className="product-item" />
                                })
                            } </Slider>
                        </div>
                    </MainWrapper>
                </div>


            </section>

            <BannerIntroMobileWrapper >
                <div className="banner-intro"
                    onClick={handleClickToIntro} >

                    <div className="intro" >
                        <p className="intro-content" >
                            Chào mừng quý khách đến với < span > S </span>HOPPANDA.NET </p> </div> <img src="/assets/images/logo/6.png"
                                alt="logo" />
                </div>
            </BannerIntroMobileWrapper>


            <PolicyWrapper className="policy-wrapper"
                color={color} >
                <div className="container" >
                    <h3 className="title-body" >
                        Chính sách & hướng dẫn của SHOPPANDA </h3>
                    <div className="row" > {
                        state.listPolicy.map(item => < PolicyItem className="col-lg-6 col-md-12"
                            policyItem={item}
                            key={item.id}
                            color={color}
                        />)

                    } </div> </div> </PolicyWrapper>
            <CareWrapper
                className="care-wrapper"
                color={color} >
                <div className="container" >
                    <h3 className="title-body" >
                        Có thể bạn quan tâm </h3>
                    <p className="descript-care" >
                        Bạn có thể tìm thấy những phẩm tốt và chi phí được giảm tới 70 % với những mẫu mã đa dạng và phù hợp với hầu bao cả các lứa tuổi hiện nay.Chúng tôi cam kết luôn mang đến cho các bạn những sản phẩm tốt nhất,
                        chất lượng nhất. </p>
                    <Slider {...careTab} > {
                        _map(_uniqBy(_slice(sellingUnit, 0, 6), 'id'), item => {
                            return <ProductItem
                                type="border"
                                nameButton="xem thông tin"
                                productItem={item}
                                key={item.id}
                                color={color}
                            />
                        })
                    }

                    </Slider> </div> </CareWrapper>
            <DonorWrapper className='donor-wrapper'>
                <div className='container'>
                    <Slider {...CenterMode}>
                        {ShippingUnits.map(item => {
                            return <DonorItem key={item.id} donorItem={item} />
                        })}
                    </Slider>
                </div>
            </DonorWrapper>
            <PostWrapper className="post-wrapper"
                color={color} >
                <div className="container" >
                    <h3 className="title-body" >
                        Bài viết mới nhất </h3>
                    <p className="descript-post" >
                        Blog tập hợp những bản tin,
                        bài viết về kinh nghiệm mua sắm và chia sẻ các cung bậc cảm xúc hằng ngày.Tập hợp những mẹo vặt để cải thiện của sống của bạn tốt hơn,
                        hoàn hảo hơn. </p> <div className='container-fluid' >
                        <div className="row" > {
                            _map(_slice(posts, 0, 4), item => {
                                return <PostItem
                                    className="col-xl-3 col-lg-6 col-md-6 col-sm-6"
                                    postItem={item}
                                    key={item.id}
                                    onClick={
                                        () => handleClickToPostDetail(item.id)}
                                    color={color}
                                />
                            })
                        } </div> </div> <Button name="Xem thêm bài viết"
                            type="add"
                            color={color}
                            onClick={handleClickToListPost} /> </div>
            </PostWrapper>

        </HomeWrapper>
    );
}


Home.propTypes = {
    history: PropTypes.object,
}

TabItem.propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func,
    classActive: PropTypes.string,
    status: PropTypes.bool,
    color: PropTypes.object
}

export default Home;