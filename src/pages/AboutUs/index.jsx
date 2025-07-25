import MainLayout from '@/components/Layout/Layout';
import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import { data } from 'react-router-dom';
import Logos from '@pages/AboutUs/components/Logos';

function AboutUs() {
    const {
        container,
        functionBox,
        specialText,
        btnBack,
        containerTitle,
        line,
        title,
        textS,
        textL,
        containerContent,
        des
    } = styles;

    const dataContents = [
        {
            id: 1,
            url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-min.jpg',
            des: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.'
        },
        {
            id: 2,
            url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-2-min.jpg',
            des: 'Arcu volutpat sollicitudin sapien sit justo tellus eu fames aenean. Faucibus at eu nulla adipiscing. Ipsum a morbi tortor ullamcorper sit semper.'
        },
        {
            id: 3,
            url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-min.jpg',
            des: 'Nibh luctus eu dignissim sit. Lorem netus ultrices neque elementum. Et convallis consectetur lacus luctus iaculis quisque sed.'
        }
    ];

    return (
        <>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home &gt;
                            <span className={specialText}>About Us</span>
                        </div>
                        <div
                            className={btnBack}
                            onClick={() => handleBackPreviousPage()}
                        >
                            &lt; Return to previous page
                        </div>
                    </div>

                    <div className={containerTitle}>
                        <div className={line}>
                            <div className={title}>
                                <div className={textS}>
                                    we try our best for you
                                </div>
                                <div className={textL}>
                                    Welcome to the Marseille04 Shop
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={containerContent}>
                        {dataContents.map((item) => (
                            <div key={item.id}>
                                <img src={item.url} alt='About Us' />
                                <div className={des}>{item.des}</div>
                            </div>
                        ))}
                    </div>

                    <Logos />
                </div>
            </MainLayout>
            <MyFooter />
        </>
    );
}

export default AboutUs;
