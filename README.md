# Introduction

This is a simple carousel control with fading out effect built with ReactJS + TailwindCss.

# How to use

There is no package for installation. You just need to copy code of the carousel from `carousel.tsx` file into your project and use the control as you wish or checkout below sample code:

```js
import Carousel from './carousel';

const images = ['/pic1.jpg', '/pic2.jpg', '/pic3.jpg'];
function App() {
    return (
        <Carousel images={images} timing={5000} className="h-screen w-screen">
            <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1
                    className="text-white font-bold font-mono uppercase text-5xl"
                    style={{ textShadow: '0px 0px 1px rgb(0 0 0 / 20%), 0px 0px 1px rgb(1 0 5 / 10%)' }}>
                    I love simplicity
                </h1>
            </div>
        </Carousel>
    );
}
```

# License

The MIT License (MIT). Please see [License File](https://github.com/vespaiach/carousel-tailwindcss/blob/main/LICENSE) for more information.