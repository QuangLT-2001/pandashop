import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRebel, faSnapchat, } from '@fortawesome/free-brands-svg-icons';
import { faChartPie, faShekelSign } from '@fortawesome/free-solid-svg-icons';
export const SliderItem = [
    "/assets/images/banner/sli1.webp",
    "/assets/images/banner/sli2.webp",
    "/assets/images/banner/sli3.webp",
    "/assets/images/banner/sli4.webp",
    "/assets/images/banner/sli6.webp",
    "/assets/images/banner/sli7.webp",
    "/assets/images/banner/sli8.webp",
    "/assets/images/banner/sli9.webp",
]
export const ListInnerProduct = [
    {
        id: 1,
        name: 'giày dép',
        image: '/assets/images/product/product1.jpg'
    },
    {
        id: 2,
        name: 'quần áo',
        image: '/assets/images/product/clothes.jpg'

    },
    {
        id: 4,
        name: 'phụ Kiện khác',
        image: '/assets/images/product/product2.jpg'
    }

]
export const ProductTabs = [
        {
            id: 1,
            name: 'Giày Air Jordan 1 Low Centre Court ‘Silver Blue’ DO7762-004',
            price: 4290000,
            discount: 5290000,
            avatar: '/assets/images/product/product-1.png',
            type: [
                {
                    id: 1,
                    name: 'sản phẩm mới'
                },
                {
                    id: 3,
                    name: 'sản phẩm phổ biến'
                }
            ],
            tabs: 'sneaker',
            discountContent: 30,
            status: true,
            size: [36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44],
            description: {
                brand: 'Jordan Brand',
                design: 'Air Jordan 1 Low',
                code: 'DO7762-004',
                descriptContent: []
            },
            promotion: [
                'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
                'Mua tất giảm ngay 20%',
                'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
                'Miễn phí đổi trả 45 ngày',
                'Miễn phí bảo hành 1 năm trên toàn hệ thống',
                'Double Box kèm chống sốc khi giao hàng',
                'Hỗ trợ trả góp, thanh toán qua thẻ online'
            ]
        },
    {
        id: 2,
        name: 'Giày Air Jordan 1 Low MMD Multi-Color Grid DH7547-100',
        price: 2990000,
        discount: 4290000,
        avatar: '/assets/images/product/product-2.png',
        type: [
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'sneaker',
        discountContent: 32,
        status: true,
        size: [36, 36.5, 37.5, 38, 38.5, 39, 40],
        description: {
            brand: 'Jordan Brand',
            design: 'Air Jordan 1 Low',
            code: 'DO7762-004',
            descriptContent: [`Jordan Brand sẽ tung ra một vài
            tùy chọn màu sắc mới của Air Jordan 1 Low trước mùa thu.`]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 12,
        name: 'Áo AS M J BRAND JDN Air SS CREW WHITE T-shirts CZ8384-100',
        price: 790000,
        discount: '',
        avatar: '/assets/images/product/product-11.png',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'clothes',
        discountContent: '',
        status: true,
        size: ['2XL', 'XL', 'XS', 'S', 'M', 'L'],
        description: {
            brand: 'Nike',
            design: 'Cotton Fleece',
            code: 'CZ8384-100',
            descriptContent: [`
            Sẽ là rất tiếc nếu bạn bỏ lỡ cơ hội
            sở hữu cho mình chiếc Áo AS M J BRAND
            JDN Air SS CREW WHITE T-shirts đầy
            cá tính để làm phong phú tủ đồ của
            mình trong hôm nay. Hãy nhanh chóng
            lựa chọn cho mình một thiết kế áo Nike
            ưng ý nhất tại QClothes & Sneaker nhé!
            `]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 3,
        name: 'Giày Air Jordan 1 Mid ‘Syracuse’ BQ6472-116',
        price: 4690000,
        discount: 5890000,
        avatar: '/assets/images/product/product-4.png',
        type: [
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: 37,
        status: true,
        size: [35.5, 36, 36.5, 37.5, 38, 38.5, 42, 42.5, 43],
        description: {
            brand: 'Jordan',
            design: 'Jordan 1 Mid',
            code: 'BQ6472-116',
            descriptContent: [`
            Giày Air Jordan 1 Mid ‘Syracuse’
            với sự kết hợp gam màu xám trắng
            cùng điểm nhấn là màu đỏ trắng nổi
            bật, một đế giữa bằng cao su màu
            trắng bao bọc bộ đệm Nike Air có
            chiều dài kéo dài từ mũi giày đến
            gót đảm bảo rằng chúng cũng thoải
            mái phù hợp cho cả trong và bên
            ngoài sân đấu. Cho dù bạn là một
            nhà sưu tập giày Jordan dày dạn
            kinh nghiệm hay chỉ mới tham gia
            vào shoes game, không thể phủ nhận
            rằng chúng xứng đáng có một vị trí
            trong bộ sưu tập của bạn!
            `]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },

    {
        id: 5,
        name: 'Giày nam Lacoste La Piquée Textile Trainers 739CMA0023-394',
        price: 2290000,
        discount: 3690000,
        avatar: '/assets/images/product/product-5.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            }
        ],
        tabs: 'sneaker',
        discountContent: 34,
        status: true,
        size: [40, 40.5, 41, 42],
        description: {
            brand: 'Lacoste',
            design: '',
            code: '739CMA0023-394',
            descriptContent: [`
            Giày Lacoste này được làm bằng da cao
            cấp rất mềm mại. Đế làm bằng cao su lưu
            hóa, có độ bền cao, chịu ma sát tốt. Đế
            trong áp dụng công nghệ OrthoLite thoáng
            khí, dày dặn và êm ái giúp đôi chân luôn
            thoải mái dù bạn mang giày cả ngày. Đường
            thẳng rất tinh tế và chắc chắn. Logo được
            đặt đẹp mắt, tạo điểm nhấn độc đáo cho đôi
            giày. Giày Lacoste có thể sử dụng với nhiều
            loại trang phục sang trọng, lịch lãm hay
            năng động … phù hợp với trang phục hàng ngày
            và hoạt động thể thao của mọi người.
            `]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 6,
        name: 'Giày Nike Air Force 1 Shadow ‘Cashmere’ CI0919-700',
        price: 3790000,
        discount: '',
        avatar: '/assets/images/product/product-6.png',
        type: [
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            }
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: false,
        size: [35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 41, 42],
        description: {
            brand: 'Nike',
            design: 'Air Force 1',
            code: 'CI0919-700',
            descriptContent: [`
            Được thiết kế bởi Bruce Kilgore vào năm 1982
            với ý tưởng đặt tên từ chiếc chuyên cơ chuyên
            chở tổng thống mỹ AIR FORCE ONE , AF1 đã nhanh
            chóng trở thành đôi giày mang tính cách mạng
            trong giới sneaker, sản phẩm được bán hết trong
            một thời gian kỷ lục. Cho dù đã gần 40 năm trôi
            qua NIKE AIR FORCE 1 vẫn đem lại hàng trăm triệu
            USD hàng năm cho NIKE.
            `]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 11,
        name: 'Áo Thun Nike Sportswear Just Do It ‘Red’ DD1323-657',
        price: 790000,
        discount: '',
        avatar: '/assets/images/product/product-10.png',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'clothes',
        discountContent: '',
        status: true,
        size: ['2XL', 'XL', 'S', 'M'],
        description: {
            brand: 'Nike',
            design: 'Cotton Fleece',
            code: 'DD1323-657',
            descriptContent: [`
            Sẽ là rất tiếc nếu bạn bỏ lỡ cơ hội sở
            hữu cho mình chiếc Áo Thun Nike Sportswear
            Just Do It ‘Red’ đầy cá tính để làm phong
            phú tủ đồ của mình trong hôm nay. Hãy nhanh
            chóng lựa chọn cho mình một thiết kế áo Nike
            ưng ý nhất tại QClothes & Sneaker nhé!
            `]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },

    {
        id: 7,
        name: 'Giày Puma Wmns Cali Star ‘Metallic – White Silver’ 380219-01',
        price: 3480000,
        discount: '',
        avatar: '/assets/images/product/product2.jpg',
        type: [
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: false,
        size: [36, 37, 37.5, 38, 38.5, 39, 40],
        description: {
            brand: 'Puma',
            design: '',
            code: '380219-01',
            descriptContent: [`
            Giày Puma Wmns Cali Star ‘Metallic – White Silver’
            380219-01 chính hãng với khả năng chống thấm nước
            trên cả tuyệt vời, độ bền màu, chất liệu êm ái và
            những đường chỉ may tỉ mỉ từng li từng tí đem đến
            cho người tiêu dùng 1 sản phẩm đạt đến độ tinh xảo
            cao và chắc chắn, bền bỉ với thời gian. Không những
            thế, với vẻ ngoài mang hơi hướng hiện đại còn tôn lên
            được nét đẹp đến từ cá tính riêng của bạn. Đừng bỏ lỡ
            cơ hội sở hữu chúng qua QClothes & Sneaker Shop nhé
            `]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 16,
        name: 'Áo Hoodie adidas Coeeze Over The Head ‘Active Red’ DU7183',
        price: 1190000,
        discount: 1990000,
        avatar: '/assets/images/product/product-15.png',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'clothes',
        discountContent: 28,
        status: true,
        size: ['M'],
        description: {
            brand: 'adidas',
            design: '',
            code: 'DU7183',
            descriptContent: [`
            Nhìn từ bất kỳ góc độ nào, logo Ba Lá adidas
            luôn đại diện cho tính cá thể và tinh thần
            biểu đạt bản thân. Hãy diện chiếc áo thun
            adidas Forum này và tiếp nối truyền thống ấy.
            Logo Ba Lá khuyết nổi bật ở mặt trước áo với
            bề mặt sần in nổi mang phong cách cổ điển mà
            tràn ngập hơi hướng hiện đại. Sẽ là rất tiếc
            nếu bạn bỏ lỡ cơ hội sở hữu cho mình những
            chiếc Áo Hoodie adidas Coeeze Over The Head
            ‘Active Red’ đầy cá tính để làm phong phú
            tủ đồ của mình trong hôm nay. Hãy nhanh chóng
            lựa chọn cho mình một thiết kế áo adidas ưng ý
            nhất tại QClothes & Sneaker nhé!
            `]
        },
        promotion: [
            'Cam kết chính hãng 100%',
            'Miễn phí đổi trả 365 ngày',
            'Bảo hành 1 năm trên toàn hệ thống'
        ]
    },
    {
        id: 8,
        name: 'Giày Nike Wmns Air Max 97 Ultra 17 ‘Anthracite’ 917704-003',
        price: 7590000,
        discount: '',
        avatar: '/assets/images/product/product-7.png',
        type: [
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: false,
        size: [36],
        description: {
            brand: 'Nike',
            design: 'Nike Air Max 97',
            code: '917704-003',
            descriptContent: []
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 18,
        name: 'Áo Thun Nike Jordan Flight Printed Short Sleeve Button Down CZ4734-010',
        price: 2390000,
        discount: '',
        avatar: '/assets/images/product/product-17.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'clothes',
        discountContent: '',
        status: false,
        size: [],
        description: {
            brand: 'Nike',
            design: '',
            code: 'CZ4734-010',
            descriptContent: [`
            Sẽ là rất tiếc nếu bạn bỏ lỡ cơ hội sở hữu cho
            mình những chiếc Áo Thun Nike Jordan Dri-FIT
            Air Short-Sleeve Graphic Top DA2694-010 đầy
            cá tính để làm phong phú tủ đồ của mình trong hôm nay.
            Hãy nhanh chóng lựa chọn cho mình một thiết kế áo Nike
            ưng ý nhất tại QClothes & Sneaker nhé!
            `]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 9,
        name: 'Giày Nike Wmns Air Max 97 Premium ‘Pink Snakeskin’ 917646-600',
        price: 8890000,
        discount: '',
        avatar: '/assets/images/product/product-8.png',
        type: [{
            id: 2,
            name: 'sản phẩm bán chạy'
        }],
        tabs: 'sneaker',
        discountContent: '',
        status: true,
        size: [40.5],
        description: {
            brand: 'Nike',
            design: 'Nike Air Max 97',
            code: '917646-600',
            descriptContent: []
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 13,
        name: 'Áo Thun Nike Sportswear Swoosh DC5095-010',
        price: 890000,
        discount: '',
        avatar: '/assets/images/product/product-12.png',
        type: [
            {
                id: 1,
                name: "sản phẩm mới"
            }
        ],
        tabs: 'clothes',
        discountContent: '',
        status: false,
        size: ['XL', 'S', 'M', 'L'],
        description: {
            brand: ' Nike',
            design: 'Cotton Fleece',
            code: 'DC5095-010',
            descriptContent: [`
            Sẽ là rất tiếc nếu bạn bỏ lỡ cơ hội sở hữu cho
            mình những chiếc Áo Thun Nike Sportswear Swoosh
            đầy cá tính để làm phong phú tủ đồ của mình trong
            hôm nay. Hãy nhanh chóng lựa chọn cho mình một
            thiết kế áo Nike ưng ý nhất tại QClothes & Sneaker nhé!
            `]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },

    {
        id: 10,
        name: 'Giày adidas Sleek Super ‘Copper Metallic’ EG6770',
        price: 1390000,
        discount: 2590000,
        avatar: '/assets/images/product/product-9.png',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            }

        ],
        tabs: 'sneaker',
        discountContent: 31,
        status: true,
        size: [37, 38, 40],
        description: {
            brand: 'adidas',
            design: 'Sleek Super',
            code: 'EG6770',
            descriptContent: [`Giày adidas Sleek Super ‘Copper Metallic’
            hiện đã có sẵn tại QClothes & Sneaker Shop, đừng bỏ lỡ cơ
            hội của mình nhé!`]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 14,
        name: 'Áo khoác gió Timberland Windbreaker Pullover ‘Black’ TB0A2BUU_BK',
        price: 2390000,
        discount: 4790000,
        avatar: '/assets/images/product/product-13.png',
        type: [
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'clothes',
        discountContent: 50,
        status: false,
        size: ['XL', 'XXL', 'M', 'L'],
        description: {
            brand: 'Timberland',
            design: 'Áo khoác gió',
            code: 'TB0A2BUU_BK',
            descriptContent: [`
            Vật liệu polyester tái chế tạo sự thân thiện với môi trường.
            Mặt trước cách nhiệt, giúp bảo vệ cơ thể khỏi những điều
            kiện khắc nghiệt. Thiết kế có thể điều chỉnh được, giúp tạo
            sự linh hoạt.
            `]
        },
        promotion: [
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 15,
        name: 'Áo khoác gió Timberland Windbreaker Pullover ‘Wheat’ TB0A2BUU_WH',
        price: 2690000,
        discount: 4790000,
        avatar: '/assets/images/product/product-14.png',
        type: [
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'clothes',
        discountContent: 52,
        status: false,
        size: ['M'],
        description: {
            brand: 'Timberland',
            design: 'Áo khoác gió',
            code: 'TB0A2BUU_WH',
            descriptContent: [`
            Vật liệu polyester tái chế tạo sự thân thiện với môi trường.
            Mặt trước cách nhiệt, giúp bảo vệ cơ thể khỏi những điều kiện
            khắc nghiệt. Thiết kế có thể điều chỉnh được, giúp tạo sự linh hoạt.
            `]
        },
        promotion: [
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },



    {
        id: 17,
        name: 'Áo Jordan Jmc ‘White’ CV3406-101',
        price: 1390000,
        discount: '',
        avatar: '/assets/images/product/product-16.png',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'clothes',
        discountContent: '',
        status: true,
        size: ['XL', 'M', 'L'],
        description: {
            brand: 'Nike',
            design: 'Cotton',
            code: 'CV3406-101',
            descriptContent: [`
            Sẽ là rất tiếc nếu bạn bỏ lỡ cơ hội sở hữu cho mình
            những chiếc Áo Jordan Jmc ‘White’ CV3406-101 đầy cá
            tính để làm phong phú tủ đồ của mình trong hôm nay.
            Hãy nhanh chóng lựa chọn cho mình một thiết kế áo Nike
            ưng ý nhất tại QClothes & Sneaker nhé!
            `]
        },
        promotion: [
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },

    {
        id: 19,
        name: 'Quần Nike Sportswear Hardwood Men Pants CU3624-010',
        price: 1890000,
        discount: '',
        avatar: '/assets/images/product/product-18.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'clothes',
        discountContent: '',
        status: false,
        size: ['M', 'L'],
        description: {
            brand: 'Nike',
            design: '',
            code: 'CU3624-010',
            descriptContent: [`
            Sẽ là rất tiếc nếu bạn bỏ lỡ cơ hội sở hữu cho mình
            những chiếc Quần Nike  Sportswear  Hardwood Men Pants
            CK9168-040 đầy cá tính để làm phong phú tủ đồ của mình
            trong hôm nay. Hãy nhanh chóng lựa chọn cho mình một
            thiết kế áo Nike ưng ý nhất tại QClothes & Sneaker nhé!
            `]
        },
        promotion: [
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 20,
        name: 'Áo thun Dickies 381 Middleweight Tie Die Short Sleeve Tee Beige DSS2UTST381',
        price: 735000,
        discount: 1040000,
        avatar: '/assets/images/product/product-19.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'clothes',
        discountContent: 12,
        status: true,
        size: ['XS', 'S', 'M'],
        description: {
            brand: 'Dickies',
            design: '',
            code: 'DSS2UTST381',
            descriptContent: [
                `Được thành lập bởi công ty Williamson-Dickie (Mỹ) năm 1922,
                Dickies khởi đầu là thương hiệu thời trang toàn cầu chuyên
                phục vụ cho nhiều đối tượng làm việc với đặc thù nghề nghiệp
                riêng như: trang phục chuyên dụng dành cho kỹ sư, đồng phục
                cho các chuyên viên kỹ thuật… Vì vậy trang phục của Dickies
                luôn theo chủ nghĩa đơn giản, đa chức năng và bền bỉ.`,
                `Qua nhiều thập niên, công ty Williamson-Dickie đã mở rộng nhãn
                hiệu đến hơn 100 quốc gia nói chung và hơn 700 cửa hàng tại
                khu vực châu Á nói riêng. Để bắt kịp với xu hướng thời trang
                đương đại, nhãn hiệu Dickies đã được đầu tư nghiên cứu, phát
                triển và đạt được thành công rõ nét với đa dạng phân khúc thời
                trang: công sở, dạo phố, phụ kiện cho giới trẻ…`,
                `Những thiết kế của Dickies thường là chiếc áo phông basic, áo
                sweater màu trung tính hay chiếc quần Dickies 874 huyền thoại
                với phom dáng rộng, thoải mái, tuy đơn giản, “an toàn” nhưng
                luôn bật lên được sự phóng khoáng, cá tính khi được kết hợp
                cùng nhau với sự sáng tạo của người mặc.`,
                `
             Đây là một trong
            những siêu phẩm mới nhất trong bộ sưu tập mùa hè 2021 của
            Dickies. Sẽ là rất tiếc nếu bạn bỏ lỡ cơ hội sở hữu cho
            mình những chiếc Áo thun Dickies đầy cá tính để làm phong
            phú tủ đồ của mình trong hôm nay.
            `
            ]
        },
        promotion: [
            'Cam kết chính hãng 100%',
            'Miễn phí đổi trả 45 ngày',
            'Bảo hành 1 năm trên toàn hệ thống'
        ]
    },
    {
        id: 21,
        name: 'Giày Air Jordan 1 Low Centre Court ‘Olive Green’ DJ2756-300',
        price: 4390000,
        discount: '',
        avatar: '/assets/images/product/product-20.png',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: false,
        size: [40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 46],
        description: {
            brand: 'Jordan Brand',
            design: 'Air Jordan 1 Low',
            code: 'DJ2756-300',
            descriptContent: [`Màu sắc mới nhất của Air Jordan 1 Center Court
            lấy sự tương đồng từ Undefeated x Air Jordan 4 khi màu ô liu
            và màu cam kết hợp với nhau trên đôi giày. Phần trên bằng da
            cao cấp và khóa màu tối giản trên cặp tạo ra sự sạch sẽ trên
            đường phối màu phổ biến.`]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 22,
        name: 'Áo Thun Nike Logo ‘Black’ CV2061-010',
        price: 990000,
        discount: 1990000,
        avatar: '/assets/images/product/product-21.png',
        type: [
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'clothes',
        discountContent: 50,
        status: false,
        size: ['S'],
        description: {
            brand: 'Nike',
            design: '',
            code: 'CV2061-010',
            descriptContent: [`
            Sẽ là rất tiếc nếu bạn bỏ lỡ cơ hội sở hữu cho mình
            những chiếc Áo Thun Nike Jordan 23 Engineered Short-Sleeve
            T-Shirt DA9869-100 đầy cá tính để làm phong phú tủ
            đồ của mình trong hôm nay. Hãy nhanh chóng lựa chọn
            cho mình một thiết kế áo Nike ưng ý nhất tại QClothes
            & Sneaker nhé!
            `]
        },
        promotion: [
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },

    {
        id: 23,
        name: 'Giày nam Lacoste Carnaby Evo Leather Trainers 33SPM1002',
        price: 2690000,
        discount: 3690000,
        avatar: '/assets/images/product/product-22.png',
        type: [
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'sneaker',
        discountContent: 20,
        status: true,
        size: [39.5, 40, 40.5, 41, 42, 42.5, 43, 44],
        description: {
            brand: 'Lacoste',
            design: '',
            code: '33SPM1002',
            descriptContent: [`
            Giày Lacoste này được làm bằng da cao cấp rất mềm mại.
            Đế làm bằng cao su lưu hóa, có độ bền cao, chịu ma
            sát tốt. Đế trong áp dụng công nghệ OrthoLite thoáng
            khí, dày dặn và êm ái giúp đôi chân luôn thoải mái dù
            bạn mang giày cả ngày. Đường thẳng rất tinh tế và chắc
            chắn. Logo được đặt đẹp mắt, tạo điểm nhấn độc đáo cho
            đôi giày. Giày Lacoste có thể sử dụng với nhiều loại
            trang phục sang trọng, lịch lãm hay năng động … phù hợp
            với trang phục hàng ngày và hoạt động thể thao của mọi người.
            `]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 24,
        name: 'Giày nam Lacoste Sideline Tricolore Canvas Trainers 39CMA0052',
        price: 1690000,
        discount: 2890000,
        avatar: '/assets/images/product/product-23.png',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: 27,
        status: true,
        size: [],
        description: {
            brand: 'Lacoste',
            design: '',
            code: '39CMA0052',
            descriptContent: [`
            Giày Lacoste này được làm bằng da cao cấp rất mềm mại.
            Đế làm bằng cao su lưu hóa, có độ bền cao, chịu ma sát
            tốt. Đế trong áp dụng công nghệ OrthoLite thoáng khí,
            dày dặn và êm ái giúp đôi chân luôn thoải mái dù bạn
            mang giày cả ngày. Đường thẳng rất tinh tế và chắc chắn.
            Logo được đặt đẹp mắt, tạo điểm nhấn độc đáo cho đôi giày.
            Giày Lacoste có thể sử dụng với nhiều loại trang phục sang
            trọng, lịch lãm hay năng động … phù hợp với trang phục hàng
            ngày và hoạt động thể thao của mọi người.
            `]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 45 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 25,
        name: 'Áo Supreme Faces Tee White',
        price: 2890000,
        discount: 2290000,
        avatar: '/assets/images/product/product-24.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'clothes',
        discountContent: 12,
        status: true,
        size: ['L'],
        description: {
            brand: 'Supreme',
            design: '',
            code: 'SUP-FCST-WHT',
            descriptContent: [
                ` Bắt đầu từ một cửa hàng nhỏ trên con phố Lafayette,
                New York hơn 25 năm trước, Supreme giờ đây đã là
                cái tên lớn nhất trong văn hoá đương đại toàn cầu.
                Có thể nói, phần lớn những thành tựu của thời trang
                hiện đại cũng như sự phát triển của nghệ thuật, âm
                nhạc và lối sống ngày nay đều bắt nguồn từ Supreme.
                Hãy cùng điểm qua những sản phẩm nổi bật nhất theo
                từng năm mà đã đưa ông hoàng streetwear đến với đỉnh
                cao của ngày hôm nay. `,
                `Vào năm 2019, bộ mặt của Supreme
                đã khác hoàn toàn so với quá khứ của một cửa hàng trượt
                ván khiêm tốn trên đường Lafayette. Thương hiệu này đã
                làm việc với Louis Vuitton. Công ty Supreme đã được định
                giá 1 tỷ đô. James Jebbia đã có một giải thưởng “Nhà Thiết
                kế của năm” bởi CFDA. Logo chữ trắng nền đỏ đã trở thành
                một huyền thoại trong làng thời trang.`,
                `
                Sẽ là rất tiếc nếu
                bạn bỏ lỡ cơ hội sở hữu cho mình những chiếc Áo Supreme
                Faces Tee White đầy cá tính để làm phong phú tủ đồ
                của mình trong hôm nay. Hãy nhanh chóng lựa chọn cho
                mình một thiết kế Supreme ưng ý nhất tại QClothes &Sneaker nhé!
                `

            ]

        },
        promotion: [
            'Cam kết chính hãng 100%',
            'Miễn phí đổi trả 45 ngày',
            'Bảo hành 1 năm trên toàn hệ thống'
        ]
    },
    {
        id: 26,
        name: 'Áo Supreme Stone Island Hooded Sweatshirt (SS19) Red',
        price: 11890000,
        discount: 12890000,
        avatar: '/assets/images/product/product-25.jpg',
        type: [
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'clothes',
        discountContent: 7,
        status: true,
        size: ['L'],
        description: {
            brand: 'Supreme',
            design: '',
            code: 'SUP-STIHSRD',
            descriptContent: [
                `
                Bắt đầu từ một cửa hàng nhỏ trên con phố Lafayette,
                New York hơn 25 năm trước, Supreme giờ đây đã là cái
                tên lớn nhất trong văn hoá đương đại toàn cầu. Có thể
                nói, phần lớn những thành tựu của thời trang hiện đại
                cũng như sự phát triển của nghệ thuật, âm nhạc và lối
                sống ngày nay đều bắt nguồn từ Supreme. Hãy cùng điểm
                qua những sản phẩm nổi bật nhất theo từng năm mà đã đưa
                ông hoàng streetwear đến với đỉnh cao của ngày hôm nay. `,
                ` Vào năm 2019, bộ mặt của Supreme đã khác hoàn toàn so với
                quá khứ của một cửa hàng trượt ván khiêm tốn trên đường
                Lafayette. Thương hiệu này đã làm việc với Louis Vuitton.
                Công ty Supreme đã được định giá 1 tỷ đô. James Jebbia đã
                có một giải thưởng “Nhà Thiết kế của năm” bởi CFDA. Logo
                chữ trắng nền đỏ đã trở thành một huyền thoại trong làng
                thời trang. `,
                `Sẽ là rất tiếc nếu bạn bỏ lỡ cơ hội sở hữu
                cho mình những chiếc Áo Supreme Stone Island Hooded
                Sweatshirt (SS19) Red đầy cá tính để làm phong phú tủ
                đồ của mình trong hôm nay. Hãy nhanh chóng lựa chọn cho
                mình một thiết kế Supreme ưng ý nhất tại QClothes & Sneaker nhé!
                `
            ]
        },
        promotion: [
            'Cam kết chính hãng 100%',
            'Miễn phí đổi trả 45 ngày',
            'Bảo hành 1 năm trên toàn hệ thống'
        ]
    },
    {
        id: 27,
        name: 'Áo thun Dickies 372 Loose Fit Heavyweight Puff Graphic Short Sleeve Tee Ivory DSS2UTST372',
        price: 435000,
        discount: 1040000,
        avatar: '/assets/images/product/product-26.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
        ],
        tabs: 'clothes',
        discountContent: 51,
        status: true,
        size: ['XS', 'S', 'M'],
        description: {
            brand: 'Dickies',
            design: 'Dickies',
            code: 'DSS2UTST372-IVORY',
            descriptContent: [
                `Được thành lập bởi công ty Williamson-Dickie (Mỹ)
                năm 1922, Dickies khởi đầu là thương hiệu thời trang
                toàn cầu chuyên phục vụ cho nhiều đối tượng làm việc
                với đặc thù nghề nghiệp riêng như: trang phục chuyên
                dụng dành cho kỹ sư, đồng phục cho các chuyên viên kỹ
                thuật… Vì vậy trang phục của Dickies luôn theo chủ
                nghĩa đơn giản, đa chức năng và bền bỉ. `,
                `
            Qua nhiều thập
            niên, công ty Williamson-Dickie đã mở rộng nhãn hiệu
            đến hơn 100 quốc gia nói chung và hơn 700 cửa hàng tại
            khu vực châu Á nói riêng. Để bắt kịp với xu hướng thời
            trang đương đại, nhãn hiệu Dickies đã được đầu tư nghiên
            cứu, phát triển và đạt được thành công rõ nét với đa dạng
            phân khúc thời trang: công sở, dạo phố, phụ kiện cho giới
            trẻ…`,
                `
            Những thiết kế của Dickies thường là chiếc áo phông
            basic, áo sweater màu trung tính hay chiếc quần Dickies
            874 huyền thoại với phom dáng rộng, thoải mái, tuy đơn
            giản, “an toàn” nhưng luôn bật lên được sự phóng khoáng,
            cá tính khi được kết hợp cùng nhau với sự sáng tạo của
            người mặc.`,
                `
            Đây là một trong những siêu phẩm mới nhất trong
            bộ sưu tập mùa hè 2021 của Dickies. Sẽ là rất tiếc nếu bạn
            bỏ lỡ cơ hội sở hữu cho mình những chiếc Áo thun Dickies
            đầy cá tính để làm phong phú tủ đồ của mình trong hôm nay.`
            ]
        },
        promotion: [
            'Cam kết chính hãng 100%',
            'Miễn phí đổi trả 45 ngày',
            'Bảo hành 1 năm trên toàn hệ thống'
        ]
    },
    {
        id: 28,
        name: 'Giày nam Air Jordan 1 Low Triple White 553558-130',
        price: 4290000,
        discount: 4690000,
        avatar: '/assets/images/product/product-27.png',
        type: [
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            },
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            }
        ],
        tabs: 'sneaker',
        discountContent: 10,
        status: true,
        size: [36, 36.5, 37.5, 38, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5],
        description: {
            brand: 'Jordan Brand',
            design: 'Air Jordan 1 Low',
            code: "553558-130",
            descriptContent: [
                `
            Air Jordan 1 Low Triple White là một phiên bản mới
            hoàn toàn mới của hình bóng AJ1 huyền thoại đã được
            nhiều thế hệ sneakerhead khác nhau yêu thích. Được
            ra mắt lần đầu tiên vào năm 1985 bởi Jordan Brand,
            AJ1 là thiết kế giày bóng rổ đầu tiên của Michael
            Jordan và có các biến thể high-top, mid và low-top.
            Thiết kế bởi Peter Moore, AJ1 được cho là một trong
            những đôi giày thể thao vĩ đại nhất từ ​​trước đến nay.
            `,
                `Phiên bản thấp nhất của Air Jordan 1 mang lại sự thoải
            mái và đệm ở mức độ cao tương tự như các phiên bản cổ high
            và cổ mid, làm cho nó phù hợp cho cả cuộc sống hàng ngoài
            và trong sân đấu. Những đặc điểm cổ điển như dấu Swoosh
            sạch sẽ ở mỗi bên, hộp xỏ ngón có đục lỗ và hình Jumpman
            thêu trên lưỡi đều được xuất hiện. Upper được chế tác từ
            da lộn để có cảm giác cao cấp và phối màu triple white là
            lý tưởng để làm nền cho outfit của bạn.`,
                `
            Dưới bàn chân, đế giữa màu trắng trơn bóng che giấu các
            đơn vị Nike Air có thông số kỹ thuật cao, đem đến sự êm
            ái và thoải mái, lý tưởng cho thời gian dài mang.
            Đế ngoài cung cấp độ bám cao để đảm bảo sự ổn định
            mọi lúc. Jordan 1 Low Triple White hiện đã có sẵn tại
            QClothes & Sneaker, vì vậy hãy nhanh chóng sắm cho mình
            một đôi trước khi bạn hối tiếc nhé!
            `
            ]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống'
        ]
    },
    {
        id: 29,
        name: 'Giày Air Jordan 3 Retro GS ‘International Flight’ 398614-140',
        price: 8590000,
        discount: '',
        avatar: '/assets/images/product/product-28.jpg',
        type: [
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: false,
        size: [36],
        description: {
            brand: 'Jordan',
            design: '',
            code: '398614-140',
            descriptContent: [
                `
                Lấy cảm hứng từ một chương ít được biết đến hơn trong
                truyền thuyết của Michael Jordan, Air Jordan 3 Retro
                GS ‘International Flight’ mượn màu sắc từ bộ đồng phục
                mà MJ đã mặc trong một trò chơi triển lãm năm 1988.
                Phần trên bằng da lộn xộn trong Sail được bổ sung bởi
                các bản hit tương phản của Fire Red và Sport Royal trên
                khoen và đế giữa, trong khi hình in chú voi đặc trưng của
                giày xuất hiện trên lớp phủ ngón chân và gót. Chữ ký của
                Michael xuất hiện trên lưỡi bên trái, ngay bên cạnh Jumpman
                thêu màu đỏ.
                `
            ]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thốn',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 30,
        name: 'Áo Thun Unisex Ellesse Voodoo 610989',
        price: 760000,
        discount: '',
        avatar: '/assets/images/product/product-29.png',
        type: [
            {
                id: 1,
                name: 'sản phẩm mới'
            }
        ],
        tabs: 'clothes',
        discountContent: '',
        status: true,
        size: ['2XL', 'XL', 'S', 'M', 'L'],
        description: {
            brand: 'Ellesse ',
            design: 'Thun',
            code: ' 610989',
            descriptContent: []
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thốn',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 31,
        name: 'Dép Nike Victory One Shower ‘White’ CZ5478-100',
        price: 990000,
        discount: 1290000,
        avatar: '/assets/images/product/product-30.png',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: 21,
        status: true,
        size: [38.5, 40, 41, 42.5, 44, 45],
        description: {
            brand: 'Nike',
            design: 'Dép Nike',
            code: 'CZ5478-100',
            descriptContent: []
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%, phát hiện fake đền 2 lần giá trị đơn hàng',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thốn',
            'Double Box kèm chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 32,
        name: 'Dép New Balance GS Flip-Flops and Sandals ‘Black Orange’ YO650AI',
        price: 2390000,
        discount: '',
        avatar: '/assets/images/product/product-31.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: true,
        size: [36, 37.5, 38.5, 40],
        description: {
            brand: 'New Balance',
            design: 'Sandals',
            code: 'YO650AI',
            descriptContent: [`
            New Balance là một thương hiệu thời trang và giày thể
            thao từ Mỹ. Hơn 100 năm qua, New Balance luôn tìm hiểu
            nhu cầu của những vận động viên để đầu tư, thiết kế
            những sản phẩm phù hợp. New Balance luôn tập trung đến
            từng chuyển động của cơ thể con người để có thể
            “Tạo-Ra-Điều-Tuyệt-Vời” (Making Excellent Happen)!
            `]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double box kèm túi chống sốc khi giao hàng'
        ]
    },
    {
        id: 33,
        name: 'Dép Nike Kawa Slide GS ‘Iced Lilac’ 819352-501',
        price: 1590000,
        discount: '',
        avatar: '/assets/images/product/product-32.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: false,
        size: [36.5, 38, 38.5, 39, 40, 40.5],
        description: {
            brand: 'Nike',
            design: '',
            code: '819352-501',
            descriptContent: []
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double box kèm túi chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 34,
        name: 'Dép Nike Ondeck Flip Flop CU3959-005',
        price: 1490000,
        discount: '',
        avatar: '/assets/images/product/product-33.jpg',
        type: [
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: true,
        size: [36.5, 38, 39],
        description: {
            brand: ' Nike',
            design: '',
            code: 'CU3959-005',
            descriptContent: [
                `Nike được biết đến là một ông lớn trong làng thời
                trang nói chung và trong giới sneaker nói riêng.
                Ngoài những sản phẩm có tiếng tăm như Air Force 1
                hay Jordan thì Nike cũng được biết đến với những
                đôi dép đơn giản mà cá tính. Những đôi dép Nike thu
                hút người dùng chính bởi sự tiện lợi của nó nhưng vẫn
                mang đến vẻ ngoài tương đối chỉnh chu, thời trang chứ
                không hề cẩu thả, sơ. Ngoài ra chúng cũng cực kì dễ
                dàng trong việc phối đồ, từ những trang phục từ cầu
                kì, đắt tiền cho đến tối giản, thanh lịch.`,
                `
                Nike Ondeck Flip Flop CU3959-005 chính hãng với khả
                năng chống thấm nước trên cả tuyệt vời, độ bền màu,
                chất liệu êm ái và những đường chỉ may tỉ mỉ từng li
                từng tí đem đến cho người tiêu dùng 1 sản phẩm đạt
                đến độ tinh xảo cao và chắc chắn, bền bỉ với thời
                gian. Không những thế, với vẻ ngoài mang hơi hướng
                hiện đại còn tôn lên được nét đẹp đến từ cá tính riêng
                của bạn. Đừng bỏ lỡ cơ hội sở hữu chúng qua QClothes &
                Sneaker Shop nhé ^^
                `
            ]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double box kèm túi chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 35,
        name: 'Dép adidas Sandal Adilette ‘White’ BB5096',
        price: 2390000,
        discount: '',
        avatar: '/assets/images/product/product-34.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: true,
        size: [37],
        description: {
            brand: 'adidas',
            design: 'sandal',
            code: 'BB5096',
            descriptContent: []
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double box kèm túi chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 36,
        name: 'Dép Nike X Stussy Benassi ‘Habanero Red’ CW2787-600',
        price: 2890000,
        discount: '',
        avatar: '/assets/images/product/product-35.jpg',
        type: [
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: true,
        size: [38, 39, 40.5, 42],
        description: {
            brand: 'Nike',
            design: 'Benassi',
            code: 'CW2787-600',
            descriptContent: [
                `Nike được biết đến là một ông lớn trong làng thời
                trang nói chung và trong giới sneaker nói riêng. Ngoài
                những sản phẩm có tiếng tăm như Air Force 1 hay Jordan
                thì Nike cũng được biết đến với những đôi dép đơn giản
                mà cá tính. Những đôi dép Nike thu hút người dùng chính
                bởi sự tiện lợi của nó nhưng vẫn mang đến vẻ ngoài tương
                đối chỉnh chu, thời trang chứ không hề cẩu thả, sơ. Ngoài
                ra chúng cũng cực kì dễ dàng trong việc phối đồ, từ những
                trang phục từ cầu kì, đắt tiền cho đến tối giản, thanh lịch.`,
                `
                Nike X Stussy Benassi ‘Habanero Red’ chính hãng với khả năng
                chống thấm nước trên cả tuyệt vời, độ bền màu, chất liệu êm
                ái và những đường chỉ may tỉ mỉ từng li từng tí đem đến cho
                người tiêu dùng 1 sản phẩm đạt đến độ tinh xảo cao và chắc
                chắn, bền bỉ với thời gian. Không những thế, với vẻ ngoài
                mang hơi hướng hiện đại còn tôn lên được nét đẹp đến từ cá
                tính riêng của bạn. Đừng bỏ lỡ cơ hội sở hữu chúng qua
                QClothes & Sneaker Shop nhé!!!
                `
            ]
        },
        promotion: [
            'Tặng phiếu bảo hiểm giày và vệ sinh giày 6 tháng trị giá 500K',
            'Mua tất giảm ngay 20%',
            'Cam kết chính hãng 100%',
            'Miễn phí đổi trả 365 ngày',
            'Miễn phí bảo hành 1 năm trên toàn hệ thống',
            'Double box kèm túi chống sốc khi giao hàng',
            'Hỗ trợ trả góp, thanh toán qua thẻ online'
        ]
    },
    {
        id: 37,
        name: 'Dép Vans Wmns Slide On ‘Checkerboard Marshmallow Black’ VN0A38EHQ4O',
        price: 1290000,
        discount: '',
        avatar: '/assets/images/product/product-36.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: true
    },
    {
        id: 38,
        name: 'Dép adidas Cyprex Ultra SA ‘Grey’ F36369',
        price: 2390000,
        discount: '',
        avatar: '/assets/images/product/product-37.jpg',
        type: ['ALL', 'sản phẩm mới'],
        tabs: 'sneaker',
        discountContent: '',
        status: true
    },
    {
        id: 39,
        name: 'Dép Yeezy Slides ‘Resin’ 2021 GZ5551',
        price: 8090000,
        discount: '',
        avatar: '/assets/images/product/product-38.png',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: false
    },
    {
        id: 40,
        name: 'Dép adidas Adilette Aqua ‘Pink’ EE7345',
        price: 1080000,
        discount: '',
        avatar: '/assets/images/product/product-39.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            },
        ],
        tabs: 'sneaker',
        discountContent: '',
        status: true
    },
    {
        id: 41,
        name: 'Ba lô MLB Monogram NY ‘Black’ 32BG09941-50L',
        price: 2790000,
        discount: '',
        avatar: '/assets/images/product/product-40.jpg',
        type: ['ALL', 'sản phẩm mới'],
        tabs: 'accessory',
        discountContent: '',
        status: true
    },

    {
        id: 42,
        name: 'Túi đeo chéo MLB Monogram LA Hip Sac ‘Black’ 32BGC4011-07L',
        price: 1890000,
        discount: '',
        avatar: '/assets/images/product/product-41.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'accessory',
        discountContent: '',
        status: true
    },
    {
        id: 43,
        name: 'Túi Đeo Chéo MLB Mini Neck Pouch New York Yankees 32BGDN111-50I',
        price: 1990000,
        discount: '',
        avatar: '/assets/images/product/product-42.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            },
        ],
        tabs: 'accessory',
        discountContent: '',
        status: true
    },
    {
        id: 44,
        name: 'Túi Đeo Chéo MLB Monogram Tie Dye Mini Cross Body Bag New York Yankees 32BGDQ111-50V',
        price: 1690000,
        discount: '',
        avatar: '/assets/images/product/product-43.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'accessory',
        discountContent: '',
        status: false
    },
    {
        id: 45,
        name: 'Mũ Nike Sportswear Heritage86 Futura Washed Hat Red 913011-657',
        price: 590000,
        discount: '',
        avatar: '/assets/images/product/product-44.jpg',
        type: [
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'accessory',
        discountContent: '',
        status: true
    },
    {
        id: 46,
        name: 'Mũ Visor MLB Paisley LA Dodgers ‘Navy’ 32CPVC111-07N',
        price: 1690000,
        discount: '',
        avatar: '/assets/images/product/product-45.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'accessory',
        discountContent: '',
        status: true
    },
    {
        id: 47,
        name: 'Mũ MLB Play New York Yankees ‘Grey’ 32CPRB111-50M',
        price: 1890000,
        discount: '',
        avatar: '/assets/images/product/product-46.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'accessory',
        discountContent: '',
        status: true
    },
    {
        id: 48,
        name: 'Mũ Bucket MLB Small Shadow New York Yankees ‘Black’ 32CPHE111-50L',
        price: 1690000,
        discount: '',
        avatar: '/assets/images/product/product-47.jpg',
        type: [
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'accessory',
        discountContent: '',
        status: true
    },
    {
        id: 49,
        name: 'Mũ MLB Plaid New Cover Fit New York Yankess ‘Black Grey’ 32CPCC011-50L',
        price: 1090000,
        discount: '',
        avatar: '/assets/images/product/product-48.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'accessory',
        discountContent: '',
        status: false
    },
    {
        id: 50,
        name: 'Mũ MLB Phối Lông Denim Guidori La Dodgers ‘Blue’ 32CPDE011-07U',
        price: 1590000,
        discount: '',
        avatar: '/assets/images/product/product-49.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'accessory',
        discountContent: '',
        status: true
    },
    {
        id: 51,
        name: 'Mũ MLB Symbol Ball LA Dodgers ‘White’ 32CPCX011-07W',
        price: 1290000,
        discount: '',
        avatar: '/assets/images/product/product-50.jpg',
        type: [
            {
                id: 2,
                name: 'sản phẩm bán chạy'
            },
            {
                id: 1,
                name: 'sản phẩm mới'
            },
            {
                id: 3,
                name: 'sản phẩm phổ biến'
            }
        ],
        tabs: 'accessory',
        discountContent: '',
        status: true
    },
]
export const ShippingUnits = [
    {
        id: 1,
        name: '/assets/images/shipping unit/sh-1.png'
    },
    {
        id: 2,
        name: '/assets/images/shipping unit/sh-2.png'
    },
    {
        id: 3,
        name: '/assets/images/shipping unit/sh-3.png'
    },
    {
        id: 4,
        name: '/assets/images/shipping unit/sh-4.png'
    },
    {
        id: 5,
        name: '/assets/images/shipping unit/sh-5.svg'
    },
    {
        id: 6,
        name: '/assets/images/shipping unit/sh-6.png'
    },
    {
        id: 7,
        name: '/assets/images/shipping unit/sh-7.png'
    },
    {
        id: 8,
        name: '/assets/images/shipping unit/sh-8.png'
    },
]
export const Polices = [
    {
        id: 1,
        info: {
            name: 'Chính sách mua bán, trao đổi hàng',
            description: `Chúng tôi gửi đến bạn những chính sách mua
            hàng, đổi trả, vận chuyển để đảm bảo được tính công
            bằng và rõ ràng giữa hai bên.`,
            icon: <FontAwesomeIcon icon={faRebel} />
        }
    },
    {
        id: 2,
        info: {
            name: 'Hướng dẫn mua hàng online',
            description: `Quý khách có thể gửi đơn hàng hoặc
            goi trực tiếp tới số Hotline để đặt hàng`,
            icon: <FontAwesomeIcon icon={faShekelSign} />
        }
    },
    {
        id: 3,
        info: {
            name: 'Chính sách đổi trả hàng hóa',
            description: `Chúng tôi luôn đảm bảo những chính sách tốt
            nhất cho quý khách hàng với chính sách đổi trả hàng khi
            sản phẩm bị lỗi`,
            icon: <FontAwesomeIcon icon={faSnapchat} />
        }
    },
    {
        id: 4,
        info: {
            name: 'Quà tặng, giải thưởng, khuyến mãi',
            description: `Để tri ân khách hàng,gửi tặng đến toàn bộ
            những khách hàng những món quà tuyệt vời đã ủng hộ chúng
            tôi trong thời gian qua.`,
            icon: <FontAwesomeIcon icon={faChartPie} />
        }
    }
]
export const News = [
    {
        id: 1,
        image: "/assets/images/news/new1.jpg",
        name: 'adidas bắt tay cùng các nghệ sĩ sáng tạo trẻ, tôn vinh văn hóa bản địa Việt Nam',
        descript: 'Tp. Hồ Chí Minh, ngày 12 tháng 11 năm 2020 – adidas vừa có bước tiến lớn trên hành trình bản địa hóa tại Việt Nam bằng việc kết hợp với 2 nghệ sĩ sáng tạo trẻ là Tùng Monkey',

    },
    {
        id: 2,
        image: "/assets/images/news/news2.png",
        name: 'Những cách buộc dây giày đẹp không thể bỏ qua',
        descript: 'Đối với các tín đồ mê sneaker, họ quan tâm ngay từ những chi tiết nhỏ nhặt nhất như dây giày cũng được chăm chút vô cùng tỉ mỉ. ',

    },
    {
        id: 3,
        image: "/assets/images/news/new3.jpg",
        name: 'HALLOWEEN: CANH KHUNG GIỜ VÀNG – ĐÓN LỘC NGẬP TRÀN',
        descript: 'Trái ngược với phong cách trang trí hay hoá trang thành các nhân vật rùng rợn, dịp lễ Halloween được tổ chức vào 31 tháng 10 hàng năm thực chất mang một ý nghĩa thiện lành hơn. ',

    }
]