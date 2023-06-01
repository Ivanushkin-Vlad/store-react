import logoHeader from './assets/logo_header.png';
import search from './assets/search_icon.png';
import basket from './assets/basket_icon.png';
import user from './assets/user_icon.png';
import samsung from './assets/image_Samsung.jpg';
import mac from './assets/image_MacBook.jpg';
import xiomi from './assets/image_Xiomi.jpg';
import logoFooter from './assets/image_footer.png'
import fb from './assets/fb-icon.png';
import insta from './assets/insta-icon.png';
import twitter from './assets/twitter-icon.png';
import linked from './assets/linked-icon.png';
import youtube from './assets/youtube-icon.png';
import lang from './assets/lang-icon.png';
import shop from './assets/Faq_shop.png';
import repair from './assets/Faq_repair.jpg';
import delivery from './assets/Faq_delivery.jpg';


let data = {

    header:{
        image: logoHeader,
        link:[
            {name: 'Home', id: 1, path: '/' },
            {name: 'Product', id: 2, path: '/Product' },
            {name: 'About', id: 3, path: '/About' },
            {name: 'Blog', id: 4, path: '/Blog' },
            {name: 'Contact Us', id: 5, path: '/Contact' },
        ],
        icons: [
            {img: search, classN: "search"},
            {img: basket, classN: "basket"},
            {img: user, classN: "user"},
        ]
    },
    main:{
      listSlider:{
          items:[
              {id: 1, h1:'SAMSUNG', title: "Galaxy S23 -", description: "Play and Win", image: samsung, button:"Read more"},
              {id: 2, h1:'MAC', title: "MacBook Air M1 -",description: "Better and Faster", image: mac,button:"Read more"},
              {id: 3, h1:'PHILIPS', title: "iPad Pro M1 -",description: "Productivity new Generation", image: xiomi,button:"Read more"},
          ]
      },
        FAQ: {
            cartInfo: [
                {
                img: repair,
                title: 'Free repair',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cum debitis earum est impedit, nam quod! Ad animi asperiores, beatae blanditiis dolorem ipsum maiores necessitatibus nostrum pariatur placeat ratione similique voluptatem, voluptates? Ad atque aut beatae delectus distinctio dolores facilis fugiat fugit id illo illum incidunt itaque molestias mollitia nam necessitatibus non officiis possimus quaerat, qui quidem quis repellat reprehenderit repudiandae similique sint tempore temporibus tenetur, ullam voluptatem! Dicta.'
                },
                {
                    img: delivery,
                    title: "The fastest delivery shop",
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cum debitis earum est impedit, nam quod! Ad animi asperiores, beatae blanditiis dolorem ipsum maiores necessitatibus nostrum pariatur placeat ratione similique voluptatem, voluptates? Ad atque aut beatae delectus distinctio dolores facilis fugiat fugit id illo illum incidunt itaque molestias mollitia nam necessitatibus non officiis possimus quaerat, qui quidem quis repellat reprehenderit repudiandae similique sint tempore temporibus tenetur, ullam voluptatem! Dicta.'
                },
                {
                    img: shop,
                    title: "Stores across the country",
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cum debitis earum est impedit, nam quod! Ad animi asperiores, beatae blanditiis dolorem ipsum maiores necessitatibus nostrum pariatur placeat ratione similique voluptatem, voluptates? Ad atque aut beatae delectus distinctio dolores facilis fugiat fugit id illo illum incidunt itaque molestias mollitia nam necessitatibus non officiis possimus quaerat, qui quidem quis repellat reprehenderit repudiandae similique sint tempore temporibus tenetur, ullam voluptatem! Dicta.'
                },
            ],
        }
    },
    footer:{
        logoBox:{img:logoFooter, description: 'STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.'},
        informationMenu:[
            {id: 1, name: 'Information', link: ['New Collection', 'About Store', 'Contact Us', 'Latest News', 'Our Sitemap'] },
            {id: 2, name: 'Footer Menu', link: ['New Collection', 'About Store', 'Contact Us', 'Latest News', 'Term & Conditions'] },
            {id: 3, name: 'Useful Links', link: ['New Collection', 'About Store', 'Contact Us', 'Latest News', 'Term & Conditions'] },
        ],
        aboutTheStore: {name: 'About the store', description: 'STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.', website: 'www.company.com', icons: [fb, insta, twitter, linked, youtube], languare:lang}



    }
}

export default data;