import ImageList from '../assets/json/ImageList.json'
import MasonryPage from '../component/widgets/Masonry';


export default function Contact() {
    return (
        <MasonryPage heading="Gallery" imageList={ImageList} />
    );
}
